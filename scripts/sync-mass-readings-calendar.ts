const { createHash, createSign } = require("node:crypto") as typeof import("node:crypto");

const DEFAULT_SHEET_ID = "17sMLuAMjUYyEo0ZqSJBrLF3p-j-9e6Dbzn7UEfoMmr0";
const REFLECTIONS_SHEET = "Mass_Readings_Reflections";
const DEFAULT_MASS_READINGS_CALENDAR_ID =
  "91b8a244e4e69f9d55a89a4febdd54d66e8804ee01e89ba09a7be126b6411168@group.calendar.google.com";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_CALENDAR_API_BASE = "https://www.googleapis.com/calendar/v3";
const MANAGED_SOURCE = "daily-oratory-mass-readings";
const CHICAGO_TIME_ZONE = "America/Chicago";
const SITE_URL = (process.env.DAILY_ORATORY_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://dailyoratory.faith").replace(/\/$/, "");

type SheetRow = Record<string, string>;

type ReflectionStatus = "draft" | "scheduled" | "published" | "archived";

type ReflectionRecord = {
  slug: string;
  title: string;
  reflectionDate: string;
  reflectionType: string;
  liturgicalDay: string;
  theme: string;
  status: ReflectionStatus;
  readings: Array<{ label: string; reference: string }>;
  canonicalPath: string;
};

type ManagedCalendarEvent = {
  id: string;
  description?: string;
  extendedProperties?: {
    private?: Record<string, string>;
  };
};

async function main() {
  const credentials = getGoogleServiceAccountCredentials();
  if (!credentials) {
    console.error(
      "[sync-mass-readings-calendar] Missing GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.",
    );
    process.exitCode = 1;
    return;
  }

  const calendarId = process.env.MASS_READINGS_GOOGLE_CALENDAR_ID?.trim() || DEFAULT_MASS_READINGS_CALENDAR_ID;
  const sheetId =
    process.env.GOOGLE_SHEETS_MASS_READINGS_SHEET_ID?.trim() ||
    process.env.MASS_READINGS_REFLECTIONS_SHEET_ID?.trim() ||
    DEFAULT_SHEET_ID;

  const reflections = await fetchReflections(sheetId);
  if (!reflections.length) {
    console.error(`[sync-mass-readings-calendar] No reflections were loaded from sheet ${sheetId}.`);
    process.exitCode = 1;
    return;
  }

  const eligibleReflections = reflections
    .filter((reflection) => reflection.status === "published" || reflection.status === "scheduled")
    .sort((a, b) => a.reflectionDate.localeCompare(b.reflectionDate) || a.title.localeCompare(b.title));

  const accessToken = await getGoogleAccessToken(credentials.clientEmail, credentials.privateKey);
  const managedEvents = await listManagedEvents(calendarId, accessToken);
  const managedEventsBySlug = new Map<string, ManagedCalendarEvent>();

  for (const event of managedEvents) {
    const slug = getManagedSlugFromEvent(event);
    if (slug) managedEventsBySlug.set(slug, event);
  }

  let createdCount = 0;
  let updatedCount = 0;

  for (const reflection of eligibleReflections) {
    const eventId = buildManagedEventId(reflection.slug);
    const existingManagedEvent = managedEventsBySlug.get(reflection.slug);

    if (existingManagedEvent && existingManagedEvent.id !== eventId) {
      await deleteCalendarEvent(calendarId, accessToken, existingManagedEvent.id);
    }

    const existsByTargetId = managedEvents.some((event) => event.id === eventId);
    if (existsByTargetId) {
      await updateCalendarEvent(calendarId, accessToken, eventId, reflection);
      updatedCount += 1;
      continue;
    }

    try {
      await createCalendarEvent(calendarId, accessToken, eventId, reflection);
      createdCount += 1;
    } catch (error) {
      if (!isDuplicateGoogleCalendarEventError(error)) throw error;
      await updateCalendarEvent(calendarId, accessToken, eventId, reflection);
      updatedCount += 1;
    }
  }

  const eligibleSlugs = new Set(eligibleReflections.map((reflection) => reflection.slug));
  let deletedCount = 0;

  for (const event of managedEvents) {
    const slug = getManagedSlugFromEvent(event);
    if (!slug || eligibleSlugs.has(slug)) continue;
    await deleteCalendarEvent(calendarId, accessToken, event.id);
    deletedCount += 1;
  }

  console.log(
    [
      "[sync-mass-readings-calendar] Sync complete.",
      `calendarId=${calendarId}`,
      `sheetId=${sheetId}`,
      `eligible=${eligibleReflections.length}`,
      `created=${createdCount}`,
      `updated=${updatedCount}`,
      `deleted=${deletedCount}`,
    ].join(" "),
  );
}

async function fetchReflections(sheetId: string) {
  const rows = await fetchGoogleSheetRows(sheetId, REFLECTIONS_SHEET);
  return rows.map(mapRowToReflection).filter((record): record is ReflectionRecord => Boolean(record));
}

async function fetchGoogleSheetRows(sheetId: string, sheetName: string): Promise<SheetRow[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(
    sheetName,
  )}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Google Sheet request failed: ${response.status}`);
  }

  const body = await response.text();
  const match = body.match(/setResponse\(([\s\S]+)\);/);
  if (!match?.[1]) return [];

  const parsed = JSON.parse(match[1]) as {
    table?: { cols?: Array<{ label?: string }>; rows?: Array<{ c?: Array<{ v?: unknown; f?: string | null } | null> }> };
  };
  const cols = parsed.table?.cols ?? [];
  const rows = parsed.table?.rows ?? [];
  const headers = cols.map((col) => String(col.label ?? "").trim());

  return rows
    .map((row) => {
      const record: SheetRow = {};
      headers.forEach((header, index) => {
        if (!header) return;
        const cell = row.c?.[index];
        const value = cell?.f ?? cell?.v;
        record[header] = value == null ? "" : String(value).trim();
      });
      return record;
    })
    .filter((record) => Object.values(record).some((value) => value.trim() !== ""));
}

function mapRowToReflection(row: SheetRow): ReflectionRecord | null {
  const slug = pick(row, ["Slug"]);
  const title = pick(row, ["Title"]);
  const reflectionDate = pick(row, ["Reflection Date"]);
  if (!slug || !title || !reflectionDate) return null;

  return {
    slug,
    title,
    reflectionDate,
    reflectionType: pick(row, ["Reflection Type"]) || "daily-mass",
    liturgicalDay: pick(row, ["Liturgical Day"]) || title,
    theme: pick(row, ["Theme"]) || "Mass readings reflection",
    status: normalizeReflectionStatus(pick(row, ["Status"])),
    readings: buildReadings(row),
    canonicalPath: `/reflections/mass-readings/${slug}`,
  };
}

function buildReadings(row: SheetRow) {
  const readings: ReflectionRecord["readings"] = [];
  const firstReading = pick(row, ["First Reading Reference"]);
  const psalm = pick(row, ["Psalm Reference"]);
  const secondReading = pick(row, ["Second Reading Reference"]);
  const gospel = pick(row, ["Gospel Reference"]);

  if (firstReading) readings.push({ label: "First Reading", reference: firstReading });
  if (psalm) readings.push({ label: "Responsorial Psalm", reference: psalm });
  if (secondReading) readings.push({ label: "Second Reading", reference: secondReading });
  if (gospel) readings.push({ label: "Gospel", reference: gospel });
  return readings;
}

function normalizeReflectionStatus(value: string): ReflectionStatus {
  const normalized = value.trim().toLowerCase();
  if (normalized === "scheduled" || normalized === "draft" || normalized === "archived" || normalized === "published") {
    return normalized;
  }
  if (normalized === "approved") return "published";
  return "draft";
}

async function listManagedEvents(calendarId: string, accessToken: string) {
  const timeMin = new Date(getChicagoDateOneYearBack(getCurrentChicagoIsoDate())).toISOString();
  const timeMax = new Date(getChicagoDateOneYearOut(getCurrentChicagoIsoDate())).toISOString();
  const response = await calendarRequest<{ items?: ManagedCalendarEvent[] }>(
    `${GOOGLE_CALENDAR_API_BASE}/calendars/${encodeURIComponent(calendarId)}/events?singleEvents=true&timeMin=${encodeURIComponent(
      timeMin,
    )}&timeMax=${encodeURIComponent(timeMax)}&maxResults=2500`,
    accessToken,
    { method: "GET" },
  );

  return (response.items ?? []).filter((event) => isManagedMassReadingsEvent(event));
}

async function createCalendarEvent(
  calendarId: string,
  accessToken: string,
  eventId: string,
  reflection: ReflectionRecord,
) {
  return calendarRequest(`${GOOGLE_CALENDAR_API_BASE}/calendars/${encodeURIComponent(calendarId)}/events`, accessToken, {
    method: "POST",
    body: JSON.stringify(buildCalendarEventPayload(reflection, eventId)),
  });
}

async function updateCalendarEvent(
  calendarId: string,
  accessToken: string,
  eventId: string,
  reflection: ReflectionRecord,
) {
  return calendarRequest(
    `${GOOGLE_CALENDAR_API_BASE}/calendars/${encodeURIComponent(calendarId)}/events/${encodeURIComponent(eventId)}`,
    accessToken,
    {
      method: "PUT",
      body: JSON.stringify(buildCalendarEventPayload(reflection, eventId)),
    },
  );
}

async function deleteCalendarEvent(calendarId: string, accessToken: string, eventId: string) {
  return calendarRequest(
    `${GOOGLE_CALENDAR_API_BASE}/calendars/${encodeURIComponent(calendarId)}/events/${encodeURIComponent(eventId)}`,
    accessToken,
    { method: "DELETE" },
  );
}

function buildCalendarEventPayload(reflection: ReflectionRecord, eventId: string) {
  const reflectionUrl = getReflectionUrl(reflection);

  return {
    id: eventId,
    summary: reflection.liturgicalDay,
    description: buildEventDescription(reflection),
    location: reflectionUrl,
    source: {
      title: "Daily Oratory reflection",
      url: reflectionUrl,
    },
    start: {
      date: reflection.reflectionDate,
      timeZone: CHICAGO_TIME_ZONE,
    },
    end: {
      date: getNextIsoDate(reflection.reflectionDate),
      timeZone: CHICAGO_TIME_ZONE,
    },
    visibility: "public",
    transparency: "transparent",
    reminders: {
      useDefault: false,
      overrides: [],
    },
    extendedProperties: {
      private: {
        source: MANAGED_SOURCE,
        reflectionSlug: reflection.slug,
        canonicalPath: reflection.canonicalPath,
      },
    },
  };
}

function buildEventDescription(reflection: ReflectionRecord) {
  const readingSummary = reflection.readings.map((reading) => `${reading.label}: ${reading.reference}`).join("; ");
  const reflectionUrl = getReflectionUrl(reflection);

  return [
    "Daily Oratory scheduled Mass Readings reflection.",
    "",
    `Liturgical day: ${reflection.liturgicalDay}`,
    `Reflection type: ${reflection.reflectionType}`,
    `Reflection date: ${reflection.reflectionDate}`,
    `Theme: ${reflection.theme}`,
    readingSummary ? `Readings: ${readingSummary}` : "",
    "",
    `Reflection page: ${reflectionUrl}`,
    "",
    "[Managed by Daily Oratory sync]",
  ]
    .filter(Boolean)
    .join("\n");
}

function getReflectionUrl(reflection: ReflectionRecord) {
  return `${SITE_URL}${reflection.canonicalPath}`;
}

function isManagedMassReadingsEvent(event: ManagedCalendarEvent) {
  if (event.extendedProperties?.private?.source === MANAGED_SOURCE) return true;
  const description = event.description ?? "";
  return (
    description.includes("[Managed by Daily Oratory sync]") ||
    description.includes(`Reflection page: ${SITE_URL}/reflections/mass-readings/`)
  );
}

function getManagedSlugFromEvent(event: ManagedCalendarEvent) {
  const fromProperties = event.extendedProperties?.private?.reflectionSlug?.trim();
  if (fromProperties) return fromProperties;

  const description = event.description ?? "";
  const escapedSiteUrl = SITE_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = description.match(new RegExp(`${escapedSiteUrl}/reflections/mass-readings/([a-z0-9-]+)`, "i"));
  return match?.[1]?.trim();
}

function buildManagedEventId(slug: string) {
  const hash = createHash("sha1").update(slug).digest("hex").slice(0, 40);
  return `do${hash}`;
}

async function getGoogleAccessToken(clientEmail: string, privateKey: string) {
  const nowInSeconds = Math.floor(Date.now() / 1000);
  const jwt = signServiceAccountJwt(
    {
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/calendar",
      aud: GOOGLE_TOKEN_URL,
      exp: nowInSeconds + 3600,
      iat: nowInSeconds,
    },
    privateKey,
  );
  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google token request failed: ${response.status} ${errorText}`);
  }

  const payload = (await response.json()) as { access_token?: string };
  if (!payload.access_token) throw new Error("Google token response did not include an access token.");
  return payload.access_token;
}

