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
import ScrollFloat from '@/components/ui/scroll-float';
import GlassSurface from '@/components/ui/glass-surface';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="default" disabled={pending} className="w-full rounded-full font-bold uppercase tracking-widest py-6 bg-white text-black">
      {pending ? (
        'Sending Core Message...'
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" /> Initialize Connection
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
          title: 'Connection Established!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Neural Sync Failed',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            textClassName="text-white uppercase"
          >
            Get in Touch
          </ScrollFloat>
          <p className="mt-4 text-muted-foreground">
            Ready to collaborate on the next intelligence frontier? Send a transmission.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <GlassSurface
            borderRadius={32}
            brightness={15}
            opacity={0.98}
            blur={80}
            backgroundOpacity={0.4}
            className="p-8 shadow-2xl"
          >
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input
                    className="bg-black/50 border-white/10 rounded-xl"
                    type="text"
                    name="name"
                    placeholder="Subject Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    className="bg-black/50 border-white/10 rounded-xl"
                    type="email"
                    name="email"
                    placeholder="Source Email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Textarea
                  className="bg-black/50 border-white/10 rounded-xl"
                  name="message"
                  placeholder="Transmission Payload"
                  rows={5}
                  required
                />
              </div>
              <div className="pt-4">
                <SubmitButton />
              </div>
            </form>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;