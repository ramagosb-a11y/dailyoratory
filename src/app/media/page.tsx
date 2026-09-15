import type { Metadata } from "next";
import { FeaturedMedia } from "@/components/media/FeaturedMedia";
import { MediaFilters } from "@/components/media/MediaFilters";
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
        <div className="mt-14">
          <FeaturedMedia items={featuredItems} categories={categories} />
        </div>
        <div className="mt-14">
          <MediaFilters items={items} categories={categories} />
        </div>
      </main>
    </div>
  );
}
