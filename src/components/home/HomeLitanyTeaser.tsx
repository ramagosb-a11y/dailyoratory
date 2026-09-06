import Image from "next/image";
import Link from "next/link";

type HomeLitanyTeaserItem = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
};

type HomeLitanyTeaserProps = {
  litanies: HomeLitanyTeaserItem[];
  collectionHref: string;
};

function LitanyPreviewCard({
  collectionHref,
  litany,
  className,
}: {
  collectionHref: string;
  litany: HomeLitanyTeaserItem;
  className?: string;
}) {
  return (
    <Link
      aria-label={`View all litanies, including ${litany.title}`}
      className={`focus-ring relative block shrink-0 overflow-hidden border border-gold/55 bg-[#fffdf8] p-1 shadow-soft transition-transform duration-200 hover:-translate-y-1 ${className ?? ""}`}
      href={collectionHref}
    >
      <span aria-hidden="true" className="absolute left-1 top-1 z-10 text-[10px] leading-none text-gold">
        ❦
      </span>
      <span aria-hidden="true" className="absolute right-1 top-1 z-10 -scale-x-100 text-[10px] leading-none text-gold">
        ❦
      </span>
      <div className="relative aspect-[4/4.5] overflow-hidden border border-gold/45 bg-parchment">
        <Image alt={litany.imageAlt} className="object-cover" fill sizes="(max-width: 1023px) min(19rem, 100vw), 12rem" src={litany.image} />
      </div>
      <div className="flex min-h-20 items-center justify-center border-x border-b border-gold/30 px-3 py-3 text-center font-display text-lg font-semibold leading-snug text-navy">
        {litany.title}
      </div>
      <div aria-hidden="true" className="flex items-center justify-center gap-1.5 py-2 text-gold">
        <span className="h-px w-6 bg-gold/55" />
        <span className="text-xs">✦</span>
        <span className="h-px w-6 bg-gold/55" />
      </div>
    </Link>
  );
}

export function HomeLitanyTeaser({ litanies, collectionHref }: HomeLitanyTeaserProps) {
  const previewLitanies = litanies.slice(0, 4);
  const featuredLitany = previewLitanies[0];

  return (
    <section aria-labelledby="home-litanies-heading" className="bg-[#FFFDF7] px-2 py-10 sm:px-5 sm:py-14 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-gold/50 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_28%),linear-gradient(135deg,#fffdf8_0%,#f7eedb_100%)] p-1 shadow-hairline">
        <span aria-hidden="true" className="absolute left-1 top-0 text-lg leading-none text-gold">❦</span>
        <span aria-hidden="true" className="absolute right-1 top-0 -scale-x-100 text-lg leading-none text-gold">❦</span>
        <span aria-hidden="true" className="absolute bottom-0 left-1 -scale-y-100 text-lg leading-none text-gold">❦</span>
        <span aria-hidden="true" className="absolute bottom-0 right-1 -scale-100 text-lg leading-none text-gold">❦</span>

        <div className="grid min-w-0 gap-8 border border-gold/35 px-5 py-8 sm:px-10 sm:py-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-center lg:gap-12">
          <div className="min-w-0 max-w-xs">
            <div aria-hidden="true" className="flex items-center gap-3 text-gold">
              <span className="h-px w-16 bg-gold/60" />
              <span className="text-2xl leading-none">†</span>
              <span className="h-px w-16 bg-gold/60" />
            </div>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-navy sm:text-5xl" id="home-litanies-heading">
              Pray a Litany
            </h2>
            <div aria-hidden="true" className="mt-4 flex items-center gap-2 text-gold">
              <span className="h-px w-5 bg-gold/60" />
              <span className="text-sm">❦</span>
              <span className="h-px w-5 bg-gold/60" />
            </div>
            <p className="daily-readable-muted mt-5 text-base leading-8 text-muted sm:text-lg">
              Choose a devotion for the need before you.
            </p>
            <Link className="btn btn-primary focus-ring daily-button-readable mt-6 min-h-12 w-full justify-center sm:w-auto" href={collectionHref}>
              All litanies <span aria-hidden="true">→</span>
            </Link>
          </div>

          {featuredLitany ? (
            <div className="lg:hidden">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brown/75">A devotion to begin with</p>
              <LitanyPreviewCard className="mx-auto w-full max-w-[19rem]" collectionHref={collectionHref} litany={featuredLitany} />
            </div>
          ) : null}

          <div className="relative hidden min-w-0 lg:block">
            <div aria-label={`${litanies.length} litanies available`} className="flex gap-4 overflow-hidden">
              {previewLitanies.map((litany) => (
                <LitanyPreviewCard
                  className="w-[10.75rem]"
                  collectionHref={collectionHref}
                  key={litany.id}
                  litany={litany}
                />
              ))}
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-gradient-to-l from-[#f8f0df] via-[#f8f0df]/85 to-transparent lg:block" />
            <Link aria-label="View all litanies" className="focus-ring absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/35 bg-[#fffdf8] text-3xl leading-none text-navy shadow-soft transition hover:scale-105 lg:flex" href={collectionHref}>
              ›
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
