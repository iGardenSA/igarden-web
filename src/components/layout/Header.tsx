"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { HEADER_NAV_ITEMS, MAIN_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;
  const homeDark = isHome && scrolled;
  const useLightText = isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkBase = "px-3 py-2 rounded-lg text-sm font-medium transition-colors";
  const linkActive = "text-[#7CB342]";
  const linkIdle = useLightText
    ? "text-white/90 hover:text-[#A5D63F]"
    : "text-[#0F3D2E] hover:text-[#7CB342]";

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent border-b border-transparent"
            : homeDark
            ? "bg-[#0F3D2E]/90 backdrop-blur-md border-b border-[#1B5E3F]/40"
            : "bg-[#FAFAF7] border-b border-[#E5E7EB]"
        )}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <Link href="/" aria-label="iGarden — الصفحة الرئيسية" className="flex-shrink-0">
            <Image
              src={
                isHome
                  ? "/logo/lockup-horizontal-en-white.png"
                  : "/logo/lockup-horizontal-en.svg"
              }
              alt="iGarden"
              width={130}
              height={38}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {HEADER_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(linkBase, isActive(item.href) ? linkActive : linkIdle)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CTAButton href={MAIN_CTA.href} variant="lime">
              {MAIN_CTA.label}
            </CTAButton>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              useLightText
                ? "text-white hover:text-[#A5D63F]"
                : "text-[#0F3D2E] hover:text-[#7CB342]"
            )}
            aria-label="فتح القائمة"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
