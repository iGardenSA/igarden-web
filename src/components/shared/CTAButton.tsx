import Link from "next/link";

type Variant = "lime" | "outline-green" | "ghost";

export function CTAButton({
  href,
  children,
  variant = "lime",
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-button font-medium transition-colors";

  const variants: Record<Variant, string> = {
    lime: "bg-lime text-white hover:bg-bright-lime",
    "outline-green":
      "border-2 border-deep-green text-deep-green hover:bg-deep-green hover:text-cream",
    ghost: "text-deep-green hover:bg-cream",
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
