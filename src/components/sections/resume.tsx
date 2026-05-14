'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import GlassSurface from '@/components/ui/glass-surface';
import ScrollFloat from '@/components/ui/scroll-float';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <GlassSurface
          borderRadius={40}
          className="p-12 md:p-20 text-center flex flex-col items-center max-w-4xl mx-auto shadow-2xl border-white/5"
        >
          <div className="mb-8 p-6 rounded-full bg-white/5 border border-white/10">
            <FileText className="h-12 w-12 text-white opacity-80" />
          </div>
          
          <ScrollFloat
            containerClassName="text-4xl md:text-5xl font-black mb-6"
            textClassName="text-white uppercase tracking-tighter"
          >
            My Resume
          </ScrollFloat>
          
          <p className="text-lg text-white/60 mb-12 max-w-2xl font-medium leading-relaxed">
            Interested in my full professional background? View my resume to get a comprehensive look at my skills, experience, and qualifications.
          </p>
          
          <Button 
            variant="default" 
            className="rounded-full px-12 py-8 text-xs font-black uppercase tracking-[0.3em] bg-white text-black hover:scale-105 transition-transform"
            asChild
          >
            <a href="/sopan-patil-resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </GlassSurface>
      </div>
    </section>
  );
};

export default ResumeSection;
