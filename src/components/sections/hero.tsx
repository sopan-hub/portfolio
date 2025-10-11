'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Typewriter from '@/components/typewriter';
import Lanyard from '../Lanyard';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I'm Sopan Patil
            </h1>
            <h2 className="mt-4 text-2xl font-semibold sm:text-4xl">
              A{' '}
              <Typewriter
                texts={['Developer', 'Creator', 'Innovator']}
                className="text-primary"
              />
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I'm a computer science and AI/ML student passionate about building innovative solutions that make a difference. Explore my work and get in touch!
            </p>
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" asChild className="neu-button w-full sm:w-auto">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex h-[400px] items-center justify-center lg:h-[500px]"
          >
            <Lanyard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
