import type { NextConfig } from "next";
import { legacyRedirects } from "./src/data/redirects";

const nextConfig: NextConfig = {
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
