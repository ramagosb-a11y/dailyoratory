import type { Metadata } from "next";
import { AdorationAdminSchema } from "@/components/adoration/AdorationAdminSchema";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { AdorationSubmitStreamForm } from "@/components/adoration/AdorationSubmitStreamForm";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Submit Adoration Stream",
  description: "Submit a YouTube or Vimeo Eucharistic Adoration stream for Daily Oratory editorial review.",
  path: "/adoration/submit-stream",
});

export default function SubmitAdorationStreamPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <AdorationNav />
        <AdorationSubmitStreamForm />
        <section className="mt-14">
          <SectionHeader
            eyebrow="Review workflow"
            title="Streams remain private until verified."
            summary="The admin structure is ready for Google Sheets export and an optional Apps Script validator."
          />
          <div className="mt-8">
            <AdorationAdminSchema />
          </div>
        </section>
      </main>
    </div>
  );
}
