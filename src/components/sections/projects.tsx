
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollFloat from '@/components/ui/scroll-float';

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
        <div className="mb-12 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            textClassName="text-white uppercase"
          >
            My Projects
          </ScrollFloat>
          <p className="mt-4 text-muted-foreground">
            A selection of my work across different technologies.
          </p>
        </div>
        <div className="mb-8 flex justify-center space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'ghost'}
              onClick={() => setFilter(category)}
              className="rounded-full text-xs font-bold uppercase tracking-widest px-6"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.title} className="rounded-lg bg-card p-6 group transition-all hover:bg-white/5">
              <div className="flex h-full flex-col">
                <div className="relative overflow-hidden rounded-md mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
                <div className="flex flex-grow flex-col">
                  <p className="mb-1 text-xs font-bold text-primary uppercase tracking-tighter">
                    {project.category}
                  </p>
                  <h4 className="mb-2 text-lg font-bold text-foreground uppercase tracking-tight">
                    {project.title}
                  </h4>
                  <p className="mb-4 flex-grow text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-auto flex justify-between gap-4">
                    <Button variant="outline" size="sm" className="flex-1 rounded-full text-[10px] uppercase font-bold" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ArrowRight className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/5" asChild>
                       <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
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
