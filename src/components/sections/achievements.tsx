'use client';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import UiverseCard from '@/components/uiverse-card';
import GradualBlur from '@/components/GradualBlur';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Certificates
          </h2>
          <p className="mt-4 text-muted-foreground">
            A showcase of my certified skills and completed courses.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <UiverseCard key={index}>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  width={500}
                  height={350}
                  className="w-full object-cover"
                />
                <div className="relative p-6">
                  <div className="relative h-32 overflow-hidden">
                    <h4 className="mb-2 text-lg font-semibold text-foreground">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                     <GradualBlur
                      target="parent"
                      position="bottom"
                      height="3rem"
                      strength={2}
                      divCount={4}
                    />
                  </div>
                   <span className="absolute bottom-6 right-6 text-xs font-semibold text-primary">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </UiverseCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
