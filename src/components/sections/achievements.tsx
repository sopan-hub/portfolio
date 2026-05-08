'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Lock, Search, Settings, Sparkles, Terminal as TerminalIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

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
    <section id="achievements" className="relative py-20">
      <MacbookScroll
        title={
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter glow-white">
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
        }
      >
        <div className="relative h-full flex flex-col">
          {/* Internal MacBook Terminal Header */}
          <div className="sticky top-0 z-50 flex items-center px-4 py-2 bg-[#1e1e1e] border-b border-white/5">
            <div className="flex gap-1.5 items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 text-white/30 font-mono text-[9px] font-bold">
                <TerminalIcon size={10} />
                <span>credentials — archive</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-black/40">
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-2">
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
      </MacbookScroll>
    </section>
  );
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  image: string;
}

const GridItem = ({ area, icon, title, description, image }: GridItemProps) => {
  return (
    <li className={`min-h-[12rem] list-none group ${area}`}>
      <div className="relative h-full rounded-xl border border-white/10 p-1 md:p-1.5 bg-black/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:scale-[1.01]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-lg p-4 z-10">
          <div className="relative flex flex-1 flex-col justify-between gap-2 z-20">
            <div className="w-fit rounded-md border border-white/20 bg-white/5 p-1.5">
              {icon}
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-tight">
                {title}
              </h3>
              <p className="text-[10px] text-neutral-400 leading-relaxed font-mono">
                {description}
              </p>
            </div>
          </div>
          
          <div className="relative h-20 w-full mt-2 rounded-md overflow-hidden border border-white/10 z-20 shadow-xl group-hover:border-white/30 transition-colors">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default AchievementsSection;
