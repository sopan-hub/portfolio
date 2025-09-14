'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import UiverseCard from '../uiverse-card';

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold">My Skills</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <UiverseCard key={category}>
                <div className="p-4">
                  <h3 className="uiverse-title mb-6 text-center text-xl">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {skillList.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center gap-2"
                      >
                        <skill.icon className="h-12 w-12" />
                        <span className="text-sm text-muted-foreground">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </UiverseCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
