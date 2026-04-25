"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";

type NavChild = { label: string; href: string; badge?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  {
    label: "المنتجات",
    href: "/products",
    children: [
      { label: "Smart Controllers", href: "/products/smart-controllers", badge: "Flagship" },
      { label: "المحميات الذكية", href: "/products/smart-greenhouses" },
      { label: "أنظمة الزراعة المائية", href: "/products/hydroponics" },
    ],
  },
  { label: "محطة عسفان", href: "/osfan-station" },
  { label: "من نحن", href: "/about" },
  { label: "الأكاديمية", href: "/learn" },
  { label: "المدونة", href: "/blog" },
  { label: "تواصل", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!productsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [productsOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkBase =
    "block px-3 py-2 rounded-lg text-sm font-medium transition-colors";
  const linkActive = "text-lime";
  const linkIdle = "text-deep-green hover:text-lime";

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-light-gray"
        style={{ backgroundColor: "rgba(250,250,247,0.95)", backdropFilter: "blur(8px)" }}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <Link href="/" aria-label="iGarden — الصفحة الرئيسية" className="flex-shrink-0">
            <Image
              src="/logo/lockup-horizontal-en.svg"
              alt="iGarden"
              width={130}
              height={38}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.href}>
                  <div ref={productsRef} className="relative">
                    <button
                      onClick={() => setProductsOpen((v) => !v)}
                      className={`${linkBase} flex items-center gap-1 ${
                        isActive(item.href) ? linkActive : linkIdle
                      }`}
                      aria-expanded={productsOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productsOpen ? "-rotate-180" : ""
                        }`}
                      />
                    </button>

                    {productsOpen && (
                      <div className="absolute top-full mt-1 right-0 bg-white rounded-card shadow-lg border border-light-gray py-1.5 min-w-[220px] z-20">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setProductsOpen(false)}
                            className="flex items-center justify-between px-4 py-2.5 text-sm text-dark-text hover:bg-cream hover:text-deep-green transition-colors"
                          >
                            <span>{child.label}</span>
                            {child.badge && (
                              <span className="text-xs bg-lime/15 text-lime px-2 py-0.5 rounded-full font-medium ltr-inline">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${linkBase} ${isActive(item.href) ? linkActive : linkIdle}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CTAButton href="/contact" variant="lime">
              احجز استشارة مجانية
            </CTAButton>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-deep-green"
            aria-label="فتح القائمة"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile sheet — RTL: slides from right */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="قائمة التنقل"
        className={`fixed top-0 right-0 z-50 h-dvh w-[min(300px,85vw)] bg-cream flex flex-col shadow-2xl lg:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sheet header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-light-gray flex-shrink-0">
          <Image
            src="/logo/lockup-horizontal-en.svg"
            alt="iGarden"
            width={110}
            height={32}
            priority
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-medium-gray hover:text-deep-green transition-colors rounded-lg"
            aria-label="إغلاق القائمة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sheet links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.href}>
                  <button
                    onClick={() => setMobileProductsOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-deep-green hover:bg-white transition-colors"
                    aria-expanded={mobileProductsOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileProductsOpen ? "-rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileProductsOpen && (
                    <ul className="ms-4 mt-1 mb-2 space-y-0.5 border-s-2 border-lime/40 ps-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-dark-text hover:text-lime hover:bg-white transition-colors"
                          >
                            <span>{child.label}</span>
                            {child.badge && (
                              <span className="text-xs bg-lime/15 text-lime px-2 py-0.5 rounded-full font-medium ltr-inline">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-lime bg-lime/10"
                        : "text-deep-green hover:bg-white hover:text-lime"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Sheet CTA */}
        <div className="px-4 pt-3 pb-6 border-t border-light-gray flex-shrink-0">
          <CTAButton href="/contact" variant="lime" className="w-full justify-center">
            احجز استشارة مجانية
          </CTAButton>
        </div>
      </div>
    </>
  );
}
