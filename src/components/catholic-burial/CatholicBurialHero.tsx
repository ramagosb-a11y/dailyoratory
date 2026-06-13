import Link from "next/link";

export function CatholicBurialHero() {
  return (
    <section className="card-parchment overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic end-of-life formation</p>
      <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        Catholic Burial, Cremation, and Funeral Rites
      </h1>
      <p className="daily-readable mt-5 max-w-4xl text-lg leading-8 text-muted">
        A gentle Catholic guide to honoring the dead, praying for the soul, and living in hope of the resurrection.
      </p>
      <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
        Catholic burial and funeral practices are rooted in the dignity of the body, the hope of the resurrection,
        and the Church&apos;s prayer for the dead. Whether a family chooses traditional burial or cremation, the
        remains of the deceased should be treated with reverence, placed in a sacred resting place, and entrusted to
        the mercy of Christ.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="/formation/catholic-burial/cremation" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          Learn About Cremation
        </Link>
        <Link href="/formation/catholic-burial/planning-a-catholic-funeral" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Plan a Catholic Funeral
        </Link>
        <Link href="/formation/catholic-burial/prayers-for-the-dead" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Pray for the Dead
        </Link>
      </div>
    </section>
  );
}
