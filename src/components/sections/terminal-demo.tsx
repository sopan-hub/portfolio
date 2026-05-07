'use client';

import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, ExternalLink } from 'lucide-react';

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
      <div className="max-w-2xl w-full">
        {/* Terminal Window - Professional Light Mode */}
        <div className="rounded-2xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] overflow-hidden bg-white border border-slate-200">
          
          {/* Header Bar - macOS Style */}
          <div className="flex items-center justify-between px-8 py-4 bg-[#f1f3f5] border-b border-slate-200">
            <div className="flex gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border border-black/5" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#febc2e] border border-black/5" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#28c840] border border-black/5" />
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono font-bold uppercase tracking-[0.4em]">
              <TerminalIcon size={12} className="opacity-50" />
              <span>TERMINAL</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Body */}
          <div className="p-8 md:p-10 font-mono text-sm md:text-base leading-relaxed">
            {/* Project Info Block */}
            <div className="mb-8">
              <p className="text-slate-400 mb-3 text-[11px] uppercase tracking-widest font-bold"># Project Overview</p>
              <p className="text-slate-800 font-semibold text-lg md:text-xl leading-snug">
                {projectInfo}
              </p>
            </div>

            {/* Prompt Line with Typing Animation */}
            <div className="flex flex-wrap items-start gap-3 pt-2">
              <div className="flex items-center gap-2.5 select-none shrink-0 text-sm md:text-base">
                <span className="text-[#28c840] font-bold">➜</span>
                <span className="text-[#007aff] font-bold">~</span>
                <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">open</span>
              </div>
              
              <div className="flex-1">
                <a 
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#007aff] hover:text-blue-700 transition-colors group break-all font-bold underline underline-offset-4 decoration-blue-100 hover:decoration-blue-400 text-sm md:text-base"
                >
                  {displayText}
                  <span className="inline-block w-[2px] h-6 bg-[#007aff] animate-pulse ml-0.5" />
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalDemo;