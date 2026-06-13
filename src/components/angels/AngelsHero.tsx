import Link from "next/link";

export function AngelsHero() {
  return (
    <section className="rounded-[2rem] border border-gold/40 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_42%),linear-gradient(180deg,rgba(255,252,244,0.96),rgba(250,245,232,0.98))] p-8 shadow-soft sm:p-10 lg:p-12">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Angels and the Invisible World</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Angels and the Invisible World
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            God's messengers, worshipers, and servants in the mystery of creation and salvation.
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">
            The Catholic faith teaches that angels are real spiritual creatures created by God. They
            worship Him, serve His plan, guard His people, appear throughout Scripture, and join the
            Church's worship in the Mass.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#what-are-angels" className="btn liturgical-button focus-ring justify-center">
              Learn What Angels Are
            </Link>
            <Link href="#guardian-angels" className="btn btn-secondary focus-ring justify-center">
              Guardian Angels
            </Link>
            <Link href="#angels-in-the-mass" className="btn btn-secondary focus-ring justify-center">
              Angels in the Mass
            </Link>
          </div>
        </div>
        <aside className="rounded-2xl border border-gold/40 bg-ivory/85 p-6 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Hero note</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Angels point us to God. They are powerful servants of the Lord, but worship belongs to
            God alone.
          </p>
        </aside>
      </div>
    </section>
  );
}
