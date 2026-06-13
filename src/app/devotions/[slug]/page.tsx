import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DevotionDetailHero } from "@/components/devotions/DevotionDetailHero";
import { DevotionDetailSection } from "@/components/devotions/DevotionDetailSection";
import { DevotionMisunderstandings } from "@/components/devotions/DevotionMisunderstandings";
import { DevotionPrayerGuide } from "@/components/devotions/DevotionPrayerGuide";
import { DevotionSourceNotes } from "@/components/devotions/DevotionSourceNotes";
import { RelatedDevotionTools } from "@/components/devotions/RelatedDevotionTools";
import { RelatedDevotions } from "@/components/devotions/RelatedDevotions";
import { TrustedDevotionLinks } from "@/components/devotions/TrustedDevotionLinks";
import { createPageMetadata } from "@/lib/metadata";
import { getDevotionBySlug, getRelatedDevotions, getTrustedLinksForDevotion } from "@/lib/devotions";

export function generateStaticParams() {
  const { getApprovedDevotions } = require("@/lib/devotions");
  return getApprovedDevotions().map((devotion: { slug: string }) => ({ slug: devotion.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const devotion = getDevotionBySlug(slug);
  if (!devotion) return {};

  return createPageMetadata({
    title: `${devotion.title} | Catholic Devotions`,
    description: `Learn about ${devotion.title}, its spiritual fruits, how to begin, when to practice it, and trusted Catholic resources.`,
    path: `/devotions/${devotion.slug}`,
  });
}

export default async function DevotionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const devotion = getDevotionBySlug(slug);
  if (!devotion) notFound();

  const relatedDevotions = getRelatedDevotions(devotion);
  const trustedLinks = getTrustedLinksForDevotion(devotion.id);

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <DevotionDetailHero devotion={devotion} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <DevotionDetailSection
            eyebrow="What this devotion is"
            title="What this devotion is"
            paragraphs={[devotion.longDescription]}
          />
          <DevotionDetailSection
            eyebrow="Why Catholics practice it"
            title="Why it matters"
            items={devotion.whyPractice}
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <DevotionDetailSection title="Spiritual fruits" items={devotion.spiritualFruits} />
          <DevotionDetailSection title="Theological focus" items={devotion.theologicalFocus} />
          <DevotionDetailSection title="When to practice" items={devotion.whenToPractice} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <DevotionDetailSection title="How to begin" items={devotion.howToBegin} />
          <DevotionDetailSection title="Suggested prayer rhythm" items={devotion.suggestedRhythm} />
        </div>

        <div className="mt-6">
          <DevotionPrayerGuide devotion={devotion} />
        </div>

        <div className="mt-6">
          <DevotionMisunderstandings devotion={devotion} />
        </div>

        <div className="mt-6">
          <TrustedDevotionLinks links={trustedLinks} />
        </div>

        <div className="mt-6">
          <RelatedDevotionTools links={devotion.relatedDailyOratoryLinks} />
        </div>

        <div className="mt-6">
          <RelatedDevotions devotions={relatedDevotions} />
        </div>

        <div className="mt-6">
          <DevotionSourceNotes notes={devotion.sourceNotes} />
        </div>
      </main>
    </div>
  );
}
