import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { prophecySeriesPlaylistEmbedUrl, prophecySeriesPlaylistUrl } from "@/data/prophecySeries";

export function ProphecyPlaylistEmbed() {
  return (
    <section className="mt-14">
      <SectionHeader
        eyebrow="Watch"
        title="Watch the Prophecy Series"
        summary="Watch the full Daily Oratory playlist here, then open YouTube directly if you want the latest episode queue, channel notifications, or comments."
      />
      <div className="card-parchment mt-7 p-4 sm:p-5">
        <div className="overflow-hidden rounded-[1.5rem] border border-stone shadow-soft">
          <div className="relative aspect-video w-full bg-navy/5">
            <iframe
              src={prophecySeriesPlaylistEmbedUrl}
              title="Daily Oratory Prophecy Series YouTube Playlist"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
        <p className="daily-readable-muted mt-5">
          If the latest episode does not appear immediately, open the playlist directly on YouTube.
        </p>
        <TrackedLink
          href={prophecySeriesPlaylistUrl}
          external
          eventName="prophecy_series_playlist_click"
          eventParams={{ section: "playlist-embed", destination: prophecySeriesPlaylistUrl }}
          className="btn btn-secondary daily-button-readable mt-5 min-h-12 justify-center sm:w-fit"
        >
          Open Playlist on YouTube
        </TrackedLink>
      </div>
    </section>
  );
}
