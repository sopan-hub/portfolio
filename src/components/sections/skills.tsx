
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
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="https://github.com/sopan-hub/my-acces/blob/main/bg2.png?raw=true"
          alt="Skills Background"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            textClassName="text-white uppercase"
          >
            My Skills
          </ScrollFloat>
          <p className="mt-4 text-white/60">
            Technologies and tools I work with to build the future.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <GlassSurface
              key={category}
              borderRadius={32}
              className="p-8 shadow-2xl"
            >
              <h3 className="mb-8 text-xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                {skills[category].map((skill) => {
                  const Icon = iconMap[skill.name];
                  return (
                    <div className="flex items-center gap-3 group" key={skill.name}>
                      <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                        {Icon && <Icon className="h-6 w-6 text-white transition-transform group-hover:scale-110" />}
                      </div>
                      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{skill.name}</span>
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
