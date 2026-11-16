import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dammam",
        destination: "/",
        permanent: true,
      },
      {
        source: "/dammam/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/riyadh",
        destination: "/",
        permanent: true,
      },
      {
        source: "/riyadh/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
