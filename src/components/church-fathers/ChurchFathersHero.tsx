import Link from "next/link";

export function ChurchFathersHero() {
  return (
    <section className="rounded-md border border-stone bg-navy px-6 py-8 text-ivory shadow-soft sm:px-8 sm:py-10">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Daily Oratory</p>
      <h1 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        Learn from the Church Fathers
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-parchment">
        Meet the early Christian witnesses who taught the faith, defended doctrine, prayed with
        Scripture, and handed on the apostolic tradition.
      </p>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-soft">
        The Church Fathers help us hear how the early Church read Scripture, celebrated the
        sacraments, defended the faith, and lived holiness. If you are exploring Catholic
        Christianity, they can also help you see how early believers spoke about worship, doctrine,
        and life in Christ.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link href="#apostolic-fathers" className="btn btn-gold focus-ring justify-center">
          Start with the Apostolic Fathers
        </Link>
        <Link href="#topics" className="btn btn-outline-inverse focus-ring justify-center">
          Browse by Topic
        </Link>
      </div>
    </section>
  );
}
