import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PrayerCountButton } from "@/components/prayer-intentions/PrayerCountButton";
import { PrayerIntentionEmergencyNotice } from "@/components/prayer-intentions/PrayerIntentionNotices";
import { PrayerIntentionsNav } from "@/components/prayer-intentions/PrayerIntentionsNav";
import { ReportIntentionButton } from "@/components/prayer-intentions/ReportIntentionButton";
import { getContentHref, getRelatedContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  formatIntentionDate,
  getApprovedPrayerIntentions,
  getDisplayRequester,
  getIntentionTypeLabel,
  getPrayerIntentionBySlug,
} from "@/lib/prayerIntentions";

export const dynamicParams = false;

export function generateStaticParams() {
  return getApprovedPrayerIntentions().map((intention) => ({ slug: intention.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const intention = getPrayerIntentionBySlug(slug);

  if (!intention) return {};

  return createPageMetadata({
    title: intention.title,
    description: intention.description,
    path: `/prayer-intentions/${intention.slug}`,
  });
}

export default async function PrayerIntentionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const intention = getPrayerIntentionBySlug(slug);

  if (!intention) {
    notFound();
  }

  const related = getRelatedContent(intention, 3);

  return (
    <div className="paper-texture">
      <article className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <PrayerIntentionsNav />
        <Breadcrumbs items={[{ label: "Prayer Intentions", href: "/prayer-intentions" }, { label: intention.title }]} />

        <header className="mt-8 border-b border-stone pb-8">
          <div className="flex flex-wrap gap-2">
            <span className="season-pill">{getIntentionTypeLabel(intention.intentionType)}</span>
            {intention.isUrgent ? <span className="rounded-sm bg-burgundy px-3 py-1 text-xs font-bold uppercase text-ivory">Urgent</span> : null}
            {intention.isThanksgiving ? <span className="season-pill border-gold text-gold">Thanksgiving</span> : null}
          </div>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{intention.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{intention.description}</p>
          <div className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
            <p>
              <span className="font-bold text-navy">Requested by:</span> {getDisplayRequester(intention)}
            </p>
            <p>
              <span className="font-bold text-navy">Approved:</span> {formatIntentionDate(intention.approvedAt ?? intention.updatedAt)}
            </p>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-start">
          <div className="content-card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase text-burgundy">Prayerful summary</p>
            <p className="mt-3 text-base leading-8 text-navy">{intention.excerpt}</p>
            <h2 className="font-display mt-8 text-4xl font-semibold text-navy">Pray with this intention</h2>
            <p className="prayer-text mt-4 text-navy">{intention.prayerPrompt}</p>
            <div className="mt-8">
              <PrayerIntentionEmergencyNotice />
            </div>
          </div>

          <aside className="dashboard-card p-5 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase text-burgundy">Pray locally</p>
            <div className="mt-4">
              <PrayerCountButton intentionId={intention.id} baseCount={intention.prayedCount} />
            </div>
            <div className="mt-5 border-t border-stone pt-5">
              <ReportIntentionButton intentionId={intention.id} />
            </div>
            <p className="mt-5 text-xs leading-5 text-muted">
              Prayer counts and reports in this mock version are stored locally in your browser.
            </p>
          </aside>
        </div>
      </article>

      {related.length ? (
        <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
          <div className="sacred-divider mb-8" />
          <h2 className="font-display text-4xl font-semibold text-navy">Related resources</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((resource) => (
              <Link key={resource.id} href={getContentHref(resource)} className="card resource-card focus-ring p-5">
                <p className="text-xs font-bold uppercase text-burgundy">{resource.category}</p>
                <h3 className="font-display mt-2 text-2xl font-semibold leading-tight text-navy">{resource.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{resource.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
