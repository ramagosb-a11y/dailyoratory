import { TrackedLink } from "@/components/analytics/TrackedLink";
import { HomeSectionHeader } from "@/components/home/HomeSectionHeader";
import {
  prophecySeriesPath,
  prophecySeriesPlaylistUrl,
  prophecySeriesPremiereDisplayDate,
  prophecySeriesPremiereDisplayTime,
} from "@/data/prophecySeries";

export function ProphecySeriesFeature() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
      <div className="liturgical-home-section p-6 sm:p-8">
        <HomeSectionHeader
          title="Prophecy Series"
          subtitle={`A new 12-part Sunday evening series premiering ${prophecySeriesPremiereDisplayDate} at ${prophecySeriesPremiereDisplayTime}, exploring prophecy through faith, Scripture, discernment, and hope in Christ.`}
        />
        <div className="mt-7 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="liturgical-home-card p-5 sm:p-6">
            <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.18em]">Coming Soon</p>
            <h3 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Watch the series page and follow each Sunday release
            </h3>
            <p className="daily-readable mt-4 text-navy">
              Visit the full Prophecy Series page for the playlist, episode tracker, prayer before
              watching, reflection prompts, and a grounded Catholic note on prophecy and discernment.
            </p>
          </div>
          <div className="liturgical-home-card flex flex-col justify-between p-5 sm:p-6">
            <div>
              <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.18em]">Premiere</p>
              <p className="font-display mt-3 text-4xl font-semibold leading-none text-navy sm:text-5xl">
                {prophecySeriesPremiereDisplayDate}
              </p>
              <p className="mt-4 text-lg font-semibold text-navy">{prophecySeriesPremiereDisplayTime}</p>
              <p className="daily-readable-muted mt-4">
                Please like, subscribe, and turn on notifications so you receive an alert when each
                new episode drops.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href={prophecySeriesPath}
                eventName="media_library_cta_click"
                eventParams={{ section: "homepage-prophecy-series", destination: prophecySeriesPath }}
                className="btn btn-liturgical daily-button-readable min-h-12 justify-center"
              >
                Open Prophecy Series
              </TrackedLink>
              <TrackedLink
                href={prophecySeriesPlaylistUrl}
                external
                eventName="prophecy_series_playlist_click"
                eventParams={{ section: "homepage-prophecy-series", destination: prophecySeriesPlaylistUrl }}
                className="btn btn-secondary daily-button-readable min-h-12 justify-center"
              >
                Watch on YouTube
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
