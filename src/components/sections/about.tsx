'use client';

import { motion } from 'framer-motion';
import UiverseCard from '@/components/uiverse-card';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-4xl relative">
            <UiverseCard>
                <div className="flex flex-col justify-center h-full p-4 sm:p-8 relative z-10">
                  <h2 className="uiverse-title text-2xl md:text-4xl text-center">About Me</h2>
                  <p className="uiverse-text mt-6 text-lg md:text-xl">
                    I am a passionate and driven Computer Science student with a deep specialization in Artificial Intelligence and Machine Learning. My journey into tech is fueled by a relentless curiosity for building intelligent systems that can solve tangible, real-world problems. I thrive on challenges, viewing every obstacle as an opportunity to learn, innovate, and grow as a developer and a problem-solver.

From the theoretical foundations of complex algorithms to hands-on projects involving neural networks and large language models, I am constantly exploring the vast and exciting landscape of technology. I find immense satisfaction in bridging the gap between abstract AI concepts and practical, user-friendly applications. My ultimate goal is to contribute to innovative projects that push the boundaries of what's possible and make a meaningful, positive impact on society. I'm always eager to learn and apply new techniques to my work, and I'm excited about what the future holds.
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
