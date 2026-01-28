import { useState, useEffect, RefObject } from "react";

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin]);

  return isIntersecting;
}
