'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';
import { Loader2, Download, AlertTriangle, CheckCircle2, Bot } from 'lucide-react';

import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { handleContactForm, type FormState, type AnalyzeContactFormMessageOutput } from '@/app/actions';
import { Badge } from '../ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import UiverseCard from '../uiverse-card';

type AnalyzedMessage = {
  analysis: AnalyzeContactFormMessageOutput;
  formData: {
    name: string;
    email: string;
    message: string;
  };
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full font-bold"
      size="lg"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const initialState: FormState = { success: false, message: '' };
  const [state, formAction] = useActionState(handleContactForm, initialState);
  const [messages, setMessages] = useState<AnalyzedMessage[]>([]);

  useEffect(() => {
    if (state.message) {
      if (state.success && state.analysis && state.formData) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        setMessages(prev => [...prev, { analysis: state.analysis!, formData: state.formData! }]);
        formRef.current?.reset();
      } else if (!state.success) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  const handleDownload = () => {
    const dataStr = JSON.stringify(messages, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'messages.json');
    linkElement.click();
  };


  return (
    <section id="contact" className="relative py-24">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-center text-4xl font-bold">Get In Touch</h2>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div className="relative">
              <UiverseCard>
                  <h2 className="uiverse-title">Contact Me</h2>
                  <p className="uiverse-text">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
                  </p>
                  <div className="mt-8 flex justify-center space-x-4">
                    {socialLinks.map((link) => (
                      <Button key={link.href} variant="link" size="icon" asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <link.icon className="h-5 w-5" />
                          <span className="sr-only">{link.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
              </UiverseCard>
            </div>
            <div className="relative">
              <UiverseCard>
                  <h2 className="uiverse-title">Contact Form</h2>
                  <p className="uiverse-text">Fill out the form to send me a message.</p>
                  <form ref={formRef} action={formAction} className="mt-4 space-y-4 text-left">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" type="text" placeholder="Your Name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Your message..." required />
                    </div>
                    <SubmitButton />
                  </form>
              </UiverseCard>
            </div>
          </div>
           <div className="relative mt-12">
              <UiverseCard>
                <div className="flex items-center justify-between">
                  <h3 className="uiverse-title text-left">Message Analysis</h3>
                  {messages.length > 0 && (
                    <Button variant="outline" size="sm" onClick={handleDownload}>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  )}
                </div>
                {messages.length > 0 ? (
                  <div className="mt-4 space-y-4">
                    <p className="uiverse-text text-left">Your submitted messages are analyzed by AI below.</p>
                    <Accordion type="single" collapsible className="w-full">
                      {messages.map((msg, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>
                            <div className='flex items-center gap-3'>
                              {msg.analysis.isImportant ? <AlertTriangle className="h-5 w-5 text-destructive" /> : <CheckCircle2 className="h-5 w-5 text-green-500" />}
                              <span className="truncate font-medium">{msg.formData.name}: {msg.analysis.summary}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 rounded-md border bg-card p-4 text-left">
                              <p><strong>From:</strong> {msg.formData.name} ({msg.formData.email})</p>
                              <p><strong>Message:</strong> {msg.formData.message}</p>
                              <div className="rounded-lg bg-accent p-4">
                                <h4 className="mb-2 flex items-center gap-2 font-semibold"><Bot className="h-5 w-5 text-primary"/> AI Analysis</h4>
                                <p><strong>Summary:</strong> {msg.analysis.summary}</p>
                                {msg.analysis.isImportant && <Badge variant="destructive" className="my-2">Important</Badge>}
                                <p className="mt-2 text-sm"><strong>Suggested Response:</strong> <em>"{msg.analysis.suggestedResponse}"</em></p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ) : (
                  <div className="mt-4 flex h-full min-h-[200px] items-center justify-center rounded-lg border-2 border-dashed border-gray-400/50 bg-background/20 p-8">
                    <p className="text-muted-foreground">Submitted messages will appear here.</p>
                  </div>
                )}
              </UiverseCard>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
