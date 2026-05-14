
'use client';
import React, { useRef } from 'react';
import { skills } from '@/lib/data';
import * as Icons from '@/components/icons';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { cn } from '@/lib/utils';

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

const HudCard = ({ category, items, className }: { category: string, items: any[], className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "relative z-20 w-full max-w-[320px] p-6 rounded-xl border border-white/20 bg-black/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)]",
        className
      )}
    >
      <div className="absolute -top-3 left-6 px-3 py-1 bg-white/10 border border-white/20 rounded-md backdrop-blur-md">
        <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">
          {category}
        </h3>
      </div>
      
      <div className="mt-4 space-y-4">
        {items.map((skill) => {
          const Icon = iconMap[skill.name];
          return (
            <div key={skill.name} className="flex items-center justify-between group">
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">
                {skill.name}
              </span>
              <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:bg-white/20 transition-all">
                {Icon && <Icon className="h-4 w-4 text-white/80 group-hover:text-white" />}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* HUD decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 rounded-tl-sm" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 rounded-tr-sm" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 rounded-bl-sm" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 rounded-br-sm" />
    </motion.div>
  );
};

const NeuralWires = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
      <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* TOP WIRE - Frontend */}
        <motion.path
          d="M 600 400 C 600 350, 600 250, 600 180"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.circle r="3" fill="white" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 600 400 C 600 350, 600 250, 600 180" />
        </motion.circle>

        {/* LEFT WIRE - Backend */}
        <motion.path
          d="M 580 400 C 500 400, 350 400, 280 400"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.circle r="3" fill="white" filter="url(#glow)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 580 400 C 500 400, 350 400, 280 400" />
        </motion.circle>

        {/* RIGHT WIRE - AI/ML */}
        <motion.path
          d="M 620 400 C 700 400, 850 400, 920 400"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.circle r="3" fill="white" filter="url(#glow)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 620 400 C 700 400, 850 400, 920 400" />
        </motion.circle>

        {/* BOTTOM WIRE - Tools */}
        <motion.path
          d="M 600 440 C 600 500, 600 600, 600 680"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.circle r="3" fill="white" filter="url(#glow)">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 600 440 C 600 500, 600 600, 600 680" />
        </motion.circle>

        {/* Central Core Nodes */}
        <circle cx="600" cy="400" r="6" fill="white" className="animate-pulse opacity-40" />
        <circle cx="600" cy="400" r="12" stroke="white" strokeWidth="1" className="opacity-20" />
        <circle cx="600" cy="430" r="4" fill="white" className="animate-pulse opacity-40" />
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
    <section ref={sectionRef} id="skills" className="relative min-h-[140vh] py-40 overflow-hidden flex items-center justify-center">
      {/* Skills-specific background layer */}
      <motion.div 
        style={{ opacity }}
        className="fixed inset-0 z-[-1] pointer-events-none"
      >
        <Image
          src={skillsBg.url}
          alt={skillsBg.alt}
          fill
          className="object-cover object-center"
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </motion.div>

      <div className="container mx-auto px-4 relative min-h-[1000px] w-full flex items-center justify-center">
        <NeuralWires />

        {/* HUD Layout Positioning */}
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          
          {/* Frontend - TOP */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <HudCard category="Frontend" items={skills['Frontend']} />
          </div>

          {/* Backend - LEFT */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <HudCard category="Backend" items={skills['Backend']} />
          </div>

          {/* AI / ML - RIGHT */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <HudCard category="AI / ML" items={skills['AI/ML']} />
          </div>

          {/* Tools - BOTTOM */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <HudCard category="Tools" items={skills['Tools']} />
          </div>

          {/* Decorative Section Title (HUD Style) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[200px] opacity-20 pointer-events-none text-center">
            <span className="text-[10px] font-black text-white uppercase tracking-[1em]">SYSTEM_CAPABILITIES</span>
            <div className="h-px w-32 bg-white/20 mx-auto mt-2" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
