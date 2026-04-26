import * as React from "react";
import { cn } from "@/lib/utils";

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  unit?: string;
  label: string;
  align?: "start" | "center";
  size?: "md" | "lg" | "xl";
}

/**
 * Stat — مكوّن الإحصائية الرسمي لـ iGarden
 * يستخدم الأرقام بخط Latin (Poppins) كما يحدد دليل الهوية.
 */
export function Stat({
  value,
  unit,
  label,
  align = "start",
  size = "lg",
  className,
  ...props
}: StatProps) {
  const sizeClasses = {
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl lg:text-7xl",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      <div className="flex items-baseline gap-1" data-num>
        <span
          className={cn(
            "font-extrabold tracking-tight text-[var(--color-accent-500)] leading-none",
            sizeClasses[size]
          )}
        >
          {value}
        </span>
        {unit && (
          <span className="text-2xl md:text-3xl font-bold text-[var(--color-brand-600)]">
            {unit}
          </span>
        )}
      </div>
      <p className="text-lg md:text-lg text-[var(--color-muted)] font-medium">
        {label}
      </p>
    </div>
  );
}
