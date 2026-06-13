import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WayOfCrossQuietRoom } from "@/components/way-of-cross/WayOfCrossQuietRoom";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Way of the Cross",
  description:
    "Pray St. Alphonsus Liguori's Way of the Cross with a quiet video meditation, station prayers, and notes on the indulgence for this devotion.",
  path: "/way-of-cross",
});

export default function WayOfCrossPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Way of the Cross" }]} />
        <section className="mt-8">
          <WayOfCrossQuietRoom />
        </section>
      </main>
    </div>
  );
}
