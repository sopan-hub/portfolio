'use client';

import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, ExternalLink } from 'lucide-react';
import GlassSurface from '@/components/ui/glass-surface';

const TerminalDemo = () => {
  const projectUrl = "https://the-ai-customer-care-vyqu.vercel.app/";
  const projectInfo = "Add a powerful AI chatbot to your website in minutes. Let your customers get instant answers using your own business knowledge.";
  
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timeout: NodeJS.Timeout;
    if (index < projectUrl.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + projectUrl[index]);
        setIndex((prev) => prev + 1);
      }, 70); // Typing speed
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [index, projectUrl, mounted]);

  if (!mounted) return null;

  return (
    <section id="projects" className="py-24 flex justify-center px-4 bg-transparent">
      <div className="max-w-4xl w-full">
        {/* Terminal Window - Restyled for Dark Theme */}
        <GlassSurface borderRadius={32} className="shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Header Bar - Futuristic Dark Style */}
          <div className="flex items-center justify-between px-10 py-5 bg-white/5 border-b border-white/10">
            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] opacity-80" />
            </div>
            <div className="flex items-center gap-2.5 text-white/40 text-[10px] font-mono font-bold uppercase tracking-[0.5em]">
              <TerminalIcon size={12} className="opacity-50" />
              <span>TERMINAL_SESSION</span>
            </div>
            <div className="w-16" />
          </div>

          {/* Terminal Body */}
          <div className="p-10 md:p-14 font-mono text-base md:text-lg leading-relaxed bg-black/40">
            {/* Project Info Block */}
            <div className="mb-10">
              <p className="text-white/40 mb-4 text-[11px] uppercase tracking-[0.3em] font-bold">// PROJECT_DEEP_DIVE</p>
              <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl leading-tight tracking-tight glow-white">
                {projectInfo}
              </p>
            </div>

            {/* Prompt Line with Typing Animation */}
            <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 select-none shrink-0">
                <span className="text-[#28c840] font-bold text-lg">➜</span>
                <span className="text-white/80 font-bold text-lg">~</span>
                <span className="text-white/40 font-bold uppercase text-[10px] tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10">EXECUTE</span>
              </div>
              
              <div className="flex-1">
                <a 
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3.5 text-white hover:text-white/80 transition-all group break-all font-bold underline underline-offset-8 decoration-white/20 hover:decoration-white/60 text-base md:text-xl"
                >
                  {displayText}
                  <span className="inline-block w-[2px] h-6 bg-white animate-pulse ml-1" />
                  <ExternalLink size={18} className="text-white/30 group-hover:text-white transition-colors shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
};

export default TerminalDemo;
