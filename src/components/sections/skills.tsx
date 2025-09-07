'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import UiverseCard from '../uiverse-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
          <div className="mx-auto max-w-4xl">
            <UiverseCard>
              <div className="p-6">
                <Tabs defaultValue={skillCategories[0]} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                    {skillCategories.map((category) => (
                      <TabsTrigger key={category} value={category} className="py-2">
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {skillCategories.map((category) => (
                    <TabsContent key={category} value={category}>
                      <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
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
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </UiverseCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
