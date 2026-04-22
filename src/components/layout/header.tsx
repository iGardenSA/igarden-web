"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_MAIN, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      )}
    >
      <div className="container-igarden">
        <nav className="flex h-20 items-center justify-between">
          {/* الشعار */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={`${COMPANY.nameEn} — ${COMPANY.nameAr}`}
          >
            <LogoMark className="h-10 w-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-[var(--color-brand-600)]">
                iGarden
              </span>
              <span className="text-xs text-[var(--color-muted)]">
                {COMPANY.nameAr}
              </span>
            </div>
          </Link>

          {/* روابط Desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_MAIN.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    "text-[var(--color-foreground)] hover:bg-[var(--color-brand-50)]",
                    "hover:text-[var(--color-brand-600)]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              asChild
              className="hidden md:inline-flex"
            >
              <Link href="/contact">احجز استشارة</Link>
            </Button>
            <button
              type="button"
              className="lg:hidden p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={open}
            >
              {open ? (
                <X className="h-6 w-6 text-[var(--color-brand-600)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--color-brand-600)]" />
              )}
            </button>
          </div>
        </nav>

        {/* قائمة Mobile */}
        {open && (
          <div className="lg:hidden border-t border-[var(--color-border)] py-4">
            <ul className="flex flex-col gap-1">
              {NAV_MAIN.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-[var(--color-foreground)] hover:bg-[var(--color-brand-50)] hover:text-[var(--color-brand-600)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button variant="primary" size="md" asChild className="w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    احجز استشارة
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

/**
 * LogoMark — أيقونة الشعار (الدائرة + البرعمين)
 * نسخة SVG inline مبسّطة. استبدلها بالـ SVG الرسمي عند توفره.
 */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="29"
        stroke="var(--color-brand-600)"
        strokeWidth="2.5"
      />
      {/* البرعم الأيمن */}
      <path
        d="M32 44 C32 36, 36 30, 44 28 C44 36, 40 42, 32 44 Z"
        fill="var(--color-accent-500)"
      />
      {/* البرعم الأيسر */}
      <path
        d="M32 44 C32 36, 28 30, 20 28 C20 36, 24 42, 32 44 Z"
        fill="var(--color-brand-500)"
      />
      {/* الجذع */}
      <line
        x1="32"
        y1="44"
        x2="32"
        y2="50"
        stroke="var(--color-brand-600)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
