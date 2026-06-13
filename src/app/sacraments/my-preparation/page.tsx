import type { Metadata } from "next";
import { MySacramentPreparationView } from "@/components/sacraments/MySacramentPreparationView";
import { SacramentsNav } from "@/components/sacraments/SacramentsNav";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "My Sacrament Preparation",
  description: "Continue locally saved Daily Oratory sacrament preparation progress.",
  path: "/sacraments/my-preparation",
});

export default function MySacramentPreparationPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <SacramentsNav />
        <SectionHeader
          eyebrow="My Preparation"
          title="Continue preparation with peace."
          summary="Progress saves only on this device. Bring official questions and requirements to your parish or diocese."
        />
        <div className="mt-8">
          <MySacramentPreparationView />
        </div>
      </section>
    </div>
  );
}
