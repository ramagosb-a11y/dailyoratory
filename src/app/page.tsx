import type { Metadata } from "next";
import { FooterCta } from "@/components/home/FooterCta";
import { HomeExaminationSpotlight } from "@/components/home/HomeExaminationSpotlight";
import { GrowInFaithSection } from "@/components/home/GrowInFaithSection";
import { HomeFeaturedMediaSection } from "@/components/home/HomeFeaturedMediaSection";
import { HomeHeavenboundSpotlight } from "@/components/home/HomeHeavenboundSpotlight";
import { HomeSearchSection } from "@/components/home/HomeSearchSection";
import { Hero } from "@/components/home/Hero";
import { TodayInTheChurch } from "@/components/home/TodayInTheChurch";
import Link from "next/link";
import { getFeaturedMediaItems, getMediaCategories, getMediaTypeLabel } from "@/lib/media";
import { createPageMetadata } from "@/lib/metadata";
import type { MediaType } from "@/types/media";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Daily Oratory | Catholic Prayer, Scripture, Liturgy, and Formation",
  description:
    "Daily Oratory is a Catholic prayer and formation site inspired by the Holy Spirit, welcoming Catholics, returning Catholics, and anyone exploring the Catholic faith through prayer, Scripture, sacraments, saints, devotions, and spiritual growth.",
  path: "/",
});

const ALLOWED_HOME_MEDIA_TYPES: ReadonlySet<MediaType> = new Set([
  "youtube-video",
  "youtube-playlist",
  "google-slides",
  "google-drive-file",
  "pdf",
  "google-drive-image",
  "external-image",
]);

const priorityStartHereCards = [
  {
    title: "What Should I Do?",
    description: "Choose the situation that fits where you are right now and get one clear Catholic next step.",
    href: "/what-should-i-do",
  },
  {
    title: "Catholic Life Roadmap",
    description: "See how prayer, Mass, Confession, Scripture, grace, and daily Catholic life fit together.",
    href: "/catholic-life",
  },
  {
    title: "Catholic Q&A",
    description: "Get short answers to common Catholic questions and then go deeper through fuller guides.",
    href: "/catholic-answers",
  },
  {
    title: "Prayer Library",
    description: "Find Catholic prayers for daily life, the Rosary, Confession, repentance, and hope.",
    href: "/prayers",
  },
  {
    title: "Confession Guide",
    description: "Return to mercy with practical help for preparation, contrition, and thanksgiving.",
    href: "/confession",
  },
  {
    title: "Holy Hour Adoration Guide",
    description: "Learn a simple, peaceful structure for spending a Holy Hour with Jesus in Eucharistic Adoration.",
    href: "/adoration#holy-hour-guide",
  },
];

export default async function Home() {
  const [featuredMediaItems, mediaCategories] = await Promise.all([getFeaturedMediaItems(), getMediaCategories()]);
  const categoryMap = new Map(mediaCategories.map((category) => [category.slug, category.title]));
  const homeFeaturedMedia = featuredMediaItems
    .filter((item) => ALLOWED_HOME_MEDIA_TYPES.has(item.mediaType))
    .slice(0, 6)
    .map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      description: item.shortDescription,
      mediaTypeLabel: getHomeMediaTypeLabel(item.mediaType),
      categoryLabel: categoryMap.get(item.category) ?? formatCategoryLabel(item.category),
      thumbnailUrl: item.thumbnailUrl || item.imageUrl,
      altText: item.altText,
      href: resolveHomeMediaHref(item),
      external: Boolean(item.directExternalOnly && item.sourceUrl),
      ctaLabel: getHomeMediaCtaLabel(item.mediaType),
      mediaType: item.mediaType,
    }));

  return (
    <div className="liturgical-home-shell paper-texture">
      <Hero />
      <TodayInTheChurch />
      <section className="mx-auto mt-12 w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="liturgical-home-section p-6 sm:p-8">
          <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.18em]">Find Your Path</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl">
            Priority Catholic Guides
          </h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Explore the major Daily Oratory hubs for prayer, mercy, Catholic answers, daily Catholic life, and urgent sacramental help.
          </p>
          <div className="liturgical-home-rule mt-6" aria-hidden="true" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {priorityStartHereCards.map((card) => (
              <article key={card.href} className="liturgical-home-card rounded-3xl p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.description}</p>
                <div className="mt-5">
                  <Link href={card.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                    Open Guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HomeSearchSection />
      <HomeExaminationSpotlight />
      <GrowInFaithSection />
      <HomeHeavenboundSpotlight />
      <HomeFeaturedMediaSection items={homeFeaturedMedia} showHomiliesCta />
      <FooterCta />
    </div>
  );
}

function getHomeMediaTypeLabel(mediaType: MediaType) {
  switch (mediaType) {
    case "youtube-video":
      return "Video";
    case "youtube-playlist":
      return "Playlist";
    case "google-slides":
      return "Slides";
    case "google-drive-file":
      return "Resource";
    case "pdf":
      return "PDF";
    case "google-drive-image":
    case "external-image":
      return "Image";
    default:
      return getMediaTypeLabel(mediaType);
  }
}

function getHomeMediaCtaLabel(mediaType: MediaType) {
  switch (mediaType) {
    case "youtube-video":
      return "Watch";
    case "youtube-playlist":
      return "View Playlist";
    case "google-drive-file":
    case "pdf":
    case "google-slides":
      return "Open Resource";
    default:
      return "View Media";
  }
}

function resolveHomeMediaHref(item: {
  slug: string;
  sourceUrl?: string;
  directExternalOnly?: boolean;
}) {
  if (item.slug) return `/media/${item.slug}`;
  if (item.sourceUrl && item.directExternalOnly) return item.sourceUrl;
  return "/media";
}

function formatCategoryLabel(category: string) {
  return category
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}
