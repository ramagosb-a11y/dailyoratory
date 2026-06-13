const ideas = [
  "Baptism anniversary prayer",
  "First Communion thanksgiving after Mass",
  "Confirmation saint study at home",
  "Monthly confession rhythm",
  "Family Adoration visit",
  "Prayers for engaged couples",
  "Prayers for sick family members",
  "Vocations prayer night",
];

export function FamilySacramentalHomeGuide() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Family Sacramental Home Guide</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Simple ways to keep sacramental life visible at home</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {ideas.map((idea) => (
          <div key={idea} className="rounded-3xl border border-stone-200 bg-ivory/70 px-4 py-3 text-sm leading-7 text-navy">
            {idea}
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        Family practices should support, not replace, participation in the liturgy, parish life, and the
        sacraments themselves.
      </p>
    </section>
  );
}
