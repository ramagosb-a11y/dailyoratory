import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DivineMercyQuietRoom } from "@/components/divine-mercy/DivineMercyQuietRoom";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Divine Mercy Quiet Room",
  description: "Enter a quiet 24/7 Divine Mercy Chaplet room with prayers for mercy, conversion, the dying, and the whole world.",
  path: "/divine-mercy",
});

export default function DivineMercyPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Divine Mercy" }]} />
        <section className="mt-8">
          <DivineMercyQuietRoom />
        </section>
      </main>
    </div>
  );
}
