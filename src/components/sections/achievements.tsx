'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import UiverseCard from '../uiverse-card';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-20">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold">Achievements & Certificates</h2>
          <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <UiverseCard>
                  <div className="flex flex-col items-center text-center p-4 h-full">
                    <div className="relative mb-4 h-48 sm:h-60 w-full">
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
                    <p className="uiverse-text mt-2 text-sm flex-grow">{achievement.description}</p>
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
