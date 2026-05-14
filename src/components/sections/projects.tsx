'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollFloat from '@/components/ui/scroll-float';
import GlassSurface from '@/components/ui/glass-surface';
import { Badge } from '@/components/ui/badge';

const categories = ['All', 'Web', 'AI', 'Other'];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-4xl md:text-5xl font-black mb-4"
            textClassName="text-white uppercase tracking-tighter"
          >
            Projects
          </ScrollFloat>
          <div className="h-[1px] w-24 bg-white/20" />
        </div>

        <div className="mb-12 flex justify-center flex-wrap gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'ghost'}
              onClick={() => setFilter(category)}
              className={`rounded-full text-xs font-bold uppercase tracking-widest px-8 py-6 transition-all ${
                filter === category 
                  ? 'bg-white text-black' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <GlassSurface
              key={project.title}
              borderRadius={32}
              className="p-6 group transition-all duration-500 hover:scale-[1.02] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="flex h-full flex-col">
                <div className="relative overflow-hidden rounded-2xl mb-8 aspect-video border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={project.dataAiHint}
                    unoptimized
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-[10px] uppercase font-black tracking-widest text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-grow flex-col px-2">
                  <h4 className="mb-3 text-2xl font-black text-white uppercase tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  <p className="mb-8 flex-grow text-sm text-white/60 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-4">
                    <Button variant="default" className="flex-1 rounded-full text-[10px] uppercase font-black tracking-widest py-6 bg-white text-black hover:scale-105 transition-transform" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-14 w-14 bg-white/5 text-white border-white/10 hover:bg-white/10" asChild>
                       <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
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
