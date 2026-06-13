import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getFeaturedVaticanVideos } from "@/lib/vatican";

export function FeaturedVaticanVideos() {
  const videos = getFeaturedVaticanVideos();

  return (
    <section>
      <SectionHeader
        eyebrow="Featured videos"
        title="See the Beauty of the Vatican"
        summary="For specific Masses or ceremonies, visit Vatican News YouTube for the latest scheduled broadcast."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <article key={video.id} className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
              {video.official ? "Official Vatican video" : "External resource"}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{video.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{video.description}</p>
            <TrackedLink
              href={video.youtubeUrl}
              external
              className="btn btn-secondary focus-ring mt-5 justify-center"
              eventName="vatican_resource_click"
              eventParams={{ resource_name: video.title, page_path: "/vatican", section: "featured-vatican-videos" }}
            >
              Open official video source
            </TrackedLink>
          </article>
        ))}
      </div>
    </section>
  );
}
