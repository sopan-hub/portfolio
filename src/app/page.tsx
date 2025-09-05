import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import ResumeSection from '@/components/sections/resume';
import AchievementsSection from '@/components/sections/achievements';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
