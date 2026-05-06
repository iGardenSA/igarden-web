"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import MegaMenu from "@/components/layout/MegaMenu";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { HEADER_NAV_ITEMS, MAIN_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

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
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    if (!megaOpen) return;
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [megaOpen]);

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
            : "bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#E5E7EB]"
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
            {HEADER_NAV_ITEMS.map((item) => {
              if (item.hasMegaMenu) {
                return (
                  <li key={item.href}>
                    <div ref={megaRef} className="relative">
                      <button
                        onClick={() => setMegaOpen((v) => !v)}
                        onMouseEnter={() => setMegaOpen(true)}
                        className={cn(
                          linkBase,
                          "flex items-center gap-1",
                          isActive(item.href) ? linkActive : linkIdle
                        )}
                        aria-expanded={megaOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            megaOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {megaOpen && (
                        <MegaMenu
                          columns={item.megaMenuColumns}
                          onClose={() => setMegaOpen(false)}
                        />
                      )}
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(linkBase, isActive(item.href) ? linkActive : linkIdle)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
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
