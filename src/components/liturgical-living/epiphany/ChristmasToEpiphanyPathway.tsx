export function ChristmasToEpiphanyPathway() {
  const steps = ["O Antiphons", "Nativity", "Holy Family", "Mary Mother of God", "Epiphany", "Baptism of the Lord"];

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">From Christmas Joy to Epiphany Light</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Christmas celebrates the birth of Christ. Epiphany reveals that the Child born in Bethlehem is the light of
        all nations. The feast extends Christmas joy outward: from the manger to the nations, from Bethlehem to every
        home, from adoration to mission.
      </p>
      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:flex-wrap">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <span className="rounded-full border border-gold/60 bg-white/70 px-4 py-2 text-sm font-semibold text-navy">
              {step}
            </span>
            {index < steps.length - 1 ? <span className="text-gold">→</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
