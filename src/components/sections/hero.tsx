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
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-background" />
      <div className="container z-10 grid grid-cols-1 items-center gap-12 text-center md:grid-cols-2 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <motion.h1
            className="mb-4 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sopan Patil
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A Computer Science student specializing in AI/ML, passionate about
            building intelligent solutions for real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full font-bold transition-all duration-300 hover:scale-105"
              onClick={scrollToProjects}
            >
              <span className="relative z-10">View My Work</span>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="relative mx-auto flex h-[300px] w-[90%] max-w-lg items-center justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute -inset-2 rounded-xl bg-primary/70 blur-3xl dark:bg-primary/30"></div>
          <div className="glass-card relative h-full w-full overflow-hidden rounded-xl p-0 shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              src="https://raw.githubusercontent.com/sopan-hub/my-image-assets/main/vbg.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
