import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { prophecySeriesEpisodes, prophecySeriesPlaylistUrl } from "@/data/prophecySeries";

export function ProphecyEpisodeTracker() {
  return (
    <section className="mt-14">
      <SectionHeader
        eyebrow="Episodes"
        title="12-Part Sunday Series"
        summary="A new episode will release each Sunday at 6:00 PM CST. Episode titles and descriptions may be updated as each video is released."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {prophecySeriesEpisodes.map((episode) => (
          <article key={episode.id} className="card-parchment flex h-full flex-col p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
                Episode {episode.episodeNumber}
              </p>
              <span className="rounded-full border border-gold/60 bg-ivory px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-burgundy">
                {episode.status}
              </span>
            </div>
            <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-navy">
              {episode.title}
            </h3>
            <p className="daily-card-readable mt-4 text-[#4b443a]">{episode.description}</p>
            <p className="mt-4 text-sm font-semibold text-muted">{episode.releaseLabel}</p>
            <TrackedLink
              href={prophecySeriesPlaylistUrl}
              external
              eventName="prophecy_series_episode_click"
              eventParams={{
                section: "episode-tracker",
                destination: episode.youtubeUrl,
                episodeNumber: episode.episodeNumber,
              }}
              className="btn btn-secondary daily-button-readable mt-6 min-h-12 justify-center"
            >
              Watch on Playlist
            </TrackedLink>
          </article>
        ))}
      </div>
      <p className="daily-readable-muted mt-5">
        Episode titles and descriptions may be updated as each video is released.
      </p>
    </section>
  );
}
