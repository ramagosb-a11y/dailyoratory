import Link from "next/link";

const conditions = [
  "Be in a state of grace",
  "Sacramental confession",
  "Receive Holy Communion",
  "Pray for the intentions of the Holy Father",
  "Complete detachment from all sin, even venial sin",
  "Devoutly read Sacred Scripture for at least 30 minutes",
  "Offer the indulgence for oneself or for a soul in purgatory according to Church norms",
];

export function ScriptureIndulgenceGuide() {
  return (
    <section id="scripture-indulgence" className="scroll-mt-28 card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Scripture indulgence</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        30-Minute Scripture Reading and the plenary indulgence
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        The Church grants a plenary indulgence, under the usual conditions, to the faithful who
        read Sacred Scripture with the reverence due to God&apos;s Word for at least one half hour.
        Shorter devout Scripture reading may be associated with a partial indulgence according to
        the norms.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {conditions.map((condition) => (
          <div key={condition} className="rounded-md border border-stone/70 bg-parchment px-4 py-3">
            <p className="text-sm leading-7 text-muted">{condition}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        This page is a spiritual guide, not a judgment of whether the indulgence has been obtained.
        For specific questions, consult official Church sources or a priest.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="#scripture-builder" className="btn btn-primary focus-ring justify-center">
          Build a 30-Minute Scripture Plan
        </a>
        <a href="https://holyjoe.org/indulgences/Indulgences_1999.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary focus-ring justify-center">
          Pray for the Holy Father&apos;s Intentions
        </a>
        <Link href="/indulgences" className="btn btn-secondary focus-ring justify-center">
          Learn More About Indulgences
        </Link>
      </div>
    </section>
  );
}
