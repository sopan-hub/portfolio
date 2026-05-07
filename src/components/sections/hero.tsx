
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

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden pt-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images["hero-bg"].url}
          alt={images["hero-bg"].alt}
          fill
          className="object-cover opacity-60"
          priority
          data-ai-hint={images["hero-bg"].dataAiHint}
        />
        {/* Subtle vignette instead of heavy black fade */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />
      </div>

      {/* Technical Background patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#f59e0b11,transparent_70%)]" />
        <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] h-full w-full opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="border-r border-white/5" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-start pt-12 text-[10px] uppercase tracking-[0.2em] text-white/50">
          <span>SOPAN-PATIL // v2.0</span>
          <div className="flex gap-4">
            <span>10/25</span>
            <span className="text-white">Neural Portfolio</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Main Title with Clean Blur */}
          <div className="lg:col-span-7 p-10 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.9] text-white tracking-tighter">
                SOPAN-PATIL // <br />
                <span className="text-primary glow-orange">Neural Interface</span>
              </h1>
              <p className="max-w-md text-white/80 text-base leading-relaxed mt-6">
                Architecting intelligent solutions with high-res logic and a zero-gravity framework. Bridging the gap between human intuition and machine intelligence.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/60 hover:border-primary hover:text-primary transition-all bg-white/5 backdrop-blur-md">
                <Boxes size={20} />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/60 hover:border-primary hover:text-primary transition-all bg-white/5 backdrop-blur-md">
                <Scan size={20} />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/60 hover:border-primary hover:text-primary transition-all bg-white/5 backdrop-blur-md">
                <Zap size={20} />
              </div>
            </div>
            
            <Button size="lg" className="rounded-full px-8 bg-primary text-black font-bold hover:scale-105 transition-transform">
              INITIALIZE CORE <ArrowUpRight className="ml-2" />
            </Button>
          </div>

          {/* Right Column: Specs with Clean Blur */}
          <div className="lg:col-span-5 flex flex-col items-end">
            <div className="w-full max-w-sm space-y-6 backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xs font-bold tracking-[0.3em] text-white/40 border-b border-white/10 pb-4 uppercase">
                SYSTEM PARAMETERS
              </h3>
              <div className="space-y-5">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between text-xs group">
                    <span className="text-white/50 group-hover:text-white transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-white font-mono font-medium">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Card */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-20">
          <div className="md:col-span-5">
            <div className="p-5 rounded-2xl flex gap-6 items-center group cursor-pointer border border-white/10 bg-white/5 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 shadow-lg">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 ring-1 ring-white/20">
                <Image
                  src={images["neural-chip"].url}
                  alt={images["neural-chip"].alt}
                  fill
                  className="object-cover"
                  data-ai-hint={images["neural-chip"].dataAiHint}
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest">
                  S-01: Neural Core
                </h4>
                <p className="text-[11px] text-white/60 leading-snug">
                  Optimized for real-world AI deployment with a focus on precision and scalability.
                </p>
                <Button variant="ghost" size="sm" className="h-7 px-0 text-[10px] uppercase tracking-widest text-primary hover:text-white hover:bg-transparent">
                  View Architecture <ArrowUpRight size={12} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex justify-end gap-3">
             <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] border-white/10 text-white/40 hover:border-primary hover:text-white transition-all uppercase tracking-[0.2em] bg-white/5 backdrop-blur-md">
              8K PRECISION
            </Badge>
            <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] border-white/10 text-white/40 hover:border-primary hover:text-white transition-all uppercase tracking-[0.2em] bg-white/5 backdrop-blur-md">
              V2.5
            </Badge>
            <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] border-primary/50 text-primary glow-orange uppercase tracking-[0.2em] bg-white/5 backdrop-blur-md">
              NEURAL-SYNC ACTIVE
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
