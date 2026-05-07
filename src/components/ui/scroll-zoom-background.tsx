'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

interface ScrollZoomBackgroundProps {
  heroSrc: string;
  contentSrc: string;
}

export default function ScrollZoomBackground({ heroSrc, contentSrc }: ScrollZoomBackgroundProps) {
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero image fades out as you scroll past the top
  const heroOpacity = useTransform(smoothProgress, [0.1, 0.25], [1, 0]);
  
  // Content background image fades in as you reach the first content section
  const contentOpacity = useTransform(smoothProgress, [0.1, 0.25], [0, 1]);

  // Subtle zoom effect for the background to maintain depth
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* High Quality Content Background (for everything below hero) */}
      <motion.div
        style={{ 
          opacity: contentOpacity,
          scale
        }}
        className="absolute inset-0"
      >
        <Image
          src={contentSrc}
          alt="Tech Background"
          fill
          className="object-cover"
          quality={100}
          unoptimized
        />
        {/* Dark overlay for better text contrast in content sections */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </motion.div>

      {/* Hero Background (Portrait) */}
      <motion.div
        style={{ 
          opacity: heroOpacity
        }}
        className="absolute inset-0"
      >
        <Image
          src={heroSrc}
          alt="Sopan Patil Hero"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
        {/* Subtle hero-only overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </motion.div>
    </div>
  );
}
