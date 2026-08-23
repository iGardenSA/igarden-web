import Link from "next/link";
import { Monitor, ShoppingBag, Home, type LucideIcon } from "lucide-react";
import { UTILITY_ITEMS, type UtilityIconName } from "@/lib/constants";

const iconMap: Record<UtilityIconName, LucideIcon> = {
  monitor: Monitor,
  "shopping-bag": ShoppingBag,
  home: Home,
};

/**
 * شريط الخدمات — سطح المكتب فقط، وفي التدفق العادي (‏غير sticky).
 * الهيدر وحده هو اللاصق. ثلاثة روابط لا أكثر: Demo · المتجر · للأفراد.
 * على الجوال تظهر هذه الوجهات داخل الدرج تحت «منصات iGarden» و«للأفراد».
 */
export default function TopBar() {
  return (
    <div
      className="hidden lg:block bg-[#0A2920] border-b border-[#1B5E3F]/40"
      role="navigation"
      aria-label="منصات iGarden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <ul className="flex items-center justify-end gap-1">
          {UTILITY_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            const cls =
              "inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 text-[13px] font-medium whitespace-nowrap text-white/80 hover:text-[#A5D63F] transition-colors";
            const content = (
              <>
                <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{item.label}</span>
                {item.badge === "live" && (
                  <span className="relative inline-flex ms-1" aria-label="مباشر">
                    <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#A5D63F] opacity-60 animate-ping" />
                    <span
                      className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A5D63F]"
                      style={{ boxShadow: "0 0 8px rgba(165, 214, 63, 0.8)" }}
                    />
                  </span>
                )}
              </>
            );

            return (
              <li key={item.href} className="flex items-center">
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {content}
                  </a>
                ) : (
                  <Link href={item.href} className={cls}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
