import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APP_HOST = "app.igarden.sa";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // عند زيارة app.igarden.sa/ → اعرض محتوى /app بشفافية
  if (host === APP_HOST && pathname === "/") {
    return NextResponse.rewrite(new URL("/app", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // فقط على الصفحة الجذر، لا تتدخل في باقي المسارات
  matcher: ["/"],
};
