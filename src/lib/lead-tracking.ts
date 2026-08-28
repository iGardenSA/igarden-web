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

// ============================================================================
// Attribution Bridge (Wave 2E)
// ============================================================================
// يحفظ **أول** صفحة وصول و**أول** UTM في localStorage عند أول زيارة، ثم
// يُرفقان بأي ليد لاحق مهما تعدّدت الصفحات داخل الجلسة.
//
// ⛔ صفر تغيير في مخطط القاعدة:
//   • أول صفحة وصول  → عمود `referrer` القائم (كان غير مستعمَل)
//   • أول UTM        → أعمدة utm_* القائمة، وتغلب عليها UTM الحالية إن وُجدت
//   • المُحيل الخارجي → يُضاف إلى `source_url` كوسم مقروء
// ============================================================================

const FIRST_TOUCH_KEY = "igarden_first_touch_v1";

export type FirstTouch = {
  landing_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  ts: string;
};

function safeGet(): FirstTouch | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(FIRST_TOUCH_KEY);
    return raw ? (JSON.parse(raw) as FirstTouch) : null;
  } catch {
    return null; // وضع التصفّح الخاص أو تخزين محجوب
  }
}

/**
 * يُسجّل أول لمسة مرّة واحدة فقط. استدعاؤه المتكرّر بلا أثر.
 * لا يرمي أبداً: أي فشل تخزين يُبتلع والنموذج يعمل طبيعياً.
 */
export function captureFirstTouch(): FirstTouch | null {
  if (typeof window === "undefined") return null;
  const existing = safeGet();
  if (existing) return existing;

  try {
    const q = new URLSearchParams(window.location.search);
    const ext = document.referrer && !document.referrer.includes(window.location.host)
      ? document.referrer.slice(0, MAX_PARAM_LEN)
      : null;
    const ft: FirstTouch = {
      landing_page: `${window.location.pathname}${window.location.search}`.slice(0, 500),
      referrer: ext,
      utm_source: clean(q.get("utm_source")),
      utm_medium: clean(q.get("utm_medium")),
      utm_campaign: clean(q.get("utm_campaign")),
      ts: new Date().toISOString(),
    };
    window.localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(ft));
    return ft;
  } catch {
    return null;
  }
}

export function getFirstTouch(): FirstTouch | null {
  return safeGet();
}

/**
 * يبني حقول النسبة الجاهزة للإدراج، دامجاً أول لمسة مع الرابط الحالي.
 * أولوية UTM: الحالية إن وُجدت، وإلا أول لمسة.
 */
export function buildAttribution(current: TrackingParams): {
  referrer: string | null;
  source_url: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
} {
  const ft = captureFirstTouch();
  const here = typeof window !== "undefined" ? window.location.href : null;

  const parts: string[] = [];
  if (here) parts.push(here);
  if (ft?.landing_page) parts.push(`first_page=${ft.landing_page}`);
  if (ft?.referrer) parts.push(`first_referrer=${ft.referrer}`);
  if (ft?.ts) parts.push(`first_seen=${ft.ts}`);

  return {
    // أول صفحة وصول — العمود القائم غير المستعمَل
    referrer: ft?.landing_page ?? null,
    source_url: parts.length ? parts.join(" | ").slice(0, 2000) : null,
    utm_source: current.utm_source ?? ft?.utm_source ?? null,
    utm_medium: current.utm_medium ?? ft?.utm_medium ?? null,
    utm_campaign: current.utm_campaign ?? ft?.utm_campaign ?? null,
  };
}
