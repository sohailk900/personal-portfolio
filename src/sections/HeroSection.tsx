import { useRef } from "react";
import { ArrowDown, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import resume from "@/assets/resume_sohail.pdf";
import { scrollToSection } from "@/utils/helpers";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import sohailImage from "@/assets/sohail.png";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const handleDownloadResume = () => {
    //view in new tab
    window.open(resume, "_blank");
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden md:mb-0 !py-16"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={cn(
            "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
            isVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          {/* Content */}
          <div className="flex-1 text-center lg:text-left ">
            <p className="text-primary font-medium mb-4 tracking-wider uppercase">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="text-foreground">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
              <span className="text-gradient">{personalInfo.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="bg-gradient-primary hover:opacity-90 transition-opacity glow-primary group"
              >
                <Eye className="mr-2 h-5 w-5 " />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex-shrink-0 block md:hidden ">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-slow" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-elevated">
                <img
                  src={sohailImage}
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce lg:block hidden">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full border border-primary/30 hover:border-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
