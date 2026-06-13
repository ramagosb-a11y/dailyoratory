import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeavenboundHero } from "@/components/heavenbound/HeavenboundHero";
import { HeavenboundPrivacyNotice } from "@/components/heavenbound/HeavenboundPrivacyNotice";
import { OpenHeavenboundButton } from "@/components/heavenbound/OpenHeavenboundButton";
import { RecommendedPathways } from "@/components/heavenbound/RecommendedPathways";
import { SpiritualPathGrid } from "@/components/heavenbound/SpiritualPathGrid";
import {
  getHeavenboundPaths,
  getHeavenboundRecommendationGroups,
  getPathBySlug,
} from "@/lib/heavenbound";
import { createPageMetadata } from "@/lib/metadata";

const pageMetadata = createPageMetadata({
  title: "Heavenbound Spiritual Companion",
  description:
    "Choose a Catholic spiritual path for today and continue with Heavenbound for guided prayer, Scripture, examen, Adoration, saints, Rosary meditation, and spiritual growth.",
  path: "/tools/heavenbound",
});

export const metadata: Metadata = {
  ...pageMetadata,
  title: "Heavenbound Spiritual Companion | Daily Oratory",
};

const timeRecommendations = [
  { label: "Morning", path: getPathBySlug("todays-mass-insights") },
  { label: "Midday", path: getPathBySlug("conversation-with-jesus") },
  { label: "Evening", path: getPathBySlug("deep-daily-examen") },
  { label: "Before Confession", path: getPathBySlug("examination-of-conscience") },
  { label: "Before Adoration", path: getPathBySlug("eucharistic-adoration-companion") },
  { label: "Before Rosary", path: getPathBySlug("rosary-mysteries-deep-meditation") },
  { label: "Sunday", path: getPathBySlug("sacred-scripture-insight-tool") },
  { label: "Feast Days", path: getPathBySlug("saint-of-the-day") },
];

const relatedTools = [
  { label: "Mass Readings Reflections", href: "/reflections/mass-readings", description: "Pray with the daily and Sunday Mass readings." },
  { label: "Begin in Prayer", href: "/pray", description: "Keep a daily rhythm of prayer and recollection." },
  { label: "Adoration", href: "/adoration", description: "Enter a quiet Eucharistic prayer space." },
  { label: "Saints", href: "/saints", description: "Find a saint companion and learn from holy witnesses." },
];

export default function HeavenboundPage() {
  const paths = getHeavenboundPaths();
  const recommendationGroups = getHeavenboundRecommendationGroups();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Tools" }, { label: "Heavenbound" }]} />
        <div className="mt-8">
          <HeavenboundHero />
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            "Choose one Catholic spiritual path.",
            "Start Heavenbound from the path card.",
            "Your starter prompt is copied.",
            "Continue prayerfully in ChatGPT.",
          ].map((step, index) => (
            <div key={step} className="card p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Step {index + 1}</p>
              <p className="mt-3 text-sm font-semibold leading-7 text-navy">{step}</p>
            </div>
          ))}
        </section>

        <SpiritualPathGrid paths={paths} />
        <RecommendedPathways groups={recommendationGroups} timeRecommendations={timeRecommendations} />

        <section className="mt-12">
          <div className="border-b border-stone/70 pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Daily Oratory tools</p>
            <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">
              Continue the path inside Daily Oratory.
            </h2>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {relatedTools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="card resource-card focus-ring p-5">
                <h3 className="font-display text-2xl font-semibold leading-tight text-navy">{tool.label}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <HeavenboundPrivacyNotice />

        <section className="mt-12 rounded-md border border-stone bg-navy p-6 text-ivory shadow-soft sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Begin with reverence</p>
              <h2 className="font-display mt-2 text-4xl font-semibold leading-tight">Open Heavenbound in ChatGPT.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-parchment">
                Start from any path card to copy its prompt and continue the conversation in a prayerful, Catholic spirit.
              </p>
            </div>
            <OpenHeavenboundButton className="btn btn-gold focus-ring justify-center" />
          </div>
        </section>
      </main>
    </div>
  );
}
