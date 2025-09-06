'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

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
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card relative flex h-full flex-col p-4">
                  {achievement.image && (
                    <div className="relative h-56 w-full">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="rounded-lg object-contain"
                        data-ai-hint="certificate document"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <achievement.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>{achievement.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{achievement.year}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
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
