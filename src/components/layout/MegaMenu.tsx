"use client";

import Link from "next/link";
import {
  Tractor,
  Cpu,
  Leaf,
  ArrowLeft,
  ExternalLink,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import type { NavColumn } from "@/lib/constants";

const columnIconMap: Record<string, LucideIcon> = {
  tractor: Tractor,
  cpu: Cpu,
  leaf: Leaf,
};

interface MegaMenuProps {
  columns: NavColumn[];
  onClose?: () => void;
}

export default function MegaMenu({ columns, onClose }: MegaMenuProps) {
  return (
    <div
      className="absolute top-full right-0 mt-1 w-[720px] max-w-[90vw] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-ig-fade-down"
      role="menu"
      aria-label="قائمة الحلول"
    >
      <div className="grid grid-cols-3">
        {columns.map((col, idx) => {
          const Icon = columnIconMap[col.icon] ?? Leaf;

          return (
            <div
              key={idx}
              className={[
                "p-5",
                idx < columns.length - 1
                  ? "border-l border-gray-100"
                  : "",
              ].join(" ")}
            >
              {/* Column Header */}
              <div className="flex items-center gap-2 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#7CB342]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#0F3D2E]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#0F3D2E] text-sm leading-tight">
                  {col.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2 mb-4">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="group inline-flex items-center gap-1 text-sm text-gray-600 hover:text-[#0F3D2E] hover:font-medium transition-all duration-150"
                      >
                        <span>{item.label}</span>
                        <ExternalLink
                          className="w-3 h-3 opacity-40 group-hover:opacity-80 flex-shrink-0"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block text-sm text-gray-600 hover:text-[#0F3D2E] hover:font-medium transition-all duration-150"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Column CTA */}
              {col.cta && (
                <div className="pt-3 border-t border-gray-100">
                  <a
                    href={col.cta.href}
                    target={col.cta.external ? "_blank" : undefined}
                    rel={col.cta.external ? "noopener noreferrer" : undefined}
                    onClick={onClose}
                    className={[
                      "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150",
                      col.cta.variant === "live"
                        ? "text-[#7CB342] hover:text-[#0F3D2E]"
                        : "text-[#0F3D2E] hover:text-[#7CB342]",
                    ].join(" ")}
                  >
                    {col.cta.variant === "live" && (
                      <span className="relative inline-flex flex-shrink-0">
                        <span className="absolute inline-flex h-2 w-2 rounded-full bg-[#7CB342] opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7CB342]" />
                      </span>
                    )}
                    {col.cta.variant === "shop" && (
                      <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                    <span>{col.cta.label}</span>
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="bg-[#FAFAF7] px-5 py-2.5 border-t border-gray-100">
        <Link
          href="/solutions"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#0F3D2E] transition-colors duration-150"
        >
          <span>استعرض كل الحلول</span>
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
