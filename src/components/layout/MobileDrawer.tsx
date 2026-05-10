"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { HEADER_NAV_ITEMS, MAIN_CTA } from "@/lib/constants";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

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

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="space-y-0.5">
            {HEADER_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 rounded-xl text-[15px] font-semibold text-[#0F3D2E] hover:bg-white hover:text-[#7CB342] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
