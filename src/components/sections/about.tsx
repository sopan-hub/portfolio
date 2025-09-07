'use client';

import { motion } from 'framer-motion';
import UiverseCard from '@/components/uiverse-card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
           className="h-[350px]"
        >
          <UiverseCard>
              <h2 className="uiverse-title">About Me</h2>
              <p className="uiverse-text">
                I am a passionate and driven Computer Science student with a deep specialization in Artificial Intelligence and Machine Learning. My journey into tech is fueled by a curiosity for building intelligent systems that can solve real-world problems.
              </p>
              <p className="uiverse-text">
                From theoretical foundations in algorithms to hands-on projects in neural networks, I am constantly exploring the vast landscape of technology. I enjoy bridging the gap between complex AI concepts and practical, user-friendly applications. I'm always eager to learn and apply new techniques to my work.
              </p>
          </UiverseCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
