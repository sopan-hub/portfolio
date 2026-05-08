'use client';

import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, ExternalLink } from 'lucide-react';
import GlassSurface from '@/components/ui/glass-surface';

const TerminalDemo = () => {
  const projectUrl = "https://the-ai-customer-care-vyqu.vercel.app/";
  const projectTitle = "AI CUSTOMER CARE";
  const projectDescription = "Add a powerful AI chatbot to your website in minutes. Let your customers get instant answers using your own business knowledge.";
  const displayUrl = "https://the-ai-customer-care-vyqu.vercel.app/";
  
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timeout: NodeJS.Timeout;
    if (index < displayUrl.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + displayUrl[index]);
        setIndex((prev) => prev + 1);
      }, 50); // Typing speed
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 5000); // Wait before restarting
    }
    return () => clearTimeout(timeout);
  }, [index, displayUrl, mounted]);

  if (!mounted) return null;

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative">
          
          {/* Connection Wire (SVG) - Visible on Large Screens */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none hidden lg:block z-0">
            <svg width="100%" height="100%" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              {/* Background Path */}
              <path 
                d="M450 200H750" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeDasharray="8 8"
                className="opacity-20"
              />
              {/* Active Connection Path */}
              <path 
                d="M450 200H750" 
                stroke="white" 
                strokeWidth="1.5" 
                className="opacity-80 animate-pulse"
              />
              
              {/* Terminal Anchor */}
              <circle cx="450" cy="200" r="4" fill="white" className="animate-pulse" />
              <circle cx="450" cy="200" r="8" stroke="white" strokeWidth="1" className="opacity-30" />
              
              {/* Info Anchor */}
              <circle cx="750" cy="200" r="4" fill="white" className="animate-pulse" />
              <circle cx="750" cy="200" r="8" stroke="white" strokeWidth="1" className="opacity-30" />

              {/* Data Packet Animation */}
              <circle r="3" fill="white">
                <animateMotion 
                  dur="4s" 
                  repeatCount="indefinite" 
                  path="M450 200H750"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
              </circle>
            </svg>
          </div>

          {/* Left Side: MacBook Terminal Window */}
          <div className="lg:col-span-6 relative z-10">
            <div className="rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 ring-1 ring-white/5">
              {/* macOS Header Bar */}
              <div className="flex items-center px-4 py-3 bg-[#1e1e1e] border-b border-white/5 relative">
                <div className="flex gap-2 items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-black/10" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-black/10" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-black/10" />
                </div>
                {/* Centered Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 text-white/40 font-mono text-[11px] font-bold">
                    <TerminalIcon size={12} className="opacity-50" />
                    <span className="tracking-wide">zsh — 80x24</span>
                  </div>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono bg-[#000000] min-h-[220px]">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-blue-400 font-bold">~</span>
                    <span className="text-white/80 text-[13px]">Last login: {new Date().toLocaleDateString()} on ttys001</span>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-blue-400 font-bold">~</span>
                    <span className="text-white/60 text-[13px]">open</span>
                    <a 
                      href={projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-blue-400 transition-all break-all hover:underline ml-1"
                    >
                      <span className="text-[13px] font-mono">
                        {displayText}
                      </span>
                      <span className="w-2 h-5 bg-white/70 animate-pulse shrink-0" />
                    </a>
                  </div>

                  <div className="pt-8 text-white/20 text-[11px] leading-relaxed">
                    [SYSTEM] Initializing SupportAI kernel...<br/>
                    [NETWORK] Connected to Vercel production edge.<br/>
                    [STATUS] Transmission active at 1.2 GB/s.
                  </div>
                </div>
              </div>
            </div>
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
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 bg-white/5 text-[10px] font-bold text-white uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
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
