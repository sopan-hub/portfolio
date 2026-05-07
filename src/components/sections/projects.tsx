'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollFloat from '@/components/ui/scroll-float';
import GlassSurface from '@/components/ui/glass-surface';

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
          <p className="mt-4 text-white/60">
            A selection of my work across different technologies.
          </p>
        </div>
        <div className="mb-12 flex justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'ghost'}
              onClick={() => setFilter(category)}
              className={`rounded-full text-xs font-bold uppercase tracking-widest px-8 py-6 ${
                filter === category 
                  ? 'bg-white text-black' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <GlassSurface
              key={project.title}
              borderRadius={32}
              brightness={30}
              opacity={0.8}
              displace={0.1}
              distortionScale={-30}
              className="p-6 group transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex h-full flex-col">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
                <div className="flex flex-grow flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                      {project.category}
                    </p>
                    <span className="text-[10px] font-mono text-white/60">v1.0</span>
                  </div>
                  <h4 className="mb-3 text-lg font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="mb-6 flex-grow text-sm text-white/60 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto flex justify-between gap-4">
                    <Button variant="outline" size="sm" className="flex-1 rounded-full text-[10px] uppercase font-bold border-white/10 hover:bg-white/10 text-white" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Launch <ArrowRight className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/5 text-white hover:bg-white/20" asChild>
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
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
