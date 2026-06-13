import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import type { HomilyItem } from "@/types/homilies";

export function AudioHomilies({ items }: { items: HomilyItem[] }) {
  return (
    <section>
      <SectionHeader
        eyebrow="Audio"
        title="Audio Homilies and Podcasts"
        summary="Audio-only homilies and external podcast links, when public and approved."
      />
      <div className="mt-8 grid gap-5">
        {items.length ? (
          items.map((item) => (
            <article key={item.id} className="card-parchment p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="season-pill">Audio</span>
                {item.homilyTopic ? <span className="season-pill border-gold text-gold">{item.homilyTopic}</span> : null}
              </div>
              <h3 className="font-display mt-4 text-3xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.shortDescription}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
                {item.creator} <span aria-hidden="true">&middot;</span> {item.sourceName}
                {item.duration ? (
                  <>
                    {" "}
                    <span aria-hidden="true">&middot;</span> {item.duration}
                  </>
                ) : null}
              </p>
              {item.audioUrl ? (
                <audio controls preload="none" className="mt-5 w-full" aria-label={`Audio homily player for ${item.title}`}>
                  <source src={item.audioUrl} />
                </audio>
              ) : null}
              <div className="mt-5">
                <TrackedLink
                  href={item.podcastUrl || item.audioUrl || item.sourceUrl || `/media/${item.slug}`}
                  external={Boolean(item.podcastUrl || item.audioUrl || item.sourceUrl)}
                  className="text-link focus-ring text-sm font-semibold"
                  eventName="homily_audio_open"
                  eventParams={{ homily_slug: item.slug, page_path: "/homilies" }}
                >
                  {item.audioUrl ? "Listen" : "Open Audio Source"}
                </TrackedLink>
              </div>
            </article>
          ))
        ) : (
          <div className="card-parchment p-6 text-sm leading-7 text-muted">
            No approved audio homilies are live yet. When you add public audio links or podcast URLs in the media
            sheet, they can appear here.
          </div>
        )}
      </div>
    </section>
  );
}
