/**
 * Lead Tracking — قراءة معاملات الرابط وتحويلها إلى حمولة ليد.
 *
 * يُقرأ من `window.location.search` داخل useEffect بعد الترطيب، لا عبر
 * useSearchParams، تفادياً لاشتراط حدّ Suspense على صفحة عميلة كاملة.
 *
 * المعاملات المدعومة:
 *   ?interest=<حلّ|شريحة|نيّة>   → يُحلّ عبر resolveInterestParam
 *   ?cta=<معرّف>                → يُحفظ ضمن source_url كما هو (لا عمود جديد)
 *   ?utm_source= ?utm_medium= ?utm_campaign=  → أعمدة قائمة في جدول leads
 */

import { resolveInterestParam, type InterestResolution } from "./lead-schema";

/** حدّ طول دفاعي لأي قيمة قادمة من الرابط قبل أن تصل القاعدة. */
const MAX_PARAM_LEN = 120;

export type TrackingParams = {
  cta: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
};

export type LeadPrefill = {
  resolution: InterestResolution;
  tracking: TrackingParams;
};

function clean(raw: string | null): string | null {
  if (!raw) return null;
  const v = raw.trim().slice(0, MAX_PARAM_LEN);
  return v.length ? v : null;
}

/**
 * يحوّل سلسلة استعلام إلى تعبئة مسبقة + وسوم تتبّع.
 * لا يرمي أبداً — سلسلة تالفة تعود كتعبئة فارغة والنموذج يعمل طبيعياً.
 */
export function readLeadPrefill(search: string): LeadPrefill {
  const empty: LeadPrefill = {
    resolution: { interests: [] },
    tracking: { cta: null, utm_source: null, utm_medium: null, utm_campaign: null },
  };

  try {
    const q = new URLSearchParams(search);
    const resolution = resolveInterestParam(q.get("interest"));

    return {
      resolution,
      tracking: {
        // نيّة وصلت في ?interest= تُستعمل كـ CTA إن لم يُمرَّر ?cta= صراحةً
        cta: clean(q.get("cta")) ?? resolution.ctaFallback ?? null,
        utm_source: clean(q.get("utm_source")),
        utm_medium: clean(q.get("utm_medium")),
        utm_campaign: clean(q.get("utm_campaign")),
      },
    };
  } catch {
    return empty;
  }
}

/** يقرأ التعبئة المسبقة من الرابط الحالي في المتصفح. */
export function readLeadPrefillFromLocation(): LeadPrefill {
  if (typeof window === "undefined") {
    return {
      resolution: { interests: [] },
      tracking: { cta: null, utm_source: null, utm_medium: null, utm_campaign: null },
    };
  }
  return readLeadPrefill(window.location.search);
}
