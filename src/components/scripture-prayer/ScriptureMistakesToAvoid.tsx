const mistakes = [
  "Reading only for information, not prayer",
  "Taking verses out of context",
  "Ignoring the Church's interpretation",
  "Skipping the Old Testament entirely",
  "Reading without prayer",
  "Giving up because a passage is difficult",
  "Treating Scripture as a fortune-telling tool",
  "Forgetting that Scripture should lead to obedience and charity",
];

export function ScriptureMistakesToAvoid() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Stay grounded</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Common mistakes to avoid
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {mistakes.map((mistake) => (
          <article key={mistake} className="card p-5">
            <p className="text-sm leading-7 text-muted">{mistake}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
