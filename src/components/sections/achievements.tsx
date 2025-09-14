'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { achievements } from '@/lib/data';
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

        <div className="flex gap-8 overflow-x-auto pb-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[350px]"
            >
              <UiverseCard>
                <div className="flex h-full flex-col text-center">
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="uiverse-title text-lg">{achievement.title}</h3>
                  <p className="uiverse-text mt-2 flex-grow text-sm">
                    {achievement.description}
                  </p>
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
