'use client';

import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero specific background fades out as we scroll down
  const opacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroBgUrl = "https://raw.githubusercontent.com/sopan-hub/my-acces/16fec689f27922f5d63ac2b8475019034a54106d/image.png";

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent">
      {/* Hero-specific background layer */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-[-1] pointer-events-none"
      >
        <Image
          src={heroBgUrl}
          alt="Sopan Patil Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
      </motion.div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-between relative z-10 py-32">
        {/* Top Header Row (HUD style) */}
        <div className="flex justify-end items-start w-full mb-12">
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[12px] md:text-[15px] font-bold tracking-[0.4em] uppercase">SYSTEM_ID // SP.2026</span>
            <div className="h-[1px] w-8 md:w-12 bg-white/60" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">CORE_ACTIVE</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
          {/* Left Side: Branding, Description & Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black text-white tracking-tighter uppercase leading-[0.85] drop-shadow-2xl">
                SOPAN PATIL
              </h1>
              <p className="max-w-md text-white/80 text-[11px] md:text-[13px] leading-relaxed uppercase tracking-wider font-bold">
                Full-Stack AI Developer. Engineered with Agentic AI and high-res MERN stacks for those who don't just watch the future—they architect it. Expert in autonomous workflows and neural RAG pipelines.
              </p>
            </div>

            {/* Social Icons (Capsule Buttons) */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://github.com/sopan-hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/40 bg-white/5 text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all backdrop-blur-md"
              >
                <Github size={16} /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sopan-patil-24b2a1380" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/40 bg-white/5 text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all backdrop-blur-md"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-2 hidden lg:block" />

          {/* Right Side: Technical Specs List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col items-end"
          >
            <div className="w-full max-w-xs space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-white tracking-[0.3em] uppercase opacity-60">TECHNICAL SPECS</p>
                <div className="h-[1px] w-full bg-white/30" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[13px] md:text-[15px] font-bold text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">INTELLIGENCE </span>
                  <span className="text-[13px] md:text-[15px] font-bold text-white uppercase tracking-tight text-right">Agentic • GenAI • AI/ML</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[13px] md:text-[15px] font-bold text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">NEURAL </span>
                  <span className="text-[13px] md:text-[15px] font-bold text-white uppercase tracking-tight text-right"> Multi-Agent RAG • Custom LLMs</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[13px] md:text-[15px] font-bold text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">WEB_STACK </span>
                  <span className="text-[13px] md:text-[15px] font-bold text-white uppercase tracking-tight text-right">Next.js 15 • Scalable MERN</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[13px] md:text-[15px] font-bold text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">INFRA </span>
                  <span className="text-[13px] md:text-[15px] font-bold text-white uppercase tracking-tight text-right"> Serverless • Firebase • Cloud</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[13px] md:text-[15px] font-bold text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">BUILD </span>
                  <span className="text-[13px] md:text-[15px] font-bold text-white uppercase tracking-tight text-right">Autonomous Architectures</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
