import { NightlyExamenExperience } from "@/components/daily-examen/NightlyExamenExperience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "The Last Light | A Nightly Examen",
  description:
    "End the day with a guided Catholic Examen of gratitude, honest review, mercy, discernment, and trust in God.",
  path: "/daily-examen/nightly",
  image: "/images/daily-examen/last-light-candle-v2.png",
  imageAlt: "A candle burning in a quiet room for The Last Light nightly Examen",
  keywords: ["nightly Examen", "Daily Examen", "Catholic night prayer", "Ignatian Examen"],
});

export default function NightlyExamenPage() {
  return <NightlyExamenExperience standalone />;
}
