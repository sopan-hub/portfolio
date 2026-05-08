'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import GlassSurface from '@/components/ui/glass-surface';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 py-12">
        
        {/* Main Content: Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Branding & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-black text-white tracking-tighter uppercase whitespace-nowrap drop-shadow-2xl">
                SOPAN PATIL
              </h1>
              <p className="max-w-xl text-white/90 text-[10px] sm:text-[11px] md:text-xs font-bold leading-relaxed uppercase tracking-[0.15em]">
                Full-Stack AI Developer | Python • MERN • Next.js | Autonomous Agentic Workflows | LLM Ops & Cloud Scaling
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sopan-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all border border-white/10 backdrop-blur-md"
              >
                <div className="relative">
                  <Github size={18} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/sopan-patil-24b2a1380"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all border border-white/10 backdrop-blur-md"
              >
                <div className="relative">
                  <Linkedin size={18} />
                </div>
              </a>
            </div>

            <Button asChild size="lg" className="rounded-full px-10 h-14 bg-white text-black font-black hover:scale-105 transition-transform group text-[11px] tracking-[0.2em] uppercase shadow-2xl">
              <a href="/sopan-patil-resume.pdf" target="_blank" rel="noopener noreferrer">
                VIEW RESUME <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right: Mission Brief */}
          <div className="lg:col-span-5 flex justify-end">
            <GlassSurface
              borderRadius={40}
              className="p-8 md:p-12 shadow-2xl max-w-sm md:max-w-md bg-white/[0.03] border-white/5"
            >
              <h3 className="text-[9px] font-bold tracking-[0.4em] text-white/40 mb-6 uppercase">
                MISSION BRIEF
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-white/80 font-normal">
                Architecting Autonomous Intelligence by merging Next.js 15 with Agentic AI. Expert in Multi-Agent Orchestration, RAG Pipelines, and Custom LLM deployments. I bridge Scalable MERN backends with Serverless Cloud infra to build high-performance, self-evolving GenAI systems focused on low-latency Neural Architectures.
              </p>
            </GlassSurface>
          </div>
        </div>
      </div>
    </section>
  );
}
