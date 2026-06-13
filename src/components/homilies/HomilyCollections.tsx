import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import type { HomilyCollection } from "@/types/homilies";

export function HomilyCollections({ collections }: { collections: HomilyCollection[] }) {
  if (!collections.length) return null;

  return (
    <section>
      <SectionHeader
        eyebrow="Collections"
        title="Guided Homily Collections"
        summary="Curated sets of preaching and reflection for prayer, Scripture, and steady Catholic discipleship."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {collections.map((collection) => (
          <article key={collection.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Collection</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{collection.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{collection.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
              {collection.homilyIds.length + collection.playlistIds.length} linked items
            </p>
            <div className="mt-5">
              <Link href={`/homilies?collection=${collection.slug}`} className="text-link focus-ring text-sm font-semibold">
                Open Collection
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
