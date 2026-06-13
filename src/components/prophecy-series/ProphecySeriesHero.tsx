import { TrackedLink } from "@/components/analytics/TrackedLink";
import { PageEyebrow, PageSubtitle, PageTitle } from "@/components/ui/Typography";
import {
  prophecySeriesHeroCtas,
  prophecySeriesPlaylistUrl,
  prophecySeriesPremiereDisplayDate,
  prophecySeriesPremiereDisplayTime,
} from "@/data/prophecySeries";

export function ProphecySeriesHero() {
  return (
    <section className="rounded-[2rem] border border-gold/50 bg-[radial-gradient(circle_at_top,_rgba(214,174,84,0.18),_rgba(249,244,233,0.96)_48%,_rgba(245,238,224,0.98)_100%)] px-6 py-10 shadow-soft sm:px-8 sm:py-12 lg:px-12">
      <PageEyebrow>Featured Series</PageEyebrow>
      <PageTitle>Prophecy Series</PageTitle>
      <p className="mt-4 text-lg font-semibold text-burgundy">
        Premieres {prophecySeriesPremiereDisplayDate} at {prophecySeriesPremiereDisplayTime}
      </p>
      <PageSubtitle>
        A 12-part Sunday evening series exploring prophecy through faith, Scripture, discernment, and
        hope in Christ.
      </PageSubtitle>
      <p className="daily-readable mt-6 max-w-4xl text-navy">
        Join Daily Oratory for a new Prophecy Series premiering {prophecySeriesPremiereDisplayDate} at{" "}
        {prophecySeriesPremiereDisplayTime}. New episodes will release every Sunday at 6:00 PM CST.
        Watch the full playlist, subscribe, and turn on notifications so you do not miss each new
        episode.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {prophecySeriesHeroCtas.map((cta) => (
          <TrackedLink
            key={cta.id}
            href={cta.href}
            external
            eventName={cta.id === "prophecy-watch-series" ? "prophecy_series_playlist_click" : "prophecy_series_subscribe_click"}
            eventParams={{ section: "hero", destination: cta.href }}
            className={
              cta.variant === "primary"
                ? "btn btn-liturgical daily-button-readable min-h-12 justify-center"
                : "btn btn-secondary daily-button-readable min-h-12 justify-center"
            }
          >
            {cta.label}
          </TrackedLink>
        ))}
        <TrackedLink
          href={prophecySeriesPlaylistUrl}
          external
          eventName="prophecy_series_subscribe_click"
          eventParams={{ section: "hero-notifications", destination: prophecySeriesPlaylistUrl }}
          className="btn btn-secondary daily-button-readable min-h-12 justify-center"
        >
          Set Notifications
        </TrackedLink>
      </div>
      <p className="daily-readable-muted mt-5 max-w-3xl">
        Please like, subscribe, and set your YouTube notification bell to receive alerts when each
        episode drops.
      </p>
    </section>
  );
}
