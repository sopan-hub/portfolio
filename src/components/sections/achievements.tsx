'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import UiverseCard from '../uiverse-card';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold">Achievements & Certificates</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <UiverseCard>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 h-52 w-full">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-contain"
                        data-ai-hint="certificate document"
                      />
                    </div>
                    <h3 className="uiverse-title text-lg">{achievement.title}</h3>
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
