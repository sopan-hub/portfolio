
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import GlassSurface from '@/components/ui/glass-surface';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroImage = "https://github.com/sopan-hub/my-acces/blob/main/image.png?raw=true";

  // Animation Interpolation for the shrinking background
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.12]);
  const translateX = useTransform(scrollYProgress, [0, 0.8], ["0%", "-42.5%"]);
  const translateY = useTransform(scrollYProgress, [0, 0.8], ["0%", "38%"]);
  
  // Fade out hero text as we scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  // Fade in the image inside the Mac screen at the end of the scale animation
  const innerOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);
  
  // Macbook visibility - it only appears when scrolling begins
  const macOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-black overflow-x-hidden">
      
      {/* SECTION 1: THE HERO CONTENT (Fades out) */}
      <motion.section 
        style={{ opacity: textOpacity }}
        className="sticky top-0 z-50 h-screen w-full flex flex-col justify-center px-4 md:px-20 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 pointer-events-auto">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] text-white tracking-tighter uppercase">
              Sopan Patil
            </h1>
            <p className="max-w-2xl text-white/90 text-sm md:text-lg font-medium">
              Full-Stack AI Developer | Python • MERN • Next.js | Autonomous Agentic Workflows | LLM Ops & Cloud Scaling
            </p>
            
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

          <div className="lg:col-span-5 flex justify-end pointer-events-auto">
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
      </motion.section>

      {/* SECTION 2: THE ANIMATING BACKGROUND IMAGE */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          style={{
            scale,
            translateX,
            translateY,
          }}
          className="relative w-full h-full z-10"
        >
          <img
            src={heroImage}
            alt="Neural Interface Background"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>

      {/* SECTION 3: THE MACBOOK MODEL (Fixed/Sticky at Bottom-Left) */}
      <motion.div 
        style={{ opacity: macOpacity }}
        className="fixed bottom-10 left-4 md:left-20 z-40 origin-bottom-left scale-[0.4] md:scale-[0.6] pointer-events-none"
      >
        <div className="relative">
          {/* Mac Screen / Bezel */}
          <div className="h-[400px] w-[600px] bg-[#272729] rounded-t-3xl p-4 shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5">
            <div className="h-full w-full bg-black rounded-xl border border-neutral-800 flex items-center justify-center overflow-hidden">
                {/* The content that appears inside the Mac screen */}
                <motion.div 
                    style={{ opacity: innerOpacity }}
                    className="w-full h-full relative"
                >
                    <img src={heroImage} alt="Screen content" className="w-full h-full object-cover" />
                </motion.div>
            </div>
          </div>
          {/* Mac Base */}
          <div className="h-[15px] w-[604px] bg-[#1D1D1F] rounded-b-xl ml-[-2px] border-t border-white/10" />
          <div className="h-[8px] w-[140px] bg-[#161617] mx-auto rounded-b-lg shadow-inner" />
        </div>
      </motion.div>

      {/* TRANSITION TEXT AT THE END OF HERO */}
      <div className="h-screen bg-black flex items-center justify-center relative z-[60] pointer-events-none">
        <h2 className="text-white text-xl md:text-3xl font-light tracking-widest opacity-30 uppercase">
          SCROLL TO EXPLORE ARCHITECTURES
        </h2>
      </div>
    </div>
  );
}
