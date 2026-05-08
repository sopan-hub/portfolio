'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Cpu, Share2, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-between relative z-10 py-12 min-h-[80vh]">
        
        {/* Top Header Row (HUD style) */}
        <div className="flex justify-end items-start w-full mb-8">
          <div className="flex items-center gap-4 text-white/40">
            <span className="text-[15px] font-bold tracking-[0.4em] uppercase">SYSTEM_ID // SP.2026</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/80">CORE_ACTIVE</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
          
          {/* Left Side: Branding & Description */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[76px] font-black text-white tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
                SOPAN<br />PATIL //
              </h1>
              <p className="max-w-md text-white/60 text-[12px] md:text-[14px] leading-relaxed uppercase tracking-wider">
                Full-Stack AI Developer. Engineered with Agentic AI and high-res MERN stacks for those who don't just watch the future—they architect it. Expert in autonomous workflows and neural RAG pipelines.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 hidden lg:block" /> {/* Face Clearance Spacer */}

          {/* Right Side: Technical Specs List */}
          <div className="lg:col-span-5 flex flex-col items-end">
            <div className="w-full max-w-xs space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-white tracking-[0.3em] uppercase">TECHNICAL SPECS</p>
                <div className="h-[1px] w-full bg-white/10" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/40 uppercase tracking-widest">INTELLIGENCE </span>
                  <span className="text-[15px] font-bold text-white/90 uppercase tracking-tight text-right">Agentic • GenAI • AI/ML</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/40 uppercase tracking-widest">NEURAL </span>
                  <span className="text-[15px] font-bold text-white/90 uppercase tracking-tight text-right"> Multi-Agent RAG • Custom LLMs</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/40 uppercase tracking-widest">WEB_STACK </span>
                  <span className="text-[15px] font-bold text-white/90 uppercase tracking-tight text-right">Next.js 15 • Scalable MERN</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/40 uppercase tracking-widest">INFRA </span>
                  <span className="text-[15px] font-bold text-white/90 uppercase tracking-tight text-right"> Serverless • Firebase • Cloud</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/40 uppercase tracking-widest">BUILD </span>
                  <span className="text-[15px] font-bold text-white/90 uppercase tracking-tight text-right">Autonomous Architectures</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom HUD Row */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full mt-12 gap-8">
          
          {/* Featured Module (Glass Card) */}
          <div className="liquid-glass p-5 rounded-3xl max-w-xs flex gap-5 items-center">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white/10 flex items-center justify-center">
              <Cpu className="text-white/40 h-8 w-8" />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black text-white uppercase tracking-wider">NEURAL CORE // ACTIVE</p>
              <p className="text-[9px] text-white/50 leading-tight uppercase">High-performance AI agents for enterprise automation.</p>
              <Button size="sm" variant="outline" className="h-7 text-[8px] px-4 rounded-full border-white/10 text-white uppercase font-bold hover:bg-white/10">
                EXPLORE <ArrowRight className="ml-2 h-2 w-2" />
              </Button>
            </div>
          </div>

          {/* Social Icons (Positioned Bottom Right) */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/sopan-hub" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-white/30 transition-all backdrop-blur-md">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/sopan-patil-24b2a1380" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-white/30 transition-all backdrop-blur-md">
              <Linkedin size={16} />
            </a>
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-white/30 transition-all backdrop-blur-md">
              <Share2 size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
