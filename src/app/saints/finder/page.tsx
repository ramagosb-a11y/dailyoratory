import type { Metadata } from "next";
import { SaintCompanionFinder } from "@/components/saints/SaintCompanionFinder";
import { SaintsPastoralNote } from "@/components/saints/SaintsPastoralNote";
import { SaintsFAQ } from "@/components/saints/SaintsFAQ";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Saint Companion Finder",
  description:
    "Find a Catholic saint companion based on your spiritual needs, virtues, life situation, and path of discipleship.",
  path: "/saints/finder",
});

export default function SaintFinderPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <SaintCompanionFinder />
        <SaintsPastoralNote />
        <SaintsFAQ />
      </section>
    </div>
  );
}
