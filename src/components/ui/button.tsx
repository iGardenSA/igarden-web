import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — مكوّن الزر الرسمي لـ iGarden
 * يلتزم بقاعدة 60-30-10 ولوحة الألوان المعتمدة.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-xl text-lg font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-[var(--color-accent-500)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        // الزر الأساسي — أخضر غامق (30% من قاعدة الألوان)
        primary: [
          "bg-[var(--color-brand-600)] text-white shadow-[var(--shadow-soft)]",
          "hover:bg-[var(--color-brand-700)] hover:shadow-[var(--shadow-md)]",
          "active:scale-[0.98]",
        ],
        // الزر المحفّز — ليموني (10% — للتأكيدات والـ CTA الثانوي)
        accent: [
          "bg-[var(--color-accent-500)] text-[var(--color-brand-700)] font-bold",
          "hover:bg-[var(--color-accent-600)] hover:text-white",
          "shadow-[var(--shadow-soft)] active:scale-[0.98]",
        ],
        // محدّد — للأزرار الثانوية على خلفيات فاتحة
        outline: [
          "border-2 border-[var(--color-brand-600)] text-[var(--color-brand-600)] bg-transparent",
          "hover:bg-[var(--color-brand-600)] hover:text-white",
        ],
        // شبحي — للروابط الخفيفة
        ghost: [
          "text-[var(--color-brand-600)] bg-transparent",
          "hover:bg-[var(--color-brand-50)]",
        ],
        // فاتح — للأزرار على خلفيات داكنة (Hero الأخضر)
        light: [
          "bg-white text-[var(--color-brand-600)]",
          "hover:bg-[var(--color-surface)] shadow-[var(--shadow-soft)]",
          "active:scale-[0.98]",
        ],
        link: "text-[var(--color-brand-600)] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-lg",
        md: "h-11 px-6 text-lg",
        lg: "h-12 px-8 text-lg",
        xl: "h-14 px-10 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
