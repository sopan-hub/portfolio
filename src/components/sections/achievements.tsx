'use client';
import { achievements } from '@/lib/data';
import Image from 'next/image';
import ScrollFloat from '@/components/ui/scroll-float';
import GlassSurface from '@/components/ui/glass-surface';

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
          <p className="mt-4 text-white/60">
            A showcase of my certified skills and completed professional simulations.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <GlassSurface
              key={index}
              borderRadius={40}
              brightness={35}
              opacity={0.8}
              blur={16}
              displace={0.1}
              distortionScale={-30}
              className="overflow-hidden group"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-10 relative">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
                    Verified Achievement
                  </span>
                  <span className="text-xs font-bold text-white bg-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {achievement.year}
                  </span>
                </div>
                <h4 className="mb-4 text-xl font-bold text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                  {achievement.description}
                </p>
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;