'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { handleContactForm, type FormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Github, Linkedin, Mail, ShieldCheck, Info } from 'lucide-react';
import ScrollFloat from '@/components/ui/scroll-float';
import GlassSurface from '@/components/ui/glass-surface';
import { socialLinks } from '@/lib/data';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full rounded-full font-black uppercase tracking-[0.2em] py-8 bg-white text-black hover:scale-105 transition-all"
    >
      {pending ? (
        'Processing Transmission...'
      ) : (
        <>
          <Send className="mr-3 h-4 w-4" /> Send Message
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
          title: 'Transmission Success',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Sync Interrupted',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-4xl md:text-5xl font-black mb-4"
            textClassName="text-white uppercase tracking-tighter"
          >
            Get In Touch
          </ScrollFloat>
          <div className="h-[1px] w-24 bg-white/20" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">Contact Me</h3>
              <p className="text-white/60 text-lg font-medium leading-relaxed max-w-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
              </p>
            </div>

            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all group"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="text-sm font-black uppercase tracking-widest">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Analysis Result Display */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-white/40" />
                <h4 className="text-sm font-black text-white/40 uppercase tracking-widest">Message Analysis</h4>
              </div>
              
              <GlassSurface borderRadius={24} className="p-8 min-h-[160px] flex items-center justify-center border-white/5 bg-black/20">
                {state.analysis ? (
                  <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${state.analysis.isImportant ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/80">
                        Priority: {state.analysis.isImportant ? 'High' : 'Normal'}
                      </span>
                    </div>
                    <p className="text-sm text-white font-medium italic">
                      "{state.analysis.summary}"
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Suggested Response:</p>
                      <p className="text-xs text-white/60 leading-relaxed">
                        {state.analysis.suggestedResponse}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 text-white/20">
                    <Info className="h-8 w-8" />
                    <p className="text-xs font-black uppercase tracking-widest">Submitted messages will appear here.</p>
                  </div>
                )}
              </GlassSurface>
            </div>
          </div>

          {/* Form */}
          <GlassSurface borderRadius={40} className="p-10 md:p-12 shadow-2xl border-white/5 bg-white/[0.02]">
            <div className="mb-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Contact Form</h3>
              <p className="text-sm text-white/40 font-medium">Fill out the form to send me a message.</p>
            </div>

            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Name</label>
                <Input
                  className="bg-white/5 border-white/10 rounded-2xl h-14 text-white placeholder:text-white/20 px-6 focus:bg-white/10 transition-colors"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Email</label>
                <Input
                  className="bg-white/5 border-white/10 rounded-2xl h-14 text-white placeholder:text-white/20 px-6 focus:bg-white/10 transition-colors"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Message</label>
                <Textarea
                  className="bg-white/5 border-white/10 rounded-2xl text-white placeholder:text-white/20 px-6 py-4 focus:bg-white/10 transition-colors min-h-[160px]"
                  name="message"
                  placeholder="Your message..."
                  required
                />
              </div>
              <div className="pt-6">
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
