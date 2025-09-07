'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import UiverseCard from '../uiverse-card';

const AchievementsSection = () => {
  const duplicatedAchievements = [...achievements, ...achievements];

  return (
    <section id="achievements" className="relative py-20 overflow-hidden">
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
      </div>
      <div className="scrolling-wrapper">
        <div className="scrolling-content">
          {duplicatedAchievements.map((achievement, index) => (
            <div key={index} className="scrolling-item">
                <UiverseCard>
                  <div className="flex flex-col items-center text-center p-4 h-full">
                    <div className="relative mb-4 h-56 w-full">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-contain"
                        data-ai-hint="certificate document"
                      />
                    </div>
                    <h3 className="uiverse-title text-base">
                      {achievement.title}
                    </h3>
                    <p className="uiverse-text mt-2 text-sm">
                      {achievement.year}
                    </p>
                    <p className="uiverse-text mt-2 text-sm flex-grow">
                      {achievement.description}
                    </p>
                  </div>
                </UiverseCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
