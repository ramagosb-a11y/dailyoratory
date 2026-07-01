import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { MediaCopyrightNote } from "@/components/media/MediaCopyrightNote";
import { MediaDetailHero } from "@/components/media/MediaDetailHero";
import { MediaEmbed } from "@/components/media/MediaEmbed";
import { MediaSourceNote } from "@/components/media/MediaSourceNote";
import { RelatedDailyOratoryLinks } from "@/components/media/RelatedDailyOratoryLinks";
import { RelatedMedia } from "@/components/media/RelatedMedia";
import { ShareMediaButton } from "@/components/media/ShareMediaButton";
import { brand } from "@/config/brand";
import { getAbsoluteUrl, getCanonicalUrl } from "@/lib/metadata";
import {
  getApprovedMediaItems,
  getMediaCategories,
  getMediaItemBySlug,
  getMediaThumbnail,
  getMediaTypeLabel,
  getRelatedMediaItems,
} from "@/lib/media";
import type { MediaItem } from "@/types/media";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getApprovedMediaItems()).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getMediaItemBySlug(slug);

  if (!item) return {};

  const path = `/media/${item.slug}`;
  const description = buildMediaMetadataDescription(item);
  const imageUrl = getAbsoluteUrl(getMediaThumbnail(item));

  return {
    title: `${item.title} | Catholic Media Library`,
    description,
    alternates: {
      canonical: getCanonicalUrl(path),
    },
    openGraph: {
      title: item.title,
      description,
      url: getCanonicalUrl(path),
      siteName: brand.platformName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: item.altText,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function MediaItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getMediaItemBySlug(slug);

  if (!item) notFound();

  const [relatedMedia, categories] = await Promise.all([getRelatedMediaItems(item, 3), getMediaCategories()]);
  const sourceActionLabel =
    item.mediaType === "youtube-playlist"
      ? "Open Playlist on YouTube"
      : item.mediaType === "youtube-video"
        ? "Open Video on YouTube"
        : "Open Original Source";

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <MediaDetailHero item={item} categories={categories} />

        <section className="mt-10 grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <div className="grid gap-8">
            <MediaEmbed item={item} />

            <section className="card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Description</p>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              {item.relatedScriptureReferences.length > 0 ? (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Related Scripture</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.relatedScriptureReferences.map((reference) => (
                      <span key={`${item.id}-${reference}`} className="rounded-full border border-stone px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {reference}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              {item.relatedCatechismReferences.length > 0 ? (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Related Catechism</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.relatedCatechismReferences.map((reference) => (
                      <span key={`${item.id}-${reference}`} className="rounded-full border border-stone px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {reference}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>

            <RelatedDailyOratoryLinks links={item.relatedDailyOratoryLinks} />
            <RelatedMedia items={relatedMedia} categories={categories} />
          </div>

          <aside className="grid gap-6 xl:sticky xl:top-24">
            <section className="card-parchment p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Actions</p>
              <div className="mt-5 grid gap-3">
                <ShareMediaButton />
                {item.sourceUrl ? (
                  <TrackedLink
                    href={item.sourceUrl}
                    external
                    eventName="media_external_open"
                    eventParams={{ page_path: `/media/${item.slug}`, media_slug: item.slug, media_type: item.mediaType }}
                    className="btn btn-secondary focus-ring"
                  >
                    {sourceActionLabel}
                  </TrackedLink>
                ) : null}
              </div>
            </section>
            <MediaSourceNote item={item} />
            <MediaCopyrightNote />
          </aside>
        </section>
      </main>
    </div>
  );
}

function buildMediaMetadataDescription(item: MediaItem) {
  const description = item.description.trim();
  const shortDescription = item.shortDescription.trim();
  const descriptiveSource = [shortDescription, description].find((value) => value.length >= 70 && value !== item.title);

  if (descriptiveSource) {
    return descriptiveSource;
  }

  const mediaType = getMediaTypeLabel(item.mediaType).toLowerCase();
  const topic = item.topic ? ` on ${item.topic}` : "";
  const source = item.sourceName ? ` from ${item.sourceName}` : "";

  return `Watch or open ${item.title}, a ${mediaType}${topic}${source}, with related Daily Oratory prayer and formation resources.`;
}
