import type { Metadata } from "next";
import { ParishReminder } from "@/components/sacraments/ParishReminder";
import { SacramentCard } from "@/components/sacraments/SacramentCard";
import { SacramentsNav } from "@/components/sacraments/SacramentsNav";
import { SectionHeader } from "@/components/section-header";
import { getPublishedSacramentCompanions } from "@/lib/sacraments";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sacrament Companions",
  description: "Browse Daily Oratory sacrament preparation companions with parish reminders, checklists, prayers, and reflection prompts.",
  path: "/sacraments/companion",
});

export default function SacramentCompanionPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <SacramentsNav />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <SectionHeader
            eyebrow="Companion Library"
            title="Choose the sacrament companion that fits your next step."
            summary="These guides help organize preparation, parish questions, reflection, prayer, and role-based support."
          />
          <ParishReminder compact />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {getPublishedSacramentCompanions().map((companion) => (
            <SacramentCard key={companion.slug} companion={companion} />
          ))}
        </div>
      </section>
    </div>
  );
}
