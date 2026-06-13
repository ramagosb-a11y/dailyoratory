import { MediaCard } from "@/components/media/MediaCard";
import { SectionHeader } from "@/components/section-header";
import { getMediaCategoryBySlug } from "@/lib/media";
import type { MediaCategory, MediaItem } from "@/types/media";

export function RelatedMedia({ items, categories }: { items: MediaItem[]; categories: MediaCategory[] }) {
  if (items.length === 0) return null;

  return (
    <section>
      <SectionHeader
        eyebrow="Related media"
        title="More resources like this"
        summary="Continue with related media chosen by topic, tags, audience, and collection overlap."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} category={getMediaCategoryBySlug(item.category, categories)} />
        ))}
      </div>
    </section>
  );
}
