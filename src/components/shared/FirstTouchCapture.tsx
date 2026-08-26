"use client";

import { useEffect } from "react";
import { captureFirstTouch } from "@/lib/lead-tracking";

/**
 * يلتقط **أول** صفحة وصول وأول UTM عند أوّل تحميل صفحة في المتصفّح.
 *
 * ⚠ لماذا في التخطيط الجذر وليس عند الإرسال: لو التُقطت أول لمسة لحظة إرسال
 * النموذج، لسُجِّلت صفحة النموذج بوصفها «أول صفحة وصول» — وهو عكس المطلوب.
 * الالتقاط هنا يجعل أول لمسة حقيقية مهما تنقّل الزائر قبل أن يراسلنا.
 *
 * يكتب مرّة واحدة فقط، ولا يرمي أبداً (التصفّح الخاص أو تخزين محجوب).
 */
export function FirstTouchCapture() {
  useEffect(() => {
    captureFirstTouch();
  }, []);
  return null;
}
