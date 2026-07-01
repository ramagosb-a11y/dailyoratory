import type { Metadata } from "next";
import { FamilyLiturgicalLivingView } from "@/components/liturgical-living/FamilyLiturgicalLivingView";
import { createPageMetadata } from "@/lib/metadata";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Family Liturgical Living",
  description: "Simple Daily Oratory practices for family prayer, domestic Church rhythms, and works of mercy.",
  path: "/liturgical-living/family",
});

export default function FamilyPage() {
  return <FamilyLiturgicalLivingView />;
}
