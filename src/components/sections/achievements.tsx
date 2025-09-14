'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import CircularGallery from '../CircularGallery';

const AchievementsSection = () => {
  const galleryItems = achievements.map(achievement => ({
    image: achievement.image,
    text: achievement.title
  }));

  return (
    <section id="achievements" className="relative py-20">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold">
            Achievements & Certificates
          </h2>
        </motion.div>

        <div style={{ height: '500px', position: 'relative' }}>
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="hsl(var(--foreground))"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
