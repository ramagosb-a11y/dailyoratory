import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getLiveVaticanVideos } from "@/lib/vatican";
import { VaticanYouTubeEmbed } from "@/components/vatican/VaticanYouTubeEmbed";

export function VaticanLiveBroadcasts() {
  const videos = getLiveVaticanVideos();
  const featured = videos[0];
  const links = videos.slice(1);

  return (
    <section id="watch-vatican-live">
      <SectionHeader
        eyebrow="Broadcasts"
        title="Watch Vatican Live"
        summary="Online broadcasts can help people pray from home. For Catholics who are able and obligated to attend Sunday Mass, watching online normally does not replace attending Mass in person."
      />
      <div className="mt-7 grid gap-5 xl:grid-cols-[1.3fr_0.9fr]">
        <VaticanYouTubeEmbed
          title={featured?.title ?? "Vatican Media Live"}
          embedUrl={featured?.embedUrl}
          description={featured?.description ?? "Official Vatican live coverage from Saint Peter's Square and major events."}
          section="vatican-live-broadcasts"
        />
        <div className="space-y-4">
          <article className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">Vatican Media Live</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Official Vatican Media live stream from Saint Peter&apos;s Square, available 24/7 where provided.
            </p>
            <TrackedLink
              href="https://www.comunicazione.va/en/servizi/live.html"
              external
              className="btn btn-secondary focus-ring mt-5 justify-center"
              eventName="vatican_live_click"
              eventParams={{ resource_name: "Vatican Media Live", page_path: "/vatican", section: "vatican-live-broadcasts" }}
            >
              Open official live page
            </TrackedLink>
          </article>
          {links.map((video) => (
            <article key={video.id} className="card-parchment p-5">
              <h3 className="font-display text-2xl font-semibold text-navy">{video.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{video.description}</p>
              <TrackedLink
                href={video.youtubeUrl}
                external
                className="btn btn-secondary focus-ring mt-5 justify-center"
                eventName="vatican_live_click"
                eventParams={{ resource_name: video.title, page_path: "/vatican", section: "vatican-live-broadcasts" }}
              >
                Watch on official source
              </TrackedLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
