'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ScrollZoomBackgroundProps {
  src: string;
  alt: string;
}

export default function ScrollZoomBackground({ src, alt }: ScrollZoomBackgroundProps) {
  const { scrollYProgress } = useScroll();
  
  // Map scroll progress (0 to 1) to scale (1 to 1.5)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  // Optional: slightly dim the image as you zoom in to focus on content
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.3]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <motion.div
        style={{ scale }}
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
        {/* Subtle overlay to maintain text readability */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-black pointer-events-none" 
        />
      </motion.div>
    </div>
  );
}
