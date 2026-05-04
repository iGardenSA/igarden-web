"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type NavChild = {
  href: string;
  label: string;
  desc?: string;
  soon?: boolean;
};

type NavLink = {
  href: string;
  label: string;
  children?: ReadonlyArray<NavChild>;
};

const NAV_LINKS: ReadonlyArray<NavLink> = [
  { href: "/", label: "الرئيسية" },
  {
    href: "/products",
    label: "خدماتنا",
    children: [
      { href: "/products", label: "كل الخدمات", desc: "نظرة شاملة على منتجات iGarden" },
      { href: "/products/smart-greenhouses", label: "البيوت المحمية الذكية", desc: "تحكم مناخي + كفاءة طاقة 40%" },
      { href: "/products/hydroponics", label: "أنظمة الزراعة المائية", desc: "DWC · NFT · Aeroponics" },
      { href: "/products/smart-controllers", label: "أنظمة التحكم الذكية", desc: "Smart OS + IoT" },
      { href: "/compliance", label: "Compliance Suite", desc: "تقارير الامتثال للوزارة" },
      { href: "/app", label: "التطبيق", desc: "الحديقة الذكية في جيبك", soon: true },
    ],
  },
  { href: "/osfan-station", label: "محطة عسفان" },
  { href: "/about", label: "من نحن" },
  { href: "/learn", label: "الأكاديمية" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "تواصل" },
];

function DesktopNavItem({ link, pathname }: { link: NavLink; pathname: string }) {
  const [open, setOpen] = useState(false);
  const active =
    pathname === link.href ||
    (link.children?.some((c) => pathname === c.href) ?? false);

  if (!link.children) {
    return (
      <Link
        href={link.href}
        className={[
          "text-lg font-medium text-white/90 hover:text-white transition-colors duration-200 drop-shadow-sm",
          active ? "underline decoration-2 underline-offset-[6px] decoration-[#7CB342]" : "",
        ].join(" ")}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className={[
          "inline-flex items-center gap-1 text-lg font-medium text-white/90 hover:text-white transition-colors duration-200 drop-shadow-sm",
          active ? "underline decoration-2 underline-offset-[6px] decoration-[#7CB342]" : "",
        ].join(" ")}
      >
        {link.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div className="absolute top-full right-0 pt-3 min-w-[320px]" role="menu">
          <div className="bg-white rounded-xl shadow-lg border border-deep-green/10 overflow-hidden">
            {link.children.map((child) => {
              const childActive = pathname === child.href;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`flex items-start justify-between gap-3 px-4 py-3 hover:bg-cream transition-colors ${
                    childActive ? "bg-cream" : ""
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-deep-green font-bold text-sm">
                        {child.label}
                      </span>
                      {child.soon && (
                        <span className="text-[10px] font-bold text-brand-600 bg-lime/20 px-1.5 py-0.5 rounded-full">
                          قريباً
                        </span>
                      )}
                    </div>
                    {child.desc && (
                      <p className="text-medium-gray text-xs mt-0.5">{child.desc}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-transparent" dir="rtl">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto h-16 lg:h-[72px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            aria-label="iGarden — الحديقة الذكية"
            className="flex items-center shrink-0"
          >
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

          <nav className="hidden lg:flex items-center gap-7 lg:ms-12">
            {NAV_LINKS.map((link) => (
              <DesktopNavItem key={link.href} link={link} pathname={pathname} />
            ))}
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

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60] bg-[#0F3D2E] flex flex-col"
          dir="rtl"
        >
          <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              aria-label="iGarden"
              className="flex items-center"
            >
              <Image
                src="/logo/lockup-horizontal-en-white.png"
                alt="iGarden"
                width={144}
                height={40}
                quality={75}
                style={{ width: "auto", height: "auto" }}
                className="h-9 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 -ml-2 text-white"
              aria-label="إغلاق القائمة"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "block text-lg font-medium py-4 border-b border-white/10 transition-colors",
                      active ? "text-[#A5D63F]" : "text-white hover:text-[#A5D63F]",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pr-4 pb-2 border-b border-white/10">
                      {link.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={[
                              "flex items-center gap-2 py-2.5 text-sm transition-colors",
                              childActive ? "text-[#A5D63F]" : "text-white/80 hover:text-[#A5D63F]",
                            ].join(" ")}
                          >
                            <span>← {child.label}</span>
                            {child.soon && (
                              <span className="text-[10px] font-bold text-[#0F3D2E] bg-[#A5D63F] px-1.5 py-0.5 rounded-full">
                                قريباً
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
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
