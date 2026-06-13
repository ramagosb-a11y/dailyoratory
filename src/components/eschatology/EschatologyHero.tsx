import Link from "next/link";

export function EschatologyHero() {
  return (
    <section className="liturgical-page-hero card-parchment p-8 sm:p-10 lg:p-12">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic Formation</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        Catholic Eschatology
      </h1>
      <p className="daily-readable mt-5 max-w-4xl text-xl leading-9 text-muted">
        A hopeful Catholic guide to the Last Things: death, judgment, Heaven, Hell, Purgatory, resurrection,
        and the coming of Christ.
      </p>
      <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
        Catholic eschatology is not meant to produce fear or speculation. It teaches us to live in the light of
        eternity, to prepare for death with faith, to trust God's justice and mercy, and to hope for the
        resurrection and eternal life promised in Jesus Christ.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="#last-things" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          Explore the Last Things
        </Link>
        <Link href="#eternity-prayer" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Prepare with Prayer
        </Link>
        <Link href="/prophecy-series" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Watch the Prophecy Series
        </Link>
      </div>
    </section>
  );
}
