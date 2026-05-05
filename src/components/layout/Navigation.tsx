"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

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
  // { label: "المدونة", href: "/blog" }, // HIDDEN IN WAVE 1 — Blog content not ready
  { label: "تواصل", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  // ===== Scroll Detection — للـ Transparent Header =====
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll(); // قراءة فورية للحالة الحالية
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // ===== Transparent Logic =====
  // الـ Header شفاف فقط على الصفحة الرئيسية (Hero فيديو) قبل أن يبدأ المستخدم بالـ scroll
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  const linkBase =
    "block px-3 py-2 rounded-lg text-sm font-medium transition-colors";
  const linkActive = transparent ? "text-lime drop-shadow-md" : "text-lime";
  const linkIdle = transparent
    ? "text-cream hover:text-lime drop-shadow-md"
    : "text-deep-green hover:text-lime";

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent border-b border-transparent"
            : "bg-cream/95 backdrop-blur-md border-b border-light-gray"
        )}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          {/* Logo — يتبدّل بين الأبيض والأخضر */}
          <Link href="/" aria-label="iGarden — الصفحة الرئيسية" className="flex-shrink-0">
            <Image
              src={
                transparent
                  ? "/logo/lockup-horizontal-en-white.png"
                  : "/logo/lockup-horizontal-en.svg"
              }
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
                      className={cn(
                        linkBase,
                        "flex items-center gap-1",
                        isActive(item.href) ? linkActive : linkIdle
                      )}
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
                    className={cn(linkBase, isActive(item.href) ? linkActive : linkIdle)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA — مخفي على Hero الشفاف */}
          <div className="hidden lg:block">
            {transparent ? (
              // على Hero الشفاف: زر Lime عادي يبرز فوق الفيديو
              <CTAButton href="/contact" variant="lime">
                احجز استشارة
              </CTAButton>
            ) : (
              <CTAButton href="/contact" variant="lime">
                احجز استشارة مجانية
              </CTAButton>
            )}
          </div>

          {/* Mobile burger — أبيض على الشفاف، أخضر على الصلب */}
          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              transparent ? "text-cream drop-shadow-md" : "text-deep-green"
            )}
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

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-dvh w-[min(300px,85vw)] bg-cream flex flex-col shadow-2xl lg:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="قائمة التنقل"
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-light-gray">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            aria-label="iGarden — الصفحة الرئيسية"
          >
            <Image
              src="/logo/lockup-horizontal-en.svg"
              alt="iGarden"
              width={110}
              height={32}
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-deep-green"
            aria-label="إغلاق القائمة"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
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
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileProductsOpen ? "-rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileProductsOpen && (
                    <ul className="mt-1 mr-4 space-y-1">
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
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "text-lime bg-lime/10"
                        : "text-deep-green hover:text-lime hover:bg-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="p-4 border-t border-light-gray">
          <CTAButton href="/contact" variant="lime" className="w-full justify-center">
            احجز استشارة مجانية
          </CTAButton>
        </div>
      </aside>
    </>
  );
}

export default Navigation;

