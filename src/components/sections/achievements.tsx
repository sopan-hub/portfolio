'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import UiverseCard from '../uiverse-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const AchievementsSection = () => {
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
          <div className="relative mx-auto max-w-7xl">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {achievements.map((achievement, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full h-full"
                      >
                        <UiverseCard>
                          <div className="flex flex-col items-center text-center p-4 h-full">
                            <div className="relative mb-4 h-48 sm:h-60 w-full">
                              <Image
                                src={achievement.image}
                                alt={achievement.title}
                                fill
                                className="object-contain"
                                data-ai-hint="certificate document"
                              />
                            </div>
                            <h3 className="uiverse-title text-base">
                              {achievement.title}
                            </h3>
                            <p className="uiverse-text mt-2 text-sm">
                              {achievement.year}
                            </p>
                            <p className="uiverse-text mt-2 text-sm flex-grow">
                              {achievement.description}
                            </p>
                          </div>
                        </UiverseCard>
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden sm:flex" />
              <CarouselNext className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 hidden sm:flex" />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
