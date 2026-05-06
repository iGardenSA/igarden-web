"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ChevronDown,
  Globe,
  Monitor,
  ShoppingBag,
  Smartphone,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { HEADER_NAV_ITEMS, TOP_BAR_ITEMS, MAIN_CTA, type TopBarIconName } from "@/lib/constants";

const topBarIconMap: Record<TopBarIconName, LucideIcon> = {
  globe: Globe,
  monitor: Monitor,
  "shopping-bag": ShoppingBag,
  smartphone: Smartphone,
};

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset accordion when drawer closes
  useEffect(() => {
    if (!open) setSolutionsOpen(false);
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-dvh w-[min(320px,88vw)] bg-[#FAFAF7] flex flex-col shadow-2xl lg:hidden transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="قائمة التنقل"
        aria-modal="true"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-14 border-b border-[#E5E7EB] bg-white">
          <Link href="/" onClick={onClose} aria-label="iGarden — الصفحة الرئيسية">
            <Image
              src="/logo/lockup-horizontal-en.svg"
              alt="iGarden"
              width={110}
              height={32}
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-[#0F3D2E] hover:bg-[#E5E7EB] rounded-lg transition-colors"
            aria-label="إغلاق القائمة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mini TopBar (platforms) */}
        <div className="bg-[#0A2920] px-3 py-2">
          <ul className="flex items-center gap-0.5 flex-wrap">
            {TOP_BAR_ITEMS.map((item, idx) => {
              const Icon = topBarIconMap[item.icon];
              const isLive = item.badge === "live";
              const isSoon = item.badge === "soon";

              const content = (
                <span
                  className={[
                    "inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[12px] font-medium whitespace-nowrap transition-colors",
                    item.active
                      ? "bg-[#7CB342]/15 text-[#A5D63F]"
                      : "text-white/70 hover:text-[#A5D63F]",
                  ].join(" ")}
                >
                  <Icon className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                  {isLive && (
                    <span className="relative inline-flex ms-0.5" aria-label="مباشر">
                      <span className="absolute inline-flex h-1.5 w-1.5 rounded-full bg-[#A5D63F] opacity-75 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#A5D63F]" />
                    </span>
                  )}
                  {isSoon && (
                    <span className="text-[10px] text-[#A5D63F]/70 ms-0.5">قريباً</span>
                  )}
                </span>
              );

              return (
                <li key={idx}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href} onClick={onClose}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="space-y-0.5">
            {HEADER_NAV_ITEMS.map((item) => {
              if (item.hasMegaMenu) {
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => setSolutionsOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-semibold text-[#0F3D2E] hover:bg-white transition-colors"
                      aria-expanded={solutionsOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#7CB342] transition-transform duration-200 ${
                          solutionsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {solutionsOpen && (
                      <div className="mt-1 mb-2 mr-2 rounded-xl bg-white border border-[#E5E7EB] overflow-hidden">
                        {item.megaMenuColumns.map((col, colIdx) => (
                          <div
                            key={colIdx}
                            className={colIdx > 0 ? "border-t border-[#E5E7EB]" : ""}
                          >
                            <p className="px-4 pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#7CB342]">
                              {col.title}
                            </p>
                            <ul className="pb-2">
                              {col.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  {subItem.external ? (
                                    <a
                                      href={subItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={onClose}
                                      className="flex items-center gap-1.5 px-4 py-2 text-sm text-[#6B7280] hover:text-[#0F3D2E] transition-colors"
                                    >
                                      <span>{subItem.label}</span>
                                      <ExternalLink className="w-3 h-3 opacity-50 flex-shrink-0" aria-hidden="true" />
                                    </a>
                                  ) : (
                                    <Link
                                      href={subItem.href}
                                      onClick={onClose}
                                      className="block px-4 py-2 text-sm text-[#6B7280] hover:text-[#0F3D2E] transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="border-t border-[#E5E7EB] px-4 py-2.5">
                          <Link
                            href="/solutions"
                            onClick={onClose}
                            className="text-xs font-medium text-[#0F3D2E] hover:text-[#7CB342] transition-colors"
                          >
                            استعرض كل الحلول ←
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-xl text-[15px] font-semibold text-[#0F3D2E] hover:bg-white hover:text-[#7CB342] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="p-4 border-t border-[#E5E7EB]">
          <CTAButton href={MAIN_CTA.href} variant="lime" className="w-full justify-center">
            {MAIN_CTA.label}
          </CTAButton>
        </div>
      </aside>
    </>
  );
}
