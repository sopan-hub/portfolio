'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-secondary py-24 dark:bg-accent/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold">Testimonials</h2>
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="mx-auto w-full max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="mb-4 rounded-full"
                          data-ai-hint={testimonial.dataAiHint}
                        />
                        <p className="mb-4 font-light italic text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
