import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LatinRosaryGuide } from "@/components/rosary/LatinRosaryGuide";
import { RosaryNav } from "@/components/rosary/RosaryNav";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Latin Rosary",
  description: "Pray the Latin Rosary with traditional prayers, English cues, and simple pronunciation help.",
  path: "/rosary/latin-rosary",
});

export default function LatinRosaryPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <RosaryNav />
        <Breadcrumbs items={[{ label: "Rosary", href: "/rosary" }, { label: "Latin Rosary" }]} />
        <div className="mt-8">
          <LatinRosaryGuide />
        </div>
      </main>
    </div>
  );
}
