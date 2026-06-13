const cards = [
  { title: "Before work", text: "Morning Prayer places the whole day under God's praise and providence." },
  { title: "At lunch", text: "Midday Prayer helps you pause, recollect, and begin again." },
  { title: "After work", text: "Evening Prayer gathers the day into thanksgiving and intercession." },
  { title: "Before sleep", text: "Night Prayer hands the heart and the night back to God." },
  { title: "In suffering", text: "The Psalms teach us how to pray honestly when the heart is heavy." },
  { title: "In gratitude", text: "The Church gives words of praise when joy is easier than explanation." },
  { title: "In confusion", text: "When you have no words, the Church lends you her own." },
];

export function SanctifyTheDay() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Daily life</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Sanctify the day
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
