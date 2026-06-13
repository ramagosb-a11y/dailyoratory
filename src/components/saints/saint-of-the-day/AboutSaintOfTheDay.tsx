export function AboutSaintOfTheDay() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">About</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">About the Saint of the Day</h2>
      <p className="mt-6 text-sm leading-8 text-muted">
        The Saint of the Day is a daily invitation to learn from holy men and women who followed Christ
        in different times, places, vocations, and struggles. The goal is not only to learn facts, but
        to imitate virtue, ask for intercession, and grow in holiness.
      </p>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
        <li>- Saints are witnesses to Christ.</li>
        <li>- Saints are alive in Christ.</li>
        <li>- We ask their prayers.</li>
        <li>- We do not worship saints.</li>
        <li>- Saints show many paths to holiness.</li>
      </ul>
    </section>
  );
}
