import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@kahade/ui"],
  // Security headers — CSP sengaja tidak disentuh (ditunda per keputusan batch 3).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Whitepaper PDF: cache 1 jam (pola sama dengan legal.kahade.id, batch 7).
      {
        source: "/whitepaper-kahade.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
