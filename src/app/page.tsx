import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FreelancerSection } from "@/components/sections/freelancer-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AwardsSection } from "@/components/sections/awards-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FreelancerSection />
      <SkillsSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
    </>
  );
}
