"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "igarden_privacy_accepted";

export function PrivacyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch {
      // localStorage unavailable — don't show banner
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // silent
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="إشعار الخصوصية"
      className="fixed bottom-0 inset-x-0 z-50 bg-[#0F3D2E] text-white shadow-2xl border-t border-[#1B5E3F]"
      dir="rtl"
    >
      <div className="container mx-auto px-4 max-w-7xl py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-white/85 leading-relaxed">
          نستخدم البيانات التي ترسلها عبر النماذج للتواصل معك بخصوص طلبك وتحسين خدماتنا.
          قد نستخدم أدوات تحليل لفهم أداء الموقع.{" "}
          <Link
            href="/privacy"
            className="text-[#A5D63F] hover:underline font-medium"
            onClick={dismiss}
          >
            سياسة الخصوصية
          </Link>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={dismiss}
            className="px-5 py-2 bg-[#7CB342] hover:bg-[#A5D63F] text-[#0F3D2E] rounded-lg text-sm font-semibold transition-colors"
          >
            موافق
          </button>
          <button
            onClick={dismiss}
            aria-label="إغلاق إشعار الخصوصية"
            className="p-1.5 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
