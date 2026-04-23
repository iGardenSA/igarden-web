"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_MAIN, COMPANY, CONTACT } from "@/lib/constants";
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

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const logoTextColor = scrolled ? "text-[var(--color-brand-600)]" : "text-white";
  const logoSubColor = scrolled ? "text-[var(--color-muted)]" : "text-white/70";
  const iconColor = scrolled ? "text-[var(--color-brand-600)]" : "text-white";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[var(--shadow-soft)]"
            : "bg-transparent"
        )}
      >
        <div className="container-igarden">
          <nav className="flex h-16 md:h-20 items-center justify-between">
            {/* الشعار */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label={`${COMPANY.nameEn} — ${COMPANY.nameAr}`}
            >
              <LogoMark className="h-10 w-10 transition-transform group-hover:scale-105" />
              <div className="flex flex-col leading-none">
                <span className={cn("font-display text-xl font-bold transition-colors duration-300", logoTextColor)}>
                  iGarden
                </span>
                <span className={cn("text-xs transition-colors duration-300", logoSubColor)}>
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
                      scrolled
                        ? "text-[var(--color-foreground)] hover:bg-[var(--color-brand-50)] hover:text-[var(--color-brand-600)]"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
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
                onClick={() => setOpen(true)}
                aria-label="فتح القائمة"
                aria-expanded={open}
              >
                <Menu className={cn("h-6 w-6 transition-colors duration-300", iconColor)} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in Sidebar من اليمين */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[min(320px,85vw)] lg:hidden",
          "bg-gradient-to-b from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-600)]",
          "flex flex-col shadow-2xl transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="قائمة التنقل"
      >
        {/* رأس الشريط الجانبي */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold text-white">iGarden</span>
            <span className="text-xs text-white/70">{COMPANY.nameAr}</span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="إغلاق القائمة"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* روابط التنقل */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {NAV_MAIN.map((item, i) => (
              <li
                key={item.href}
                className={cn(
                  "opacity-0 translate-x-4",
                  open && "animate-slide-in"
                )}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3.5 rounded-xl text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={cn("mt-6 opacity-0 translate-x-4", open && "animate-slide-in")}
            style={{ animationDelay: `${NAV_MAIN.length * 60}ms` }}
          >
            <Button variant="accent" size="md" asChild className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>احجز استشارة</Link>
            </Button>
          </div>
        </nav>

        {/* رقم الهاتف في الأسفل */}
        <div className="px-6 py-5 border-t border-white/10">
          <a
            href={`tel:${CONTACT.phoneE164}`}
            className="flex items-center gap-3 text-white/80 hover:text-[var(--color-accent-300)] transition-colors"
            dir="ltr"
          >
            <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
              <Phone className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold">{CONTACT.phone}</span>
          </a>
        </div>
      </div>
    </>
  );
}

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
      <path
        d="M32 44 C32 36, 36 30, 44 28 C44 36, 40 42, 32 44 Z"
        fill="var(--color-accent-500)"
      />
      <path
        d="M32 44 C32 36, 28 30, 20 28 C20 36, 24 42, 32 44 Z"
        fill="var(--color-brand-500)"
      />
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
