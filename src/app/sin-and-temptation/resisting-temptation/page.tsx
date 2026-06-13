import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { createPageMetadata } from "@/lib/metadata";
import { temptationScriptureLinks } from "@/data/sinAndTemptation";
import { PastoralMercyNote } from "@/components/sin-and-temptation/PastoralMercyNote";
import { RelatedConversionLinks } from "@/components/sin-and-temptation/RelatedConversionLinks";
import { SinTemptationPageLayout } from "@/components/sin-and-temptation/SinTemptationPageLayout";
import { TemptationEmergencyPlan } from "@/components/sin-and-temptation/TemptationEmergencyPlan";

const resistingTemptationPlaylistUrl = "https://www.youtube.com/playlist?list=PL8juc41KfKjBCpXnLDlZYxF2JJ05MMeVr";
const resistingTemptationPlaylistEmbedUrl =
  "https://www.youtube-nocookie.com/embed/videoseries?list=PL8juc41KfKjBCpXnLDlZYxF2JJ05MMeVr&rel=0&modestbranding=1";

const practicalSteps = [
  "Pray immediately",
  "Leave the near occasion",
  "Change the environment",
  "Call or message someone trustworthy",
  "Use Scripture",
  "Make the Sign of the Cross",
  "Invoke Mary and St. Michael",
  "Choose the opposite virtue",
  "Do one concrete good act",
  "Do not bargain with temptation",
  "Remember who you are in Christ",
  "Begin again after a fall",
];

export const metadata: Metadata = createPageMetadata({
  title: "Resisting Temptation | Daily Oratory",
  description:
    "A practical Catholic guide for resisting temptation with prayer, early action, and steady trust in grace.",
  path: "/sin-and-temptation/resisting-temptation",
});

export default function ResistingTemptationPage() {
  return (
    <SinTemptationPageLayout
      breadcrumbs={[
        { label: "Learn", href: "/learn" },
        { label: "Sin & Temptation", href: "/sin-and-temptation" },
        { label: "Resisting Temptation" },
      ]}
      title="Resisting Temptation"
      subtitle="A practical Catholic guide for turning temptation into a moment of grace."
      summary="Temptation is part of the Christian battle, but it is not already defeat. With prayer, honesty, and quick action, the very moment of temptation can become a moment of humility and love."
      ctas={[
        { label: "Open Emergency Plan", href: "#temptation-emergency-plan" },
        { label: "Go to Confession Guide", href: "/confession", variant: "secondary", eventName: "confession_guide_click" },
        { label: "Near Occasions of Sin", href: "/sin-and-temptation/near-occasions-of-sin", variant: "secondary", eventName: "sin_topic_open" },
      ]}
    >
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Temptation is a battle, not a defeat</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Being tempted is not the same as sinning. Temptation becomes dangerous when the person welcomes,
          entertains, or consents to it. The moment of temptation can become a moment of prayer, humility, and
          love.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {[
          ["Notice", "I am being tempted."],
          ["Reject", "I do not consent."],
          ["Turn", "Jesus, help me."],
        ].map(([title, body]) => (
          <article key={title} className="card-parchment p-6">
            <h2 className="font-display text-3xl font-semibold text-navy">{title}</h2>
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">{body}</p>
          </article>
        ))}
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Grace</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Grace in the Moment of Temptation</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Actual grace helps the soul reject temptation and choose God in concrete moments.
        </p>
        <div className="mt-6">
          <Link href="/formation/grace/actual-grace" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
            Learn About Actual Grace
          </Link>
        </div>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Detachment from sin</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Turning Toward God in Temptation</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Temptation is not the same as sin. Detachment means rejecting sin and turning toward God when
          temptation appears.
        </p>
        <div className="mt-6">
          <Link
            href="/indulgences/detachment-from-sin#prayer-for-detachment"
            className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
          >
            Pray for Detachment from Sin
          </Link>
        </div>
      </section>

      <PastoralMercyNote>
        <p className="daily-prayer-readable text-lg italic leading-9 text-navy">
          Jesus, I reject this temptation. I choose You. Give me grace now. Mary, help me. Amen.
        </p>
      </PastoralMercyNote>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {practicalSteps.map((step) => (
          <article key={step} className="card-parchment p-5">
            <h2 className="font-display text-2xl font-semibold text-navy">{step}</h2>
          </article>
        ))}
      </section>

      <div id="temptation-emergency-plan">
        <TemptationEmergencyPlan />
      </div>

      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Scripture for temptation</p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Short references to keep close</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {temptationScriptureLinks.map((link) => (
            <Link key={link.label} href={link.href} className="season-pill bg-ivory px-3 py-2 text-navy">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Watch and pray</p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-semibold text-navy">Resisting temptation playlist</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Use this Daily Oratory playlist for practical encouragement in resisting temptation, returning quickly
              to grace, and staying rooted in prayer, mercy, and Catholic spiritual discipline.
            </p>
          </div>
          <TrackedLink
            href={resistingTemptationPlaylistUrl}
            external
            eventName="media_external_open"
            eventParams={{ page_path: "/sin-and-temptation/resisting-temptation", media_type: "youtube-playlist" }}
            className="btn btn-secondary daily-button-readable min-h-12 justify-center sm:w-auto"
          >
            Open playlist on YouTube
          </TrackedLink>
        </div>
        <div className="mt-6">
          <YouTubeEmbed
            title="Daily Oratory Resisting Temptation YouTube playlist"
            embedUrl={resistingTemptationPlaylistEmbedUrl}
            description="Watch this playlist when you need practical help, encouragement after a fall, or a prayerful reset in the middle of spiritual struggle."
          />
        </div>
      </section>

      <RelatedConversionLinks
        links={[
          {
            title: "Near Occasions of Sin",
            description: "Leave the place or pattern before the temptation grows stronger.",
            href: "/sin-and-temptation/near-occasions-of-sin",
          },
          {
            title: "Habitual Sin",
            description: "See how repeated falls become familiar and how to build a plan ahead of time.",
            href: "/sin-and-temptation/habitual-sin",
          },
          {
            title: "Confession Guide",
            description: "If you fall, return to mercy quickly and peacefully.",
            href: "/confession",
          },
          {
            title: "Actual Grace",
            description: "Learn how God helps the soul act decisively in concrete moments.",
            href: "/formation/grace/actual-grace",
          },
          {
            title: "Detachment from Sin",
            description: "See how the heart learns not to cling to sin even while temptation still appears.",
            href: "/indulgences/detachment-from-sin",
          },
          {
            title: "Prayer",
            description: "Use prayer immediately so temptation becomes a moment of turning to God.",
            href: "/pray",
          },
        ]}
      />
    </SinTemptationPageLayout>
  );
}
