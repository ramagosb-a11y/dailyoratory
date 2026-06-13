import type { Metadata } from "next";
import { SaintsByVirtue } from "@/components/saints/SaintsByVirtue";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Saints by Virtue",
  description: "Explore saints by virtue and discover habits of holiness to imitate this week.",
  path: "/saints/virtues",
});

export default function SaintsVirtuesPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <SaintsByVirtue />
      </section>
    </div>
  );
}
