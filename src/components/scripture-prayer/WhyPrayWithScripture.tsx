const cards = [
  "To hear God's voice",
  "To know Jesus Christ",
  "To be formed by the Church's prayer",
  "To repent and be converted",
  "To grow in wisdom",
  "To prepare for Mass",
  "To carry the Word into daily life",
  "To unite prayer, study, and action",
];

export function WhyPrayWithScripture() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Why pray with Scripture</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Why Catholics pray with Scripture
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{card}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Scripture prayer should bear fruit in faith, humility, charity, obedience, and love
              of God and neighbor.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
