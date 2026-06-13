export const liturgicalGoogleCalendarId =
  "d773328039197378aaf741e65b8a6a28ab4844d411badc7973d1af29443f1dbc@group.calendar.google.com";

export const liturgicalGoogleCalendarTimeZone = "America/Chicago";

const encodedCalendarId = encodeURIComponent(liturgicalGoogleCalendarId);
const encodedTimeZone = encodeURIComponent(liturgicalGoogleCalendarTimeZone);

export const liturgicalGoogleCalendarEmbedUrl =
  `https://calendar.google.com/calendar/embed?src=${encodedCalendarId}&ctz=${encodedTimeZone}&mode=MONTH&showTitle=0&showPrint=0&showTabs=1&showCalendars=0&showTz=0`;

export const liturgicalGoogleCalendarIcsUrl =
  `https://calendar.google.com/calendar/ical/${encodedCalendarId}/public/basic.ics`;

export const liturgicalCalendarImportHref = "/calendar/daily-oratory-liturgical-calendar-2026-2028.ics";
