
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 py-12">
        
        {/* Main Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Name & Branding */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase whitespace-nowrap leading-none drop-shadow-2xl">
                SOPAN PATIL
              </h1>
              <p className="max-w-xl text-white/90 text-[9px] sm:text-[10px] md:text-[11px] font-bold leading-relaxed uppercase tracking-[0.25em] border-l-2 border-white/20 pl-6">
                Full-Stack AI Developer | Python • MERN • Next.js | Autonomous Agentic Workflows | LLM Ops & Cloud Scaling
              </p>
            </div>
            
            {/* Social Links & CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/sopan-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all border border-white/10 backdrop-blur-md"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sopan-patil-24b2a1380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all border border-white/10 backdrop-blur-md"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              <Button asChild className="rounded-full px-10 h-14 bg-white text-black font-black hover:scale-105 transition-transform group text-[10px] tracking-[0.2em] uppercase shadow-2xl">
                <a href="/sopan-patil-resume.pdf" target="_blank" rel="noopener noreferrer">
                  VIEW RESUME <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side: Capability Scan (No Card, Large Text) */}
          <div className="lg:col-span-6 flex flex-col items-end text-right">
            <div className="space-y-10 max-w-2xl">
              <div className="space-y-2">
                <h3 className="text-base md:text-lg font-black tracking-[0.5em] text-white/30 uppercase font-mono">
                  [ CAPABILITY_SCAN // 2026 ]
                </h3>
                <div className="h-px w-full bg-gradient-to-l from-white/20 to-transparent" />
              </div>

              <div className="space-y-6">
                <div className="group">
                  <p className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tighter leading-tight">
                    <span className="text-white/30 font-black text-[10px] md:text-xs mr-4 tracking-widest font-mono">INTELLIGENCE:</span> 
                    Agentic AI • GenAI • AI/ML
                  </p>
                </div>

                <div className="group">
                  <p className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tighter leading-tight">
                    <span className="text-white/30 font-black text-[10px] md:text-xs mr-4 tracking-widest font-mono">NEURAL:</span> 
                    Multi-Agent RAG • Custom LLMs
                  </p>
                </div>

                <div className="group">
                  <p className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tighter leading-tight">
                    <span className="text-white/30 font-black text-[10px] md:text-xs mr-4 tracking-widest font-mono">WEB_STACK:</span> 
                    Next.js 15 • Scalable MERN
                  </p>
                </div>

                <div className="group">
                  <p className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tighter leading-tight">
                    <span className="text-white/30 font-black text-[10px] md:text-xs mr-4 tracking-widest font-mono">INFRA:</span> 
                    Serverless • Firebase • Cloud Ops
                  </p>
                </div>

                <div className="group">
                  <p className="text-xl md:text-2xl font-bold text-white/90 uppercase tracking-tighter leading-tight">
                    <span className="text-white/30 font-black text-[10px] md:text-xs mr-4 tracking-widest font-mono">CORE:</span> 
                    Autonomous System Architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
