"use client";

import { MessageSquare } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-900/30 hover:scale-110 active:scale-95 transition-transform duration-200"
    >
      <MessageSquare className="h-6 w-6 text-white" />
    </a>
  );
}
