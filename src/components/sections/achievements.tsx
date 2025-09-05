'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
          <h2 className="mb-12 text-center text-4xl font-bold">Achievements</h2>
          <div className="mx-auto max-w-4xl space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-2 border-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-5px] hover:shadow-black/70 dark:hover:shadow-black">
                  <div className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col justify-between sm:flex-row">
                        <h3 className="text-lg font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.year}</p>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
