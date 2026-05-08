'use client';

import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-between relative z-10 py-12 min-h-[80vh]">
        
        {/* Top Header Row (HUD style) */}
        <div className="flex justify-end items-start w-full mb-8">
          <div className="flex items-center gap-4 text-white/80">
            <span className="text-[15px] font-bold tracking-[0.4em] uppercase">SYSTEM_ID // SP.2026</span>
            <div className="h-[1px] w-12 bg-white/60" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">CORE_ACTIVE</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
          
          {/* Left Side: Branding, Description & Buttons */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[76px] font-black text-white tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
                SOPAN PATIL
              </h1>
              <p className="max-w-md text-white text-[12px] md:text-[14px] leading-relaxed uppercase tracking-wider font-bold">
                Full-Stack AI Developer. Engineered with Agentic AI and high-res MERN stacks for those who don't just watch the future—they architect it. Expert in autonomous workflows and neural RAG pipelines.
              </p>
            </div>

            {/* Social Icons (Capsule Buttons) - Now below description */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/sopan-hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/60 bg-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all backdrop-blur-md"
              >
                <Github size={16} /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sopan-patil-24b2a1380" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/60 bg-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all backdrop-blur-md"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 hidden lg:block" /> {/* Face Clearance Spacer */}

          {/* Right Side: Technical Specs List */}
          <div className="lg:col-span-5 flex flex-col items-end">
            <div className="w-full max-w-xs space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-white tracking-[0.3em] uppercase opacity-100">TECHNICAL SPECS</p>
                <div className="h-[1px] w-full bg-white/60" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/80 uppercase tracking-widest">INTELLIGENCE </span>
                  <span className="text-[15px] font-bold text-white uppercase tracking-tight text-right">Agentic • GenAI • AI/ML</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/80 uppercase tracking-widest">NEURAL </span>
                  <span className="text-[15px] font-bold text-white uppercase tracking-tight text-right"> Multi-Agent RAG • Custom LLMs</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/80 uppercase tracking-widest">WEB_STACK </span>
                  <span className="text-[15px] font-bold text-white uppercase tracking-tight text-right">Next.js 15 • Scalable MERN</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/80 uppercase tracking-widest">INFRA </span>
                  <span className="text-[15px] font-bold text-white uppercase tracking-tight text-right"> Serverless • Firebase • Cloud</span>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <span className="text-[15px] font-bold text-white/80 uppercase tracking-widest">BUILD </span>
                  <span className="text-[15px] font-bold text-white uppercase tracking-tight text-right">Autonomous Architectures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}