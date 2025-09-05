'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-secondary py-24 dark:bg-accent/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold">My Skills</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-lg bg-red-500/10 blur-lg"></div>
                <Card className="relative h-full text-center shadow-[0_0_20px_5px_rgba(0,0,0,0.3)]">
                  <CardHeader>
                    <CardTitle className="text-2xl">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {skillList.map((skill) => (
                        <li key={skill.name} className="flex items-center gap-4 rounded-md bg-background p-3">
                          <skill.icon className="h-6 w-6 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </li>
                      ))}
                    </ul>
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

export default SkillsSection;
