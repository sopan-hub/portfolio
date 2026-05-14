
'use client';
import React, { useRef } from 'react';
import { skills } from '@/lib/data';
import * as Icons from '@/components/icons';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { cn } from '@/lib/utils';
import { Code2, Database, Brain, Settings2 } from 'lucide-react';

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

const categoryIconMap: { [key: string]: React.ReactNode } = {
  'Frontend': <Code2 className="w-8 h-8" />,
  'Backend': <Database className="w-8 h-8" />,
  'AI / ML': <Brain className="w-8 h-8" />,
  'Tools': <Settings2 className="w-8 h-8" />,
};

const HudCard = ({ category, items, glowColor, className }: { category: string, items: any[], glowColor: string, className?: string }) => {
  const CategoryIcon = categoryIconMap[category];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "relative z-20 w-[300px] p-8 rounded-[2rem] border-2 bg-black/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-105",
        className
      )}
      style={{ 
        borderColor: glowColor,
        boxShadow: `0 0 30px ${glowColor}44, inset 0 0 20px ${glowColor}22`
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
        <div style={{ color: glowColor }}>
          {CategoryIcon}
        </div>
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
          {category}
        </h3>
      </div>
      
      {/* Items */}
      <div className="space-y-6">
        {items.map((skill) => {
          const Icon = iconMap[skill.name];
          return (
            <div key={skill.name} className="flex items-center gap-4 group">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 transition-all group-hover:bg-white/10">
                {Icon && <Icon className="h-6 w-6 text-white" />}
              </div>
              <span className="text-sm font-black text-white/80 uppercase tracking-widest group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const NeuralWires = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* LEFT SIDE WIRES (Red/Pink) */}
        {/* Top Left - Frontend */}
        <motion.path
          d="M 600 550 L 520 550 L 520 250 L 400 250"
          stroke="#ff2d55"
          strokeWidth="3"
          filter="url(#glow-red)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
        <circle r="4" fill="#ff2d55">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 600 550 L 520 550 L 520 250 L 400 250" />
        </circle>

        {/* Bottom Left - AI / ML */}
        <motion.path
          d="M 600 570 L 540 570 L 540 700 L 400 700"
          stroke="#ff2d55"
          strokeWidth="3"
          filter="url(#glow-red)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
        <circle r="4" fill="#ff2d55">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 600 570 L 540 570 L 540 700 L 400 700" />
        </circle>

        {/* RIGHT SIDE WIRES (Orange/Yellow) */}
        {/* Top Right - Backend */}
        <motion.path
          d="M 600 550 L 680 550 L 680 250 L 800 250"
          stroke="#ffb347"
          strokeWidth="3"
          filter="url(#glow-orange)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
        <circle r="4" fill="#ffb347">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 600 550 L 680 550 L 680 250 L 800 250" />
        </circle>

        {/* Bottom Right - Tools */}
        <motion.path
          d="M 600 570 L 660 570 L 660 700 L 800 700"
          stroke="#ffb347"
          strokeWidth="3"
          filter="url(#glow-orange)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
        <circle r="4" fill="#ffb347">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M 600 570 L 660 570 L 660 700 L 800 700" />
        </circle>

        {/* Central Core Point */}
        <circle cx="600" cy="560" r="8" fill="#fff" className="animate-pulse" filter="url(#glow-red)" />
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

  const opacity = useTransform(smoothProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const skillsBg = placeholderImages['skills-specific-bg'];

  return (
    <section ref={sectionRef} id="skills" className="relative min-h-screen py-32 overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image Layer */}
      <motion.div 
        style={{ opacity }}
        className="fixed inset-0 z-[-1] pointer-events-none"
      >
        <Image
          src={skillsBg.url}
          alt={skillsBg.alt}
          fill
          className="object-cover object-top"
          style={{ objectPosition: 'center 20%' }}
          quality={100}
          unoptimized
        />
        {/* Dynamic Vignette / Gradient Overlays to match screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-transparent to-orange-900/40" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="container mx-auto px-4 relative h-[900px] w-full flex items-center justify-center">
        <NeuralWires />

        {/* HUD Layout Positioning */}
        <div className="relative w-full max-w-7xl h-full">
          
          {/* Top Left: Frontend */}
          <div className="absolute top-0 left-0 lg:left-20">
            <HudCard 
              category="Frontend" 
              items={skills['Frontend']} 
              glowColor="#ff2d55"
            />
          </div>

          {/* Top Right: Backend */}
          <div className="absolute top-0 right-0 lg:right-20">
            <HudCard 
              category="Backend" 
              items={skills['Backend']} 
              glowColor="#ffb347"
            />
          </div>

          {/* Bottom Left: AI / ML */}
          <div className="absolute bottom-0 left-0 lg:left-20">
            <HudCard 
              category="AI / ML" 
              items={skills['AI/ML']} 
              glowColor="#ff2d55"
            />
          </div>

          {/* Bottom Right: Tools */}
          <div className="absolute bottom-0 right-0 lg:right-20">
            <HudCard 
              category="Tools" 
              items={skills['Tools']} 
              glowColor="#ffb347"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
