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
  'Frontend': <Code2 className="w-5 h-5" />,
  'Backend': <Database className="w-5 h-5" />,
  'AI / ML': <Brain className="w-5 h-5" />,
  'Tools': <Settings2 className="w-5 h-5" />,
};

const HudCard = ({ category, items, glowColor, className }: { category: string, items: any[], glowColor: string, className?: string }) => {
  const CategoryIcon = categoryIconMap[category];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "relative z-20 w-[220px] p-5 rounded-[1.5rem] border bg-black/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-105",
        className
      )}
      style={{ 
        borderColor: glowColor,
        boxShadow: `0 0 20px ${glowColor}33, inset 0 0 15px ${glowColor}11`
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
        <div style={{ color: glowColor }}>
          {CategoryIcon}
        </div>
        <h3 className="text-sm font-black text-white uppercase tracking-tighter">
          {category}
        </h3>
      </div>
      
      {/* Items */}
      <div className="space-y-3">
        {items.map((skill) => {
          const Icon = iconMap[skill.name];
          return (
            <div key={skill.name} className="flex items-center gap-3 group">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 transition-all group-hover:bg-white/10">
                {Icon && <Icon className="h-4 w-4 text-white" />}
              </div>
              <span className="text-[10px] font-black text-white/80 uppercase tracking-widest group-hover:text-white transition-colors">
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
        <motion.path
          d="M 600 450 L 520 450 L 520 200 L 400 200"
          stroke="#ff2d55"
          strokeWidth="2"
          filter="url(#glow-red)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
        <circle r="3" fill="#ff2d55">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 600 450 L 520 450 L 520 200 L 400 200" />
        </circle>

        <motion.path
          d="M 600 470 L 540 470 L 540 600 L 400 600"
          stroke="#ff2d55"
          strokeWidth="2"
          filter="url(#glow-red)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
        <circle r="3" fill="#ff2d55">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 600 470 L 540 470 L 540 600 L 400 600" />
        </circle>

        {/* RIGHT SIDE WIRES (Orange/Yellow) */}
        <motion.path
          d="M 600 450 L 680 450 L 680 200 L 800 200"
          stroke="#ffb347"
          strokeWidth="2"
          filter="url(#glow-orange)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
        <circle r="3" fill="#ffb347">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 600 450 L 680 450 L 680 200 L 800 200" />
        </circle>

        <motion.path
          d="M 600 470 L 660 470 L 660 600 L 800 600"
          stroke="#ffb347"
          strokeWidth="2"
          filter="url(#glow-orange)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
        <circle r="3" fill="#ffb347">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M 600 470 L 660 470 L 660 600 L 800 600" />
        </circle>

        {/* Central Core Point */}
        <circle cx="600" cy="460" r="6" fill="#fff" className="animate-pulse" filter="url(#glow-red)" />
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
          className="object-cover"
          style={{ objectPosition: '30% center' }}
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-orange-900/20" />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <div className="container mx-auto px-4 relative h-[700px] w-full flex items-center justify-center">
        <NeuralWires />

        {/* HUD Layout Positioning */}
        <div className="relative w-full max-w-7xl h-full">
          
          {/* Top Left: Frontend */}
          <div className="absolute top-[10%] left-[5%] lg:left-[15%]">
            <HudCard 
              category="Frontend" 
              items={skills['Frontend']} 
              glowColor="#ff2d55"
            />
          </div>

          {/* Top Right: Backend */}
          <div className="absolute top-[10%] right-[5%] lg:right-[15%]">
            <HudCard 
              category="Backend" 
              items={skills['Backend']} 
              glowColor="#ffb347"
            />
          </div>

          {/* Bottom Left: AI / ML */}
          <div className="absolute bottom-[10%] left-[5%] lg:left-[15%]">
            <HudCard 
              category="AI / ML" 
              items={skills['AI/ML']} 
              glowColor="#ff2d55"
            />
          </div>

          {/* Bottom Right: Tools */}
          <div className="absolute bottom-[10%] right-[5%] lg:right-[15%]">
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
