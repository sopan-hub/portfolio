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
          <h2 className="mb-8 text-center text-4xl font-bold">About Me</h2>
          <div className="mx-auto max-w-3xl space-y-6 rounded-lg border bg-card p-8 text-center text-lg text-card-foreground shadow-lg">
            <p>
              I'm a passionate developer with a knack for building beautiful,
              functional, and scalable web applications. My journey into tech started
              with a fascination for how things work, which quickly evolved into a
              deep love for coding and problem-solving.
            </p>
            <p>
              With a background in both frontend and backend development, I enjoy
              bringing ideas to life, from the initial concept and design in Figma to a
              fully deployed application. I'm always eager to learn new technologies and
              explore the frontiers of what's possible, especially in the exciting field
              of AI.
            </p>
            <p>
              What sets me apart is my focus on user experience and my commitment to
              writing clean, maintainable code. I believe that the best products are
              not just powerful, but also a joy to use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
