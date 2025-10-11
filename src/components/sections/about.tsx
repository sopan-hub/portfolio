'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import UiverseCard from '@/components/uiverse-card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <UiverseCard>
              <Image
                src="https://raw.githubusercontent.com/sopan-hub/my-image-assets/c1a37f7dca7fef0d5cad624e94e96e3132132d9e/file_00000000dc0461f9b1a884202d5845c2.png"
                alt="About Sopan Patil"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </UiverseCard>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
              <h3 className="text-xl font-medium text-primary">
                A passionate Developer & AI/ML Enthusiast based in India
              </h3>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              I am a passionate and driven Computer Science student with a deep
              specialization in Artificial Intelligence and Machine Learning. My
              journey into tech is fueled by a relentless curiosity for
              building intelligent systems that can solve tangible, real-world
              problems.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <strong className="w-20 text-foreground">Name:</strong>
                <span className="text-muted-foreground">Sopan Patil</span>
              </li>
              <li className="flex gap-2">
                <strong className="w-20 text-foreground">Email:</strong>
                <a
                  href="mailto:sopanpatil@example.com"
                  className="text-primary hover:underline"
                >
                  sopanpatil@example.com
                </a>
              </li>
              <li className="flex gap-2">
                <strong className="w-20 text-foreground">From:</strong>
                <span className="text-muted-foreground">Maharashtra, India</span>
              </li>
            </ul>
            <Button asChild variant="neu">
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
