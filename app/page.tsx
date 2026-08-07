import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { AIJourneySection } from '@/components/sections/AIJourneySection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { GithubSection } from '@/components/sections/GithubSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <FeaturedProjectsSection />
        <TimelineSection />
        <AIJourneySection />
        <CertificationsSection />
        <BlogSection />
        <GithubSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
