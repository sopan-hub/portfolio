
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

const NeuralWires = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-visible">
      <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
        </defs>
        
        {/* Wire to Top Card */}
        <motion.path
          d="M 360 400 C 450 400, 500 200, 700 150"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.circle r="3" fill="white" className="filter blur-[1px]">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 360 400 C 450 400, 500 200, 700 150" />
        </motion.circle>

        {/* Wire to Mid-Top Card */}
        <motion.path
          d="M 360 420 C 500 420, 550 450, 700 480"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.circle r="3" fill="white" className="filter blur-[1px]">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 360 420 C 500 420, 550 450, 700 480" />
        </motion.circle>

        {/* Wire to Lower Card */}
        <motion.path
          d="M 360 440 C 450 440, 500 650, 700 750"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.circle r="3" fill="white" className="filter blur-[1px]">
          <animateMotion dur="6s" repeatCount="indefinite" path="M 360 440 C 450 440, 500 650, 700 750" />
        </motion.circle>

        {/* Neural Core Origin Point */}
        <g className="animate-pulse">
          <circle cx="360" cy="420" r="6" fill="white" className="opacity-40" />
          <circle cx="360" cy="420" r="12" stroke="white" strokeWidth="1" className="opacity-20" />
        </g>
      </svg>
    </div>
  );
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

  const opacity = useTransform(smoothProgress, [0.1, 0.35, 0.65, 0.9], [0, 1, 1, 0]);
  const skillsBg = placeholderImages['skills-specific-bg'];

  return (
    <section ref={sectionRef} id="skills" className="relative py-40 overflow-hidden">
      {/* Skills-specific background layer */}
      <motion.div 
        style={{ opacity }}
        className="fixed inset-0 z-[-1] pointer-events-none"
      >
        <Image
          src={skillsBg.url}
          alt={skillsBg.alt}
          fill
          className="object-cover object-[30%_center]"
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <NeuralWires />

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

        {/* Grid adjusted to push cards away from the subject on the left */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:px-12">
          <div className="hidden lg:block lg:col-span-5" /> {/* Spacer for background person */}
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category) => (
              <GlassSurface
                key={category}
                borderRadius={40}
                className="p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] border-white/10 bg-black/40 backdrop-blur-3xl hover:border-white/20 transition-all duration-500"
              >
                <h3 className="mb-10 text-xl font-black text-white uppercase tracking-[0.4em] border-b border-white/10 pb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {skills[category].map((skill) => {
                    const Icon = iconMap[skill.name];
                    return (
                      <div className="flex items-center gap-4 group" key={skill.name}>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shadow-xl">
                          {Icon && <Icon className="h-6 w-6 text-white/90 group-hover:text-white transition-transform duration-500 group-hover:scale-110" />}
                        </div>
                        <span className="text-[11px] font-bold text-white/70 uppercase tracking-widest group-hover:text-white transition-colors duration-300">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </GlassSurface>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
