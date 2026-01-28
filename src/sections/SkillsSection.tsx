import { useMemo } from "react";
import { Code2, Palette, Wrench, Lightbulb } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/portfolio";
import { SkillCategory, skillCategories } from "@/types";
import { cn } from "@/lib/utils";

const categoryIcons: Record<SkillCategory, typeof Code2> = {
  frontend: Code2,
  ui: Palette,
  tools: Wrench,
  concepts: Lightbulb,
};

const categoryColors: Record<SkillCategory, string> = {
  frontend: "text-primary",
  ui: "text-accent",
  tools: "text-emerald-500",
  concepts: "text-amber-500",
};

export function SkillsSection() {
  const groupedSkills = useMemo(() => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<SkillCategory, typeof skills>);
  }, []);

  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I work with"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {(Object.keys(skillCategories) as SkillCategory[]).map((category) => {
          const Icon = categoryIcons[category];
          const categorySkills = groupedSkills[category] || [];

          return (
            <div
              key={category}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={cn(
                    "p-2 rounded-lg bg-muted",
                    categoryColors[category]
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {skillCategories[category]}
                </h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
