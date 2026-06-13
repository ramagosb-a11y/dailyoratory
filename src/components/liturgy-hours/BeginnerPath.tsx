const steps = [
  {
    title: "Start with Night Prayer",
    text: "Night Prayer is short, peaceful, and easy to learn.",
  },
  {
    title: "Add Morning Prayer",
    text: "Begin the day with praise and Scripture.",
  },
  {
    title: "Add Evening Prayer",
    text: "End the workday with thanksgiving and intercession.",
  },
  {
    title: "Learn the Office of Readings",
    text: "Add deeper Scripture and spiritual reading when you are ready.",
  },
  {
    title: "Pray with others",
    text: "Invite a spouse, family member, parish group, or prayer room to pray together.",
  },
];

export function BeginnerPath() {
  return (
    <section id="how-to-begin">
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">How to begin</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Beginner path
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step, index) => (
          <article key={step.title} className="card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="https://divineoffice.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold focus-ring justify-center"
        >
          Start with Night Prayer
        </a>
      </div>
    </section>
  );
}
