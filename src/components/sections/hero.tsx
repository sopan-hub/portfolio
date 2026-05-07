
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
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
          data-ai-hint={images["hero-bg"].dataAiHint}
        />
        {/* Gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
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
        <div className="flex justify-between items-start pt-12 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>SOPAN-PATIL // v2.0</span>
          <div className="flex gap-4">
            <span>01/24</span>
            <span className="text-white">Next Project</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Main Title */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.9] text-white">
                SOPAN-PATIL // <br />
                <span className="text-primary glow-orange">Neural Interface</span>
              </h1>
              <p className="max-w-md text-muted-foreground text-sm leading-relaxed mt-6 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                Engineered with high-res logic and a zero-gravity framework for those who don't just watch the future—they build it. Shift your digital reality.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors bg-black/40">
                <Boxes size={16} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors bg-black/40">
                <Scan size={16} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors bg-black/40">
                <Zap size={16} />
              </div>
            </div>
          </div>

          {/* Right Column: Specs */}
          <div className="lg:col-span-6 flex flex-col items-end">
            <div className="w-full max-w-sm space-y-6 bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <h3 className="text-xs font-bold tracking-widest text-white/50 border-b border-white/10 pb-2">
                TECHNICAL SPECS
              </h3>
              <div className="space-y-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between text-xs group">
                    <span className="text-muted-foreground group-hover:text-white transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-white font-medium">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Card */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-20">
          <div className="md:col-span-5">
            <div className="tech-border p-4 rounded-xl flex gap-6 items-center group cursor-pointer hover:border-primary/50 transition-all duration-500 bg-black/60 backdrop-blur-lg">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={images["neural-chip"].url}
                  alt={images["neural-chip"].alt}
                  fill
                  className="object-cover"
                  data-ai-hint={images["neural-chip"].dataAiHint}
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  S-01: Neural Core
                </h4>
                <p className="text-[10px] text-muted-foreground leading-snug">
                  High-resolution optimization and a light frame for comfort and clarity in AI deployments.
                </p>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-[10px] uppercase tracking-widest text-primary hover:text-white hover:bg-primary/20">
                  View Source <ArrowUpRight size={12} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex justify-end gap-2">
             <Badge variant="outline" className="rounded-full px-4 py-1 text-[10px] border-white/10 text-muted-foreground hover:border-primary hover:text-white transition-all uppercase tracking-widest bg-black/40">
              8K RAW
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1 text-[10px] border-white/10 text-muted-foreground hover:border-primary hover:text-white transition-all uppercase tracking-widest bg-black/40">
              A+
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1 text-[10px] border-white/10 text-muted-foreground hover:border-primary hover:text-white transition-all uppercase tracking-widest bg-black/40">
              ULTRA-WIDE
            </Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1 text-[10px] border-primary/50 text-primary glow-orange uppercase tracking-widest bg-black/40">
              NEURAL-SYNC
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
