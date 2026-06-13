import Link from "next/link";

export function ApostolicPardonExplainer() {
  return (
    <section id="apostolic-pardon" className="scroll-mt-28 card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">What Is the Apostolic Pardon?</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        The Apostolic Pardon, also called the Apostolic Blessing with plenary indulgence, is a special blessing given by a priest
        to a Catholic in danger of death. It entrusts the dying person to the mercy of Christ and is often asked about together
        with Confession, Anointing of the Sick, and Viaticum when possible.
      </p>
      <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        <li>It is given by a priest.</li>
        <li>It is for someone in danger of death.</li>
        <li>It is connected to a plenary indulgence at the hour of death.</li>
        <li>Families should ask about it when calling for a priest.</li>
        <li>If a priest cannot arrive, do not despair; entrust the person to God&apos;s mercy.</li>
      </ul>
      <div className="mt-6">
        <Link href="/formation/eschatology/death" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Learn More in Death and Christian Hope
        </Link>
      </div>
    </section>
  );
}
