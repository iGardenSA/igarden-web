"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const PRODUCTS_SUBMENU = [
  { href: "/products/smart-controllers", label: "Smart Controllers", badge: "Flagship" },
  { href: "/products/smart-greenhouses", label: "المحميات الذكية", badge: null },
  { href: "/products/hydroponics", label: "أنظمة الزراعة المائية", badge: null },
] as const;

type NavItem = {
  href: string;
  label: string;
  children?: typeof PRODUCTS_SUBMENU;
};

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/products", label: "المنتجات", children: PRODUCTS_SUBMENU },
  { href: "/osfan-station", label: "محطة عسفان" },
  { href: "/about", label: "من نحن" },
  { href: "/learn", label: "الأكاديمية" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "تواصل" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);

  const isProductsActive = pathname.startsWith("/products");

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); setProductsExpanded(false); }, [pathname]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-transparent" dir="rtl">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto h-16 lg:h-[72px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" aria-label="iGarden — الحديقة الذكية" className="flex items-center shrink-0">
            <Image
              src="/logo/lockup-horizontal-en-white.png"
              alt="iGarden — الحديقة الذكية"
              width={144}
              height={40}
              priority
              quality={75}
              style={{ width: "auto", height: "auto" }}
              className="h-9 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 lg:ms-12">
            {NAV_LINKS.map((link) => {
              if (link.children) {
                return (
                  <div key={link.href} className="relative group">
                    <button
                      className={[
                        "flex items-center gap-1 text-lg font-medium text-white/90 hover:text-white transition-colors duration-200 drop-shadow-sm",
                        isProductsActive ? "underline decoration-2 underline-offset-[6px] decoration-[#7CB342]" : "",
                      ].join(" ")}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" strokeWidth={1.5} />
                    </button>

                    {/* Dropdown panel */}
                    <div className="absolute top-full mt-3 right-0 w-64 bg-[#0F3D2E] rounded-xl shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                      <div className="p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={[
                              "flex items-center justify-between px-4 py-3 rounded-lg text-white/85 hover:text-white hover:bg-white/10 transition-colors text-base font-medium",
                              pathname === child.href ? "bg-white/10 text-white" : "",
                            ].join(" ")}
                          >
                            <span dir={child.label === "Smart Controllers" ? "ltr" : "rtl"}>{child.label}</span>
                            {child.badge && (
                              <span className="text-xs px-2 py-0.5 bg-[#7CB342] text-[#0F3D2E] rounded-full font-bold shrink-0">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                        <div className="mt-1 pt-1 border-t border-white/10">
                          <Link
                            href="/products"
                            className="block px-4 py-2.5 rounded-lg text-white/55 hover:text-white/85 hover:bg-white/5 transition-colors text-sm"
                          >
                            عرض جميع المنتجات ←
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-lg font-medium text-white/90 hover:text-white transition-colors duration-200 drop-shadow-sm",
                    active ? "underline decoration-2 underline-offset-[6px] decoration-[#7CB342]" : "",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center px-5 py-2.5 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-[#A5D63F]/50 focus:outline-none"
            >
              احجز استشارة
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 -mr-2 text-white transition-colors"
            aria-label="فتح القائمة"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-[#0F3D2E] flex flex-col" dir="rtl">
          <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
            <Link href="/" onClick={() => setMobileOpen(false)} aria-label="iGarden" className="flex items-center">
              <Image src="/logo/lockup-horizontal-en-white.png" alt="iGarden" width={144} height={40} quality={75} style={{ width: "auto", height: "auto" }} className="h-9 w-auto" />
            </Link>
            <button type="button" onClick={() => setMobileOpen(false)} className="p-2 -ml-2 text-white" aria-label="إغلاق القائمة">
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            {NAV_LINKS.map((link) => {
              if (link.children) {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setProductsExpanded((v) => !v)}
                      className={[
                        "w-full flex items-center justify-between text-lg font-medium py-4 border-b border-white/10 transition-colors",
                        isProductsActive ? "text-[#A5D63F]" : "text-white",
                      ].join(" ")}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={["h-5 w-5 transition-transform duration-200", productsExpanded ? "rotate-180" : ""].join(" ")}
                        strokeWidth={1.5}
                      />
                    </button>
                    {productsExpanded && (
                      <div className="bg-white/5 rounded-xl my-2 overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={[
                              "flex items-center justify-between px-5 py-3.5 text-base font-medium border-b border-white/5 last:border-0 transition-colors",
                              pathname === child.href ? "text-[#A5D63F]" : "text-white/85 hover:text-white",
                            ].join(" ")}
                          >
                            <span>{child.label}</span>
                            {child.badge && (
                              <span className="text-xs px-2 py-0.5 bg-[#7CB342] text-[#0F3D2E] rounded-full font-bold">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          onClick={() => setMobileOpen(false)}
                          className="block px-5 py-3 text-sm text-white/50 hover:text-white/75 transition-colors"
                        >
                          عرض جميع المنتجات
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={["block text-lg font-medium py-4 border-b border-white/10 transition-colors", active ? "text-[#A5D63F]" : "text-white hover:text-[#A5D63F]"].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] py-4 rounded-lg text-lg font-medium transition-colors"
            >
              احجز استشارة
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
