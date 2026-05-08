
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

  // Hero image transforms into the navbar icon
  // It shrinks, moves, and rounds its corners as we scroll
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.02]);
  const heroY = useTransform(smoothProgress, [0, 0.2], ["0%", "-46%"]);
  const heroX = useTransform(smoothProgress, [0, 0.2], ["0%", "-10%"]); // Slight offset to align with left-of-pill
  const heroRadius = useTransform(smoothProgress, [0, 0.15], ["0rem", "50rem"]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* High Quality Content Background (Tech texture) - Always visible base layer */}
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

      {/* Hero Background (Portrait) - Animates into the navbar position */}
      <motion.div
        style={{ 
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
          x: heroX,
          borderRadius: heroRadius
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
