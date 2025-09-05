'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Typewriter from '@/components/typewriter';

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
         <div className="absolute inset-0 bg-background" />
         <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 animate-pulse rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src="https://picsum.photos/150/150"
            alt="Profile Photo"
            width={150}
            height={150}
            className="mb-6 rounded-full border-4 border-primary/50 object-cover shadow-lg"
            data-ai-hint="profile photo"
          />
        </motion.div>
        
        <motion.h1 
          className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Name
        </motion.h1>

        <motion.div
          className="mb-8 text-lg text-muted-foreground md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typewriter
            texts={[
              'A Full-Stack Developer.',
              'An AI Enthusiast.',
              'A Creative Problem-Solver.',
            ]}
          />
        </motion.div>

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
    </section>
  );
};

export default HeroSection;
