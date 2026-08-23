"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import {
  COMPANY,
  CONTACT,
  SOCIAL,
  MAIN_CTA,
  WHATSAPP_HREF,
  DEMO_URL,
  SHOP_URL,
} from "@/lib/constants";

type FLink = { label: string; href: string; external?: boolean; badge?: string };

const SOLUTIONS_LINKS: FLink[] = [
  { label: "كل الحلول", href: "/products" },
  { label: "المحميات الزراعية", href: "/products/smart-greenhouses" },
  { label: "أنظمة الزراعة المائية", href: "/products/hydroponics" },
  { label: "Smart Controllers", href: "/products/smart-controllers" },
  { label: "إنترنت الأشياء الزراعي", href: "/products/iot" },
  { label: "Smart OS", href: "/products/smart-os" },
  { label: "Demo مباشر", href: DEMO_URL, external: true },
  { label: "جاهزية الامتثال", href: "/compliance" },
  { label: "الحلول المتخصصة", href: "/products#specialized" },
];

const COMPANY_LINKS: FLink[] = [
  { label: "عن iGarden", href: "/about" },
  { label: "كيف نعمل", href: "/how-we-work" },
  { label: "مرفق R&D في عسفان", href: "/osfan-station" },
  { label: "المعرفة", href: "/learn" },
  { label: "بيانات الشركة الرسمية", href: "/fact-sheet" },
];

const PLATFORMS_LINKS: FLink[] = [
  { label: "المتجر", href: SHOP_URL, external: true },
  { label: "Home Solutions — حلول الأفراد", href: "/home-solutions" },
  { label: "تطبيق iGarden", href: "/app", badge: "قريباً" },
  { label: "تواصل معنا", href: "/contact" },
];

const LEGAL_LINKS: FLink[] = [
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "الشروط والأحكام", href: "/terms" },
  { label: "إخلاء الامتثال", href: "/compliance-disclaimer" },
  { label: "ميثاق بيانات العميل", href: "/data-charter" },
];

const GROUPS: { title: string; links: FLink[] }[] = [
  { title: "الحلول", links: SOLUTIONS_LINKS },
  { title: "الشركة والميدان", links: COMPANY_LINKS },
  { title: "للأفراد والمنصات", links: PLATFORMS_LINKS },
];

export function Footer() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <footer className="bg-deep-green text-cream" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ─── كتلة الهوية — 4/12 ─────────────────────────── */}
          <div className="lg:col-span-4">
            <Image
              src="/logo/lockup-horizontal-en-white.png"
              alt="iGarden — الحديقة الذكية"
              width={140}
              height={40}
            />
            <p className="text-lime font-medium text-base mt-3">ازرع بذكاء.</p>
            <p className="text-sm opacity-75 leading-relaxed mt-3 max-w-sm">
              نبني منظومات زراعية متكاملة للمشاريع الجديدة والمنشآت القائمة.
            </p>

            <div className="mt-5">
              <CTAButton href={MAIN_CTA.href} variant="lime">
                {MAIN_CTA.label}
              </CTAButton>
            </div>

            <ul className="mt-6 space-y-1">
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] py-2 text-sm opacity-75 hover:opacity-100 hover:text-lime transition-all"
                >
                  <WhatsAppIcon />
                  <span>واتساب</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneE164}`}
                  className="inline-flex items-center gap-2 min-h-[44px] py-2 text-sm opacity-75 hover:opacity-100 hover:text-lime transition-all"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden />
                  <span className="font-latin">{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 min-h-[44px] py-2 text-sm opacity-75 hover:opacity-100 hover:text-lime transition-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden />
                  <span className="font-latin">{CONTACT.email}</span>
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-2 mt-4 flex-wrap">
              <SocialIcon href={SOCIAL.linkedin} label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </SocialIcon>
              <SocialIcon href={SOCIAL.twitter} label="X (Twitter)">
                <Twitter className="w-4 h-4" />
              </SocialIcon>
              <SocialIcon href={SOCIAL.instagram} label="Instagram">
                <Instagram className="w-4 h-4" />
              </SocialIcon>
              <SocialIcon href={SOCIAL.youtube} label="YouTube">
                <Youtube className="w-4 h-4" />
              </SocialIcon>
            </div>
          </div>

          {/* ─── التنقّل — 8/12 · ثلاثة أعمدة ────────────────── */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2">
            {GROUPS.map((g) => {
              const isOpen = openGroup === g.title;
              return (
                <div key={g.title} className="border-b border-cream/10 md:border-0">
                  {/* Accordion على الجوال · عنوان ثابت على سطح المكتب */}
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? null : g.title)}
                    aria-expanded={isOpen}
                    aria-controls={`footer-${g.title}`}
                    className="md:hidden w-full flex items-center justify-between min-h-[44px] py-3 text-xs font-bold uppercase tracking-widest text-cream/60"
                  >
                    <span>{g.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <h3 className="hidden md:block text-xs font-bold uppercase tracking-widest text-cream/50 mb-3">
                    {g.title}
                  </h3>

                  <ul id={`footer-${g.title}`} className={`${isOpen ? "block" : "hidden"} md:block pb-2 md:pb-0`}>
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <FooterLink href={l.href} external={l.external} badge={l.badge}>
                          {l.label}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── الشريط السفلي ───────────────────────────────── */}
        <div className="border-t border-cream/15 mt-12 pt-8">
          <ul className="flex flex-wrap items-center gap-x-5 mb-4">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center min-h-[44px] py-2 text-xs opacity-60 hover:opacity-100 hover:text-lime transition-all"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs opacity-55">
            <div className="space-y-1 leading-relaxed">
              <p className="font-medium opacity-80">{COMPANY.legalFull}</p>
              <p>
                <span className="font-latin">CR: 4030579637</span>
                {" · "}
                الرقم الموحد: <span className="font-latin">7041878278</span>
                {" · "}
                <span className="font-latin">MISA: 24926249716</span>
              </p>
              <p>
                <span className="font-latin">SAIP: #423450193</span>
                {" · "}
                <span className="font-latin">Tax: 312554598200003</span>
              </p>
            </div>
            <p className="font-latin whitespace-nowrap">
              © {new Date().getFullYear()} iGarden. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  external = false,
  badge,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  badge?: string;
}) {
  const cls =
    "inline-flex items-center gap-1.5 min-h-[44px] py-2 text-sm opacity-70 hover:opacity-100 hover:text-lime transition-all";
  const inner = (
    <>
      <span>{children}</span>
      {badge && (
        <span className="text-[10px] font-bold text-lime bg-lime/10 rounded-full px-2 py-0.5">
          {badge}
        </span>
      )}
      {external && <ExternalLink className="w-3 h-3 opacity-50 flex-shrink-0" aria-hidden />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center opacity-65 hover:opacity-100 hover:bg-lime hover:text-deep-green hover:border-lime transition-all"
    >
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.855L.057 23.5l5.797-1.52A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.63-.5-5.15-1.374l-.37-.218-3.44.903.918-3.354-.24-.386A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
