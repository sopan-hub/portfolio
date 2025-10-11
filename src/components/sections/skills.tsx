'use client';
import { skills } from '@/lib/data';
import * as Icons from '@/components/icons';

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
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 text-muted-foreground">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category} className="rounded-lg bg-card p-6">
              <h3 className="mb-6 text-xl font-bold text-primary">
                {category}
              </h3>
              <div className="skills-grid">
                {skills[category].map((skill) => {
                  const Icon = iconMap[skill.name];
                  return (
                    <div className="skill-item" key={skill.name}>
                      {Icon && <Icon className="text-primary" />}
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
