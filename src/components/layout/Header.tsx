"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import MegaMenu from "@/components/layout/MegaMenu";
import MobileDrawer from "@/components/layout/MobileDrawer";
import { HEADER_NAV_ITEMS, MAIN_CTA, WHATSAPP_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.855L.057 23.5l5.797-1.52A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.63-.5-5.15-1.374l-.37-.218-3.44.903.918-3.354-.24-.386A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLElement>(null);
  const megaBtnRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

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

  // Escape يغلق القائمة ويعيد التركيز إلى زر «الحلول»
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (megaOpen) {
        setMegaOpen(false);
        megaBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  // النقر خارجها يغلق
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

  const closeMega = () => {
    setMegaOpen(false);
    megaBtnRef.current?.focus();
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  const linkBase =
    "inline-flex items-center min-h-[44px] px-3 py-2 rounded-lg text-sm font-medium transition-colors";
  const linkActive = "text-[#7CB342]";
  const linkIdle = useLightText
    ? "text-white/90 hover:text-[#A5D63F]"
    : "text-[#0F3D2E] hover:text-[#7CB342]";

  return (
    <>
      <header
        ref={megaRef}
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
          <Link
            href="/"
            aria-label="iGarden — الصفحة الرئيسية"
            className="flex-shrink-0 flex items-center gap-2"
          >
            <Image
              src="/logo/icon-master-original.png"
              alt=""
              width={44}
              height={44}
              priority
              aria-hidden
              className={useLightText ? "brightness-0 invert" : ""}
            />
            <span
              className={cn(
                "font-latin font-bold text-xl leading-none tracking-tight",
                useLightText ? "text-white" : "text-[#0F3D2E]"
              )}
            >
              iGarden
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {HEADER_NAV_ITEMS.map((item) => {
              if (item.hasMegaMenu) {
                return (
                  <li key={item.href}>
                    <div>
                      <button
                        ref={megaBtnRef}
                        type="button"
                        onClick={() => setMegaOpen((v) => !v)}
                        className={cn(
                          linkBase,
                          "gap-1",
                          isActive(item.href) ? linkActive : linkIdle
                        )}
                        aria-expanded={megaOpen}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            megaOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

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

          {/* Desktop: واتساب + CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className={cn(
                "inline-flex items-center justify-center w-11 h-11 rounded-full border transition-colors",
                useLightText
                  ? "border-white/30 text-white hover:bg-white/10 hover:text-[#A5D63F]"
                  : "border-[#E5E7EB] text-[#0F3D2E] hover:border-[#7CB342] hover:text-[#7CB342]"
              )}
            >
              <WhatsAppGlyph className="w-5 h-5" />
            </a>
            <CTAButton href={MAIN_CTA.href} variant="lime">
              {MAIN_CTA.label}
            </CTAButton>
          </div>

          {/* Mobile Burger */}
          <button
            ref={burgerRef}
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg transition-colors",
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

          {megaOpen && <MegaMenu onClose={closeMega} />}
      </header>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false);
          burgerRef.current?.focus();
        }}
      />
    </>
  );
}
