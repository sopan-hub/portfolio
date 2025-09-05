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
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-background"
    >
       <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-background/60"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="container z-20 grid grid-cols-1 items-center gap-12 text-center md:grid-cols-2 md:text-left">
        <div className="flex flex-col items-center md:items-start">
            <motion.h1 
              className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sopan Patil
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
         <motion.div
          className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[400px] md:w-[400px]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 rounded-[40%_60%_60%_40%/30%_30%_70%_70%] bg-gradient-to-r from-primary to-purple-500/50 p-2 shadow-lg glow"
            style={{
                clipPath: 'url(#cloud-shape)'
            }}
          >
            <div className="h-full w-full overflow-hidden" 
                 style={{
                    clipPath: 'url(#cloud-shape)'
                }}
            >
              <Image
                src="https://i.postimg.cc/mPDwYW4C/image.png"
                alt="Profile Photo"
                fill
                className="object-cover"
                data-ai-hint="profile photo"
              />
            </div>
          </div>
          <svg width="0" height="0">
            <defs>
                <clipPath id="cloud-shape" clipPathUnits="objectBoundingBox">
                <path d="M0.77,0.857 C0.958,0.857,1,0.775,1,0.612 C1,0.449,0.838,0.418,0.788,0.31 C0.737,0.202,0.821,0.031,0.654,0.016 C0.487,0,0.457,0.187,0.33,0.187 C0.203,0.187,0.174,0.031,0.076,0.125 C-0.022,0.22,0.026,0.505,0.179,0.562 C0.332,0.62,0.22,0.826,0.363,0.871 C0.506,0.916,0.582,0.857,0.77,0.857 Z"></path>
                </clipPath>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
