'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import UiverseCard from '../uiverse-card';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold">Achievements & Certificates</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <UiverseCard>
                  <div className="relative mb-4 h-56 w-full">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="rounded-lg object-contain p-4"
                      data-ai-hint="certificate document"
                    />
                  </div>
                  <div className="flex grow flex-col p-6 pt-0 text-center">
                    <h3 className="uiverse-title mb-2">{achievement.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{achievement.year}</p>
                    <p className="uiverse-text grow">{achievement.description}</p>
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
