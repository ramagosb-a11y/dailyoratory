import type { MassVideo } from "@/types/mass";

export function MassVideoSection({ videos }: { videos: MassVideo[] }) {
  return (
    <section id="featured-videos" className="scroll-mt-28">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">See the Mass with new eyes</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Trusted formation videos
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        These are external YouTube resources. Daily Oratory does not own these videos.
      </p>
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {videos.map((video) => (
          <article key={video.id} className="card overflow-hidden">
            <div className="aspect-video w-full bg-stone/10">
              <iframe
                className="h-full w-full"
                src={video.embedUrl}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
                External YouTube resource
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-navy">{video.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{video.description}</p>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary focus-ring mt-5 justify-center"
              >
                Watch on YouTube
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
