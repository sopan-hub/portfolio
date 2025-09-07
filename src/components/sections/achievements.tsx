'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
  const [activeTitle, setActiveTitle] = useState<string>('Hover over a color to see details');

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
            className="w-full max-w-4xl mx-auto"
        >
            <div className="interactive-palette-container">
              <div className="palette">
                {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="color" 
                      style={{ backgroundColor: colors[index % colors.length] }}
                      onMouseEnter={() => setActiveTitle(achievement.description)}
                      onMouseLeave={() => setActiveTitle('Hover over a color to see details')}
                    >
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="cert-image-bg"
                      />
                      <div className='color-info'>
                        <Image
                            src={achievement.image}
                            alt={achievement.title}
                            width={200}
                            height={140}
                            className="cert-image"
                        />
                        <span className='truncate max-w-full text-sm'>{achievement.title}</span>
                      </div>
                    </div>
                ))}
              </div>
            </div>
             <div id="stats" className='flex justify-between items-center rounded-b-lg -mt-1'>
                 <span className='truncate text-sm p-4'>
                    {activeTitle}
                 </span>
                 <div className='p-4'>
                    <Award className="h-5 w-5 text-muted-foreground" />
                 </div>
              </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
