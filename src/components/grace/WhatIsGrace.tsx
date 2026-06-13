import { LinkedCitationText } from "@/components/LinkedCitationText";

const graceSummary =
  "Grace is God's gift of His help and His life. It is the work of the Holy Spirit in the soul, drawing us away from sin and toward holiness. Grace forgives, heals, strengthens, enlightens, and transforms. Without grace, we cannot live the Christian life by our own strength.";

const graceBullets = [
  "Grace is a free gift from God.",
  "Grace is not earned by human effort.",
  "Grace heals what sin has wounded.",
  "Grace strengthens us to choose the good.",
  "Grace makes us holy.",
  "Grace helps us resist temptation.",
  "Grace works through the sacraments.",
  "Grace calls for our cooperation.",
  "Grace leads us toward eternal life.",
];

const graceCallout =
  "Grace is not only for advanced Christians. Every prayer, every return to Confession, every act of repentance, every movement toward God begins with grace.";

export function WhatIsGrace() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">What Is Grace?</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        <LinkedCitationText text={graceSummary} />
      </p>
      <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {graceBullets.map((item) => (
          <li key={item}>
            <LinkedCitationText text={item} />
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-2xl border border-gold/40 bg-white/80 p-5">
        <p className="daily-readable text-base leading-8 text-muted">
          <LinkedCitationText text={graceCallout} />
        </p>
      </div>
    </section>
  );
}
