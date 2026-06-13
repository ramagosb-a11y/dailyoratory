const cards = [
  "Arrive early",
  "Listen to the readings",
  "Sing and respond",
  "Offer your heart with the gifts",
  "Pray the Eucharistic Prayer attentively",
  "Receive Communion reverently",
  "Make thanksgiving",
  "Live the dismissal",
  "Bring children patiently and lovingly",
  "Ask questions and keep learning",
];

export function ParticipateAtMassGuide() {
  return (
    <section id="participate" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">How to participate</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Participate more prayerfully
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((title) => (
          <article key={title} className="card p-6">
            <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Let this become a simple, concrete practice instead of trying to master everything at once.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
