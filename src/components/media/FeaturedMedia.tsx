import { MediaCard } from "@/components/media/MediaCard";
import { SectionHeader } from "@/components/section-header";
import { getMediaCategoryBySlug } from "@/lib/media";
import type { MediaCategory, MediaItem } from "@/types/media";

export function FeaturedMedia({ items, categories }: { items: MediaItem[]; categories: MediaCategory[] }) {
  return (
    <section id="featured-media" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Featured media"
        title="Start with featured resources"
        summary="A small set of approved media resources chosen to help visitors begin prayerfully and learn at a calm pace."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} category={getMediaCategoryBySlug(item.category, categories)} />
        ))}
      </div>
    </section>
  );
}
