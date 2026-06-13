import { Breadcrumbs } from "@/components/breadcrumbs";
import { getMediaCategoryBySlug, getMediaTypeLabel } from "@/lib/media";
import type { MediaCategory, MediaItem } from "@/types/media";

export function MediaDetailHero({ item, categories }: { item: MediaItem; categories: MediaCategory[] }) {
  const category = getMediaCategoryBySlug(item.category, categories);

  return (
    <header>
      <Breadcrumbs
        items={[
          { label: "Media Library", href: "/media" },
          { label: item.title },
        ]}
      />
      <div className="liturgical-page-hero mt-5 rounded-md border border-stone bg-parchment p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="season-pill">{getMediaTypeLabel(item.mediaType)}</span>
          {category ? <span className="season-pill border-gold text-gold">{category.title}</span> : null}
          {item.featured ? <span className="season-pill border-burgundy text-burgundy">Featured</span> : null}
        </div>
        <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{item.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{item.description}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
          {item.creator} • {item.sourceName} • Updated {item.updatedDate}
        </p>
      </div>
    </header>
  );
}
