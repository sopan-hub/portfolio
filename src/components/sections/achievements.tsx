
'use client';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import ScrollFloat from '@/components/ui/scroll-float';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            textClassName="text-white uppercase"
          >
            Certificates
          </ScrollFloat>
          <p className="mt-4 text-muted-foreground">
            A showcase of my certified skills and completed professional simulations.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="rounded-lg bg-card p-6 transition-all hover:bg-white/5 border border-white/5">
              <div className="overflow-hidden rounded-lg">
                <div className="relative aspect-video">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative p-6">
                  <div className="relative h-32 overflow-hidden">
                    <h4 className="mb-2 text-lg font-semibold text-foreground uppercase tracking-tight leading-tight">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {achievement.description}
                    </p>
                  </div>
                   <span className="absolute bottom-6 right-6 text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
