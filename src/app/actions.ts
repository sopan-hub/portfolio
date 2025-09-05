'use server';

import { z } from 'zod';
import {
  analyzeContactFormMessage,
  type AnalyzeContactFormMessageOutput,
} from '@/ai/flows/analyze-contact-form-messages';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type FormState = {
  success: boolean;
  message: string;
  analysis?: AnalyzeContactFormMessageOutput;
  formData?: {
    name: string;
    email: string;
    message: string;
  };
};

export async function handleContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message:
        validatedFields.error.errors.map((e) => e.message).join(', ') ||
        'Validation failed.',
    };
  }

  try {
    const analysis = await analyzeContactFormMessage(validatedFields.data);

    return {
      success: true,
      message: 'Your message has been received and analyzed!',
      analysis,
      formData: validatedFields.data,
    };
  } catch (error) {
    console.error('Error in GenAI flow:', error);
    return {
      success: false,
      message: 'An error occurred while analyzing the message. Please try again.',
    };
  }
}
