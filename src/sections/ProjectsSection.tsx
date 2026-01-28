import { ExternalLink, Github } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/SkillBadge";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Showcasing my React.js development work"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated hover:-translate-y-1"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <SkillBadge key={tech} skill={tech} />
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mb-6 flex-grow">
              {project.highlights.slice(0, 3).map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1 border-border hover:border-primary hover:text-primary"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  size="sm"
                  asChild
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {!project.githubUrl && !project.liveUrl && (
                <span className="text-sm text-muted-foreground italic">
                  Private project
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
