
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
      <div className="max-w-4xl w-full">
        {/* Terminal Window - Professional Light Mode */}
        <div className="rounded-3xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.2)] overflow-hidden bg-white border border-slate-200">
          
          {/* Header Bar - macOS Style */}
          <div className="flex items-center justify-between px-10 py-5 bg-[#f8f9fa] border-b border-slate-200">
            <div className="flex gap-3">
              <div className="w-4 h-4 rounded-full bg-[#ff5f57] border border-black/5" />
              <div className="w-4 h-4 rounded-full bg-[#febc2e] border border-black/5" />
              <div className="w-4 h-4 rounded-full bg-[#28c840] border border-black/5" />
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-[11px] font-mono font-bold uppercase tracking-[0.5em]">
              <TerminalIcon size={14} className="opacity-50" />
              <span>TERMINAL SYSTEM</span>
            </div>
            <div className="w-16" />
          </div>

          {/* Terminal Body */}
          <div className="p-10 md:p-14 font-mono text-base md:text-lg leading-relaxed">
            {/* Project Info Block */}
            <div className="mb-10">
              <p className="text-slate-400 mb-4 text-[12px] uppercase tracking-[0.2em] font-bold"># Project Deep-Dive</p>
              <p className="text-slate-900 font-bold text-xl md:text-2xl lg:text-3xl leading-tight tracking-tight">
                {projectInfo}
              </p>
            </div>

            {/* Prompt Line with Typing Animation */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3 select-none shrink-0">
                <span className="text-[#28c840] font-bold text-lg">➜</span>
                <span className="text-[#007aff] font-bold text-lg">~</span>
                <span className="text-slate-400 font-bold uppercase text-[11px] tracking-widest bg-slate-100 px-3 py-1 rounded-md">execute</span>
              </div>
              
              <div className="flex-1">
                <a 
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3.5 text-[#007aff] hover:text-blue-700 transition-all group break-all font-bold underline underline-offset-8 decoration-blue-200 hover:decoration-blue-500 text-base md:text-xl"
                >
                  {displayText}
                  <span className="inline-block w-[3px] h-8 bg-[#007aff] animate-pulse ml-1" />
                  <ExternalLink size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors shrink-0" />
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
