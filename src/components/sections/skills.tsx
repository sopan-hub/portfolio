'use client';
import Image from 'next/image';
import { skills } from '@/lib/data';
import * as Icons from '@/components/icons';
import ScrollFloat from '@/components/ui/scroll-float';
import GlassSurface from '@/components/ui/glass-surface';

const skillCategories: (keyof typeof skills)[] = [
  'Frontend',
  'Backend',
  'AI/ML',
  'Tools',
];

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  React: Icons.ReactJs,
  'Next.js': Icons.NextJs,
  'Tailwind CSS': Icons.TailwindCss,
  TypeScript: Icons.Typescript,
  'Node.js': Icons.NodeJs,
  Firebase: Icons.Firebase,
  Python: Icons.Python,
  Express: Icons.Express,
  Genkit: Icons.Genkit,
  TensorFlow: Icons.Tensorflow,
  PyTorch: Icons.Pytorch,
  'Scikit-learn': Icons.ScikitLearn,
  Git: Icons.Git,
  Docker: Icons.Docker,
  Figma: Icons.Figma,
  Webpack: Icons.Webpack,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-40 overflow-hidden">
      {/* High-Fidelity Background Layer - Matches Hero Clarity */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://raw.githubusercontent.com/sopan-hub/my-acces/0fa7baf05422f321bedaa05b2ba52ca8dc4e0d0f/bg3.png"
          alt="Skills Technical Background"
          fill
          className="object-cover"
          quality={100}
          priority
          unoptimized
        />
        {/* Smooth section blending gradients - no heavy "faded" look, just clean edges */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-24 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-5xl font-black tracking-tighter sm:text-7xl mb-6"
            textClassName="text-white uppercase glow-white"
          >
            My Skills
          </ScrollFloat>
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-16 bg-white/20" />
            <p className="text-[12px] font-black text-white/50 uppercase tracking-[0.7em]">
              Tech Stack & Neural Tools
            </p>
            <div className="h-[1px] w-16 bg-white/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:px-12">
          {skillCategories.map((category) => (
            <GlassSurface
              key={category}
              borderRadius={40}
              className="p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] border-white/10 bg-black/30"
            >
              <h3 className="mb-12 text-2xl font-black text-white uppercase tracking-[0.4em] border-b border-white/10 pb-8">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
                {skills[category].map((skill) => {
                  const Icon = iconMap[skill.name];
                  return (
                    <div className="flex items-center gap-5 group" key={skill.name}>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shadow-xl">
                        {Icon && <Icon className="h-7 w-7 text-white/90 group-hover:text-white transition-transform duration-500 group-hover:scale-110" />}
                      </div>
                      <span className="text-[13px] font-bold text-white/70 uppercase tracking-widest group-hover:text-white transition-colors duration-300">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
