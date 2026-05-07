'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import ScrollFloat from '@/components/ui/scroll-float';
import GlassSurface from '@/components/ui/glass-surface';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto w-full max-sm:max-w-xs">
            <GlassSurface
              borderRadius={32}
              brightness={10}
              opacity={0.98}
              blur={60}
              backgroundOpacity={0.1}
              className="p-6 shadow-2xl"
            >
              <Image
                src="https://raw.githubusercontent.com/sopan-hub/my-image-assets/c1a37f7dca7fef0d5cad624e94e96e3132132d9e/file_00000000dc0461f9b1a884202d5845c2.png"
                alt="About Sopan Patil"
                width={400}
                height={400}
                className="rounded-2xl w-full"
              />
            </GlassSurface>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <ScrollFloat
                containerClassName="text-3xl font-bold tracking-tight sm:text-4xl"
                textClassName="text-white uppercase"
              >
                About Me
              </ScrollFloat>
              <h3 className="text-xl font-medium text-white/90">
                A passionate Developer & AI/ML Enthusiast based in India
              </h3>
            </div>
            <p className="leading-relaxed text-white/70">
              I am a passionate and driven Computer Science student with a deep
              specialization in Artificial Intelligence and Machine Learning. My
              journey into tech is fueled by a relentless curiosity for
              building intelligent systems that can solve tangible, real-world
              problems.
            </p>
            <GlassSurface
              borderRadius={24}
              brightness={10}
              opacity={0.98}
              blur={60}
              backgroundOpacity={0.1}
              className="p-6 shadow-2xl"
            >
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <strong className="w-20 text-white">Name:</strong>
                  <span className="text-white/70">Sopan Patil</span>
                </li>
                <li className="flex gap-2">
                  <strong className="w-20 text-white">Email:</strong>
                  <a
                    href="mailto:sopanpatil@example.com"
                    className="text-white hover:underline transition-all"
                  >
                    sopanpatil@example.com
                  </a>
                </li>
                <li className="flex gap-2">
                  <strong className="w-20 text-white">From:</strong>
                  <span className="text-white/70">Maharashtra, India</span>
                </li>
              </ul>
            </GlassSurface>
            <Button asChild variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white">
              <a href="/sopan-patil-resume.pdf" download>
                <Download className="mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;