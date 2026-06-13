import Link from "next/link";

export function MassReadingsReflectionHero({
  primaryHref,
}: {
  primaryHref: string;
}) {
  return (
    <section className="liturgical-page-hero card-parchment p-6 sm:p-8 lg:p-10">
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Mass Readings Reflections</p>
        <h1 className="font-display mt-3 text-5xl font-semibold leading-none text-navy sm:text-6xl">
          Reflect on the daily and Sunday Mass readings and carry the Word into daily life.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
          Pray with the daily and Sunday Mass readings through Catholic reflection, prayer, and practical
          application. Daily Oratory references the readings and offers original commentary without
          republishing copyrighted lectionary texts.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href={primaryHref} className="btn btn-primary focus-ring">
            Read Today's Reflection
          </Link>
          <Link href="/reflections/mass-readings/calendar" className="btn btn-secondary focus-ring">
            Browse Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
