import { EditorialPage, EditorialHero, EditorialSection, EditorialDisclosure, EditorialLinks } from "@/components/editorial/Editorial";
import type { Metadata } from "next";
import { FeaturedHomilies } from "@/components/homilies/FeaturedHomilies";
import { HomilyCollections } from "@/components/homilies/HomilyCollections";
import { HomilyCopyrightNote } from "@/components/homilies/HomilyCopyrightNote";
import { HomilyExternalResources } from "@/components/homilies/HomilyExternalResources";
import { HomilyFilters } from "@/components/homilies/HomilyFilters";
import { HomiliesAndMass } from "@/components/homilies/HomiliesAndMass";
import { HomiliesForExplorers } from "@/components/homilies/HomiliesForExplorers";
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

  return (
    <EditorialPage longform breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Homilies" }]}>
      <EditorialHero eyebrow="Listen with the Church" title="A word for the journey." description="Catholic preaching, Gospel reflections, and thoughtful formation. Find a voice that helps you listen, pray, and live the faith." image="/images/editorial/homilies.webp" imageAlt="A Catholic church prepared for worship" actions={[{ label: "Explore the library", href: "#homily-library" }, ...(featuredHomilies.length ? [{ label: "Featured listening", href: "#featured-homilies" }] : [])]} />
      {featuredHomilies.length > 0 && <div className="mt-12"><FeaturedHomilies items={featuredHomilies.slice(0, 2)} /></div>}
      <EditorialSection id="homily-library" eyebrow="Choose your next listen" title="The homily library" description="Search approved videos, playlists, and audio resources by topic, season, or speaker."><div id="homily-playlists"><HomilyFilters items={allHomilies} /></div></EditorialSection>
      {collections.length > 0 && <EditorialSection eyebrow="A path to follow" title="Listen a little deeper"><HomilyCollections collections={collections} /></EditorialSection>}
      <EditorialSection eyebrow="Carry it into life" title="From listening to prayer">
        <EditorialDisclosure title="A simple way to listen"><HowToUseHomilies /></EditorialDisclosure>
        <EditorialDisclosure title="Reflection prompts to keep"><HomilyReflectionPrompts /></EditorialDisclosure>
        <EditorialDisclosure title="Homilies, the Mass, and first questions"><HomiliesAndMass /><HomiliesForExplorers /></EditorialDisclosure>
        <EditorialLinks links={[{ label: "Daily Mass reflections", href: "/reflections/mass-readings" }, { label: "Today’s prayer", href: "/pray/today" }]} />
      </EditorialSection>
      <EditorialSection eyebrow="Keep exploring" title="Sources and further listening"><EditorialDisclosure title="External homily resources"><HomilyExternalResources resources={resources} /></EditorialDisclosure><EditorialDisclosure title="Related tools and source notes"><RelatedHomilyTools /><HomilyCopyrightNote /></EditorialDisclosure></EditorialSection>
    </EditorialPage>
  );
}
