import Link from "next/link";

const tips = [
  "You are welcome to come and observe.",
  "Sit where you can follow along.",
  "Stand, sit, and kneel with the congregation as you are able.",
  "Listen for the Word of God.",
  "Do not worry if you do not understand everything.",
  "If you are not Catholic or not prepared to receive Communion, remain in the pew and pray.",
  "Speak with a priest, deacon, OCIA leader, or parish staff if you want to learn more.",
];

export function MassForBeginners() {
  return (
    <section id="mass-for-beginners" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Mass for beginners</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        If you are new to Mass
      </h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <article className="card p-6">
          <ul className="space-y-3">
            {tips.map((tip) => (
              <li key={tip} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Helpful next pages</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/sacraments/ocia" className="btn btn-secondary focus-ring justify-center">OCIA</Link>
            <Link href="/sacraments/eucharist" className="btn btn-secondary focus-ring justify-center">Eucharist</Link>
            <Link href="/formation" className="btn btn-secondary focus-ring justify-center">Formation</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
