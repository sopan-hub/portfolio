
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import GlassSurface from '@/components/ui/glass-surface';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center py-20">
      <div className="container mx-auto px-4 h-full flex flex-col justify-between">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center pt-10 md:pt-20">
          {/* Left Column: Info */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] text-white tracking-tighter uppercase">
              Sopan Patil
            </h1>
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium">
              Full-Stack AI Developer | Python • MERN • Next.js | Autonomous Agentic Workflows | LLM Ops & Cloud Scaling
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 py-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/10 backdrop-blur-sm shadow-xl"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-10 h-14 bg-white text-black font-bold hover:scale-105 transition-transform group">
              <a href="/sopan-patil-resume.pdf" target="_blank" rel="noopener noreferrer">
                VIEW RESUME <ArrowUpRight className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right Column: Mission Brief Card */}
          <div className="lg:col-span-5 flex justify-end">
            <GlassSurface
              width="100%"
              borderRadius={32}
              className="p-10 shadow-2xl max-w-md bg-white/[0.03]"
            >
              <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/40 border-b border-white/5 pb-4 mb-6 uppercase">
                MISSION BRIEF
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-white/80 font-medium">
                Architecting Autonomous Intelligence by merging Next.js 15 with Agentic AI. Expert in Multi-Agent Orchestration, RAG Pipelines, and Custom LLM deployments. I bridge Scalable MERN backends with Serverless Cloud infra to build high-performance, self-evolving GenAI systems focused on low-latency Neural Architectures.
              </p>
            </GlassSurface>
          </div>
        </div>

        {/* Bottom Card: Latest Build */}
        <div className="mt-12 md:mt-24 pb-10">
          <GlassSurface
            width="fit-content"
            borderRadius={32}
            className="p-6 md:p-8 flex items-center gap-6 shadow-2xl bg-white/[0.03] max-w-2xl border border-white/10"
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
            <div className="space-y-1">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                LATEST BUILD: NEXUS-R1
              </h4>
              <p className="text-sm text-white/70 max-w-md leading-snug">
                An advanced multi-agent framework utilizing Genkit and Gemini for autonomous decision making.
              </p>
              <a href="#projects" className="inline-flex items-center text-[10px] font-bold text-white uppercase mt-3 hover:gap-3 transition-all tracking-widest">
                VIEW PROJECT <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  );
}
