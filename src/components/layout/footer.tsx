import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { COMPANY, CONTACT, SOCIAL, NAV_MAIN } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-600)] text-white mt-24">
      <div className="container-igarden py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* عمود العلامة */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full border-2 border-[var(--color-accent-500)] flex items-center justify-center">
                <span className="text-[var(--color-accent-500)] font-bold text-lg">
                  iG
                </span>
              </div>
              <div className="leading-none">
                <p className="font-display text-xl font-bold">iGarden</p>
                <p className="text-xs text-white/70 mt-1">{COMPANY.nameAr}</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mt-4">
              نقود التحول الرقمي الزراعي في المنطقة عبر منظومة متكاملة تجمع الذكاء
              الاصطناعي وإنترنت الأشياء.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {NAV_MAIN.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-[var(--color-accent-300)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الحلول */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              حلولنا
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/products#tower" className="hover:text-[var(--color-accent-300)]">
                  iGarden Tower
                </Link>
              </li>
              <li>
                <Link href="/products#greenhouse" className="hover:text-[var(--color-accent-300)]">
                  Smart Greenhouses
                </Link>
              </li>
              <li>
                <Link href="/products#aquaponics" className="hover:text-[var(--color-accent-300)]">
                  Aquaponics
                </Link>
              </li>
              <li>
                <Link href="/products#cloud" className="hover:text-[var(--color-accent-300)]">
                  iGarden Cloud
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[var(--color-accent-300)]">
                  المدونة
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[var(--color-accent-300)]">
                  دراسات الحالة
                </Link>
              </li>
            </ul>
          </div>

          {/* التواصل */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              تواصل معنا
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-white/80 hover:text-[var(--color-accent-300)] transition-colors"
                  dir="ltr"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneE164}`}
                  className="flex items-center gap-2 text-white/80 hover:text-[var(--color-accent-300)] transition-colors"
                  dir="ltr"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{COMPANY.hq}</span>
              </li>
            </ul>

            {/* وسائل التواصل */}
            <div className="flex items-center gap-2 mt-6">
              <SocialLink href={SOCIAL.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SOCIAL.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SOCIAL.twitter} label="Twitter / X">
                <Twitter className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalAr}. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="hover:text-white">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
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
      className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-[var(--color-accent-500)] hover:text-[var(--color-brand-700)] hover:border-[var(--color-accent-500)] transition-all"
    >
      {children}
    </a>
  );
}
