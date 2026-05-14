import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import AchievementsSection from '@/components/sections/achievements';
import ContactSection from '@/components/sections/contact';
import ResumeSection from '@/components/sections/resume';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        <div className="relative z-10">
          <SkillsSection />
          <ProjectsSection />
          <ResumeSection />
          <AchievementsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
