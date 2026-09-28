import { NightlyExamenExperience } from "@/components/daily-examen/NightlyExamenExperience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "The Last Light: A Catholic Nightly Examen",
  description: "A guided Catholic examination of conscience and evening prayer",
  path: "/daily-examen/nightly",
  image: "/images/daily-examen/presence.webp",
  imageAlt: "A candle and simple cross in the stillness of a chapel at night",
  keywords: ["nightly Examen", "Daily Examen", "Catholic night prayer", "Ignatian Examen"],
});

export default function NightlyExamenPage() {
  return <NightlyExamenExperience standalone />;
}
