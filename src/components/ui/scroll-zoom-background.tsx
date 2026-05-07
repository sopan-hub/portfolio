'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

interface ScrollZoomBackgroundProps {
  src: string;
  alt: string;
}

export default function ScrollZoomBackground({ src, alt }: ScrollZoomBackgroundProps) {
  const { scrollYProgress } = useScroll();
  
  // Create a smoother spring for the zoom to make it feel more organic
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fast zoom:
  // [0, 0.1]: Hero section - stay at scale 1 (static)
  // [0.1, 0.4]: Zoom rapidly from 1 to 4 (Fast transition below hero)
  // [0.4, 1.0]: Maintain high zoom for the rest of the content
  const scale = useTransform(smoothProgress, [0, 0.1, 0.4, 1], [1, 1, 4, 4.5]);
  
  // Subtle opacity shift to enhance readability as we zoom into the high-detail core
  const overlayOpacity = useTransform(smoothProgress, [0, 0.15, 0.5], [0.3, 0.4, 0.5]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <motion.div
        style={{ 
          scale,
          transformOrigin: '50% 42%' // Targeting the goggle/eyes area which is slightly above center
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
        {/* Dynamic overlay that darkens slightly as you zoom in to keep text legible */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black pointer-events-none" 
        />
      </motion.div>
    </div>
  );
}
