import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";

export function TodaySaintCard({ entry }: { entry: SaintOfTheDayEntry }) {
  return (
    <section id="todays-saint" className="card-parchment liturgical-card-accent p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Today&apos;s Saint</p>
      <h1 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl">{entry.name}</h1>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-burgundy">{entry.title}</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="space-y-4 text-sm leading-7 text-muted">
          {entry.lifeDates ? (
            <p>
              <span className="font-semibold text-navy">Life dates:</span> {entry.lifeDates}
            </p>
          ) : null}
          {entry.feastNote ? (
            <p>
              <span className="font-semibold text-navy">Feast note:</span> {entry.feastNote}
            </p>
          ) : null}
          <p>
            <span className="font-semibold text-navy">Short description:</span> {entry.shortDescription}
          </p>
          <p>
            <span className="font-semibold text-navy">Daily Oratory summary:</span> {entry.dailyOratorySummary}
          </p>
        </div>
        <div className="space-y-4 text-sm leading-7 text-muted">
          {entry.virtue ? (
            <p>
              <span className="font-semibold text-navy">Virtue to imitate:</span> {entry.virtue}
            </p>
          ) : null}
          {entry.patronage ? (
            <p>
              <span className="font-semibold text-navy">Patronage:</span> {entry.patronage}
            </p>
          ) : null}
          {entry.scriptureReference ? (
            <p>
              <span className="font-semibold text-navy">Scripture reference:</span> {entry.scriptureReference}
            </p>
          ) : null}
          {entry.reflectionQuestion ? (
            <p>
              <span className="font-semibold text-navy">Reflection question:</span> {entry.reflectionQuestion}
            </p>
          ) : null}
          {entry.practicalAction ? (
            <p>
              <span className="font-semibold text-navy">Practical action:</span> {entry.practicalAction}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
