import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  onLoadComplete?: () => void;
  minDuration?: number;
}

export function Loader({ onLoadComplete, minDuration = 2000 }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / minDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setIsExiting(true);
        setTimeout(() => {
          onLoadComplete?.();
        }, 500);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [minDuration, onLoadComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-all duration-500",
        isExiting && "opacity-0 pointer-events-none"
      )}
    >
      {/* Animated Logo */}
      <div className="relative mb-8">
        <div className="w-24 h-16 rounded-xl flex items-center justify-center animate-pulse">
          <img src="src/assets/logo.png" alt="" />
        </div>

        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s", animationDelay: "1s" }}>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-foreground" />
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">Sohail Khan</h2>
        <p className="text-sm text-muted-foreground">Front End Engineer</p>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-foreground transition-all duration-100 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading percentage */}
      <p className="mt-3 text-xs text-muted-foreground font-mono">
        {Math.round(progress)}%
      </p>
    </div>
  );
}
