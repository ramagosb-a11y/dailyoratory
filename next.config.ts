import type { NextConfig } from "next";
import { legacyRedirects } from "./src/data/redirects";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: { qualities: [75, 85] },
  async redirects() {
    return [
      {
        source: "/reflections",
        destination: "/reflections/mass-readings",
        permanent: true,
      },
      ...legacyRedirects.map((redirect) => ({ ...redirect })),
    ];
  },
};

export default nextConfig;
