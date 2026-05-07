
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import GlassSurface from '@/components/ui/glass-surface';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-between relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12 md:mt-0">
          
          {/* Left Column: Branding & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
                SOPAN PATIL
              </h1>
              <p className="max-w-xl text-white/90 text-sm md:text-base font-medium leading-relaxed">
                Full-Stack AI Developer | Python • MERN • Next.js | Autonomous Agentic Workflows | LLM Ops & Cloud Scaling
              </p>
            </div>
            
            {/* Social Icons - Simple circles as in the image */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all border border-white/10 backdrop-blur-md"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-10 h-14 bg-white text-black font-bold hover:scale-105 transition-transform group text-xs tracking-widest uppercase">
              <a href="/sopan-patil-resume.pdf" target="_blank" rel="noopener noreferrer">
                VIEW RESUME <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right Column: Mission Brief Card */}
          <div className="lg:col-span-5 flex justify-end">
            <GlassSurface
              borderRadius={32}
              className="p-8 md:p-10 shadow-2xl max-w-md bg-white/[0.05] border-white/5"
            >
              <h3 className="text-[9px] font-bold tracking-[0.4em] text-white/30 mb-6 uppercase">
                MISSION BRIEF
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-white/80 font-normal">
                Architecting Autonomous Intelligence by merging Next.js 15 with Agentic AI. Expert in Multi-Agent Orchestration, RAG Pipelines, and Custom LLM deployments. I bridge Scalable MERN backends with Serverless Cloud infra to build high-performance, self-evolving GenAI systems focused on low-latency Neural Architectures.
              </p>
            </GlassSurface>
          </div>
        </div>

        {/* Bottom Section: Latest Build Card */}
        <div className="mt-12 lg:mt-auto">
          <GlassSurface
            borderRadius={32}
            className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-2xl bg-white/[0.05] max-w-xl border-white/5"
          >
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10">
              <Image 
                src="https://picsum.photos/seed/nexus/200/200" 
                alt="Nexus R1" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="space-y-1 flex-1">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                LATEST BUILD: NEXUS-R1
              </h4>
              <p className="text-xs text-white/60 max-w-sm leading-relaxed mb-3">
                An advanced multi-agent framework utilizing Genkit and Gemini for autonomous decision making.
              </p>
              <a href="#projects" className="inline-flex items-center text-[10px] font-bold text-white uppercase hover:translate-x-1 transition-transform tracking-widest">
                VIEW PROJECT <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
}
