import Link from "next/link";

export function SeasonOAntiphonsCallout({
  title,
  description,
  buttonLabel,
}: {
  title: string;
  description: string;
  buttonLabel: string;
}) {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">O Antiphons</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">{title}</h2>
      <p className="daily-readable-muted mt-4 max-w-3xl text-base leading-8 text-muted">{description}</p>
      <div className="mt-6">
        <Link href="/liturgical-living/advent/o-antiphons" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
