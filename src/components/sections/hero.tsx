'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/lib/data';
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
          src="https://raw.githubusercontent.com/sopan-hub/my-acces/16fec689f27922f5d63ac2b8475019034a54106d/image.png"
          alt="Sopan Patil Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          <div className="lg:col-span-7 relative z-10 space-y-8 p-4">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.9] text-white tracking-tighter uppercase">
                Sopan Patil
              </h1>
              <p className="max-w-2xl text-white/90 text-sm md:text-base leading-relaxed mt-6 font-medium">
                Software Developer | Python, MERN, Scalable, Intelligent Web Apps | Exploring Next.js | AI/ML & Cloud | Building LLMs & GenAI
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white/80 hover:text-white hover:bg-white/20 transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
            
            <Button size="lg" className="rounded-full px-8 bg-white text-black font-bold hover:scale-105 transition-transform">
              INITIALIZE CORE <ArrowUpRight className="ml-2" />
            </Button>
          </div>

          <div className="lg:col-span-5 flex flex-col items-end relative z-10">
            <GlassSurface
              width={400}
              borderRadius={32}
              className="p-8 shadow-2xl"
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
              className="p-6 shadow-2xl"
            >
              <div className="flex gap-6 items-center group cursor-pointer">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 ring-1 ring-white/20">
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
             <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] bg-white/10 backdrop-blur-md text-white/80 hover:text-white transition-all uppercase tracking-[0.2em]">
              8K PRECISION
            </Badge>
            <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] bg-white/10 backdrop-blur-md text-white/80 hover:text-white transition-all uppercase tracking-[0.2em]">
              V2.5
            </Badge>
            <Badge variant="outline" className="rounded-full px-5 py-1.5 text-[10px] border-white text-white uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md">
              NEURAL-SYNC ACTIVE
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
