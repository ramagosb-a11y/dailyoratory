import Link from "next/link";
import { formatDateKey, getApprovedSaintEntries, getTodayDateKey } from "@/lib/saintOfTheDay";
import type { SaintOfTheDayEntry } from "@/types/saintOfTheDay";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type CalendarCell =
  | { key: string; kind: "blank" }
  | {
      key: string;
      kind: "entry";
      isToday: boolean;
      dayNumber: number;
      dateLabel: string;
      href: string;
      name: string;
      shortDescription: string;
      virtue?: string;
    };

export async function SaintCalendarView() {
  const entries = await getApprovedSaintEntries();
  const todayDateKey = getTodayDateKey(new Date());
  const months = Array.from({ length: 12 }, (_, index) => index + 1)
    .map((month) => ({
      month,
      monthLabel: new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(2026, month - 1, 1)),
      saints: entries.filter((entry) => entry.month === month),
    }))
    .filter((month) => month.saints.length > 0);

  if (!months.length) {
    return (
      <div className="dashboard-card p-5 text-sm leading-7 text-muted">
        The Daily Oratory saint calendar is being populated. Use the linked Franciscan Media calendar while
        we continue adding approved entries.
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {months.map((month) => (
        <section key={month.month} className="dashboard-card overflow-hidden p-5">
          <h2 className="font-display text-3xl font-semibold text-navy">{month.monthLabel}</h2>
          <div className="mt-5 hidden rounded-md border border-stone bg-ivory shadow-sm sm:block">
            <div className="grid grid-cols-7 border-b border-stone">
              {weekdays.map((day) => (
                <div key={`${month.month}-${day}`} className="px-3 py-3 text-xs font-bold uppercase text-burgundy">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {buildMonthCells(month.month, month.saints, todayDateKey).map((cell) =>
                cell.kind === "blank" ? (
                  <div key={cell.key} className="min-h-32 border-b border-r border-stone bg-parchment/40" />
                ) : (
                  <Link
                    key={cell.key}
                    href={cell.href}
                    className={`focus-ring min-h-32 border-b border-r border-stone p-3 transition hover:bg-parchment/70 ${
                      cell.isToday ? "bg-gold-soft/40 ring-1 ring-inset ring-gold/60" : "bg-ivory"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-bold text-navy">{cell.dayNumber}</p>
                      {cell.isToday ? (
                        <span className="rounded-full border border-gold/60 bg-gold-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-burgundy">
                          Today
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-2">
                      <p className="text-xs font-bold uppercase text-burgundy">{cell.dateLabel}</p>
                      <h3 className="mt-1 text-sm font-bold leading-5 text-navy">{cell.name}</h3>
                      <p className="mt-2 text-xs leading-5 text-muted line-clamp-3">{cell.shortDescription}</p>
                      {cell.virtue ? (
                        <p className="mt-2 text-[11px] leading-5 text-muted">
                          <span className="font-semibold text-navy">Virtue:</span> {cell.virtue}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:hidden">
            {month.saints.map((entry) => (
              <Link
                key={entry.id}
                href={`/saints/saint-of-the-day?date=${entry.dateKey}`}
                className={`card focus-ring block p-4 hover:border-gold ${entry.dateKey === todayDateKey ? "border-gold bg-gold-soft/30" : ""}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase text-burgundy">{formatDateKey(entry.dateKey)}</p>
                    <h3 className="font-display mt-1 text-2xl font-semibold text-navy">{entry.name}</h3>
                  </div>
                  {entry.dateKey === todayDateKey ? (
                    <span className="rounded-full border border-gold/60 bg-gold-soft px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-burgundy">
                      Today
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{entry.shortDescription}</p>
                {entry.virtue ? (
                  <p className="mt-2 text-sm leading-6 text-muted">
                    <span className="font-semibold text-navy">Virtue:</span> {entry.virtue}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function buildMonthCells(month: number, saints: SaintOfTheDayEntry[], todayDateKey: string): CalendarCell[] {
  const firstWeekday = new Date(2026, month - 1, 1).getDay();
  const cells: CalendarCell[] = Array.from({ length: firstWeekday }, (_, index) => ({
    key: `blank-${month}-${index}`,
    kind: "blank",
  }));

  for (const entry of saints) {
    cells.push({
      key: entry.id,
      kind: "entry",
      isToday: entry.dateKey === todayDateKey,
      dayNumber: entry.day,
      dateLabel: formatDateKey(entry.dateKey),
      href: `/saints/saint-of-the-day?date=${entry.dateKey}`,
      name: entry.name,
      shortDescription: entry.shortDescription,
      virtue: entry.virtue,
    });
  }

  return cells;
}
