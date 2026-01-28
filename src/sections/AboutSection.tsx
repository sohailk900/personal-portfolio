import { CheckCircle2, Code2, Zap, Users } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { personalInfo } from "@/data/portfolio";

const highlights = [
  {
    icon: Code2,
    title: "5+ Years React.js",
    description: "Building scalable applications",
  },
  {
    icon: Zap,
    title: "Performance Expert",
    description: "Optimized UI architectures",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Agile/Scrum environments",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Passionate about creating exceptional user experiences"
      className="bg-card/50"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Description */}
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a dedicated Front End Engineer specializing in React.js development
            with over 5 years of professional experience. My focus is on building
            scalable, performant, and user-friendly web applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I have deep expertise in Redux for state management, TypeScript for
            type-safe code, and REST API integrations. I'm committed to writing
            clean, maintainable code and following best practices.
          </p>

          {/* Key Points */}
          <ul className="space-y-3 pt-4">
            {personalInfo.about.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Highlight Cards */}
        <div className="grid gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-colors shadow-card group"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
