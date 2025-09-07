'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import UiverseCard from '../uiverse-card';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
      >
        <div className="resume-achievements-background-pattern absolute inset-0 z-0 opacity-10"></div>
      </motion.div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-xl font-bold">Achievements & Certificates</h2>
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-sm"
              >
                <UiverseCard>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 h-60 w-full">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-contain"
                        data-ai-hint="certificate document"
                      />
                    </div>
                    <h3 className="uiverse-title text-base">{achievement.title}</h3>
                    <p className="uiverse-text mt-2 text-sm">{achievement.year}</p>
                    <p className="uiverse-text mt-2 text-sm">{achievement.description}</p>
                  </div>
                </UiverseCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
