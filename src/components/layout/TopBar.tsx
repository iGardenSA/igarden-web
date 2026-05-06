"use client";

import Link from "next/link";
import { Globe, Monitor, ShoppingBag, Smartphone, type LucideIcon } from "lucide-react";
import { TOP_BAR_ITEMS, type TopBarIconName } from "@/lib/constants";

const iconMap: Record<TopBarIconName, LucideIcon> = {
  globe: Globe,
  monitor: Monitor,
  "shopping-bag": ShoppingBag,
  smartphone: Smartphone,
};

export default function TopBar() {
  return (
    <div
      className="bg-[#0A2920] border-b border-[#1B5E3F]/30"
      role="navigation"
      aria-label="منصات iGarden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-9">
          {/* Platform Switcher */}
          <ul className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide">
            {TOP_BAR_ITEMS.map((item, idx) => {
              const Icon = iconMap[item.icon];
              const isLive = item.badge === "live";
              const isSoon = item.badge === "soon";

              const content = (
                <span
                  className={[
                    "inline-flex items-center gap-1.5",
                    "px-2.5 py-1 rounded-md",
                    "text-[13px] font-medium whitespace-nowrap",
                    "transition-all duration-150",
                    item.active
                      ? "bg-[#7CB342]/15 text-[#A5D63F]"
                      : "text-white/80 hover:text-[#A5D63F] hover:bg-white/5",
                  ].join(" ")}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>

                  {isLive && (
                    <span className="relative inline-flex ms-0.5" aria-label="مباشر">
                      <span className="absolute inline-flex h-2 w-2 rounded-full bg-[#A5D63F] opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A5D63F]" />
                    </span>
                  )}

                  {isSoon && (
                    <span className="text-[10px] text-[#A5D63F]/70 ms-0.5">
                      قريباً
                    </span>
                  )}
                </span>
              );

              return (
                <li key={idx} className="flex items-center">
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href}>{content}</Link>
                  )}

                  {idx < TOP_BAR_ITEMS.length - 1 && (
                    <span
                      className="hidden md:inline text-[#7CB342]/30 mx-0.5 text-xs select-none"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-white/50 flex-shrink-0 ms-4">
            <span className="text-[#A5D63F] font-medium">AR</span>
            <span className="text-[#7CB342]/30">|</span>
            <button
              className="hover:text-[#A5D63F] transition-colors"
              aria-label="English"
              disabled
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
