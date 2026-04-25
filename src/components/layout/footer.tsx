import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { COMPANY, CONTACT, SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-deep-green text-cream">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        {/* 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand */}
          <div>
            <Image
              src="/logo/lockup-horizontal-en-white.png"
              alt="iGarden"
              width={140}
              height={40}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed opacity-80 mb-4">
              شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي.
              ننفّذ · نُوطّن · نُطوّر.
            </p>
            <p className="text-sm font-latin opacity-90">{COMPANY.tagline}</p>
          </div>

          {/* Column 2: الركائز */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-cream/60 mb-4">
              الركائز
            </h3>
            <ul className="space-y-2.5 text-sm">
              <FooterLink href="/products/smart-controllers">
                <span className="ltr-inline">Smart Controllers</span>
              </FooterLink>
              <FooterLink href="/products/smart-greenhouses">المحميات الذكية</FooterLink>
              <FooterLink href="/products/hydroponics">أنظمة الزراعة المائية</FooterLink>
              <FooterLink href="/osfan-station">محطة عسفان</FooterLink>
            </ul>
          </div>

          {/* Column 3: الشركة */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-cream/60 mb-4">
              الشركة
            </h3>
            <ul className="space-y-2.5 text-sm">
              <FooterLink href="/about">من نحن</FooterLink>
              <FooterLink href="/contact">تواصل معنا</FooterLink>
              <FooterLink href="/learn">الأكاديمية</FooterLink>
              <FooterLink href="/blog">المدونة</FooterLink>
              <FooterLink href={COMPANY.shopDomain ? `https://${COMPANY.shopDomain}` : "#"} external>
                متجر <span className="ltr-inline">iGarden</span> — حلول منزلية
              </FooterLink>
              <FooterLink href="https://demo.igarden.sa" external>
                الديمو التفاعلي
              </FooterLink>
            </ul>
          </div>

          {/* Column 4: التواصل */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-cream/60 mb-4">
              التواصل
            </h3>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-lime transition-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden />
                  <span className="ltr-inline">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneE164}`}
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-lime transition-all"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden />
                  <span className="ltr-inline">{CONTACT.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 opacity-70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden />
                <span>{COMPANY.hq}</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2 flex-wrap">
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
              <SocialIcon href={CONTACT.whatsapp} label="WhatsApp">
                <WhatsAppIcon />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Legal strip */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs opacity-60">
            <div className="space-y-1">
              <p>{COMPANY.legalFull}</p>
              <p>
                سجل تجاري{" "}
                <span className="ltr-inline font-latin">MISA: 24926249716</span>
              </p>
              <p>
                نموذج صناعي{" "}
                <span className="ltr-inline font-latin">SAIP: #423450193</span>
              </p>
            </div>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition-opacity">
                الشروط والأحكام
              </Link>
            </div>
            <p className="font-latin ltr-inline">
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
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls = "opacity-75 hover:opacity-100 hover:text-lime transition-all";
  if (external) {
    return (
      <li>
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link href={href} className={cls}>
        {children}
      </Link>
    </li>
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
      className="w-9 h-9 rounded-full border border-cream/25 flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-lime hover:text-deep-green hover:border-lime transition-all"
    >
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.855L.057 23.5l5.797-1.52A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.63-.5-5.15-1.374l-.37-.218-3.44.903.918-3.354-.24-.386A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
