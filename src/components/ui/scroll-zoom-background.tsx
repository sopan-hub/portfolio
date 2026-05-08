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

  // Hero image disappears more gradually as we scroll. 
  // Adjusted range from [0, 0.15] to [0, 0.5] for a slower fade.
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* High Quality Content Background (Tech texture) - Base layer for everything below hero */}
      <div className="absolute inset-0">
        <Image
          src={contentSrc}
          alt="Tech Background"
          fill
          className="object-cover"
          quality={100}
          unoptimized
        />
      </div>

      {/* Hero Background (Portrait) - Fades out to reveal the tech texture */}
      <motion.div
        style={{ 
          opacity: heroOpacity,
        }}
        className="absolute inset-0 overflow-hidden"
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
