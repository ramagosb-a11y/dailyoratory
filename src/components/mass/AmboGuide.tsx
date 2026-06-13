import Link from "next/link";

export function AmboGuide() {
  return (
    <section id="ambo" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">The Ambo</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        The place of proclamation
      </h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
        <article className="card p-6">
          <p className="text-sm leading-7 text-muted">
            The ambo is the place from which Scripture is proclaimed. It highlights the dignity of
            the Word of God.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Readings are proclaimed from the ambo.",
              "The Gospel receives special reverence.",
              "The homily opens the Word.",
              "The ambo is distinct from ordinary lecterns where possible.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Pray with the Word</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/library/scripture-prayer" className="btn btn-secondary focus-ring justify-center">Scripture Prayer</Link>
            <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring justify-center">Mass Readings Reflections</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
