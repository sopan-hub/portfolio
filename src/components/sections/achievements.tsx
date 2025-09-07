'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

const AchievementsSection = () => {

  return (
    <section id="achievements" className="product-grid-section py-20">
       <svg className="h-0 w-0 absolute">
        <defs>
            <filter id="squiggle-0">
                <feTurbulence baseFrequency="0.05" id="turbulence" numOctaves="2" result="noise" seed="0"></feTurbulence>
                <feDisplacementMap id="displacement" in2="noise" in="SourceGraphic" scale="4"></feDisplacementMap>
            </filter>
            <filter id="squiggle-1">
                <feTurbulence baseFrequency="0.05" id="turbulence" numOctaves="2" result="noise" seed="1"></feTurbulence>
                <feDisplacementMap id="displacement" in2="noise" in="SourceGraphic" scale="4"></feDisplacementMap>
            </filter>
            <filter id="squiggle-2">
                <feTurbulence baseFrequency="0.05" id="turbulence" numOctaves="2" result="noise" seed="2"></feTurbulence>
                <feDisplacementMap id="displacement" in2="noise" in="SourceGraphic" scale="4"></feDisplacementMap>
            </filter>
            <filter id="squiggle-3">
                <feTurbulence baseFrequency="0.05" id="turbulence" numOctaves="2" result="noise" seed="3"></feTurbulence>
                <feDisplacementMap id="displacement" in2="noise" in="SourceGraphic" scale="4"></feDisplacementMap>
            </filter>
            <filter id="squiggle-4">
                <feTurbulence baseFrequency="0.05" id="turbulence" numOctaves="2" result="noise" seed="4"></feTurbulence>
                <feDisplacementMap id="displacement" in2="noise" in="SourceGraphic" scale="4"></feDisplacementMap>
            </filter>
        </defs>
    </svg>
      <div className="container">
        <div className="title-section">
          <h2 className="section-title mb-12 text-center text-3xl font-bold">Achievements & Certificates</h2>
        </div>
        <div 
          className={'product-grid'}
        >
          {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 + (0.2 * index) }}
                className="product-card"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 555" preserveAspectRatio="none" className="product-svg vertical-line left">
                    <path fill="none" stroke="currentColor" d="M4.42.73c-2.26 26.23.02-6.6 1.2 43.35.23 9.32-2.18 7.94-4.04 16.35a14.65 14.65 0 0 0 0 4.97c.97 7.34 3.34 14.33 3.57 21.8.25 8.41-2.29 16.65-2.16 25.08.34 22.7 4.9 14.96 2.83 34.25-.46 4.36-2.72 8.16-2.83 12.58-.25 10.5 1.83 20.9 1.79 31.4-.03 6.97-2.06 19.04-1.99 20.68.91 19.67 3.03 4.4 2.43 33.04-.84 39.25-3.08 33.75-2.85 51.02.13 9.92 2.04 19.65 2.3 29.56.18 7.18-1.19 14.32-.97 21.5.14 4.5 2.23 8.7 2.04 13.2-1.4 33.36-4.96 13.26-3.6 36.05 2.3 38.96 3.25 77.61.48 116.44-.24 3.35.3 7.14 1.08 11.1 2.16 10.89 2.16 23.87.92 31.24"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 555" preserveAspectRatio="none" className="product-svg vertical-line right">
                    <path fill="none" stroke="currentColor" d="M4.42.73c-2.26 26.23.02-6.6 1.2 43.35.23 9.32-2.18 7.94-4.04 16.35a14.65 14.65 0 0 0 0 4.97c.97 7.34 3.34 14.33 3.57 21.8.25 8.41-2.29 16.65-2.16 25.08.34 22.7 4.9 14.96 2.83 34.25-.46 4.36-2.72 8.16-2.83 12.58-.25 10.5 1.83 20.9 1.79 31.4-.03 6.97-2.06 19.04-1.99 20.68.91 19.67 3.03 4.4 2.43 33.04-.84 39.25-3.08 33.75-2.85 51.02.13 9.92 2.04 19.65 2.3 29.56.18 7.18-1.19 14.32-.97 21.5.14 4.5 2.23 8.7 2.04 13.2-1.4 33.36-4.96 13.26-3.6 36.05 2.3 38.96 3.25 77.61.48 116.44-.24 3.35.3 7.14 1.08 11.1 2.16 10.89 2.16 23.87.92 31.24"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 8" className="product-svg top horizontal-line">
                    <path fill="none" stroke="currentColor" d="M.74 5.43c16.62-3.7 7.17-2.5 43.93-.8 17.36.79 15.14-2.9 24.1-2.63 1.21.04 5.55 1.98 7.47 2.14 5.24.42 8.17-.7 13.42-.44 3 .14 5.77 2.11 8.77 2.1 8.33-.04 16.56-2.19 24.89-2.25 10.32-.07 23.74 1.66 34.49 1.07 8.49-.46 17.47-1.77 25.92-2.65 11.98-1.24 18.38 2.3 30.24 3.88 12.82 1.7 5.26-2.3 21.35-2.14 10.15.1 19.92 1.14 29.88 1.7"></path>
                  </svg>
                  <div className="product-details">
                    <span className="product-price">{achievement.year}</span>
                    <span className="product-rating">⭐ Certificate</span>
                  </div>
                  <div className="product-image-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 166 306" preserveAspectRatio="none" className="scribble-svg"><path className="scribble-path" filter="url(#scribble-0)" stroke="#b75648" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M126 8c-10 10-26 17-41 22-24 9-50 14-74 23a152 152 0 0 0 24 3l50 1c5 0 17 0 20 4 3 3-13 6-15 6a689 689 0 0 0-45 12c1 2 7 2 9 2 11 2 22 1 33 1l48-2 17 1c2 0-2 2-3 2l-8 2-60 11-32 7c-5 1-12 2-16 5-2 1 8 3 9 4 13 2 27 2 39 2 14 0 29-2 43 0 3 1 7 1 3 3-7 3-15 4-23 6l-41 7c-10 2-22 5-31 9-2 2-1 2 1 3l23 2c22 1 43 0 64 3 4 0 4 1 1 2l-20 7c-11 3-22 5-32 9l-14 6c-3 4 32 7 35 7 20 1 43 0 62 6 1 1 5 2 4 3-3 3-9 4-12 5-28 7-57 9-85 15l-30 7-9 3h1l13 1 53-1c15-1 31-1 47 1 10 1-2 4-6 5-14 4-29 5-44 8l-39 7c-2 1-22 5-22 7 0 3 58 4 65 5 6 0 17 0 23 3 1 1-4 3-4 3-16 6-36 7-52 10l-13 3a227 227 0 0 0 49 4c20 0 41 7 62 7"></path></svg>
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      width="200"
                      height="200"
                      className="product-image object-contain"
                      data-ai-hint="certificate document"
                    />
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 8" width="266" height="8" preserveAspectRatio="none" shape-rendering="crispEdges" className="product-svg bottom horizontal-line">
                    <path fill="none" stroke="currentColor" d="M.74 5.43c16.62-3.7 7.17-2.5 43.93-.8 17.36.79 15.14-2.9 24.1-2.63 1.21.04 5.55 1.98 7.47 2.14 5.24.42 8.17-.7 13.42-.44 3 .14 5.77 2.11 8.77 2.1 8.33-.04 16.56-2.19 24.89-2.25 10.32-.07 23.74 1.66 34.49 1.07 8.49-.46 17.47-1.77 25.92-2.65 11.98-1.24 18.38 2.3 30.24 3.88 12.82 1.7 5.26-2.3 21.35-2.14 10.15.1 19.92 1.14 29.88 1.7"></path>
                  </svg>
                  <div className="title-wrapper">
                    <h3 className="product-title">{achievement.title}</h3>
                  </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
