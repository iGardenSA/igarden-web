"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, ExternalLink } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import {
  HEADER_NAV_ITEMS,
  MEGA_PATHS,
  MEGA_COLUMNS,
  MAIN_CTA,
  WHATSAPP_HREF,
  DEMO_URL,
  type NavColumnItem,
} from "@/lib/constants";

const PLATFORMS: NavColumnItem[] = [
  { label: "ديمو Smart OS", href: DEMO_URL, external: true },
];

const INDIVIDUALS: NavColumnItem[] = [
  { label: "Home Solutions — حلول الأفراد", href: "/home-solutions" },
];

const ROW =
  "flex items-center gap-1.5 min-h-[44px] px-4 py-2 text-sm text-[#6B7280] hover:text-[#0F3D2E] transition-colors";

function DrawerLink({
  item,
  onClose,
  className = ROW,
}: {
  item: NavColumnItem;
  onClose: () => void;
  className?: string;
}) {
  const inner = (
    <>
      <span>{item.label}</span>
      {item.external && (
        <ExternalLink className="w-3 h-3 opacity-50 flex-shrink-0" aria-hidden="true" />
      )}
    </>
  );
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className={className}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={item.href} onClick={onClose} className={className}>
      {inner}
    </Link>
  );
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setSolutionsOpen(false);
  }, [open]);

  // Escape + focus trap — التركيز يعود إلى زرّ القائمة عبر onClose في Header
  useEffect(() => {
    if (!open) return;
    const node = drawerRef.current;
    const sel =
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    node?.querySelector<HTMLElement>(sel)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !node) return;
      const items = Array.from(node.querySelectorAll<HTMLElement>(sel)).filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-dvh w-[min(320px,88vw)] bg-[#FAFAF7] flex flex-col shadow-2xl lg:hidden transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="قائمة التنقل"
        aria-modal="true"
        role="dialog"
      >
        {/* رأس الدرج */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-[#E5E7EB] bg-white flex-shrink-0">
          <Link href="/" onClick={onClose} aria-label="iGarden — الصفحة الرئيسية">
            <Image src="/logo/lockup-horizontal-en.svg" alt="iGarden" width={110} height={32} />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-11 h-11 text-[#0F3D2E] hover:bg-[#E5E7EB] rounded-lg transition-colors"
            aria-label="إغلاق القائمة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* التنقّل — padding سفلي يمنع تداخل الشريطين الثابتين */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 pb-6">
          <ul className="space-y-0.5">
            {/* الحلول — Accordion */}
            <li>
              <button
                type="button"
                onClick={() => setSolutionsOpen((v) => !v)}
                className="w-full flex items-center justify-between min-h-[44px] px-4 py-3 rounded-xl text-[15px] font-semibold text-[#0F3D2E] hover:bg-white transition-colors"
                aria-expanded={solutionsOpen}
                aria-controls="drawer-solutions"
              >
                <span>الحلول</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#7CB342] transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="drawer-solutions"
                hidden={!solutionsOpen}
                className="mt-1 mb-2 mr-2 rounded-xl bg-white border border-[#E5E7EB] overflow-hidden"
              >
                {/* المساران */}
                <div className="px-2 py-2 border-b border-[#E5E7EB]">
                  {MEGA_PATHS.map((p) => (
                    <DrawerLink
                      key={p.href}
                      item={p}
                      onClose={onClose}
                      className="flex items-center min-h-[44px] px-2 py-2 text-sm font-medium text-[#0F3D2E] hover:text-[#7CB342] transition-colors"
                    />
                  ))}
                </div>

                {/* العائلات الأربع */}
                {MEGA_COLUMNS.map((col, i) => (
                  <div key={col.title} className={i > 0 ? "border-t border-[#E5E7EB]" : ""}>
                    <p className="px-4 pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#7CB342]">
                      {col.title}
                    </p>
                    <ul className="pb-2">
                      {col.items.map((it) => (
                        <li key={it.href}>
                          <DrawerLink item={it} onClose={onClose} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="border-t border-[#E5E7EB] px-2">
                  <DrawerLink
                    item={{ label: "استعرض كل الحلول", href: "/products" }}
                    onClose={onClose}
                    className="flex items-center min-h-[44px] px-2 py-2 text-xs font-medium text-[#0F3D2E] hover:text-[#7CB342] transition-colors"
                  />
                </div>
              </div>
            </li>

            {/* بقية الروابط */}
            {HEADER_NAV_ITEMS.filter((i) => !i.hasMegaMenu).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center min-h-[44px] px-4 py-3 rounded-xl text-[15px] font-semibold text-[#0F3D2E] hover:bg-white hover:text-[#7CB342] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* منصات iGarden */}
          <p className="px-4 pt-5 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#7CB342]">
            منصات iGarden
          </p>
          <ul>
            {PLATFORMS.map((it) => (
              <li key={it.href}>
                <DrawerLink item={it} onClose={onClose} />
              </li>
            ))}
            <li>
              <Link
                href="/app"
                prefetch={false}
                onClick={onClose}
                className={`${ROW} justify-between`}
              >
                <span>تطبيق iGarden</span>
                <span className="text-[10px] font-bold text-[#7CB342] bg-[#7CB342]/10 rounded-full px-2 py-0.5">
                  قريباً
                </span>
              </Link>
            </li>
          </ul>

          {/* للأفراد */}
          <p className="px-4 pt-5 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#7CB342]">
            للأفراد
          </p>
          <ul>
            {INDIVIDUALS.map((it) => (
              <li key={it.href}>
                <DrawerLink item={it} onClose={onClose} />
              </li>
            ))}
          </ul>
        </nav>

        {/* الشريطان الثابتان */}
        <div className="flex-shrink-0 border-t border-[#E5E7EB] bg-[#FAFAF7] p-3 space-y-2">
          <CTAButton href={MAIN_CTA.href} variant="lime" className="w-full justify-center">
            {MAIN_CTA.label}
          </CTAButton>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 min-h-[44px] w-full rounded-full border border-[#7CB342] text-[#0F3D2E] font-medium text-sm hover:bg-[#7CB342] hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.855L.057 23.5l5.797-1.52A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.63-.5-5.15-1.374l-.37-.218-3.44.903.918-3.354-.24-.386A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            <span>واتساب</span>
          </a>
        </div>
      </aside>
    </>
  );
}
