import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] transition-colors",
  {
    variants: {
      variant: {
        hardware: "bg-[var(--color-brand-50)] text-[var(--color-brand-600)] border border-[var(--color-brand-200)]",
        software: "bg-[var(--color-accent-100)] text-[var(--color-accent-700)] border border-[var(--color-accent-300)]",
        knowledge: "bg-amber-50 text-amber-800 border border-amber-200",
        accent: "bg-[var(--color-accent-500)] text-[var(--color-brand-700)]",
        outline: "border border-[var(--color-border)] text-[var(--color-muted)]",
      },
    },
    defaultVariants: {
      variant: "hardware",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
