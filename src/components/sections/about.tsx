'use client';

import { motion } from 'framer-motion';
import UiverseCard from '@/components/uiverse-card';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-4xl">
            <UiverseCard>
                <div className="flex flex-col justify-center h-full p-4 sm:p-8">
                  <h2 className="uiverse-title text-2xl md:text-4xl text-center">About Me</h2>
                  <p className="uiverse-text mt-6 text-lg md:text-xl">
                    Passionate Computer Science student specializing in AI and Machine Learning. I thrive on building intelligent systems that solve real-world problems and love turning complex concepts into user-friendly applications. My goal is to innovate and make a positive impact.
                  </p>
                </div>
            </UiverseCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
