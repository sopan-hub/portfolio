
'use client';
import React, { useRef } from 'react';
import { skills } from '@/lib/data';
import * as Icons from '@/components/icons';
import ScrollFloat from '@/components/ui/scroll-float';
import GlassSurface from '@/components/ui/glass-surface';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';

const skillCategories: (keyof typeof skills)[] = [
  'Frontend',
  'Backend',
  'AI/ML',
  'Tools',
];

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  React: Icons.ReactJs,
  'Next.js': Icons.NextJs,
  'Tailwind CSS': Icons.TailwindCss,
  TypeScript: Icons.Typescript,
  'Node.js': Icons.NodeJs,
  Firebase: Icons.Firebase,
  Python: Icons.Python,
  Express: Icons.Express,
  Genkit: Icons.Genkit,
  TensorFlow: Icons.Tensorflow,
  PyTorch: Icons.Pytorch,
  'Scikit-learn': Icons.ScikitLearn,
  Git: Icons.Git,
  Docker: Icons.Docker,
  Figma: Icons.Figma,
  Webpack: Icons.Webpack,
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth cross-fade transition: Matches the HeroSection pattern but relative to its scroll position
  // Fades in as it enters viewport and fades out as it leaves
  const opacity = useTransform(smoothProgress, [0.1, 0.35, 0.65, 0.9], [0, 1, 1, 0]);
  const skillsBg = placeholderImages['skills-specific-bg'];

  return (
    <section ref={sectionRef} id="skills" className="relative py-40 overflow-hidden">
      {/* Skills-specific background layer - Using fixed positioning for seamless depth */}
      <motion.div 
        style={{ opacity }}
        className="fixed inset-0 z-[-1] pointer-events-none"
      >
        <Image
          src={skillsBg.url}
          alt={skillsBg.alt}
          fill
          className="object-cover"
          quality={100}
          unoptimized
        />
        {/* Subtle radial mask to keep focus on the center and blend edges */}
        <div className="absolute inset-0 bg-black/10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-24 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-5xl font-black tracking-tighter sm:text-7xl mb-6"
            textClassName="text-white uppercase glow-white"
          >
            My Skills
          </ScrollFloat>
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-16 bg-white/20" />
            <p className="text-[12px] font-black text-white/50 uppercase tracking-[0.7em]">
              Tech Stack & Neural Tools
            </p>
            <div className="h-[1px] w-16 bg-white/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:px-12">
          {skillCategories.map((category) => (
            <GlassSurface
              key={category}
              borderRadius={40}
              className="p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] border-white/10 bg-black/30"
            >
              <h3 className="mb-12 text-2xl font-black text-white uppercase tracking-[0.4em] border-b border-white/10 pb-8">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
                {skills[category].map((skill) => {
                  const Icon = iconMap[skill.name];
                  return (
                    <div className="flex items-center gap-5 group" key={skill.name}>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shadow-xl">
                        {Icon && <Icon className="h-7 w-7 text-white/90 group-hover:text-white transition-transform duration-500 group-hover:scale-110" />}
                      </div>
                      <span className="text-[13px] font-bold text-white/70 uppercase tracking-widest group-hover:text-white transition-colors duration-300">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
