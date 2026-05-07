'use client';

import React from 'react';
import GlassSurface from '@/components/ui/glass-surface';
import { Terminal as TerminalIcon, ExternalLink } from 'lucide-react';

const TerminalDemo = () => {
  const projectUrl = "https://the-ai-customer-care-vyqu.vercel.app/";

  return (
    <section className="py-24 flex justify-center px-4">
      <div className="max-w-4xl w-full">
        <GlassSurface
          borderRadius={20}
          className="shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Terminal Header - matching Aceternity style */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
            <div className="flex gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-black/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-black/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-black/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />
            </div>
            <div className="flex items-center gap-2 text-white/30 text-[10px] font-mono uppercase tracking-[0.5em]">
              <TerminalIcon size={12} className="opacity-40" />
              main.sh
            </div>
            <div className="w-16" /> {/* Balance spacer */}
          </div>

          {/* Terminal Content - Wide and Clean */}
          <div className="p-12 md:p-16 font-mono text-base md:text-lg min-h-[250px] flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[#27C93F] font-bold select-none">➜</span>
              <span className="text-[#51afef] font-bold select-none">~</span>
              <a 
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/90 hover:text-white transition-all underline underline-offset-8 decoration-white/20 hover:decoration-white/50 break-all"
              >
                {projectUrl}
                <ExternalLink size={18} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-white/50" />
              </a>
            </div>
            
            {/* Blinking Cursor */}
            <div className="mt-8">
              <span className="inline-block w-2.5 h-6 bg-white/40 animate-[pulse_1s_infinite]" />
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
};

export default TerminalDemo;
