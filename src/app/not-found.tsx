import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  robots: { index: false, follow: true },
};

const RECOVERY_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "الحلول", href: "/products" },
  { label: "المعرفة", href: "/learn" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="bg-[var(--color-surface)] section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="heading-section mb-4">الصفحة غير موجودة</h1>
          <p className="body-base text-medium-gray leading-relaxed mb-10">
            الرابط الذي وصلت منه لم يعد موجوداً أو تغيّر.
          </p>

          <nav aria-label="روابط الاسترجاع">
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {RECOVERY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center min-h-[44px] px-5 py-2.5 rounded-lg border-2 border-[var(--color-border)] text-[var(--color-brand-600)] text-sm font-semibold hover:border-[var(--color-brand-300)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
