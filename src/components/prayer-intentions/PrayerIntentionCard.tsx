import Link from "next/link";
import { getDisplayRequester, getIntentionTypeLabel, formatIntentionDate } from "@/lib/prayerIntentions";
import type { PrayerIntentionRecord } from "@/types/prayerIntentions";
import { PrayerCountButton } from "./PrayerCountButton";
import { ReportIntentionButton } from "./ReportIntentionButton";

export function PrayerIntentionCard({ intention }: { intention: PrayerIntentionRecord }) {
  return (
    <article className="card resource-card flex h-full min-w-0 flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <span className="season-pill">{getIntentionTypeLabel(intention.intentionType)}</span>
          {intention.isUrgent ? <span className="rounded-sm bg-burgundy px-2 py-1 text-xs font-bold uppercase text-ivory">Urgent</span> : null}
          {intention.isThanksgiving ? <span className="season-pill border-gold text-gold">Thanksgiving</span> : null}
        </div>
        <span className="text-xs font-semibold text-muted">{formatIntentionDate(intention.approvedAt ?? intention.updatedAt)}</span>
      </div>
      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
        <Link href={`/prayer-intentions/${intention.slug}`} className="focus-ring rounded-sm hover:text-burgundy">
          {intention.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted">{intention.excerpt}</p>
      <p className="mt-4 rounded-md border border-stone bg-parchment p-4 text-sm font-semibold leading-7 text-navy">
        {intention.prayerPrompt}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {intention.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="season-pill">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-5">
        <div className="flex flex-col gap-4 border-t border-stone pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Requested by</p>
            <p className="mt-1 text-sm font-semibold text-navy">{getDisplayRequester(intention)}</p>
          </div>
          <div className="grid gap-2">
            <PrayerCountButton intentionId={intention.id} baseCount={intention.prayedCount} />
            <ReportIntentionButton intentionId={intention.id} />
          </div>
        </div>
      </div>
    </article>
  );
}
