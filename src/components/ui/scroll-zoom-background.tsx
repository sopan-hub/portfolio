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

  // Hero image fades out extremely fast to switch to the technical background
  // We use a range that ensures it clears out before the next section arrives
  const heroOpacity = useTransform(smoothProgress, [0.01, 0.05], [1, 0]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* High Quality Content Background (Tech texture) - Always visible base layer to prevent dimming */}
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

      {/* Hero Background (Portrait) - Fades out to reveal the base layer */}
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
