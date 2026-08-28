import type { Metadata } from "next";
import { VisualRosaryExperience } from "@/components/rosary/visual/VisualRosaryExperience";
import { rosaryMysteries, rosaryMysteryGroups, rosaryPrayers } from "@/data/rosaryMysteries";
import { rosaryViewpoints } from "@/data/rosaryViewpoints";

export const metadata: Metadata = {
  title: "Visual Rosary Meditation Preview",
  description: "A mobile-first guided Holy Rosary with sacred artwork, contemplative viewpoints, and Seven-Senses meditation.",
  robots: { index: false, follow: false },
};

export default function VisualRosaryMeditationPage() {
  return (
    <VisualRosaryExperience
      groups={rosaryMysteryGroups}
      mysteries={rosaryMysteries}
      prayers={rosaryPrayers}
      viewpoints={rosaryViewpoints}
    />
  );
}
