import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=7200",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Proxy FDA API to avoid client-side CORS (server-side fetches bypass this)
      {
        source: "/proxy/fda/:path*",
        destination: "https://api.fda.gov/:path*",
      },
      // Proxy CMS data
      {
        source: "/proxy/cms/:path*",
        destination: "https://data.cms.gov/:path*",
      },
    ];
  },
  // Allow fetching from these domains in server components
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.fda.gov" },
      { protocol: "https", hostname: "data.cms.gov" },
    ],
  },
};

export default nextConfig;
