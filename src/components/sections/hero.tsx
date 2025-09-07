'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import Typewriter from '@/components/typewriter';
import FishAnimation from '../fish-animation';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <FishAnimation />
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
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href="https://raw.githubusercontent.com/sopan-hub/my-image-assets/fada33b59422fb108a4ab3e4a48a93cb31c0b0d9/ssdsdcsdc.png" target="_blank" rel="noopener noreferrer">
                  View Resume <Eye className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              {socialLinks.map((link) => (
                <Button key={link.href} variant="link" size="icon" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center order-first lg:order-last"
          >
            <div
              className="hero-panel"
            >
              <div className="hero-ring">
                <div className="hero-card-image">
                  <Image
                    src="https://raw.githubusercontent.com/sopan-hub/my-image-assets/c1a37f7dca7fef0d5cad624e94e96e3132132d9e/file_00000000dc0461f9b1a884202d5845c2.png"
                    alt="Sopan Patil"
                    width={300}
                    height={300}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="hero-border">
                <div className="hero-slide">
                  <p>Sopan</p>
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
