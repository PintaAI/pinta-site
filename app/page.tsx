import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"

export default function Home() {
  return (
    <main className="mb-24">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  )
}
