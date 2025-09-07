'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mx-auto max-w-3xl">
            <div className="glass-card space-y-4 p-8 text-center">
              <h2 className="mb-5 text-2xl font-bold" style={{color: '#3b1c1c'}}>About Me</h2>
              <p className="text-base" style={{color: '#333', lineHeight: 1.6}}>
                I am a passionate and driven Computer Science student with a deep specialization in Artificial Intelligence and Machine Learning. My journey into tech is fueled by a curiosity for building intelligent systems that can solve real-world problems.
              </p>
              <p className="text-base" style={{color: '#333', lineHeight: 1.6}}>
                From theoretical foundations in algorithms to hands-on projects in neural networks, I am constantly exploring the vast landscape of technology. I enjoy bridging the gap between complex AI concepts and practical, user-friendly applications. I'm always eager to learn and apply new techniques to my work.
              </p>
              <p className="mb-0 text-base" style={{color: '#333', lineHeight: 1.6}}>
                My goal is to leverage my skills in software development and AI to contribute to innovative projects and build technology that makes a difference. I believe that the best solutions are not just technically robust, but also thoughtfully designed with the user in mind.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
