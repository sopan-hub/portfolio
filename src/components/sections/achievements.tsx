'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Lock, Search, Settings, Sparkles, Terminal as TerminalIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const gridItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Box className="h-4 w-4 text-white" />,
    title: "Software Engineering",
    description: "Simulation covering project scoping and REST API development via Forage.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate.png"
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-white" />,
    title: "GenAI Analytics",
    description: "Mastered exploratory data analysis and risk profiling through Forage simulation.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate3.png"
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Lock className="h-4 w-4 text-white" />,
    title: "BCG X Strategy",
    description: "Developed financial chatbots and data extraction strategies with BCG X.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate4.png"
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Sparkles className="h-4 w-4 text-white" />,
    title: "Deloitte Analytics",
    description: "Practical insights into forensic technology and data-driven forensic analytics.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate5.png"
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Search className="h-4 w-4 text-white" />,
    title: "Neural Research",
    description: "Autonomous multi-agent workflows and neural network optimizations.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate.png"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-end">
        {/* Header - Aligned Left */}
        <div className="mb-20 self-start flex flex-col items-start px-2 lg:px-12">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter glow-white mb-4">
            Technical Archive
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.6em]">
              Verified Technical Credentials
            </p>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
        </div>

        {/* Ultra-Wide Terminal Window - Shifted Right and Down */}
        <div className="w-full max-w-[1700px] ml-auto rounded-xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] border border-white/10 ring-1 ring-white/5 transition-all duration-700 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,1)]">
          {/* macOS Header Bar */}
          <div className="flex items-center px-6 py-5 bg-[#1e1e1e] border-b border-white/5 relative">
            <div className="flex gap-2.5 items-center">
              <div className="w-4 h-4 rounded-full bg-[#FF5F56] border border-black/10" />
              <div className="w-4 h-4 rounded-full bg-[#FFBD2E] border border-black/10" />
              <div className="w-4 h-4 rounded-full bg-[#27C93F] border border-black/10" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex items-center gap-2 text-white/30 font-mono text-[12px] font-bold uppercase">
                <TerminalIcon size={14} className="opacity-40" />
                <span className="tracking-[0.3em]">zsh — credential_manager</span>
              </div>
            </div>
          </div>

          {/* Terminal Content Area - Pure Black */}
          <div className="p-8 md:p-14 bg-black">
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-2">
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
    <li className={`min-h-[28rem] list-none group ${area}`}>
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        <div className="relative z-20 flex flex-col h-full pointer-events-none">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-fit rounded-xl border border-white/20 bg-black/40 p-3 shadow-xl">
              {icon}
            </div>
            <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
              {title}
            </h3>
          </div>
          
          <p className="text-sm md:text-base text-white/60 font-medium max-w-sm leading-relaxed drop-shadow-md">
            {description}
          </p>

          <div className="relative flex-grow mt-12 w-full">
            <Image
              src={image}
              alt={title}
              width={1000}
              height={1000}
              className="object-cover object-top h-[75%] md:h-[90%] absolute -bottom-16 inset-x-0 w-full rounded-xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-700 group-hover:scale-[1.03]"
              unoptimized
            />
          </div>
        </div>

        <GlowingEffect
          spread={80}
          glow={true}
          disabled={false}
          proximity={100}
          inactiveZone={0.01}
          className="z-30"
        />
      </div>
    </li>
  );
};

export default AchievementsSection;
