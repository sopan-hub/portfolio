import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import AchievementsSection from '@/components/sections/achievements';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import images from '@/app/lib/placeholder-images.json';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Macbook Transition Section */}
        <section className="bg-black relative z-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <MacbookScroll
              src={images["hero-bg"].url}
              showGradient={true}
              title={
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">Neural Link Status</span>
                  <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
                    Interface <span className="text-white/20">Synced</span>
                  </h2>
                </div>
              }
            />
          </div>
        </section>

        <div className="bg-black relative z-10">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}