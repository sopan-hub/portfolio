'use server';

/**
 * @fileOverview Analyzes contact form submissions, flags important messages, and suggests automatic responses.
 *
 * - analyzeContactFormMessage - A function that handles the analysis of contact form messages.
 * - AnalyzeContactFormMessageInput - The input type for the analyzeContactFormMessage function.
 * - AnalyzeContactFormMessageOutput - The return type for the analyzeContactFormMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeContactFormMessageInputSchema = z.object({
  message: z.string().describe('The content of the contact form message.'),
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
});
export type AnalyzeContactFormMessageInput = z.infer<typeof AnalyzeContactFormMessageInputSchema>;

const AnalyzeContactFormMessageOutputSchema = z.object({
  isImportant: z.boolean().describe('Whether the message is important and requires immediate attention.'),
  summary: z.string().describe('A brief summary of the message content.'),
  suggestedResponse: z.string().describe('A suggested automatic response to the message.'),
  extractedData: z.record(z.any()).describe('Extracted salient data from the message.'),
});
export type AnalyzeContactFormMessageOutput = z.infer<typeof AnalyzeContactFormMessageOutputSchema>;

export async function analyzeContactFormMessage(input: AnalyzeContactFormMessageInput): Promise<AnalyzeContactFormMessageOutput> {
  return analyzeContactFormMessageFlow(input);
}

const analyzeContactFormMessagePrompt = ai.definePrompt({
  name: 'analyzeContactFormMessagePrompt',
  input: {schema: AnalyzeContactFormMessageInputSchema},
  output: {schema: AnalyzeContactFormMessageOutputSchema},
  prompt: `You are an AI assistant that analyzes contact form submissions to a personal portfolio website.

  Your task is to determine if a message is important, summarize its content, suggest an automatic response, and extract any salient data.

  Here's the message:
  Name: {{{name}}}
  Email: {{{email}}}
  Message: {{{message}}}

  Consider the following:
  - A message is important if it contains urgent requests (e.g., job opportunities, collaborations, critical feedback).
  - The summary should be concise and informative.
  - The suggested response should be polite and helpful.
  - Salient data should be structured in a record format, for example, if the message indicates a job title and company, extract those.
  - Ensure that the message and name are included in the extracted data.

  Based on the above, please provide the analysis in the following format:
  \{
    "isImportant": <true or false>,
    "summary": "<summary of the message>",
    "suggestedResponse": "<suggested automatic response>",
    "extractedData": \{
      "message": "{{{message}}}",
      "name": "{{{name}}}",
      // Other extracted salient data
    \}
  \}`,
});

const analyzeContactFormMessageFlow = ai.defineFlow(
  {
    name: 'analyzeContactFormMessageFlow',
    inputSchema: AnalyzeContactFormMessageInputSchema,
    outputSchema: AnalyzeContactFormMessageOutputSchema,
  },
  async input => {
    const {output} = await analyzeContactFormMessagePrompt(input);
    return output!;
  }
);
