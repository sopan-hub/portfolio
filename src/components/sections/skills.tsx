'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import LogoLoop from '@/components/logo-loop';

const SkillsSection = () => {
  const allSkills = Object.values(skills).flat();

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
          <div className="relative w-full">
            <LogoLoop
              logos={allSkills.map(skill => ({
                node: <skill.icon className="h-full w-full" />,
                title: skill.name,
              }))}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={80}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="hsl(var(--background))"
              ariaLabel="My Skills"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
