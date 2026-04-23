"use client";

import { useInView } from "@/lib/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={cn("fade-up-ready", inView && "fade-up-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
