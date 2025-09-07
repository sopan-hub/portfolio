'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import UiverseCard from '../uiverse-card';

const SkillsSection = () => {
  const skillCategories = Object.keys(skills);

  return (
    <section id="skills" className="relative py-20">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold">My Skills</h2>
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <UiverseCard>
                  <div className="p-6 text-center">
                    <h3 className="uiverse-title mb-6 text-xl">{category}</h3>
                    <div className="grid grid-cols-2 gap-8">
                      {(skills as Record<string, any>)[category].map(
                        (skill: { name: string; icon: React.ElementType }) => (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center gap-3 text-center"
                          >
                            <skill.icon className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </div>
                        )
                      )}
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
