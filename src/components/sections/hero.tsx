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
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background"></div>
      </div>
      <div className="container z-10 grid grid-cols-1 items-center gap-12 text-center md:grid-cols-2 md:text-left">
        <div className="flex flex-col items-center md:items-start">
            <motion.h1 
              className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl"
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
              A Computer Science student specializing in AI/ML, passionate about building intelligent solutions for real-world challenges.
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
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-0 animate-pulse bg-primary/50 opacity-50 blur-2xl transition-opacity duration-300 group-hover:opacity-75" />
                <span className="relative z-10">View My Work</span>
                <div className="absolute -inset-1 z-0 animate-pulse rounded-full bg-primary/30 blur-xl group-hover:blur-2xl" />
              </Button>
            </motion.div>
        </div>
         <motion.div
          className="relative mx-auto flex h-[250px] w-[250px] items-center justify-center md:h-[300px] md:w-[300px]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 rounded-full bg-red-500/30 blur-2xl animate-pulse"></div>
            <div className="relative h-full w-full overflow-hidden rounded-full p-2 shadow-lg">
              <Image
                src="https://raw.githubusercontent.com/sopan-hub/my-image-assets/main/file_00000000dc0461f9b1a884202d5845c2.png"
                alt="Profile Photo"
                fill
                className="object-cover rounded-full"
                data-ai-hint="profile photo"
              />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
