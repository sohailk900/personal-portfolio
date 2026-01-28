import { useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Loader } from "@/components/Loader";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onLoadComplete={() => setIsLoading(false)} />}
      <MainLayout>
        <ScrollProgress />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </MainLayout>
    </>
  );
};

export default Index;
