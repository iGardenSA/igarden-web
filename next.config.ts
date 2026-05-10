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

      // ─── /solutions/* → /products/* (URL aliasing) ───────────────
      {
        source: "/solutions",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/solutions/smart-controllers",
        destination: "/products/smart-controllers",
        permanent: true,
      },
      {
        source: "/solutions/smart-greenhouses",
        destination: "/products/smart-greenhouses",
        permanent: true,
      },
      {
        source: "/solutions/hydroponics",
        destination: "/products/hydroponics",
        permanent: true,
      },

      // ─── Academy / Knowledge ─────────────────────────────────────
      {
        source: "/academy",
        destination: "/learn",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/learn",
        permanent: false, // temporary until /blog has content
      },
      {
        source: "/knowledge",
        destination: "/learn",
        permanent: true,
      },
      {
        source: "/knowledge/articles",
        destination: "/learn",
        permanent: true,
      },

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
