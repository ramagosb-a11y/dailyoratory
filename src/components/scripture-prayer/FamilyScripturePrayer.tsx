const ideas = [
  "Read the Sunday Gospel before Mass",
  "Ask each person what word stood out",
  "Pray one Psalm together",
  "Use a children's Bible for younger children",
  "Keep a family Scripture verse of the week",
  "Use Advent and Lent readings seasonally",
  "End with a simple prayer",
];

export function FamilyScripturePrayer() {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Family prayer</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Praying Scripture as a family
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {ideas.map((idea) => (
          <article key={idea} className="rounded-md border border-stone/70 bg-parchment px-4 py-4">
            <p className="text-sm leading-7 text-muted">{idea}</p>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        Keep family Scripture prayer short and peaceful. The goal is consistency and love, not perfection.
      </p>
    </section>
  );
}
