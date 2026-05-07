'use client';

import React from 'react';
import GlassSurface from '@/components/ui/glass-surface';
import { Terminal as TerminalIcon, ExternalLink } from 'lucide-react';

const TerminalDemo = () => {
  const projectUrl = "https://the-ai-customer-care-vyqu.vercel.app/";

  return (
    <section className="py-24 flex justify-center px-4">
      <div className="max-w-3xl w-full">
        <GlassSurface
          borderRadius={20}
          className="shadow-2xl overflow-hidden bg-black/60 backdrop-blur-xl border-white/10"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_10px_rgba(255,95,86,0.3)]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.3)]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.3)]" />
            </div>
            <div className="flex items-center gap-2 text-white/30 text-[9px] font-mono uppercase tracking-[0.4em]">
              <TerminalIcon size={10} className="opacity-50" />
              main.sh
            </div>
            <div className="w-10" /> {/* Balance spacer */}
          </div>

          {/* Terminal Content */}
          <div className="p-10 font-mono text-sm md:text-base">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[#27C93F] font-bold">➜</span>
              <span className="text-[#51afef] font-bold">~</span>
              <a 
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/90 hover:text-white transition-all underline underline-offset-8 decoration-white/20 hover:decoration-white/50 break-all"
              >
                {projectUrl}
                <ExternalLink size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-white/50" />
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-white/10">
              <span className="w-2 h-5 bg-white/30 animate-pulse" />
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
};

export default TerminalDemo;
