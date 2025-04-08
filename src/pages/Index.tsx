
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
