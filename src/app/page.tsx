"use client";

import { usePortfolio } from "@/hooks/usePortfolio";
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ServicesSection,
  SkillsSection,
  ProjectsSection,
  CertificatesSection,
  ContactSection,
} from "@/components/home";

export default function HomePage() {
  const { data } = usePortfolio();
  const { profile, experience, projects, education } = data || {};

  return (
    <main className="relative min-h-screen bg-transparent text-foreground overflow-hidden font-sans">

      {/* 1. Hero Section */}
      <HeroSection profile={profile} />
      {/* 2. About Section */}
      <AboutSection profile={profile} education={education} />
      {/* 3. Experience Section */}
      <ExperienceSection experience={experience} />
      {/* 4. Bento Specialties / Services Section */}
      <ServicesSection />
      {/* 5. Technical Skills Section */}
      <SkillsSection />
      {/* 6. Featured Projects Section */}
      <ProjectsSection projects={projects} />
      {/* 7. Certificates Section */}
      <CertificatesSection />
      {/* 8. Contact / Let's Connect Section */}
      <ContactSection />
    </main>
  );
}
