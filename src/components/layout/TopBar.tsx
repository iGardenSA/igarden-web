"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={[
        "sticky top-0 z-[60] transition-all duration-300",
        isScrolled
          ? "bg-[#0A2920]/95 backdrop-blur-md border-b border-[#1B5E3F]/40 shadow-sm shadow-black/20"
          : "bg-black/25 backdrop-blur-sm border-b border-white/15 shadow-sm shadow-black/10",
      ].join(" ")}
      role="navigation"
      aria-label="منصات iGarden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-9">
          {/* Platform Switcher */}
          <ul className="flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
            {TOP_BAR_ITEMS.map((item, idx) => {
              const Icon = iconMap[item.icon];
              const isLive = item.badge === "live";
              const isSoon = item.badge === "soon";

              const content = (
                <span
                  className={[
                    "inline-flex items-center gap-1.5",
                    "px-3 md:px-4 py-1 rounded-md",
                    "text-[13px] font-medium whitespace-nowrap",
                    "transition-all duration-150",
                    item.active
                      ? "bg-[#7CB342]/15 text-[#A5D63F]"
                      : "text-white/80 hover:text-[#A5D63F] hover:bg-white/5",
                  ].join(" ")}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>

                  {/* Fix 4: Live indicator — larger + glow + blur halo */}
                  {isLive && (
                    <span className="relative inline-flex ms-1" aria-label="مباشر">
                      <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#A5D63F] opacity-60 animate-ping" />
                      <span
                        className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#A5D63F] opacity-40"
                        style={{ filter: "blur(2px)" }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A5D63F]"
                        style={{ boxShadow: "0 0 8px rgba(165, 214, 63, 0.8)" }}
                      />
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

                  {/* Fix 5: separator always visible, more breathing room */}
                  {idx < TOP_BAR_ITEMS.length - 1 && (
                    <span
                      className="text-[#7CB342]/30 mx-1 text-xs select-none"
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
