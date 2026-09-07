import type { Metadata } from "next";
import FastingRetreat from "./FastingRetreat";
export const metadata: Metadata = {
  title: { absolute: "Three-Day Fasting Retreat | Daily Oratory" },
  description:
    "A guided Catholic retreat with Jesus, Mary, and the Holy Family. Prayer, Scripture, and a gentle daily rhythm.",
  robots: { index: false, follow: false },
  openGraph: {
    images: [
      {
        url: "/images/fasting-retreat/01-retreat-opening.webp",
        width: 1024,
        height: 1536,
        alt: "A quiet chapel at dawn",
      },
    ],
  },
};
export default function RetreatPage() {
  return <FastingRetreat />;
}
