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
          className="relative"
        >
          <h2 className="mb-8 text-center text-4xl font-bold">About Me</h2>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute -inset-4 rounded-lg bg-red-500/30 blur-3xl dark:bg-red-500/20"></div>
            <div className="relative space-y-6 rounded-lg bg-card p-8 text-center text-lg text-card-foreground shadow-2xl shadow-black/70">
              <p>
                I am a passionate and driven Computer Science student with a deep specialization in Artificial Intelligence and Machine Learning. My journey into tech is fueled by a curiosity for building intelligent systems that can solve real-world problems.
              </p>
              <p>
                From theoretical foundations in algorithms to hands-on projects in neural networks, I am constantly exploring the vast landscape of technology. I enjoy bridging the gap between complex AI concepts and practical, user-friendly applications. I'm always eager to learn and apply new techniques to my work.
              </p>
              <p>
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
