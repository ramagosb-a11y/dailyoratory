import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getMediaItemsForCollection } from "@/lib/media";
import type { MediaCollection, MediaItem } from "@/types/media";

export function MediaCollections({ collections, items }: { collections: MediaCollection[]; items: MediaItem[] }) {
  return (
    <section>
      <SectionHeader
        eyebrow="Collections"
        title="Featured collections"
        summary="Grouped media sets for prayer, formation, OCIA, family life, and a first introduction to Catholic worship."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {collections.map((collection) => {
          const collectionItems = getMediaItemsForCollection(collection, items);
          return (
            <article key={collection.id} className="card-parchment flex h-full flex-col p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Collection</p>
              <h3 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy">{collection.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">{collection.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {collectionItems.slice(0, 3).map((item) => (
                  <span key={`${collection.id}-${item.id}`} className="rounded-full border border-stone px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {item.title}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
                {collectionItems.length} approved item{collectionItems.length === 1 ? "" : "s"}
              </p>
              <div className="mt-5">
                <Link href="#media-browser" className="text-link focus-ring text-sm">
                  Browse Collection
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
