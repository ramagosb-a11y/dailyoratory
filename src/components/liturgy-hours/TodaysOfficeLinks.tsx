import { formatExternalPrayerLink } from "@/lib/liturgyOfTheHours";
import type { LiturgyHour } from "@/types/liturgyOfTheHours";

export function TodaysOfficeLinks({ hours }: { hours: LiturgyHour[] }) {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Pray today</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Pray today&apos;s office
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          Daily Oratory sends you to DivineOffice.org for the current text and audio of the hours.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <a
          href="https://divineoffice.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="card p-5 transition hover:border-gold"
        >
          <p className="text-xs font-bold uppercase text-burgundy">External prayer link</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">Today&apos;s Prayers</h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Open DivineOffice.org for the current day&apos;s office texts and audio.
          </p>
        </a>
        {hours.map((hour) => {
          const link = formatExternalPrayerLink(hour);
          return (
            <a
              key={hour.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 transition hover:border-gold"
            >
              <p className="text-xs font-bold uppercase text-burgundy">External prayer link</p>
              <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{link.label}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{link.note}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
