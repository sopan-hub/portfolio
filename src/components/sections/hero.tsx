'use client';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code } from 'lucide-react';
import Typewriter from '@/components/typewriter';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I'm Sopan Patil
            </h1>
            <div className="text-2xl font-semibold text-primary sm:text-3xl">
              <Typewriter
                texts={['Developer', 'Creator', 'Innovator']}
                className="text-gradient"
              />
            </div>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground lg:mx-0">
              I'm a computer science and AI/ML student passionate about
              building innovative solutions that make a difference. Explore my
              work and get in touch!
            </p>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button variant="neu" asChild>
                <a href="#projects">
                  <Code className="mr-2" /> My Work
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
            </div>
          </div>

          <div className="relative hidden h-[600px] w-full items-center justify-center lg:flex">
             {/* Lanyard component removed for stability */}
             <div className="h-96 w-64 rounded-lg bg-card/50 flex items-center justify-center text-muted-foreground">
                3D Lanyard will be here
             </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </a>
    </section>
  );
};

export default HeroSection;
