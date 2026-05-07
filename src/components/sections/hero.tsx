
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import GlassSurface from '@/components/ui/glass-surface';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] text-white tracking-tighter uppercase">
              Sopan Patil
            </h1>
            <p className="max-w-2xl text-white/90 text-sm md:text-lg font-medium">
              Full-Stack AI Developer | Python • MERN • Next.js | Autonomous Agentic Workflows | LLM Ops & Cloud Scaling
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white/80 hover:text-white hover:bg-white/20 transition-all border border-white/10"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-10 h-14 bg-white text-black font-bold hover:scale-105 transition-transform">
              <a href="/sopan-patil-resume.pdf" target="_blank" rel="noopener noreferrer">
                VIEW RESUME <ArrowUpRight className="ml-2" />
              </a>
            </Button>
          </div>

          {/* Mission Brief Card */}
          <div className="lg:col-span-5 flex justify-end">
            <GlassSurface
              width="100%"
              borderRadius={24}
              className="p-8 shadow-2xl max-w-md pt-12"
            >
              <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/40 border-b border-white/5 pb-3 mb-4 uppercase">
                MISSION BRIEF
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-white/80 font-medium">
                Architecting Autonomous Intelligence by merging Next.js 15 with Agentic AI. Expert in Multi-Agent Orchestration, RAG Pipelines, and Custom LLM deployments. I bridge Scalable MERN backends with Serverless Cloud infra to build high-performance, self-evolving GenAI systems focused on low-latency Neural Architectures.
              </p>
            </GlassSurface>
          </div>
        </div>
      </div>
    </section>
  );
}
