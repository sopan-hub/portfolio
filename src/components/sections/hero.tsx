'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cpu, Zap, Scan, Boxes, ArrowUpRight } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';

export default function HeroSection() {
  const specs = [
    { label: 'Intelligence', value: 'Deep Neural Models' },
    { label: 'Engine', value: 'R1 - Genkit Framework' },
    { label: 'Latency', value: 'Real-time Inference' },
    { label: 'Core', value: 'Lightweight Scalable Architecture' },
  ];

  const bgImageUrl = "https://raw.githubusercontent.com/sopan-hub/my-acces/main/Gemini_Generated_Image_yzt7vnyzt7vnyzt7.png?raw=true";

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden pt-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl}
          alt="Neural Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Technical Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] h-full w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="border-r border-white/5" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Top Labels */}
        <div className="flex justify-between items-start pt-12 text-[10px] uppercase tracking-[0.2em] text-white/70">
          <span>SOPAN-PATIL // v2.0</span>
          <div className="flex gap-4">
            <span>10/25</span>
            <span className="text-white font-bold">Neural Portfolio</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Left Column: Main Title (Removed container blur/border) */}
          <div className="lg:col-span-7 relative z-10 space-y-8 p-4">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.9] text-white tracking-tighter drop-shadow-2xl">
                SOPAN-PATIL // <br />
                <span className="text-primary glow-orange">Neural Interface</span>
              </h1>
              <p className="max-w-md text-white/90 text-base leading-relaxed mt-6 font-medium drop-shadow-lg">
                Architecting intelligent solutions with high-res logic and a zero-gravity framework. Bridging the gap between human intuition and machine intelligence.
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
            
            <Button size="lg" className="rounded-full px-8 bg-primary text-black font-bold hover:scale-105 transition-transform shadow-xl">
              INITIALIZE CORE <ArrowUpRight className="ml-2" />
            </Button>
          </div>

          {/* Right Column: Specs */}
          <div className="lg:col-span-5 flex flex-col items-end relative z-10">
            <div className="w-full max-w-sm space-y-6 p-8 liquid-glass rounded-3xl relative">
              <h3 className="text-xs font-bold tracking-[0.3em] text-white/60 border-b border-white/10 pb-4 uppercase">
                SYSTEM PARAMETERS
              </h3>
              <div className="space-y-5">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between text-xs group">
                    <span className="text-white/60 group-hover:text-white transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-white font-mono font-medium drop-shadow-md">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Card */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-20 relative">
          <div className="md:col-span-5 relative">
            <div className="p-5 rounded-3xl liquid-glass flex gap-6 items-center group cursor-pointer transition-all duration-500 hover:bg-white/10">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 ring-1 ring-white/20 shadow-2xl">
                <Image
                  src={images["neural-chip"].url}
                  alt={images["neural-chip"].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest drop-shadow-md">
                  S-01: Neural Core
                </h4>
                <p className="text-[11px] text-white/80 leading-snug">
                  Optimized for real-world AI deployment with a focus on precision and scalability.
                </p>
                <Button variant="ghost" size="sm" className="h-7 px-0 text-[10px] uppercase tracking-widest text-primary hover:text-white hover:bg-transparent">
                  View Architecture <ArrowUpRight size={12} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex justify-end gap-3 z-10">
             <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] liquid-glass text-white/80 hover:text-white transition-all uppercase tracking-[0.2em]">
              8K PRECISION
            </Badge>
            <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] liquid-glass text-white/80 hover:text-white transition-all uppercase tracking-[0.2em]">
              V2.5
            </Badge>
            <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] border-primary text-primary glow-orange uppercase tracking-[0.2em] liquid-glass">
              NEURAL-SYNC ACTIVE
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
