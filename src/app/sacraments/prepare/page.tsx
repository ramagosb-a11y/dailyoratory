import type { Metadata } from "next";
import { SacramentPrepareWizard } from "@/components/sacraments/SacramentPrepareWizard";
import { SacramentsNav } from "@/components/sacraments/SacramentsNav";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Prepare for a Sacrament",
  description: "Use a gentle Daily Oratory wizard to choose a sacrament preparation companion and save local progress.",
  path: "/sacraments/prepare",
});

export default function SacramentPreparePage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <SacramentsNav />
        <SacramentPrepareWizard />
      </section>
    </div>
  );
}
