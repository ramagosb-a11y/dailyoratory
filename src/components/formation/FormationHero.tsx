import Link from "next/link";

export function FormationHero() {
  return (
    <section className="liturgical-page-hero rounded-md border border-stone bg-navy px-6 py-8 text-ivory shadow-soft sm:px-8 sm:py-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Daily Oratory</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Catholic Formation</h1>
      <h2 className="font-display mt-3 max-w-4xl text-3xl font-semibold leading-tight text-parchment sm:text-4xl">
        Grow in doctrine, virtue, prayer, and daily discipleship.
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-8 text-parchment">
        Catholic formation is the lifelong journey of learning Christ, loving Christ, and becoming
        more like Christ. Whether you are a lifelong Catholic, returning after time away, or
        beginning to explore the faith, Daily Oratory helps you connect Church teaching, prayer,
        Scripture, sacraments, virtue, and works of mercy into a daily path of response to grace.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-soft">
        Catholic formation is open to anyone who wants to understand what the Church teaches and
        how the Catholic spiritual life is lived. The Holy Spirit leads people by stages, and many
        begin simply as learners and seekers.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="#formation-selector" className="btn btn-gold focus-ring justify-center">
          Start Your Formation Path
        </a>
        <a href="#doctrine" className="btn btn-outline-inverse focus-ring justify-center">
          Explore Doctrine
        </a>
        <Link href="/rule-of-life" className="btn btn-outline-inverse focus-ring justify-center">
          Build a Rule of Life
        </Link>
      </div>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-soft">
        Daily Oratory supports personal formation, but it does not replace parish catechesis,
        sacramental preparation, spiritual direction, or pastoral care.
      </p>
    </section>
  );
}
