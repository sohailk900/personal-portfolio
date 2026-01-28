import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-14 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-14 h-14 text-xl",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-lg font-bold text-primary-foreground",
        sizeClasses[size],
        className
      )}
    >
      <img src="src/assets/logo.png" alt="" />
    </div>
  );
}
