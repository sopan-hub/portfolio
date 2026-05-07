
'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

interface ScrollZoomBackgroundProps {
  src: string;
  alt: string;
}

export default function ScrollZoomBackground({ src, alt }: ScrollZoomBackgroundProps) {
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fast zoom into the focal point (goggles)
  // [0, 0.1]: Hero section - stay at scale 1
  // [0.1, 0.5]: Rapid zoom
  const scale = useTransform(smoothProgress, [0, 0.1, 0.5, 1], [1, 1, 3.5, 4]);
  
  // Overlay darkens as we dive in
  const overlayOpacity = useTransform(smoothProgress, [0, 0.2, 0.6], [0.2, 0.4, 0.6]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <motion.div
        style={{ 
          scale,
          transformOrigin: '55% 42%' // Adjusted to center the goggle area better
        }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black pointer-events-none transition-colors" 
        />
      </motion.div>
    </div>
  );
}
