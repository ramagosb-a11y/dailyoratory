import type { Metadata } from "next";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { FeaturedMedia } from "@/components/media/FeaturedMedia";
import { MediaCopyrightNote } from "@/components/media/MediaCopyrightNote";
import { MediaFilters } from "@/components/media/MediaFilters";
import { MediaLibraryHero } from "@/components/media/MediaLibraryHero";
import { RelatedDailyOratoryLinks } from "@/components/media/RelatedDailyOratoryLinks";
import { prophecySeriesPath, prophecySeriesPlaylistUrl } from "@/data/prophecySeries";
import { brand } from "@/config/brand";
import { getAbsoluteUrl, getCanonicalUrl } from "@/lib/metadata";
import { getApprovedMediaItems, getFeaturedMediaItems, getMediaCategories } from "@/lib/media";

const pageDescription =
  "Explore Catholic videos, playlists, Google Slides, images, and formation resources for prayer, Mass, sacraments, OCIA, family faith, Scripture, saints, and spiritual growth.";

export const metadata: Metadata = {
  title: "Catholic Media Library | Daily Oratory",
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl("/media"),
  },
  openGraph: {
    title: "Oratory Media Library",
    description: "Videos, slides, images, and Catholic formation resources to help visitors pray, learn, and grow in faith.",
    url: getCanonicalUrl("/media"),
    siteName: brand.platformName,
    images: [
      {
        url: getAbsoluteUrl(brand.socialImage),
        width: 1200,
        height: 630,
        alt: "Daily Oratory Media Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oratory Media Library",
    description: "Videos, slides, images, and Catholic formation resources to help visitors pray, learn, and grow in faith.",
    images: [getAbsoluteUrl(brand.socialImage)],
  },
};

export const revalidate = 86400;

const relatedLinks = [
  { label: "The Bible", href: "/bible" },
  { label: "Pray", href: "/pray" },
  { label: "Formation", href: "/formation" },
  { label: "Mass", href: "/mass" },
  { label: "Sacraments", href: "/sacraments" },
  { label: "OCIA", href: "/ocia" },
  { label: "Explore the Catholic Faith", href: "/explore" },
  { label: "Family", href: "/family" },
  { label: "Adoration", href: "/adoration" },
  { label: "Saints", href: "/saints" },
  { label: "Devotions", href: "/devotions" },
  { label: "Scripture Prayer", href: "/library/scripture-prayer" },
  { label: "Homilies", href: "/homilies" },
];

export default async function MediaLibraryPage() {
  const [items, featuredItemsData, categories] = await Promise.all([
    getApprovedMediaItems(),
    getFeaturedMediaItems(),
    getMediaCategories(),
  ]);
  const featuredItems = featuredItemsData.slice(0, 9);

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <MediaLibraryHero />
        <section className="mt-14 rounded-[1.75rem] border border-gold/50 bg-[linear-gradient(135deg,rgba(120,25,44,0.08),rgba(214,174,84,0.14),rgba(249,244,233,0.98))] p-6 shadow-soft sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Featured Series</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Prophecy Series
          </h2>
          <p className="daily-readable-muted mt-4 max-w-3xl">
            A new 12-part Sunday evening series premiering June 7 at 6:00 PM CST, exploring prophecy
            with faith, Scripture, discernment, and hope in Christ.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={prophecySeriesPath}
              eventName="media_library_cta_click"
              eventParams={{ section: "media-prophecy-feature", destination: prophecySeriesPath }}
              className="btn btn-liturgical daily-button-readable min-h-12 justify-center"
            >
              Open Prophecy Series
            </TrackedLink>
            <TrackedLink
              href={prophecySeriesPlaylistUrl}
              external
              eventName="prophecy_series_playlist_click"
              eventParams={{ section: "media-prophecy-feature", destination: prophecySeriesPlaylistUrl }}
              className="btn btn-secondary daily-button-readable min-h-12 justify-center"
            >
              Watch on YouTube
            </TrackedLink>
          </div>
        </section>
        <div className="mt-14">
          <FeaturedMedia items={featuredItems} categories={categories} />
        </div>
        <div className="mt-14">
          <MediaFilters items={items} categories={categories} />
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <RelatedDailyOratoryLinks links={relatedLinks} />
          <MediaCopyrightNote />
        </div>
        <section className="mt-14 rounded-md border border-stone bg-ivory p-6 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Admin planning note</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy">Future Google Workspace flow</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            This first version uses local data files so the public experience stays stable. The structure is designed so
            media items, categories, and collections can later be generated from a Google Sheet or Apps Script JSON
            endpoint.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Admin instructions are documented in the repository at
            {" "}
            <code>docs/media-library-admin-guide.md</code>.
          </p>
        </section>
      </main>
    </div>
  );
}
