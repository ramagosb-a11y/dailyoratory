import Link from "next/link";

const cards = [
  { title: "Lectio: Read", body: "Read the passage slowly and attentively." },
  { title: "Meditatio: Meditate", body: "Ponder what the Word reveals and where it touches your life." },
  { title: "Oratio: Pray", body: "Respond to God with praise, sorrow, petition, or gratitude." },
  { title: "Contemplatio: Rest in God", body: "Remain quietly with the Lord beyond many words." },
  { title: "Actio: Live the Word", body: "Take one concrete step of obedience, mercy, or trust." },
];

export function LectioDivinaGuide() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Sacred reading</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Lectio Divina
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          Lectio Divina means sacred reading. It is a traditional way of praying with Scripture by
          moving from reading to meditation, prayer, contemplation, and action.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <article key={card.title} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/tools/heavenbound" className="btn btn-primary focus-ring justify-center">
          Start Lectio Divina
        </Link>
        <Link href="/rule-of-life" className="btn btn-secondary focus-ring justify-center">
          Add It to a Rule of Life
        </Link>
      </div>
    </section>
  );
}
