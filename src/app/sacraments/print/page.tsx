import type { Metadata } from "next";
import { SacramentPrintView } from "@/components/sacraments/SacramentPrintView";
import { SacramentsNav } from "@/components/sacraments/SacramentsNav";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Print Sacrament Preparation",
  description: "Print or export a local Daily Oratory sacrament preparation plan for parish conversation and personal prayer.",
  path: "/sacraments/print",
});

export default function SacramentPrintPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="print:hidden">
          <SacramentsNav />
          <SectionHeader
            eyebrow="Print / Export"
            title="Prepare a simple plan for prayer and parish conversation."
            summary="This export is a personal aid. It is not an official parish record or eligibility decision."
          />
        </div>
        <div className="mt-8 print:mt-0">
          <SacramentPrintView />
        </div>
      </section>
    </div>
  );
}
