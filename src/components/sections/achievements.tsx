'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { achievements } from '@/lib/data';
import UiverseCard from '../uiverse-card';
import GradualBlur from '../GradualBlur';

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="p-1 h-full">
              <UiverseCard>
                <div className="flex flex-col h-full text-center p-4">
                  <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative flex-grow">
                    <div className="h-full overflow-y-auto">
                      <h3 className="uiverse-title text-lg font-semibold">
                        {achievement.title}
                      </h3>
                      <p className="uiverse-text mt-2 mb-4">
                        {achievement.description}
                      </p>
                    </div>
                     <GradualBlur
                        target="parent"
                        position="bottom"
                        height="4rem"
                        strength={2}
                        divCount={5}
                        curve="bezier"
                        exponential={true}
                        opacity={1}
                      />
                  </div>
                  <span className="uiverse-text mt-4 text-sm font-bold">
                    {achievement.year}
                  </span>
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
