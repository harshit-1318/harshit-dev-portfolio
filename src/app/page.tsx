"use client";

import { usePortfolio } from "@/hooks/usePortfolio";
import { HeroSection } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about";
import { ExperienceSection } from "@/components/home/experience";
import { ServicesSection } from "@/components/home/services";
import { SkillsSection } from "@/components/home/skills";
import { ProjectsSection } from "@/components/home/projects";
import { CertificatesSection } from "@/components/home/certificates";
import { ContactSection } from "@/components/home/contact";

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
