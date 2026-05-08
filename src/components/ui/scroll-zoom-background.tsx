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

  // Hero image disappears very quickly (by 10% scroll)
  const heroOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  // Content background (tech texture) gets darker and blurrier as you scroll to the project sections
  // We start the effect after the hero has faded out.
  const backgroundBlur = useTransform(smoothProgress, [0.1, 0.3], [0, 12]);
  const backgroundBrightness = useTransform(smoothProgress, [0.1, 0.3], [1, 0.4]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* High Quality Content Background (Tech texture) */}
      <motion.div 
        style={{ 
          filter: useTransform(
            [backgroundBlur, backgroundBrightness],
            ([blur, brightness]) => `blur(${blur}px) brightness(${brightness})`
          )
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

      {/* Hero Background (Portrait) - Fades out very early */}
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
