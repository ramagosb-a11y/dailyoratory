const steps = [
  {
    title: "Begin with the Holy Spirit",
    body: "Come, Holy Spirit, open my heart to the Word of God.",
  },
  {
    title: "Read slowly",
    body: "Choose a short passage and read it without rushing.",
  },
  {
    title: "Notice",
    body: "Ask: What word, phrase, image, or action stands out?",
  },
  {
    title: "Listen",
    body: "Ask: What is God revealing about Himself?",
  },
  {
    title: "Respond",
    body: "Speak to God honestly in prayer.",
  },
  {
    title: "Rest",
    body: "Sit quietly with the Word.",
  },
  {
    title: "Act",
    body: "Choose one concrete way to live the Word today.",
  },
];

export function HowToPrayWithScripture() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Practice</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          How to pray with Scripture
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        The goal is not to finish quickly. The goal is to listen faithfully.
      </p>
    </section>
  );
}
