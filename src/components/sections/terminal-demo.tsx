'use client';

import React from 'react';
import GlassSurface from '@/components/ui/glass-surface';
import { ExternalLink, Terminal as TerminalIcon } from 'lucide-react';

const TerminalDemo = () => {
  return (
    <section className="py-24 flex justify-center px-4">
      <div className="max-w-4xl w-full">
        <GlassSurface
          borderRadius={24}
          className="p-1 shadow-2xl overflow-hidden bg-black/40 backdrop-blur-xl border-white/10"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono uppercase tracking-[0.3em]">
              <TerminalIcon size={12} />
              neural-core-deployment.sh
            </div>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono text-xs md:text-sm leading-relaxed min-h-[300px] flex flex-col">
            <div className="space-y-4 flex-grow">
              <div className="flex gap-3">
                <span className="text-green-500 font-bold">sopan@neural:~$</span>
                <span className="text-white/90">initialize --framework "Agentic AI"</span>
              </div>
              
              <div className="text-white/40 italic">
                {">"} Loading neural nodes... [DONE] <br />
                {">"} Syncing Next.js 15 Environment... [DONE] <br />
                {">"} Establishing RAG Pipeline connection... [ESTABLISHED]
              </div>

              <div className="flex gap-3 pt-2">
                <span className="text-green-500 font-bold">sopan@neural:~$</span>
                <span className="text-white/90">deploy --app "AI Customer Care" --live</span>
              </div>

              <div className="text-primary font-bold animate-pulse">
                DEPLOYING TO PRODUCTION CLUSTER...
              </div>

              <div className="p-6 mt-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-primary/50 transition-colors">
                <div className="space-y-1 text-center md:text-left">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Access Point Verified</p>
                  <h4 className="text-white font-bold text-lg">AI Customer Care Instance</h4>
                </div>
                
                <a 
                  href="https://the-ai-customer-care-vyqu.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Launch App <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-white/20">
              <span className="w-2 h-4 bg-white/40 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest">Listening for transmissions...</span>
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
};

export default TerminalDemo;
