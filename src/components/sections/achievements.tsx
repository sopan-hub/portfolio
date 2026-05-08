'use client';

import React from 'react';
import Image from 'next/image';
import { achievements } from '@/lib/data';
import { Box, Lock, Search, Settings, Sparkles } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import ScrollFloat from '@/components/ui/scroll-float';

const iconMap = [
  <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
  <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
  <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
  <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
  <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
];

const gridAreas = [
  "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
];

const AchievementsSection = () => {
  const allItems = [
    ...achievements,
    {
      title: "Technical Excellence Continuous Learning",
      year: "2025",
      description: "Constantly expanding neural network architectures and agentic workflow simulations through rigorous self-directed research.",
      image: "https://raw.githubusercontent.com/sopan-hub/my-acces/2e999047f27399c5aae0caece6ab26e7441a0d37/certificate.png"
    }
  ];

  return (
    <section id="achievements" className="py-32 relative bg-black">
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
              Technical Validations & Simulations
            </p>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {allItems.map((item, index) => (
            <GridItem
              key={index}
              area={gridAreas[index % gridAreas.length]}
              icon={iconMap[index % iconMap.length]}
              title={item.title}
              description={
                <span>
                  <b>{item.year}</b> — {item.description}
                </span>
              }
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
  image?: string;
}

const GridItem = ({ area, icon, title, description, image }: GridItemProps) => {
  return (
    <li className={`min-h-[16rem] list-none group ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-[#050505] overflow-hidden">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#1a1a1a] z-10 bg-black/40 backdrop-blur-[2px]">
          
          <div className="relative flex flex-1 flex-col justify-between gap-3 z-20">
            <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-md">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-bold text-balance text-white md:text-2xl/[1.875rem] uppercase drop-shadow-md">
                {title}
              </h3>
              <div className="font-sans text-sm/[1.125rem] text-neutral-300 md:text-base/[1.375rem] leading-relaxed drop-shadow-sm">
                {description}
              </div>
            </div>
          </div>

          {image && (
            <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-80 transition-all duration-700 pointer-events-none">
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-cover transition-all duration-700 scale-100 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 group-hover:via-black/30 transition-all duration-700" />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AchievementsSection;
