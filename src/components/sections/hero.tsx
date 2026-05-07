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
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              {/* Resized heading to ensure it doesn't cover the face while maintaining impact */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
                SOPAN PATIL
              </h1>
              <p className="max-w-md text-white/90 text-xs md:text-sm font-medium leading-relaxed uppercase tracking-wider">
                Full-Stack AI Developer • Autonomous Agentic Workflows • LLM Ops
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all border border-white/10 backdrop-blur-md shadow-lg"
                  aria-label={link.label}
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-10 h-12 md:h-14 bg-white text-black font-bold hover:scale-105 transition-transform group text-[10px] tracking-[0.2em] uppercase shadow-2xl">
              <a href="/sopan-patil-resume.pdf" target="_blank" rel="noopener noreferrer">
                VIEW RESUME <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right Column: Mission Brief Card */}
          <div className="lg:col-span-5 flex justify-end">
            <GlassSurface
              borderRadius={40}
              className="p-8 md:p-10 shadow-2xl max-w-sm md:max-w-md bg-white/[0.03] border-white/5"
            >
              <h3 className="text-[10px] font-bold tracking-[0.5em] text-white/30 mb-6 uppercase">
                MISSION BRIEF
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-white/80 font-normal">
                Architecting Autonomous Intelligence by merging Next.js 15 with Agentic AI. Expert in Multi-Agent Orchestration, RAG Pipelines, and Custom LLM deployments. I bridge Scalable MERN backends with Serverless Cloud infra to build high-performance, self-evolving GenAI systems.
              </p>
            </GlassSurface>
          </div>
        </div>
      </div>
    </section>
  );
}
