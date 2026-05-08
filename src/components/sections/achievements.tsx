
'use client';

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import ScrollFloat from '@/components/ui/scroll-float';

const GlowingCard = ({ achievement }: { achievement: typeof achievements[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] p-1 transition-all"
    >
      {/* Interactive Radial Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Border Glow (Simulated) */}
      <div className="absolute inset-px rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative h-full overflow-hidden rounded-[2.4rem] bg-[#000000] p-8 flex flex-col z-10">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 border border-white/5">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="flex flex-col flex-grow space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">
              VERIFIED_RECORD
            </span>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold text-white uppercase tracking-tighter">
                {achievement.year}
              </span>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-white uppercase tracking-tighter leading-[1.1] group-hover:text-white/90 transition-colors">
            {achievement.title}
          </h4>
          
          <p className="text-[13px] text-white/40 leading-relaxed font-medium line-clamp-4">
            {achievement.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">SIMULATION_COMPLETE</span>
          <div className="h-1 w-1 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
        </div>
      </div>
    </div>
  );
};

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
              Technical Validations & Simulations
            </p>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <GlowingCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
