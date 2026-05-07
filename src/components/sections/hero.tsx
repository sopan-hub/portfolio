
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Boxes, Scan, Zap, ArrowUpRight } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';
import GlassSurface from '@/components/ui/glass-surface';

export default function HeroSection() {
  const specs = [
    { label: 'Intelligence', value: 'Deep Neural Models' },
    { label: 'Engine', value: 'R1 - Genkit Framework' },
    { label: 'Latency', value: 'Real-time Inference' },
    { label: 'Core', value: 'Lightweight Scalable Architecture' },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://raw.githubusercontent.com/sopan-hub/my-acces/608ed1759591797750a4cf9ac69791e8cf4cbf20/image3.png"
          alt="Sopan Patil Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] h-full w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="border-r border-white/5" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex justify-between items-start pt-12 text-[10px] uppercase tracking-[0.2em] text-white/70">
          <span>SOPAN-PATIL // v2.5</span>
          <div className="flex gap-4">
            <span>10/25</span>
            <span className="text-white font-bold">Neural Interface</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          <div className="lg:col-span-7 relative z-10 space-y-8 p-4">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.9] text-white tracking-tighter">
                Sopan Patil
              </h1>
              <p className="max-w-2xl text-white/90 text-sm md:text-base leading-relaxed mt-6 font-medium">
                Software Developer | Python, MERN, Scalable, Intelligent Web Apps | Exploring Next.js | AI/ML & Cloud | Building LLMs & GenAI
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full liquid-glass text-white/80 hover:text-primary transition-all">
                <Boxes size={20} />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full liquid-glass text-white/80 hover:text-primary transition-all">
                <Scan size={20} />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full liquid-glass text-white/80 hover:text-primary transition-all">
                <Zap size={20} />
              </div>
            </div>
            
            <Button size="lg" className="rounded-full px-8 bg-white text-black font-bold hover:scale-105 transition-transform">
              INITIALIZE CORE <ArrowUpRight className="ml-2" />
            </Button>
          </div>

          <div className="lg:col-span-5 flex flex-col items-end relative z-10">
            <GlassSurface
              width={400}
              borderRadius={32}
              brightness={25}
              opacity={0.98}
              blur={60}
              backgroundOpacity={0.4}
              displace={0}
              distortionScale={0}
              className="p-8"
            >
              <h3 className="text-xs font-bold tracking-[0.3em] text-white/60 border-b border-white/10 pb-4 uppercase">
                SYSTEM PARAMETERS
              </h3>
              <div className="mt-6 space-y-5">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between text-xs group">
                    <span className="text-white/60 group-hover:text-white transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-white font-mono font-medium">
                      {spec.value}
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
              brightness={25}
              opacity={0.98}
              blur={60}
              backgroundOpacity={0.4}
              displace={0}
              distortionScale={0}
              className="p-6"
            >
              <div className="flex gap-6 items-center group cursor-pointer">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 ring-1 ring-white/20">
                  <Image
                    src={images["neural-chip"].url}
                    alt={images["neural-chip"].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">
                    S-01: Neural Core
                  </h4>
                  <p className="text-[11px] text-white/80 leading-snug">
                    Optimized for real-world AI deployment with a focus on precision and scalability.
                  </p>
                  <Button variant="ghost" size="sm" className="h-7 px-0 text-[10px] uppercase tracking-widest text-white hover:text-white hover:bg-transparent">
                    View Architecture <ArrowUpRight size={12} className="ml-1" />
                  </Button>
                </div>
              </div>
            </GlassSurface>
          </div>

          <div className="md:col-span-7 flex justify-end gap-3 z-10">
             <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] liquid-glass text-white/80 hover:text-white transition-all uppercase tracking-[0.2em]">
              8K PRECISION
            </Badge>
            <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] liquid-glass text-white/80 hover:text-white transition-all uppercase tracking-[0.2em]">
              V2.5
            </Badge>
            <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] border-white text-white uppercase tracking-[0.2em] liquid-glass">
              NEURAL-SYNC ACTIVE
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
