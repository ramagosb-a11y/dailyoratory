import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { prophecySeriesFollowSteps, prophecySeriesPlaylistUrl } from "@/data/prophecySeries";

export function HowToFollowSeries() {
  return (
    <section className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <SectionHeader
          eyebrow="Follow Along"
          title="How to Follow Along"
          summary="A simple way to stay attentive, prayerful, and steady as each Sunday episode is released."
        />
      </div>
      <div className="card-parchment p-6 sm:p-7">
        <ol className="space-y-4">
          {prophecySeriesFollowSteps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-ivory font-semibold text-burgundy">
                {index + 1}
              </span>
              <p className="daily-card-readable text-navy">{step}</p>
            </li>
          ))}
        </ol>
        <TrackedLink
          href={prophecySeriesPlaylistUrl}
          external
          eventName="prophecy_series_subscribe_click"
          eventParams={{ section: "how-to-follow", destination: prophecySeriesPlaylistUrl }}
          className="btn btn-liturgical daily-button-readable mt-7 min-h-12 justify-center"
        >
          Watch, Like, Subscribe, and Set Notifications
        </TrackedLink>
      </div>
    </section>
  );
}
