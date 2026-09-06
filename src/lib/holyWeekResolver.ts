import { dateKey, getHolyWeekDates } from "@/lib/holyWeekDate";
import { holyWeekMeditations } from "@/data/holyWeekMeditations";
import type { SacredMoment } from "@/types/holyWeek";

export type JourneySeason = "before" | "holy-week" | "after";

export function resolveSacredHour(now: Date): { season: JourneySeason; current: SacredMoment | null; earlier: SacredMoment[]; next: SacredMoment | null } {
  const dates = getHolyWeekDates(now.getFullYear());
  const today = dateKey(new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())));
  const palm = dateKey(dates.palmSunday);
  const easter = dateKey(dates.easter);
  if (today < palm) return { season: "before", current: null, earlier: [], next: holyWeekMeditations[0] };
  if (today > easter) return { season: "after", current: null, earlier: [], next: null };

  const dayOffset = Math.round((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - dates.easter.getTime()) / 86400000);
  const timed = holyWeekMeditations.filter((moment) => moment.dayOffset === dayOffset && moment.hour !== undefined);
  const minutes = now.getHours() * 60 + now.getMinutes();
  const past = timed.filter((moment) => minutes >= (moment.hour! * 60 + (moment.minute ?? 0)));
  const future = timed.filter((moment) => minutes < (moment.hour! * 60 + (moment.minute ?? 0)));
  const current = past.at(-1) ?? (timed.length ? null : holyWeekMeditations.find((moment) => moment.dayOffset === dayOffset) ?? null);
  return { season: "holy-week", current, earlier: past.slice(-2, -1), next: future[0] ?? holyWeekMeditations.find((moment) => moment.sequence === (current?.sequence ?? 0) + 1) ?? null };
}


