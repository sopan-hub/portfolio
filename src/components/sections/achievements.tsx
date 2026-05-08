'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Lock, Search, Settings, Sparkles, Terminal as TerminalIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const gridItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Box className="h-4 w-4 text-white/70" />,
    title: "Software Engineering",
    description: "Simulation covering project scoping and REST API development via Forage.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate.png"
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-white/70" />,
    title: "GenAI Analytics",
    description: "Mastered exploratory data analysis and risk profiling through Forage simulation.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate3.png"
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Lock className="h-4 w-4 text-white/70" />,
    title: "BCG X Strategy",
    description: "Developed financial chatbots and data extraction strategies with BCG X.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate4.png"
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Sparkles className="h-4 w-4 text-white/70" />,
    title: "Deloitte Analytics",
    description: "Practical insights into forensic technology and data-driven forensic analytics.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate5.png"
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Search className="h-4 w-4 text-white/70" />,
    title: "Neural Research",
    description: "Autonomous multi-agent workflows and neural network optimizations.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate.png"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter glow-white mb-2">
            Technical Archive
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-white/20" />
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">
              Verified Technical Credentials
            </p>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
        </div>

        {/* macOS Terminal Container - Completely Black Body */}
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 ring-1 ring-white/5">
          {/* macOS Header Bar */}
          <div className="flex items-center px-4 py-3 bg-[#1e1e1e] border-b border-white/5 relative">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex items-center gap-2 text-white/40 font-mono text-[10px] font-bold uppercase">
                <TerminalIcon size={12} className="opacity-50" />
                <span className="tracking-widest">zsh — credentials</span>
              </div>
            </div>
          </div>

          {/* Terminal Content Area - Pure Black */}
          <div className="p-4 md:p-8 bg-black">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-2">
              {gridItems.map((item, index) => (
                <GridItem
                  key={index}
                  area={item.area}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const GridItem = ({ area, icon, title, description, image }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none group ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-1 bg-[#050505] transition-all duration-500 hover:scale-[1.01] overflow-hidden">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-5 z-10">
          <div className="relative flex flex-1 flex-col justify-between gap-3 z-20">
            <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2">
              {icon}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                {title}
              </h3>
              <p className="text-[11px] text-white/60 leading-relaxed font-mono">
                {description}
              </p>
            </div>
          </div>
          
          {/* Certificate Image - HD Visibility, No Fade */}
          <div className="relative h-36 w-full mt-2 rounded-lg overflow-hidden border border-white/20 z-20 shadow-2xl group-hover:border-white/40 transition-colors">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
              unoptimized
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default AchievementsSection;