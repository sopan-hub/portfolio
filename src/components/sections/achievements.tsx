'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ScrollFloat from '@/components/ui/scroll-float';

const gridItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Box className="h-4 w-4 text-neutral-400" />,
    title: "Software Engineering Simulation",
    description: "Completed Software Engineering simulation with Forage, covering project scoping and REST API development.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate.png"
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-neutral-400" />,
    title: "GenAI Powered Data Analytics",
    description: "Mastered exploratory data analysis and risk profiling using GenAI tools through Forage.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate3.png"
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Lock className="h-4 w-4 text-neutral-400" />,
    title: "BCG X GenAI Strategy",
    description: "Developed AI-powered financial chatbots and focused on data extraction strategies with BCG X.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate4.png"
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Sparkles className="h-4 w-4 text-neutral-400" />,
    title: "Deloitte Data Analytics",
    description: "Gained practical insights into forensic technology and data-driven forensic analytics.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate5.png"
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Search className="h-4 w-4 text-neutral-400" />,
    title: "Neural Architecture Design",
    description: "Continuing research into autonomous multi-agent workflows and neural network optimizations.",
    image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate.png"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-4xl md:text-5xl font-black tracking-tighter mb-6"
            textClassName="text-white uppercase glow-white"
          >
            Certificates
          </ScrollFloat>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-white/20" />
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">
              Verified Technical Credentials
            </p>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
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
    <li className={`min-h-[16rem] list-none group ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-[1.01]">
        <GlowingEffect
          spread={60}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 z-10">
          <div className="relative flex flex-1 flex-col justify-between gap-3 z-20">
            <div className="w-fit rounded-lg border border-white/20 bg-white/10 p-2">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-bold text-balance text-white md:text-2xl/[1.875rem] uppercase">
                {title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed max-w-xs">
                {description}
              </p>
            </div>
          </div>
          
          <div className="relative h-32 w-full mt-4 rounded-lg overflow-hidden border border-white/5 z-20 shadow-2xl">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default AchievementsSection;