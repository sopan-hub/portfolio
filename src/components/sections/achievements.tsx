'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { achievements } from '@/lib/data';
import { Award } from 'lucide-react';

const colors = [
  '#264653',
  '#2A9D8F',
  '#E9C46A',
  '#F4A261',
  '#E76F51',
];

const AchievementsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeAchievement = activeIndex !== null ? achievements[activeIndex] : null;

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
        
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
            <div className="interactive-palette-container">
              <div className="palette">
                {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="color" 
                      style={{ backgroundColor: colors[index % colors.length] }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <span className='truncate max-w-[80%]'>{achievement.title}</span>
                    </div>
                ))}
              </div>
              <div id="stats" className='flex justify-between items-center'>
                 <span className='truncate text-sm'>
                    {activeAchievement ? activeAchievement.description : 'Hover over a color to see details'}
                 </span>
                 <Award className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            <div className="certificate-display-container">
                {activeIndex === null ? (
                    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8">
                        <Award className="h-16 w-16 mb-4" />
                        <p>Your certificates will be displayed here.</p>
                    </div>
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={achievements[activeIndex].image}
                                alt={achievements[activeIndex].title}
                                fill
                                className="object-contain rounded-lg"
                            />
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
