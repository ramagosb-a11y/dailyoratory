export function WhatAreSacraments() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What Are the Sacraments?</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Visible signs of invisible grace</h2>
      <p className="mt-4 text-base leading-8 text-muted">
        The sacraments are visible signs of invisible grace. Through them, Christ acts in His Church to
        give grace, forgive sins, strengthen faith, unite us to His Body, and form us for holiness and
        mission.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          "They are gifts, not achievements.",
          "They are encounters with Christ.",
          "They belong to the Church's worship and life.",
          "They touch major moments of Christian life.",
          "They call for faith, preparation, and ongoing conversion.",
        ].map((item) => (
          <li key={item} className="rounded-2xl border border-stone-200 bg-ivory/70 px-4 py-3 text-sm leading-7 text-navy">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
