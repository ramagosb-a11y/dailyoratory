import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getAngelEpisodes } from "@/lib/angels";

function getThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function getWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function AngelTeachingSeries() {
  const episodes = getAngelEpisodes();

  return (
    <section>
      <SectionHeader
        eyebrow="Course series"
        title="A Seven-Episode Course on Angels"
        summary="These seven talks offer a clear, faithful path through the Catholic teaching on angels, creation, worship, guardian angels, and the fallen angels without drifting into superstition."
      />
      <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {episodes.map((episode) => (
          <article key={episode.id} className="card group flex h-full flex-col overflow-hidden">
            <div className="aspect-video w-full overflow-hidden border-b border-stone bg-navy/5">
              <img
                src={getThumbnailUrl(episode.youtubeVideoId)}
                alt={episode.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="season-pill">YouTube video</span>
                <span className="season-pill border-gold text-gold">Formation</span>
              </div>
              <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy">
                {episode.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">{episode.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {episode.tags.map((tag) => (
                  <span
                    key={`${episode.id}-${tag}`}
                    className="rounded-full border border-stone px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
                {episode.speaker} • {episode.sourceName}
              </p>
              <div className="mt-5">
                <TrackedLink
                  href={getWatchUrl(episode.youtubeVideoId)}
                  external
                  className="text-link focus-ring text-sm"
                  eventName="angels_related_tool_click"
                  eventParams={{
                    page_path: "/angels",
                    tool_name: episode.slug,
                    destination: "youtube",
                  }}
                >
                  Watch
                </TrackedLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
