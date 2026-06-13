import type { LiturgyHour } from "@/types/liturgyOfTheHours";

export function HoursExplainedGrid({ hours }: { hours: LiturgyHour[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">The hours of prayer</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          The hours explained
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          DivineOffice.org commonly offers daily links such as Invitatory, Office of Readings,
          Morning Prayer, Midmorning Prayer, Midday Prayer, Midafternoon Prayer, Evening Prayer,
          and Night Prayer.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {hours.map((hour) => (
          <article key={hour.id} className="card p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="season-pill">{hour.traditionalName}</span>
              <span className="season-pill">{hour.estimatedTime}</span>
            </div>
            <h3 className="font-display mt-4 text-3xl font-semibold text-navy">{hour.title}</h3>
            <p className="mt-1 text-sm font-semibold text-burgundy">{hour.timeOfDay}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{hour.shortDescription}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
