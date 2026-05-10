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

  async rewrites() {
    return [
      {
        // app.igarden.sa/ → /app
        source: "/",
        destination: "/app",
        has: [{ type: "host", value: APP_HOST }],
      },
    ];
  },

  async redirects() {
    return [
      // ─── App subdomain ────────────────────────────────────────────
      {
        source: "/app",
        destination: `https://${APP_HOST}`,
        permanent: true,
        has: [{ type: "host", value: MAIN_HOST }],
      },
      {
        source: "/app",
        destination: `https://${APP_HOST}`,
        permanent: true,
        has: [{ type: "host", value: `www.${MAIN_HOST}` }],
      },

      // ─── /solutions/* → /products/* ──────────────────────────────
      { source: "/solutions", destination: "/products", permanent: true },
      { source: "/solutions/smart-controllers", destination: "/products/smart-controllers", permanent: true },
      { source: "/solutions/smart-greenhouses", destination: "/products/smart-greenhouses", permanent: true },
      { source: "/solutions/hydroponics", destination: "/products/hydroponics", permanent: true },

      // ─── /services/* → /products/* (Phase 3 will create real pages) ─
      { source: "/services", destination: "/products", permanent: false },
      { source: "/services/hardware", destination: "/products/hydroponics", permanent: false },
      { source: "/services/smart-os", destination: "/products/smart-controllers", permanent: false },
      { source: "/services/compliance", destination: "/compliance", permanent: false },
      { source: "/services/support", destination: "/how-we-work", permanent: false },

      // ─── /asfan → /osfan-station ─────────────────────────────────
      { source: "/asfan", destination: "/osfan-station", permanent: false },
      { source: "/asfan-station", destination: "/osfan-station", permanent: true },

      // ─── /projects → /case-studies ───────────────────────────────
      { source: "/projects", destination: "/case-studies", permanent: false },

      // ─── Academy / Knowledge ─────────────────────────────────────
      { source: "/academy", destination: "/learn", permanent: true },
      { source: "/knowledge", destination: "/learn", permanent: true },
      { source: "/knowledge/articles", destination: "/learn", permanent: true },

      // ─── Operational logs alias ──────────────────────────────────
      {
        source: "/operational-logs",
        destination: "/compliance",
        permanent: true,
      },

      // ─── Store redirect ──────────────────────────────────────────
      {
        source: "/store",
        destination: "https://shop.igarden.sa",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "https://shop.igarden.sa",
        permanent: true,
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
