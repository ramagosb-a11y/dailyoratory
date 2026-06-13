import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getMediaThumbnail, getMediaTypeLabel } from "@/lib/media";
import type { MediaItem } from "@/types/media";

export function PrayerMediaFeature({ item }: { item: MediaItem | null }) {
  if (!item) return null;

  const thumbnail = getMediaThumbnail(item);

  return (
    <section>
      <SectionHeader
        eyebrow="Featured prayer talk"
        title="Go deeper into the levels of prayer."
        summary="This trusted talk on spiritual theology sits naturally beside the prayer guide above and gives a fuller treatment of how Catholics grow from simple prayer into recollection, meditation, and deeper union with God."
      />

      <article className="card mt-7 grid overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
        <div className="aspect-video overflow-hidden border-b border-stone bg-navy/5 lg:aspect-auto lg:min-h-[22rem] lg:border-b-0 lg:border-r">
          <img
            src={thumbnail}
            alt={item.altText}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="season-pill">{getMediaTypeLabel(item.mediaType)}</span>
              <span className="season-pill border-gold text-gold">Prayer</span>
            </div>
            <h3 className="font-display mt-4 text-4xl font-semibold leading-tight text-navy">
              <Link href={`/media/${item.slug}`} className="focus-ring rounded-sm">
                {item.title}
              </Link>
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">{item.shortDescription}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
              {item.creator} • {item.sourceName}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.slice(0, 3).map((tag) => (
                <span
                  key={`${item.id}-${tag}`}
                  className="rounded-full border border-stone px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <TrackedLink
              href={`/media/${item.slug}`}
              className="btn btn-primary focus-ring"
              eventName="prayer_tool_click"
              eventParams={{
                tool_name: item.title,
                destination: `/media/${item.slug}`,
                section: "prayer-featured-media",
                page_path: "/pray",
              }}
            >
              Watch this talk
            </TrackedLink>
            <Link href="/media" className="btn btn-secondary focus-ring">
              Browse Media Library
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
