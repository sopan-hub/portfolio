
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
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Image Layer - High Fidelity Style */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://raw.githubusercontent.com/sopan-hub/my-acces/main/bg2.png"
          alt="Skills Background"
          fill
          className="object-cover opacity-40"
          quality={100}
          unoptimized
        />
        {/* Vignette/Fade effect to match Hero section depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-4xl font-black tracking-tighter sm:text-6xl mb-4"
            textClassName="text-white uppercase glow-white"
          >
            My Skills
          </ScrollFloat>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.6em]">
              Tech Stack & Neural Tools
            </p>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:px-12">
          {skillCategories.map((category) => (
            <GlassSurface
              key={category}
              borderRadius={32}
              className="p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] border-white/5"
            >
              <h3 className="mb-10 text-xl font-black text-white uppercase tracking-[0.3em] border-b border-white/5 pb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {skills[category].map((skill) => {
                  const Icon = iconMap[skill.name];
                  return (
                    <div className="flex items-center gap-4 group" key={skill.name}>
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                        {Icon && <Icon className="h-6 w-6 text-white/80 group-hover:text-white transition-transform group-hover:scale-110" />}
                      </div>
                      <span className="text-[12px] font-bold text-white/60 uppercase tracking-wider group-hover:text-white transition-colors">{skill.name}</span>
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
