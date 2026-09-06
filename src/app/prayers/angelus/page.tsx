import type { Metadata } from "next";
import { MarianPrayerExperience } from "@/components/marian-prayer/MarianPrayerExperience";
import { angelusPrayerText } from "@/data/prayers";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "The Angelus Prayer | Daily Oratory",
  description: "Pray the Angelus, the traditional Marian prayer of the Incarnation.",
  path: "/prayers/angelus",
  keywords: ["Angelus", "Angelus prayer", "Catholic noon prayer", "Marian prayer", "Incarnation"],
});

export default function AngelusPage() {
  return (
    <MarianPrayerExperience
      eyebrow="Marian prayer · Morning, noon, and evening"
      imageAlt="The Angel Gabriel at the Annunciation"
      imagePosition="object-[center_15%]"
      imageSrc="/images/rosary/viewpoints/joyful/01_annunciation/01_from_marys_prie_dieu.jpg"
      key="angelus"
      prayer={angelusPrayerText}
      subtitle="A pause in the day to remember that the Word became flesh and dwelt among us."
      title="The Angelus"
    />
  );
}
