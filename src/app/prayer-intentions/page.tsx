import type { Metadata } from "next";
import Link from "next/link";
import { CandleIntentionsLinks } from "@/components/candle-intentions/CandleIntentionsLinks";
import { MassIntentionsLinks } from "@/components/mass-intentions/MassIntentionsLinks";
import { PrayerIntentionCard } from "@/components/prayer-intentions/PrayerIntentionCard";
import { PrayerIntentionEmergencyNotice, PrayerIntentionPrivacyNotice } from "@/components/prayer-intentions/PrayerIntentionNotices";
import { PrayerIntentionsNav } from "@/components/prayer-intentions/PrayerIntentionsNav";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { getApprovedPrayerIntentions, getPrayerIntentionStats } from "@/lib/prayerIntentions";

export const metadata: Metadata = createPageMetadata({
  title: "Prayer Intentions",
  description: "Submit prayer intentions for moderation and pray for approved public intentions with the Daily Oratory community.",
  path: "/prayer-intentions",
});

export default function PrayerIntentionsPage() {
  const stats = getPrayerIntentionStats();
  const featuredIntentions = getApprovedPrayerIntentions().slice(0, 3);

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PrayerIntentionsNav />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Ask for prayer</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Bring intentions before Christ with reverence and care.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Submit a prayer request for review, pray for approved public intentions, and keep private details protected.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/prayer-intentions/submit" className="btn btn-primary focus-ring">
                Submit intention
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard label="Approved" value={stats.approved} />
              <StatCard label="Urgent" value={stats.urgent} />
              <StatCard label="Thanks" value={stats.thanksgivings} />
              <StatCard label="Prayers" value={stats.prayedCount} />
            </div>
            <PrayerIntentionEmergencyNotice />
          </div>
        </div>

        <section className="mt-14">
          <SectionHeader
            eyebrow="Public wall"
            title="Approved intentions to hold in prayer"
            summary="Only moderated public or anonymous public intentions appear here. New submissions are never published automatically."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredIntentions.map((intention) => (
              <PrayerIntentionCard key={intention.id} intention={intention} />
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-5 lg:grid-cols-2">
          <PrayerIntentionPrivacyNotice />
          <div className="dashboard-card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Moderation posture</p>
            <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">
              Prayer is public here only after review.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              A production version should route submissions to a trusted moderation workflow, remove identifying
              details, and keep prayer team only intentions out of the public build.
            </p>
            <Link href="/prayer-intentions/guidelines" className="text-link focus-ring mt-5 inline-flex">
              Read guidelines
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <MassIntentionsLinks compact />
        </section>

        <section className="mt-14">
          <CandleIntentionsLinks compact />
        </section>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="card p-4 text-center">
      <p className="font-display text-3xl font-semibold text-navy">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase text-muted">{label}</p>
    </div>
  );
}
