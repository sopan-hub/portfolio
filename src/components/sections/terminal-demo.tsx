'use client';

import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, ExternalLink } from 'lucide-react';
import GlassSurface from '@/components/ui/glass-surface';

const TerminalDemo = () => {
  const projectUrl = "https://the-ai-customer-care-vyqu.vercel.app/";
  const projectTitle = "AI CUSTOMER CARE";
  const projectDescription = "Add a powerful AI chatbot to your website in minutes. Let your customers get instant answers using your own business knowledge.";
  
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
      }, 50); // Typing speed
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
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative">
          
          {/* Connection Wire (SVG) - Visible on Large Screens */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none hidden lg:block z-0">
            <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
              <path 
                d="M500 200C600 200 600 200 700 200" 
                stroke="white" 
                strokeWidth="1" 
                strokeDasharray="4 4"
              />
              <circle cx="500" cy="200" r="3" fill="white" />
              <circle cx="700" cy="200" r="3" fill="white" />
              <path 
                d="M500 200H700" 
                stroke="white" 
                strokeWidth="1" 
                className="animate-pulse"
              />
            </svg>
          </div>

          {/* Left Side: Terminal Window */}
          <div className="lg:col-span-6 relative z-10">
            <GlassSurface borderRadius={24} className="shadow-2xl border-white/5">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase font-bold flex items-center gap-2">
                  <TerminalIcon size={10} />
                  <span>PROCESS_EXEC</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Terminal Body */}
              <div className="p-8 font-mono bg-black/40">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold shrink-0">➜</span>
                    <span className="text-white/60 shrink-0">~</span>
                    <span className="text-white/30 uppercase text-[9px] tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/10">SHELL</span>
                  </div>
                  
                  <div className="pt-2">
                    <a 
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-white/90 hover:text-white transition-all break-all"
                    >
                      <span className="text-sm md:text-base font-medium underline decoration-white/10 group-hover:decoration-white/40 underline-offset-4">
                        {displayText}
                      </span>
                      <span className="w-1.5 h-5 bg-white/80 animate-pulse shrink-0" />
                      <ExternalLink size={14} className="text-white/20 group-hover:text-white/50 transition-colors shrink-0 ml-1" />
                    </a>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
                      <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Live Connection Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassSurface>
          </div>

          {/* Right Side: Project Info */}
          <div className="lg:col-span-6 lg:pl-12 space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-white/20" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">FEATURED_PROJECT</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none glow-white">
                {projectTitle}
              </h3>
            </div>
            
            <p className="text-white/70 text-sm md:text-lg leading-relaxed max-w-lg font-medium">
              {projectDescription}
            </p>

            <div className="pt-6">
              <a 
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 bg-white/5 text-[10px] font-bold text-white uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all backdrop-blur-md"
              >
                Launch Application <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TerminalDemo;