function signServiceAccountJwt(payload: Record<string, string | number>, privateKey: string) {
  const header = {
    alg: "RS256",
    typ: "JWT",
  };
  const encodedHeader = encodeJwtPart(header);
  const encodedPayload = encodeJwtPart(payload);
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const signature = signer.sign(privateKey).toString("base64url");

  return `${unsignedToken}.${signature}`;
}

function encodeJwtPart(value: object) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

async function calendarRequest<T = unknown>(url: string, accessToken: string, init: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Calendar request failed: ${response.status} ${errorText}`);
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

function isDuplicateGoogleCalendarEventError(error: unknown) {
  return error instanceof Error && error.message.includes("Google Calendar request failed: 409");
}

function getGoogleServiceAccountCredentials() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();
  if (!clientEmail || !privateKey) return null;
  return { clientEmail, privateKey };
}

function getCurrentChicagoIsoDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CHICAGO_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value ?? "0000";
  const month = parts.find((part) => part.type === "month")?.value ?? "00";
  const day = parts.find((part) => part.type === "day")?.value ?? "00";
  return `${year}-${month}-${day}`;
}

function getNextIsoDate(value: string) {
  const date = new Date(`${value}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

function getChicagoDateOneYearOut(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCFullYear(date.getUTCFullYear() + 1);
  return date.toISOString();
}

function getChicagoDateOneYearBack(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCFullYear(date.getUTCFullYear() - 1);
  return date.toISOString();
}

function pick(row: SheetRow, keys: string[]) {
  for (const key of keys) {
    if (row[key]?.trim()) return row[key].trim();
  }
  return "";
}

main().catch((error) => {
  console.error("[sync-mass-readings-calendar] Sync failed.");
  console.error(error);
  process.exitCode = 1;
});
