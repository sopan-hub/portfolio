'use client';

import React from 'react';
import Image from 'next/image';
import { achievements } from '@/lib/data';
import { Code2, Database, Sparkles, BarChart3, Award } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import ScrollFloat from '@/components/ui/scroll-float';

const iconMap = [
  <Code2 className="h-4 w-4 text-neutral-400" />,
  <Database className="h-4 w-4 text-neutral-400" />,
  <Award className="h-4 w-4 text-neutral-400" />,
  <Sparkles className="h-4 w-4 text-neutral-400" />,
  <BarChart3 className="h-4 w-4 text-neutral-400" />,
];

const gridAreas = [
  "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
];

const AchievementsSection = () => {
  // We have 4 items in data.ts, let's create a 5th placeholder to match the layout
  const allItems = [
    ...achievements,
    {
      title: "Technical Excellence Continuous Learning",
      year: "2025",
      description: "Constantly expanding neural network architectures and agentic workflow simulations through rigorous self-directed research.",
      image: "https://picsum.photos/seed/cert/600/400"
    }
  ];

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
              Technical Validations & Simulations
            </p>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2">
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
    <li className={`min-h-[14rem] list-none group ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-[#050505] overflow-hidden">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl shadow-[0px_0px_27px_0px_#1a1a1a]">
          
          <div className="relative flex flex-1 flex-col justify-between gap-3 p-6 z-10">
            <div className="space-y-4">
              <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2">
                {icon}
              </div>
              <h3 className="tracking-tight pt-0.5 font-bold text-xl/[1.375rem] text-balance text-white md:text-2xl/[1.875rem] uppercase">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-neutral-400 md:text-base/[1.375rem] leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {image && (
            <div className="relative w-full h-32 md:h-40 mt-auto opacity-40 group-hover:opacity-80 transition-opacity duration-500 overflow-hidden">
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AchievementsSection;