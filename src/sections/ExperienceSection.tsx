import { Briefcase, Calendar } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SkillBadge } from "@/components/SkillBadge";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="My professional journey in frontend development"
      className="bg-card/50"
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Content Card */}
              <div className="flex-1 md:w-1/2">
                <div
                  className={`p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated group ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.techStack.map((tech) => (
                      <SkillBadge key={tech} skill={tech} variant="outline" />
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for timeline layout */}
              <div className="hidden md:block flex-1 md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
