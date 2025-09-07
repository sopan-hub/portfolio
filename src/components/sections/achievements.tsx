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
          <h2 className="mb-12 text-center text-3xl font-bold">
            Achievements & Certificates
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <UiverseCard>
                <div className="flex h-full flex-col items-center p-6 text-center">
                  <div className="relative mb-4 h-56 w-full">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-contain"
                      data-ai-hint="certificate document"
                    />
                  </div>
                  <div className="flex flex-grow flex-col">
                    <h3 className="uiverse-title mb-2 text-xl">{achievement.title}</h3>
                    <p className="uiverse-text text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </UiverseCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
