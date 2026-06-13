const ideas = [
  "Read the Gospel before Sunday.",
  "Point out the altar, ambo, tabernacle, and crucifix.",
  "Teach simple responses.",
  "Bring a small Mass book.",
  "Whisper short explanations.",
  "Practice thanksgiving after Communion.",
  "Be patient and consistent.",
  "Celebrate small moments of attention and reverence.",
];

export function FamiliesAtMass() {
  return (
    <section id="families-at-mass" className="scroll-mt-28 border-t border-stone/70 pt-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Children and families at Mass</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Helping children enter the Mass
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {ideas.map((idea) => (
          <article key={idea} className="card p-6">
            <p className="text-sm leading-7 text-muted">{idea}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
