"use client";

import Link from "next/link";
import {
  Sprout,
  Cpu,
  MonitorCog,
  Sun,
  ArrowLeft,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { MEGA_PATHS, MEGA_COLUMNS, MEGA_FOOTER, type NavColumnItem } from "@/lib/constants";

const columnIconMap: Record<string, LucideIcon> = {
  sprout: Sprout,
  cpu: Cpu,
  "monitor-cog": MonitorCog,
  sun: Sun,
};

function LiveDot() {
  return (
    <span className="relative inline-flex flex-shrink-0" aria-label="مباشر">
      <span className="absolute inline-flex h-2 w-2 rounded-full bg-[#7CB342] opacity-75 animate-ping" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7CB342]" />
    </span>
  );
}

function MenuLink({
  item,
  onClose,
  className,
}: {
  item: NavColumnItem;
  onClose?: () => void;
  className: string;
}) {
  const inner = (
    <>
      {item.badge === "live" && <LiveDot />}
      <span>{item.label}</span>
      {item.external && (
        <ExternalLink className="w-3.5 h-3.5 opacity-40 flex-shrink-0" aria-hidden="true" />
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

interface MegaMenuProps {
  onClose?: () => void;
}

/**
 * قائمة الحلول — تُفتح بالنقر فقط (‏لا onMouseEnter).
 * الإغلاق بـEscape أو بالنقر خارجها، ويعود التركيز إلى زر «الحلول» — يديرهما Header.
 * <nav aria-label> لا role="menu"، تفادياً لعقد ARIA ناقص منطق لوحة المفاتيح.
 */
export default function MegaMenu({ onClose }: MegaMenuProps) {
  const itemCls =
    "inline-flex items-center gap-1.5 min-h-[44px] py-2 text-sm text-gray-600 hover:text-[#0F3D2E] hover:font-medium transition-all duration-150";

  return (
    <nav
      aria-label="الحلول"
      className="absolute top-full inset-x-0 mt-1 container mx-auto px-4 max-w-7xl animate-ig-fade-down"
    >
      <div className="w-full lg:w-[980px] lg:max-w-full ms-auto bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* المساران */}
      <div className="bg-[#FAFAF7] border-b border-gray-100 px-5 py-2">
        <ul className="flex flex-wrap items-center gap-2">
          {MEGA_PATHS.map((p) => (
            <li key={p.href}>
              <MenuLink
                item={p}
                onClose={onClose}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-[#0F3D2E] hover:border-[#7CB342] hover:text-[#7CB342] transition-colors"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* أربعة أعمدة فعلية */}
      <div className="grid grid-cols-4">
        {MEGA_COLUMNS.map((col, idx) => {
          const Icon = columnIconMap[col.icon] ?? Sprout;
          return (
            <div
              key={col.title}
              className={idx < MEGA_COLUMNS.length - 1 ? "p-5 border-l border-gray-100" : "p-5"}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-lg bg-[#7CB342]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#0F3D2E]" aria-hidden="true" />
                </span>
                <h3 className="font-bold text-[#0F3D2E] text-sm leading-tight">{col.title}</h3>
              </div>

              <ul>
                {col.items.map((item) => (
                  <li key={item.href}>
                    <MenuLink item={item} onClose={onClose} className={itemCls} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* الشريط السفلي */}
      <div className="bg-[#FAFAF7] px-5 border-t border-gray-100">
        <ul className="flex flex-wrap items-center gap-x-5">
          {MEGA_FOOTER.map((item) => (
            <li key={item.href}>
              <MenuLink
                item={item}
                onClose={onClose}
                className="inline-flex items-center gap-1.5 min-h-[44px] py-2 text-xs font-medium text-gray-500 hover:text-[#0F3D2E] transition-colors"
              />
            </li>
          ))}
          <li className="ms-auto">
            <ArrowLeft className="w-3.5 h-3.5 text-gray-300" aria-hidden="true" />
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
