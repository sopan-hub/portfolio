'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import GlassSurface from '@/components/ui/glass-surface';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Branding & Actions */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              {/* Increased size for more impact, but still left-aligned to avoid the face */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase whitespace-nowrap drop-shadow-2xl">
                SOPAN PATIL
              </h1>
              <p className="max-w-lg text-white/90 text-[10px] sm:text-xs md:text-sm font-bold leading-relaxed uppercase tracking-[0.25em]">
                Full-Stack AI Developer • Autonomous Agentic Workflows • LLM Ops
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all border border-white/10 backdrop-blur-md shadow-lg"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-12 h-14 md:h-16 bg-white text-black font-black hover:scale-105 transition-transform group text-[11px] tracking-[0.2em] uppercase shadow-2xl">
              <a href="/sopan-patil-resume.pdf" target="_blank" rel="noopener noreferrer">
                VIEW RESUME <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Right Column: Mission Brief Card */}
          <div className="lg:col-span-5 flex justify-end">
            <GlassSurface
              borderRadius={40}
              className="p-10 md:p-12 shadow-2xl max-w-sm md:max-w-lg bg-white/[0.03] border-white/5"
            >
              <h3 className="text-[11px] font-bold tracking-[0.6em] text-white/30 mb-8 uppercase">
                MISSION BRIEF
              </h3>
              <p className="text-xs md:text-sm lg:text-base leading-relaxed text-white/80 font-normal">
                Architecting Autonomous Intelligence by merging Next.js 15 with Agentic AI. Expert in Multi-Agent Orchestration, RAG Pipelines, and Custom LLM deployments. I bridge Scalable MERN backends with Serverless Cloud infra to build high-performance, self-evolving GenAI systems.
              </p>
            </GlassSurface>
          </div>
        </div>
      </div>
    </section>
  );
}
