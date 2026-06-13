import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RosaryMysterySetPage } from "@/components/rosary/RosaryMysterySetPage";
import { RosaryNav } from "@/components/rosary/RosaryNav";
import { createPageMetadata } from "@/lib/metadata";
import { getRosaryMysterySet } from "@/lib/rosary";

export const metadata: Metadata = createPageMetadata({
  title: "Luminous Mysteries",
  description: "Pray the Luminous Mysteries with fruits, Scripture references, and meditation prompts.",
  path: "/rosary/luminous-mysteries",
});

export default function LuminousMysteriesPage() {
  const mysterySet = getRosaryMysterySet("luminous-mysteries");
  if (!mysterySet) notFound();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <RosaryNav />
        <Breadcrumbs items={[{ label: "Rosary", href: "/rosary" }, { label: "Luminous Mysteries" }]} />
        <div className="mt-8">
          <RosaryMysterySetPage mysterySet={mysterySet} />
        </div>
      </main>
    </div>
  );
}
