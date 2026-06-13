import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RosaryMysterySetPage } from "@/components/rosary/RosaryMysterySetPage";
import { RosaryNav } from "@/components/rosary/RosaryNav";
import { createPageMetadata } from "@/lib/metadata";
import { getRosaryMysterySet } from "@/lib/rosary";

export const metadata: Metadata = createPageMetadata({
  title: "Glorious Mysteries",
  description: "Pray the Glorious Mysteries with fruits, Scripture references, and meditation prompts.",
  path: "/rosary/glorious-mysteries",
});

export default function GloriousMysteriesPage() {
  const mysterySet = getRosaryMysterySet("glorious-mysteries");
  if (!mysterySet) notFound();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <RosaryNav />
        <Breadcrumbs items={[{ label: "Rosary", href: "/rosary" }, { label: "Glorious Mysteries" }]} />
        <div className="mt-8">
          <RosaryMysterySetPage mysterySet={mysterySet} />
        </div>
      </main>
    </div>
  );
}
