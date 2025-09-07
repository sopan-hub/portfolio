'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-background"></div>
      <div className="relative z-20 flex w-full items-center justify-center">
          <div className="container grid grid-cols-1 items-center gap-12 text-center md:grid-cols-2 md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <motion.h1
                className="mb-4 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Sopan Patil
              </motion.h1>

              <motion.p
                className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                A Computer Science student specializing in AI/ML, passionate about
                building intelligent solutions for real-world challenges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Button
                  variant="neu"
                  size="lg"
                  className="font-bold"
                  onClick={scrollToProjects}
                >
                  View My Work
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative mx-auto flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="hero-panel">
                <div className="hero-ring">
                  <div className="hero-card-image">
                     <Image
                      src="https://raw.githubusercontent.com/sopan-hub/my-image-assets/c1a37f7dca7fef0d5cad624e94e96e3132132d9e/file_00000000dc0461f9b1a884202d5845c2.png"
                      alt="Sopan Patil"
                      fill
                      className="object-cover"
                      data-ai-hint="profile picture"
                    />
                  </div>
                  <div className="hero-border">
                    <div className="hero-slide">
                      Sopan
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
