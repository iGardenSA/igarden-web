import { cn } from "@/lib/utils";

type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
type Intensity = "subtle" | "medium" | "strong";
type Color = "accent" | "lime";

interface GlowAccentProps {
  position: Position;
  intensity?: Intensity;
  color?: Color;
  className?: string;
}

const positionClasses: Record<Position, string> = {
  "top-right":    "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "top-left":     "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  "bottom-left":  "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "center":       "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const intensityOpacity: Record<Intensity, number> = {
  subtle: 0.15,
  medium: 0.25,
  strong: 0.4,
};

// RGB values for radial-gradient
const colorRgb: Record<Color, string> = {
  accent: "124, 179, 66",  // --color-accent-500 #7cb342
  lime:   "165, 214, 63",  // --color-accent-300 #a5d63f
};

export function GlowAccent({ position, intensity = "subtle", color = "accent", className }: GlowAccentProps) {
  const opacity = intensityOpacity[intensity];
  const rgb = colorRgb[color];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute pointer-events-none",
        "w-64 sm:w-80 md:w-96",
        "h-64 sm:h-80 md:h-96",
        "blur-3xl rounded-full",
        positionClasses[position],
        className
      )}
      style={{
        background: `radial-gradient(circle, rgba(${rgb}, ${opacity}) 0%, transparent 70%)`,
      }}
    />
  );
}
