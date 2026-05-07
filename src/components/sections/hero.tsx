'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Cpu, Sparkles, Code2, Cloud, BrainCircuit } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import images from '@/app/lib/placeholder-images.json';
import GlassSurface from '@/components/ui/glass-surface';

export default function HeroSection() {
  const capabilities = [
    { label: 'Agentic AI', value: 'Autonomous LLM Agents', icon: BrainCircuit },
    { label: 'Gen AI', value: 'RAG & Custom LLMs', icon: Sparkles },
    { label: 'Web Stack', value: 'Next.js 15 & React', icon: Code2 },
    { label: 'Architecture', value: 'Scalable MERN Apps', icon: Cpu },
    { label: 'Cloud Tech', value: 'Firebase & Serverless', icon: Cloud },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div className="container mx-auto px-4 relative z-20">
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          <div className="lg:col-span-7 relative z-10 space-y-8 p-4">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.9] text-white tracking-tighter uppercase">
                Sopan Patil
              </h1>
              <p className="max-w-2xl text-white/90 text-sm md:text-base leading-relaxed mt-6 font-medium">
                Software Developer | Building Intelligent Web Apps with Agentic AI, Next.js, and the MERN Stack. Exploring the frontiers of GenAI and Cloud Architecture.
              </p>
            </div>

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

          <div className="lg:col-span-5 flex flex-col items-end relative z-10">
            <GlassSurface
              width="100%"
              borderRadius={32}
              className="p-8 shadow-2xl max-w-md"
            >
              <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/40 border-b border-white/5 pb-4 mb-6 uppercase">
                CORE CAPABILITIES
              </h3>
              <div className="space-y-6">
                {capabilities.map((tech) => (
                  <div key={tech.label} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                        <tech.icon size={16} className="text-white/70 group-hover:text-white" />
                      </div>
                      <span className="text-xs font-bold text-white/60 tracking-wider group-hover:text-white transition-colors uppercase">
                        {tech.label}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-white/90 text-right">
                      {tech.value}
                    </span>
                  </div>
                ))}
              </div>
            </GlassSurface>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-20 relative">
          <div className="md:col-span-5 relative">
            <GlassSurface
              borderRadius={32}
              className="p-6 shadow-2xl"
            >
              <div className="flex gap-6 items-center group cursor-pointer">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 ring-1 ring-white/10">
                  <Image
                    src={images["neural-chip"].url}
                    alt={images["neural-chip"].alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">
                    LATEST BUILD: NEXUS-R1
                  </h4>
                  <p className="text-[11px] text-white/60 leading-snug">
                    An advanced multi-agent framework utilizing Genkit and Gemini for autonomous decision making.
                  </p>
                  <Button variant="ghost" size="sm" className="h-7 px-0 text-[10px] uppercase tracking-widest text-white hover:text-white hover:bg-transparent">
                    View Project <ArrowUpRight size={12} className="ml-1" />
                  </Button>
                </div>
              </div>
            </GlassSurface>
          </div>
        </div>
      </div>
    </section>
  );
}
