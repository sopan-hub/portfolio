'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UiverseCard from '../uiverse-card';
import { cn } from '@/lib/utils';

const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="skills" className="bg-secondary py-24 dark:bg-accent/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInVienew={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold">My Skills</h2>
          <div className={cn('grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 card-grid', activeIndex !== null && 'has-active-card')}>
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn('card-container', activeIndex === index && 'active')}
                onClick={() => handleCardClick(index)}
              >
                <UiverseCard>
                  <h3 className="uiverse-title">{category}</h3>
                  <ul className="uiverse-text mt-4 space-y-3">
                    {skillList.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-center gap-3 p-2">
                        <skill.icon className="h-6 w-6 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </UiverseCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
