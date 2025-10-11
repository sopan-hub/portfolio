'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { handleContactForm, type FormState } from '@/app/actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="outline" disabled={pending}>
      {pending ? (
        'Sending...'
      ) : (
        <>
          <Send className="mr-2" /> Send Message
        </>
      )}
    </Button>
  );
}

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const initialState: FormState = { success: false, message: '' };
  const [state, formAction] = useActionState(handleContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Message Sent!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Oops!',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a question or want to work together? Drop me a line.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="rounded-lg bg-card p-6">
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                />
              </div>
              <div className="text-center">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
