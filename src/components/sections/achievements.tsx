'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
                className="h-[480px]"
              >
                <UiverseCard>
                    <div className="relative mb-4 h-40 w-full">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="rounded-lg object-contain"
                        data-ai-hint="certificate document"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <achievement.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="uiverse-title mt-4">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.year}</p>
                    <p className="uiverse-text">{achievement.description}</p>
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
