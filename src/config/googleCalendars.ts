const DEFAULT_MASS_READINGS_CALENDAR_ID =
  "91b8a244e4e69f9d55a89a4febdd54d66e8804ee01e89ba09a7be126b6411168@group.calendar.google.com";

export function getMassReadingsGoogleCalendarId() {
  return process.env.MASS_READINGS_GOOGLE_CALENDAR_ID?.trim() || DEFAULT_MASS_READINGS_CALENDAR_ID;
}

export const googleCalendars = {
  massReadings: DEFAULT_MASS_READINGS_CALENDAR_ID,
  massReadingsTimeZone: "America/Chicago",
} as const;
