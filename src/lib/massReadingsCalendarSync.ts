import { createHash, createSign } from "node:crypto";
import { getMassReadingsGoogleCalendarId } from "@/config/googleCalendars";
import { getMassReadingsReflectionsSource } from "@/lib/massReadingsGoogleSheets";
import { absoluteUrl } from "@/lib/url";
import type { MassReadingsReflection } from "@/types/massReadingsReflections";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_CALENDAR_API_BASE = "https://www.googleapis.com/calendar/v3";
const MANAGED_SOURCE = "daily-oratory-mass-readings";
const CHICAGO_TIME_ZONE = "America/Chicago";

type GoogleCalendarSyncResult =
  | {
      ok: true;
      skipped: false;
      calendarId: string;
      sourceSheetId: string;
      eligibleCount: number;
      createdCount: number;
      updatedCount: number;
      deletedCount: number;
      syncedAt: string;
    }
  | {
      ok: true;
      skipped: true;
      reason: string;
      calendarId?: string;
      sourceSheetId?: string;
    };

type ManagedCalendarEvent = {
  id: string;
  summary?: string;
  description?: string;
  extendedProperties?: {
    private?: Record<string, string>;
  };
};

type GoogleTokenResponse = {
  access_token?: string;
};

export async function syncScheduledMassReadingsCalendar(): Promise<GoogleCalendarSyncResult> {
  const credentials = getGoogleServiceAccountCredentials();
  const calendarId = getMassReadingsGoogleCalendarId();

  if (!credentials) {
    logMissingCalendarSyncCredentials();
    return {
      ok: true,
      skipped: true,
      reason: "Google Calendar service account credentials are not configured.",
      calendarId,
    };
  }

  const source = await getMassReadingsReflectionsSource();
  const eligibleReflections = source.reflections
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
      if (!isDuplicateGoogleCalendarEventError(error)) {
        throw error;
      }

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

  return {
    ok: true,
    skipped: false,
    calendarId,
    sourceSheetId: source.remoteSheetId,
    eligibleCount: eligibleReflections.length,
    createdCount,
    updatedCount,
    deletedCount,
    syncedAt: new Date().toISOString(),
  };
}

async function listManagedEvents(calendarId: string, accessToken: string) {
  const timeMin = new Date(getChicagoDateOneYearBack(getCurrentChicagoIsoDate())).toISOString();
  const timeMax = new Date(getChicagoDateOneYearOut(getCurrentChicagoIsoDate())).toISOString();

  const response = await calendarRequest<{
    items?: ManagedCalendarEvent[];
  }>(
    `${GOOGLE_CALENDAR_API_BASE}/calendars/${encodeURIComponent(calendarId)}/events?singleEvents=true&timeMin=${encodeURIComponent(
      timeMin,
    )}&timeMax=${encodeURIComponent(timeMax)}&maxResults=2500`,
    accessToken,
    {
      method: "GET",
    },
  );

  return (response.items ?? []).filter((event) => isManagedMassReadingsEvent(event));
}

async function createCalendarEvent(
  calendarId: string,
  accessToken: string,
  eventId: string,
  reflection: MassReadingsReflection,
) {
  return calendarRequest(
    `${GOOGLE_CALENDAR_API_BASE}/calendars/${encodeURIComponent(calendarId)}/events`,
    accessToken,
    {
      method: "POST",
      body: JSON.stringify(buildCalendarEventPayload(reflection, eventId)),
    },
  );
}

async function updateCalendarEvent(
  calendarId: string,
  accessToken: string,
  eventId: string,
  reflection: MassReadingsReflection,
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
    {
      method: "DELETE",
    },
  );
}

function buildCalendarEventPayload(reflection: MassReadingsReflection, eventId: string) {
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

function buildEventDescription(reflection: MassReadingsReflection) {
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
    `[Managed by Daily Oratory sync]`,
  ]
    .filter(Boolean)
    .join("\n");
}

function getReflectionUrl(reflection: MassReadingsReflection) {
  return absoluteUrl(reflection.canonicalPath);
}

function isManagedMassReadingsEvent(event: ManagedCalendarEvent) {
  if (event.extendedProperties?.private?.source === MANAGED_SOURCE) return true;
  const description = event.description ?? "";
  return (
    description.includes("[Managed by Daily Oratory sync]") ||
    description.includes(`Reflection page: ${absoluteUrl("/reflections/mass-readings/")}`)
  );
}

function getManagedSlugFromEvent(event: ManagedCalendarEvent) {
  const fromProperties = event.extendedProperties?.private?.reflectionSlug?.trim();
  if (fromProperties) return fromProperties;

  const description = event.description ?? "";
  const escapedSiteUrl = absoluteUrl("/").replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\/$/, "");
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
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google token request failed: ${response.status} ${errorText}`);
  }

  const payload = (await response.json()) as GoogleTokenResponse;
  if (!payload.access_token) {
    throw new Error("Google token response did not include an access token.");
  }

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
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Calendar request failed: ${response.status} ${errorText}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

function isDuplicateGoogleCalendarEventError(error: unknown) {
  return error instanceof Error && error.message.includes("Google Calendar request failed: 409");
}

function getGoogleServiceAccountCredentials() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();

  if (!clientEmail || !privateKey) return null;

  return {
    clientEmail,
    privateKey,
  };
}

function logMissingCalendarSyncCredentials() {
  if (process.env.NODE_ENV === "production") return;

  console.info(
    "[mass-readings-calendar-sync] Skipping Google Calendar sync because GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY is missing.",
  );
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
