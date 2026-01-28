import { ReactNode, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({
  id,
  className,
  children,
  title,
  subtitle,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-16 lg:py-24",
        isVisible ? "animate-fade-up" : "opacity-0",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
