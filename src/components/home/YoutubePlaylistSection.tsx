const playlistUrl =
  "https://youtube.com/playlist?list=PL8juc41KfKjDnr13CcnvyvqvKBzhLOeOF&si=p91FtKsNTv-KJgPF";

const playlistEmbedUrl =
  "https://www.youtube-nocookie.com/embed/videoseries?list=PL8juc41KfKjDnr13CcnvyvqvKBzhLOeOF&rel=0&modestbranding=1";

export function YoutubePlaylistSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
      <div className="grid gap-7 rounded-md border border-stone bg-ivory p-5 shadow-soft sm:p-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Watch and pray</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Daily Mass reading insights.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            A personal playlist of reflections, meditations, and quiet insights inspired by the daily Catholic Mass
            readings.
          </p>
          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary focus-ring mt-5 w-full justify-center sm:w-auto"
            aria-label="Open the Daily Oratory YouTube playlist in a new tab"
          >
            Open playlist
          </a>
        </div>
        <div className="overflow-hidden rounded-md border border-stone bg-navy shadow-soft">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={playlistEmbedUrl}
              title="Catholic video playlist"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
