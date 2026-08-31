import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APP_HOST = "app.igarden.sa";
const CANONICAL_ORIGIN = "https://igarden.sa";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // المسار المعتمد للتطبيق هو https://igarden.sa/app.
  // النطاق الفرعي يُحوَّل تحويلاً دائماً (301) بدل rewrite، كي لا تبقى
  // نسختان مستقلّتان من المحتوى على عنوانين. الـquery يُحفظ كما هو.
  if (host === APP_HOST) {
    const target = new URL(request.nextUrl.pathname, CANONICAL_ORIGIN);
    target.search = request.nextUrl.search;
    if (target.pathname === "/") target.pathname = "/app";
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  // كل المسارات عدا أصول Next والملفّات الثابتة — كي لا يبقى أيّ مسار
  // على النطاق الفرعي يخدم نسخة ثانية من المحتوى.
  matcher: ["/((?!_next/|api/|.*\\.[\\w]+$).*)"],
};
