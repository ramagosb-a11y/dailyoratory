import type { Metadata } from "next";
import { ExaminationCompanion } from "@/components/confession/companion/ExaminationCompanion";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Examination of Conscience Companion",
  description:
    "A private, mobile-friendly examination of conscience and confession companion. Preparation stays in this browser only.",
  path: "/confession/examination-companion",
});

export default function ExaminationCompanionPage() {
  return (
    <div className="paper-texture min-h-screen">
      <ExaminationCompanion />
    </div>
  );
}
