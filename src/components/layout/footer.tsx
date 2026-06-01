import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { COMPANY, CONTACT, SOCIAL } from "@/lib/constants";

const COMPANY_LINKS = [
  { label: "من نحن", href: "/about" },
  { label: "الفريق المؤسّس", href: "/about#team" },
  { label: "محطة عسفان", href: "/osfan-station" },
  { label: "المعرفة", href: "/learn" },
  { label: "تواصل معنا", href: "/contact" },
];

const SERVICES_LINKS = [
  { label: "أنظمة الزراعة المائية", href: "/products/hydroponics" },
  { label: "إنترنت الأشياء الزراعي", href: "/products/iot" },
  { label: "منصة Smart OS", href: "/products/smart-os" },
  { label: "جاهزية الامتثال", href: "/compliance" },
  { label: "كيف نعمل", href: "/how-we-work" },
];

const INDIVIDUALS_LINKS = [
  { label: "تطبيق الحديقة الذكية", href: "/app" },
  { label: "iGarden Home Solutions", href: "https://shop.igarden.sa", external: true },
  { label: "Demo تفاعلي", href: "https://demo.igarden.sa", external: true },
];

const LEGAL_LINKS = [
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "الشروط والأحكام", href: "/terms" },
  { label: "إخلاء الامتثال", href: "/compliance-disclaimer" },
  { label: "ميثاق بيانات العميل", href: "/data-charter" },
];

export function Footer() {
  return (
    <footer className="bg-deep-green text-cream" dir="rtl">
      {/* Brand strip */}
      <div className="border-b border-cream/10">
        <div className="container mx-auto px-4 max-w-7xl py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Image
              src="/logo/lockup-horizontal-en-white.png"
              alt="iGarden — الحديقة الذكية"
              width={140}
              height={40}
            />
            <p className="text-lime font-medium text-base mt-1">
              ازرع بذكاء.
            </p>
          </div>

          {/* Contact quick links */}
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 opacity-75 hover:opacity-100 hover:text-lime transition-all"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
                <span className="font-latin">{CONTACT.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phoneE164}`}
                className="flex items-center gap-2 opacity-75 hover:opacity-100 hover:text-lime transition-all"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
                <span className="font-latin">{CONTACT.phone}</span>
              </a>
            </li>
            <li className="flex items-start gap-2 opacity-60 text-sm">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden />
              <span>{COMPANY.hq}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4-column link grid */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* الشركة */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-cream/50 mb-4">
              الشركة
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-cream/50 mb-4">
              الخدمات
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((l) => (
                <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* للأفراد */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-cream/50 mb-4">
              للأفراد
            </h3>
            <ul className="space-y-2.5">
              {INDIVIDUALS_LINKS.map((l) => (
                <FooterLink key={l.href} href={l.href} external={l.external}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* قانوني */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-cream/50 mb-4">
              قانوني
            </h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
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

        {/* Legal strip */}
        <div className="border-t border-cream/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs opacity-55">
            <div className="space-y-1 leading-relaxed">
              <p className="font-medium opacity-80">{COMPANY.legalFull}</p>
              <p>
                <span className="font-latin">CR: 4030579637</span>
                {" · "}
                الرقم الموحد:{" "}
                <span className="font-latin">7041878278</span>
                {" · "}
                <span className="font-latin">MISA: 24926249716</span>
              </p>
              <p>
                <span className="font-latin">SAIP: #423450193</span>
                {" · "}
                <span className="font-latin">Tax: 312554598200003</span>
                {" · "}
                رأس المال:{" "}
                <span className="font-latin">100,000 SAR</span>
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
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "text-sm opacity-70 hover:opacity-100 hover:text-lime transition-all block";
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
      className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center opacity-65 hover:opacity-100 hover:bg-lime hover:text-deep-green hover:border-lime transition-all"
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
