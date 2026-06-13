export function WhatIsFormation() {
  const points = [
    "Doctrine teaches us what is true.",
    "Prayer opens the heart to God.",
    "The sacraments give grace.",
    "Virtue trains us to love rightly.",
    "Scripture forms the mind and heart.",
    "The saints show us the path.",
    "Works of mercy put faith into action.",
    "Formation is lifelong.",
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="card p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Begin here</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          What is Catholic formation?
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Catholic formation is the process of being shaped by Christ through the teaching of the
          Church, the sacraments, Scripture, prayer, virtue, community, and works of charity.
        </p>
        <p className="mt-4 rounded-md border border-stone/70 bg-parchment px-4 py-4 text-base italic leading-8 text-navy">
          “Formation is not simply knowing more about God. It is becoming more available to God.”
        </p>
      </div>
      <div className="card p-6">
        <div className="space-y-3">
          {points.map((point) => (
            <div key={point} className="rounded-md border border-stone/70 bg-parchment px-4 py-3">
              <p className="text-sm leading-7 text-muted">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
