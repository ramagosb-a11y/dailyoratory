export function WhatIsPrayer() {
  return (
    <section id="what-is-prayer" className="scroll-mt-28">
      <p className="liturgical-section-eyebrow">What is prayer?</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Prayer is relationship with God.
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        Prayer is the raising of the heart and mind to God. It is a living relationship with the
        Father, through Jesus Christ, in the Holy Spirit.
      </p>

      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          "God speaks first; prayer is our response.",
          "Prayer can include words, silence, Scripture, thanksgiving, repentance, petition, adoration, and surrender.",
          "Prayer is not about impressing God.",
          "Prayer grows through faithfulness.",
          "Prayer changes the heart and teaches us to love.",
          "Prayer should lead to charity, conversion, humility, and trust.",
        ].map((point) => (
          <div key={point} className="card-parchment liturgical-card-accent p-5 text-sm leading-7 text-muted">
            {point}
          </div>
        ))}
      </div>

      <div className="card-parchment mt-7 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Pastoral note</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          You do not need to feel holy to begin. Begin honestly. God meets you where you are.
        </p>
      </div>
    </section>
  );
}
