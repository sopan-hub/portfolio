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

  // Hero image disappears extremely fast to switch to the technical background
  const heroOpacity = useTransform(smoothProgress, [0.01, 0.04], [1, 0]);
  
  // Content background image appears just as fast to replace it
  const contentOpacity = useTransform(smoothProgress, [0.01, 0.04], [0, 1]);

  // Subtle zoom effect for the background to maintain depth
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* High Quality Content Background (Tech texture) */}
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
      </motion.div>
    </div>
  );
}
