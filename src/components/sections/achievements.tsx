'use client';

import React from 'react';
import Image from 'next/image';
import { achievements } from '@/lib/data';
import GlassSurface from '@/components/ui/glass-surface';
import ScrollFloat from '@/components/ui/scroll-float';
import { Award } from 'lucide-react';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-4xl md:text-5xl font-black mb-4"
            textClassName="text-white uppercase tracking-tighter"
          >
            Achievements & Certificates
          </ScrollFloat>
          <div className="h-[1px] w-24 bg-white/20" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((item, index) => (
            <GlassSurface
              key={index}
              borderRadius={32}
              className="p-8 group hover:scale-[1.01] transition-all duration-500 shadow-xl border-white/5"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                <div className="relative w-full lg:w-48 aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-white/40" />
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                      {item.year} Verified
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight leading-none group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
