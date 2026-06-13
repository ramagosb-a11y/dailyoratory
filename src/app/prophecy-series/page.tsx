import type { Metadata } from "next";
import { ProphecySeriesPageContent } from "@/components/prophecy-series/ProphecySeriesPageContent";
import { brand } from "@/config/brand";
import { getAbsoluteUrl, getCanonicalUrl } from "@/lib/metadata";

const title = "Prophecy Series";
const description =
  "Watch the Daily Oratory Prophecy Series, a 12-part Sunday evening video series premiering June 7 at 6:00 PM CST, with new episodes every Sunday.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Daily Oratory prophecy series",
    "Catholic prophecy series",
    "Christian prophecy",
    "Scripture prophecy",
    "discernment",
    "Catholic video series",
    "Sunday series",
    "faith formation",
  ],
  alternates: {
    canonical: getCanonicalUrl("/prophecy-series"),
  },
  openGraph: {
    title: "Prophecy Series",
    description:
      "A 12-part Daily Oratory series exploring prophecy with faith, Scripture, discernment, and hope in Christ. Premieres June 7 at 6:00 PM CST.",
    url: getCanonicalUrl("/prophecy-series"),
    siteName: brand.platformName,
    images: [
      {
        url: getAbsoluteUrl(brand.socialImage),
        width: 1200,
        height: 630,
        alt: "Daily Oratory Prophecy Series",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prophecy Series",
    description:
      "A 12-part Daily Oratory series exploring prophecy with faith, Scripture, discernment, and hope in Christ. Premieres June 7 at 6:00 PM CST.",
    images: [getAbsoluteUrl(brand.socialImage)],
  },
};

export default function ProphecySeriesPage() {
  return <ProphecySeriesPageContent />;
}
