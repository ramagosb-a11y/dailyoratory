const reasons = [
  "They connect us to the early Church",
  "They show how early Christians read Scripture",
  "They witness to the sacraments",
  "They defended the Trinity and Incarnation",
  "They taught prayer, virtue, fasting, and almsgiving",
  "They help answer common questions about Catholic doctrine",
  "They inspire holiness and courage",
];

export function WhyFathersMatter() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Why they matter</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Why the Church Fathers still matter
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reasons.map((reason) => (
          <article key={reason} className="card p-5">
            <p className="text-sm font-semibold leading-7 text-navy">{reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
