'use client';

import { motion } from 'framer-motion';
import UiverseCard from '@/components/uiverse-card';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-4xl">
            <UiverseCard>
                <div className="flex flex-col justify-center h-full">
                  <h2 className="uiverse-title text-3xl md:text-4xl">About Me</h2>
                  <p className="uiverse-text mt-6 text-base md:text-lg">
                    I am a passionate and driven Computer Science student with a deep specialization in Artificial Intelligence and Machine Learning. My journey into tech is fueled by a curiosity for building intelligent systems that can solve real-world problems.
                  </p>
                  <p className="uiverse-text mt-4 text-base md:text-lg">
                    From theoretical foundations in algorithms to hands-on projects in neural networks, I am constantly exploring the vast landscape of technology. I enjoy bridging the gap between complex AI concepts and practical, user-friendly applications. I'm always eager to learn and apply new techniques to my work.
                  </p>
                </div>
            </UiverseCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
