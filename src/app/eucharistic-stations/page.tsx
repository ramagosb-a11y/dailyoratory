import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EucharisticStationsQuietRoom } from "@/components/eucharistic-stations/EucharisticStationsQuietRoom";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Fourteen Stations of the Eucharist",
  description: "Pray the Fourteen Stations of the Eucharist with a quiet video meditation and station-by-station prayers on the Real Presence of Christ.",
  path: "/eucharistic-stations",
});

export default function EucharisticStationsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Fourteen Stations of the Eucharist" }]} />
        <section className="mt-8">
          <EucharisticStationsQuietRoom />
        </section>
      </main>
    </div>
  );
}
