import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResurrectionStationsQuietRoom } from "@/components/resurrection-stations/ResurrectionStationsQuietRoom";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Fourteen Stations of the Resurrection",
  description: "Pray the Via Lucis, the Fourteen Stations of the Resurrection, with a quiet video meditation and linked Way of Light prayer booklet.",
  path: "/resurrection-stations",
});

export default function ResurrectionStationsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Fourteen Stations of the Resurrection" }]} />
        <section className="mt-8">
          <ResurrectionStationsQuietRoom />
        </section>
      </main>
    </div>
  );
}
