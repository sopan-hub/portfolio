
'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';

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

  // Smooth cross-fade transition consistent with other sections
  const opacity = useTransform(smoothProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const skillsBg = placeholderImages['skills-specific-bg'];

  return (
    <section ref={sectionRef} id="skills" className="relative min-h-screen py-32 overflow-hidden flex items-center justify-center bg-transparent">
      {/* High-Fidelity Fixed Background Layer */}
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
          priority
          unoptimized
        />
        {/* Subtle overlay to ensure smooth blending with the global black background */}
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Content area reset as requested */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center">
        {/* Section is currently empty as requested to focus on the new background transition */}
      </div>
    </section>
  );
};

export default SkillsSection;
