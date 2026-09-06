import type { Metadata } from "next";
import { MarianPrayerExperience } from "@/components/marian-prayer/MarianPrayerExperience";
import { reginaCaeliPrayerText } from "@/data/prayers";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Regina Caeli Prayer | Daily Oratory",
  description: "Pray the Regina Caeli, the Church's joyful Easter Marian prayer.",
  path: "/prayers/regina-caeli",
  keywords: ["Regina Caeli", "Regina Coeli", "Easter Marian prayer", "Catholic Easter prayer"],
});

export default function ReginaCaeliPage() {
  return (
    <MarianPrayerExperience
      eyebrow="Easter Marian prayer"
      imageAlt="The Blessed Virgin Mary surrounded by angels in heavenly glory"
      imagePosition="object-[center_15%]"
      imageSrc="/images/rosary/viewpoints/glorious/04_assumption/02_among_angelic_host.jpg"
      key="regina-caeli"
      prayer={reginaCaeliPrayerText}
      subtitle="The Church's joyful Easter prayer to Mary, rejoicing in the Resurrection of her Son."
      title="Regina Caeli"
    />
  );
}
