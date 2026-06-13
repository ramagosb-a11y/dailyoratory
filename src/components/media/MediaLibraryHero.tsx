import Link from "next/link";

export function MediaLibraryHero() {
  return (
    <section className="liturgical-page-hero rounded-md border border-stone bg-parchment px-6 py-10 shadow-soft sm:px-8 sm:py-12">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Media Library</p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
          Oratory Media Library
        </h1>
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
          Videos, slides, images, and formation resources to help you pray, learn, and grow in the Catholic faith.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          Explore Daily Oratory media resources including YouTube videos, playlists, Google Slides, prayer images,
          formation graphics, and public teaching materials. Use these resources for personal prayer, family formation,
          OCIA, parish groups, and spiritual growth.
        </p>
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="#featured-media" className="btn liturgical-button focus-ring">
          Browse Featured Media
        </Link>
        <Link href="#media-browser" className="btn btn-secondary focus-ring">
          View Videos
        </Link>
        <Link href="#media-browser" className="btn btn-secondary focus-ring">
          View Slides
        </Link>
      </div>
    </section>
  );
}
