export type HolyWeekDates = {
  easter: Date;
  palmSunday: Date;
  holyMonday: Date;
  holyTuesday: Date;
  spyWednesday: Date;
  holyThursday: Date;
  goodFriday: Date;
  holySaturday: Date;
};

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

/** Anonymous Gregorian algorithm. Returned dates are UTC-midnight calendar dates. */
export function getGregorianEaster(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

export function getHolyWeekDates(year: number): HolyWeekDates {
  const easter = getGregorianEaster(year);
  return {
    easter,
    palmSunday: addDays(easter, -7),
    holyMonday: addDays(easter, -6),
    holyTuesday: addDays(easter, -5),
    spyWednesday: addDays(easter, -4),
    holyThursday: addDays(easter, -3),
    goodFriday: addDays(easter, -2),
    holySaturday: addDays(easter, -1),
  };
}

export function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function formatCalendarDate(date: Date) {
  return new Intl.DateTimeFormat(undefined, { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(date);
}


