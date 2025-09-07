'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import UiverseCard from '../uiverse-card';
import { cn } from '@/lib/utils';

const categories = ['All', 'Web', 'AI', 'Other'];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'neu' : 'outline'}
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title + index}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="flex"
                >
                  <UiverseCard>
                    <div className="flex h-full flex-col text-center">
                      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg border-2 border-black">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={cn(
                            'object-cover',
                            (project.title === 'AI Chatbot Beta' ||
                              project.title === 'Image Recognition API') &&
                              'scale-125'
                          )}
                          data-ai-hint={project.dataAiHint}
                        />
                      </div>
                      <h3 className="uiverse-title text-xl">{project.title}</h3>
                      <p className="uiverse-text mb-4 flex-grow">{project.description}</p>
                      <div className="mb-4 flex flex-wrap justify-center gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                      <div className="mt-auto flex justify-center gap-4">
                        <Button variant="neu" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        </Button>
                        <Button variant="neu" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </UiverseCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
