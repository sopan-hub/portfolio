'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import UiverseCard from '../uiverse-card';

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
      >
        <div className="skills-background-pattern absolute inset-0 z-0 opacity-10"></div>
      </motion.div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold">My Skills</h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <UiverseCard>
                  <div className='p-6'>
                  <h3 className="uiverse-title mb-6 text-center text-xl">{category}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skillList.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center gap-2">
                        <skill.icon className="h-8 w-8 text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
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

export default SkillsSection;
