import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  variant?: "default" | "primary" | "outline";
  size?: "sm" | "md";
}

export function SkillBadge({
  skill,
  variant = "default",
  size = "sm",
}: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        {
          "bg-primary/10 text-primary": variant === "default",
          "bg-gradient-primary text-primary-foreground": variant === "primary",
          "border border-border text-muted-foreground hover:border-primary hover:text-primary":
            variant === "outline",
        },
        {
          "px-2.5 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
        }
      )}
    >
      {skill}
    </span>
  );
}
