'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Web', 'AI', 'Other'];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of my work.
          </p>
        </div>
        <div className="mb-8 flex justify-center space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'ghost'}
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.title} className="rounded-lg bg-card p-6">
              <div className="flex h-full flex-col">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="mb-4 rounded-md object-cover"
                  data-ai-hint={project.dataAiHint}
                />
                <div className="flex flex-grow flex-col">
                  <p className="mb-1 text-sm font-semibold text-primary">
                    {project.category}
                  </p>
                  <h4 className="mb-2 text-lg font-bold text-foreground">
                    {project.title}
                  </h4>
                  <p className="mb-4 flex-grow text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                       <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
