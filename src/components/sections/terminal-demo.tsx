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
      <div className="max-w-3xl w-full">
        {/* Terminal Window - Professional Light Mode */}
        <div className="rounded-xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] overflow-hidden bg-white border border-slate-200">
          
          {/* Header Bar - macOS Style */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#f1f3f5] border-b border-slate-200">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border border-black/5" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#febc2e] border border-black/5" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#28c840] border border-black/5" />
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono font-bold uppercase tracking-[0.4em]">
              <TerminalIcon size={12} className="opacity-50" />
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Body */}
          <div className="p-8 md:p-12 font-mono text-sm md:text-base leading-relaxed">
            {/* Project Info Block */}
            <div className="mb-8">
              <p className="text-slate-400 mb-3 text-xs uppercase tracking-widest font-bold"># Project Overview</p>
              <p className="text-slate-700 font-semibold text-lg leading-snug">
                {projectInfo}
              </p>
            </div>

            {/* Prompt Line with Typing Animation */}
            <div className="flex flex-wrap items-start gap-3">
              <div className="flex items-center gap-2 select-none shrink-0">
                <span className="text-[#28c840] font-bold">➜</span>
                <span className="text-[#007aff] font-bold">~</span>
                <span className="text-slate-400 font-bold">open</span>
              </div>
              
              <div className="flex-1">
                <a 
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#007aff] hover:text-blue-700 transition-colors group break-all font-bold underline underline-offset-8 decoration-blue-100 hover:decoration-blue-400"
                >
                  {displayText}
                  <span className="inline-block w-[3px] h-6 bg-[#007aff] animate-pulse ml-0.5" />
                  <ExternalLink size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors shrink-0" />
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
