'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import UiverseCard from '../uiverse-card';

const categories = ['All', 'Web', 'AI', 'Other'];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>
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
            className="projects-grid grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3"
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
                  className="h-full"
                >
                  <UiverseCard>
                    <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="rounded-xl object-cover"
                        data-ai-hint={project.dataAiHint}
                      />
                    </div>
                     <div className="flex-grow p-6 text-center flex flex-col">
                        <h3 className="uiverse-title mb-2">{project.title}</h3>
                        <p className="uiverse-text mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                        <div className="flex justify-center gap-4">
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
