import type { NextConfig } from "next";

const APP_HOST = "app.igarden.sa";
const MAIN_HOST = "igarden.sa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "igarden.sa",
      },
      {
        protocol: "https",
        hostname: "app.igarden.sa",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // RTL/i18n لاحقاً عند إضافة النسخة الإنجليزية
  // i18n: { locales: ["ar", "en"], defaultLocale: "ar" },

  // ─────────────────────────────────────────────────────────
  // Subdomain routing — app.igarden.sa
  // ─────────────────────────────────────────────────────────
  async rewrites() {
    return [
      {
        // عند زيارة app.igarden.sa/ → اعرض محتوى /app بشفافية
        source: "/",
        destination: "/app",
        has: [{ type: "host", value: APP_HOST }],
      },
    ];
  },

  async redirects() {
    return [
      {
        // عند زيارة igarden.sa/app → حوّل لـ app.igarden.sa
        source: "/app",
        destination: `https://${APP_HOST}`,
        permanent: true,
        has: [{ type: "host", value: MAIN_HOST }],
      },
      {
        // عند زيارة www.igarden.sa/app → حوّل لـ app.igarden.sa
        source: "/app",
        destination: `https://${APP_HOST}`,
        permanent: true,
        has: [{ type: "host", value: `www.${MAIN_HOST}` }],
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
