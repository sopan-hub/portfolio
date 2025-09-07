'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const AchievementsSection = () => {
  const cardColors = [
    '142, 249, 252',
    '142, 252, 204',
    '215, 252, 142',
    '252, 142, 142',
  ];

  return (
    <section id="achievements" className="relative py-20 overflow-hidden min-h-[500px]">
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
      
      <div className="wrapper-3d">
        <div 
          className="inner-3d" 
          style={{ 
            '--quantity': achievements.length,
            '--w': '200px',
            '--h': '300px',
          } as React.CSSProperties}
        >
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="card-3d" 
              style={{ 
                '--index': index, 
                '--color-card': cardColors[index % cardColors.length] 
              } as React.CSSProperties}
            >
              <div className="img-3d">
                 <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-contain p-4"
                    data-ai-hint="certificate document"
                  />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
