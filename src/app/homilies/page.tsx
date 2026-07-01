import type { Metadata } from "next";
import { AudioHomilies } from "@/components/homilies/AudioHomilies";
import { FeaturedHomilies } from "@/components/homilies/FeaturedHomilies";
import { HomilyCollections } from "@/components/homilies/HomilyCollections";
import { HomilyCopyrightNote } from "@/components/homilies/HomilyCopyrightNote";
import { HomilyExternalResources } from "@/components/homilies/HomilyExternalResources";
import { HomilyFilters } from "@/components/homilies/HomilyFilters";
import { HomiliesAndMass } from "@/components/homilies/HomiliesAndMass";
import { HomiliesForExplorers } from "@/components/homilies/HomiliesForExplorers";
import { HomiliesHero } from "@/components/homilies/HomiliesHero";
import { HomilyPlaylists } from "@/components/homilies/HomilyPlaylists";
import { HomilyReflectionPrompts } from "@/components/homilies/HomilyReflectionPrompts";
import { HowToUseHomilies } from "@/components/homilies/HowToUseHomilies";
import { RelatedHomilyTools } from "@/components/homilies/RelatedHomilyTools";
import { brand } from "@/config/brand";
import { getAbsoluteUrl, getCanonicalUrl } from "@/lib/metadata";
import {
  getApprovedHomilies,
  getFeaturedHomilies,
  getFeaturedHomilyCollections,
  getHomilyResources,
  isAudioHomily,
  isPlaylistHomily,
} from "@/lib/homilies";

const pageDescription =
  "Listen to Catholic homilies, YouTube playlists, audio reflections, Gospel preaching, and formation resources for Mass, Scripture, prayer, and spiritual growth.";

export const metadata: Metadata = {
  title: "Catholic Homilies Library | Daily Oratory",
  description: pageDescription,
  alternates: {
    canonical: getCanonicalUrl("/homilies"),
  },
  openGraph: {
    title: "Catholic Homilies Library",
    description:
      "A curated Daily Oratory library of Catholic homilies, playlists, audio reflections, and Gospel preaching to help listeners pray, learn, and live the faith.",
    url: getCanonicalUrl("/homilies"),
    siteName: brand.platformName,
    images: [
      {
        url: getAbsoluteUrl(brand.socialImage),
        width: 1200,
        height: 630,
        alt: "Daily Oratory Homilies Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catholic Homilies Library",
    description:
      "A curated Daily Oratory library of Catholic homilies, playlists, audio reflections, and Gospel preaching to help listeners pray, learn, and live the faith.",
    images: [getAbsoluteUrl(brand.socialImage)],
  },
  keywords: [
    "Catholic homilies",
    "Sunday homilies",
    "Daily Mass homilies",
    "Gospel reflections",
    "Catholic preaching",
    "Catholic audio homilies",
    "YouTube homily playlists",
    "Mass readings reflection",
    "Catholic formation",
  ],
};

export const revalidate = 86400;

export default async function HomiliesPage() {
  const [allHomilies, featuredHomilies, collections, resources] = await Promise.all([
    getApprovedHomilies(),
    getFeaturedHomilies(),
    Promise.resolve(getFeaturedHomilyCollections()),
    Promise.resolve(getHomilyResources()),
  ]);

  const playlistItems = allHomilies.filter((item) => isPlaylistHomily(item));
  const audioItems = allHomilies.filter((item) => isAudioHomily(item));

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <HomiliesHero />
        <div className="mt-14">
          <FeaturedHomilies items={featuredHomilies.slice(0, 5)} />
        </div>
        <div className="mt-14">
          <HomilyPlaylists items={playlistItems} />
        </div>
        <div className="mt-14">
          <AudioHomilies items={audioItems} />
        </div>
        <div className="mt-14">
          <HomilyFilters items={allHomilies} />
        </div>
        <div className="mt-14">
          <HomilyCollections collections={collections} />
        </div>
        <div className="mt-14">
          <HowToUseHomilies />
        </div>
        <div className="mt-14">
          <HomilyReflectionPrompts />
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <HomiliesAndMass />
          <HomiliesForExplorers />
        </div>
        <div className="mt-14">
          <HomilyExternalResources resources={resources} />
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <RelatedHomilyTools />
          <HomilyCopyrightNote />
        </div>
      </main>
    </div>
  );
}
