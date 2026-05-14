'use client';
import React from 'react';
import { skills } from '@/lib/data';
import GlassSurface from '@/components/ui/glass-surface';
import ScrollFloat from '@/components/ui/scroll-float';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-4xl md:text-5xl font-black mb-4"
            textClassName="text-white uppercase tracking-tighter"
          >
            My Skills
          </ScrollFloat>
          <div className="h-[1px] w-24 bg-white/20" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <GlassSurface
              key={category}
              borderRadius={24}
              className="p-8 group hover:border-white/20 transition-all"
            >
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-6 glow-white">
                {category}
              </h3>
              <ul className="space-y-4">
                {items.map((skill) => (
                  <li key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-white/80 uppercase">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-white/40">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
