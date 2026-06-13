import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RosaryPrayerRoomCTA } from "@/components/rosary/RosaryPrayerRoomCTA";
import { RosaryQuietRoom } from "@/components/rosary/RosaryQuietRoom";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "24/7 Rosary Quiet Room",
  description: "Enter a quiet 24/7 Rosary room with Gregorian chant in Latin for prayer with Mary and the mysteries of Christ.",
  path: "/rosary",
});

export default function RosaryPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Rosary" }]} />
        <section className="mt-6">
          <RosaryPrayerRoomCTA
            eyebrow="Holy Rosary guide"
            title="Learn the Mysteries of the Rosary"
            description="Open the Holy Rosary guide to meditate on each mystery and decade."
            buttonLabel="Open Holy Rosary Guide"
            href="/devotions/holy-rosary"
            compact
            quickLinks={[
              { label: "Joyful Mysteries", href: "/devotions/holy-rosary/joyful-mysteries" },
              { label: "Luminous Mysteries", href: "/devotions/holy-rosary/luminous-mysteries" },
              { label: "Sorrowful Mysteries", href: "/devotions/holy-rosary/sorrowful-mysteries" },
              { label: "Glorious Mysteries", href: "/devotions/holy-rosary/glorious-mysteries" },
            ]}
          />
        </section>
        <section className="mt-8">
          <RosaryQuietRoom />
        </section>
      </main>
    </div>
  );
}
