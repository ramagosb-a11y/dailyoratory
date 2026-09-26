import "server-only";

import type { ISODateString } from "@/types/content";
import type { MassReadingReference } from "@/types/massReadingsReflections";

const USCCB_READINGS_FEED_URL = "https://www.usccb.org/bible/readings/rss/index.cfm";
const FEED_REVALIDATE_SECONDS = 60 * 60 * 24;

export type UsccbDailyReading = {
  date: ISODateString;
  title: string;
  sourceUrl: string;
  readings: MassReadingReference[];
};

export async function getUsccbDailyReadings(): Promise<UsccbDailyReading[]> {
  try {
    const response = await fetch(USCCB_READINGS_FEED_URL, {
      headers: { accept: "application/rss+xml, application/xml, text/xml" },
      next: { revalidate: FEED_REVALIDATE_SECONDS, tags: ["usccb-daily-readings"] },
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok || !response.headers.get("content-type")?.toLowerCase().includes("xml")) return [];

    const feed = await response.text();
    if (feed.length > 256_000) return [];
    return parseUsccbDailyReadingsFeed(feed);
  } catch {
    return [];
  }
}

export function parseUsccbDailyReadingsFeed(feed: string): UsccbDailyReading[] {
  const readingsByDate = new Map<string, UsccbDailyReading>();

  for (const itemMatch of feed.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)) {
    const item = itemMatch[1];
    const sourceUrl = decodeXmlText(readXmlTag(item, "link"));
    const date = getIsoDateFromReadingsUrl(sourceUrl);
    if (!date) continue;

    const title = normalizeReferenceText(decodeXmlText(readXmlTag(item, "title")));
    const description = unwrapCdata(readXmlTag(item, "description"));
    const readings = parseReadingHeadings(decodeXmlText(description));
    if (readings.length === 0) continue;

    readingsByDate.set(date, { date: date as ISODateString, title, sourceUrl, readings });
  }

  return [...readingsByDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function parseReadingHeadings(description: string): MassReadingReference[] {
  const headings = [...description.matchAll(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/gi)];
  const readings: MassReadingReference[] = [];

  for (const [index, headingMatch] of headings.entries()) {
    const heading = headingMatch[1];
    const firstAnchor = /<a\b[^>]*>([\s\S]*?)<\/a>/i.exec(heading);
    const labelText = normalizeReferenceText(firstAnchor
      ? heading.slice(0, firstAnchor.index)
      : heading);
    const label = normalizeReadingLabel(labelText);
    if (!label) continue;

    let referenceText = firstAnchor ? normalizeReferenceText(firstAnchor[1]) : "";
    if (!referenceText) {
      const nextHeadingStart = headings[index + 1]?.index ?? description.length;
      const headingEnd = (headingMatch.index ?? 0) + headingMatch[0].length;
      const sectionBody = description.slice(headingEnd, nextHeadingStart);
      const referenceAnchor = /<a\b[^>]*>([\s\S]*?)<\/a>/i.exec(sectionBody);
      if (referenceAnchor) referenceText = normalizeReferenceText(referenceAnchor[1]);
    }

    if (referenceText) readings.push({ label, reference: referenceText });
  }

  return readings;
}

function normalizeReadingLabel(label: string): string | null {
  const normalized = label.toLowerCase().replace(/\s+/g, " ").trim();
  if (/^reading\s+1\b/.test(normalized)) return "First Reading";
  if (/^reading\s+2\b/.test(normalized)) return "Second Reading";
  if (normalized.includes("responsorial psalm")) return "Responsorial Psalm";
  if (/^psalm\b/.test(normalized)) return "Responsorial Psalm";
  if (/^alleluia\b/.test(normalized)) return "Alleluia";
  if (/^gospel\b/.test(normalized)) return "Gospel";
  return null;
}

function getIsoDateFromReadingsUrl(url: string): string | null {
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    return null;
  }
  if (parsedUrl.protocol !== "https:" || !["www.usccb.org", "bible.usccb.org"].includes(parsedUrl.hostname)) return null;

  const match = parsedUrl.pathname.match(/\/readings\/(\d{2})(\d{2})(\d{2})\.cfm$/i);
  if (!match) return null;

  const [, month, day, shortYear] = match;
  const year = 2000 + Number(shortYear);
  const parsed = new Date(Date.UTC(year, Number(month) - 1, Number(day)));
  if (parsed.getUTCFullYear() !== year || parsed.getUTCMonth() + 1 !== Number(month) || parsed.getUTCDate() !== Number(day)) return null;

  return `${year}-${month}-${day}`;
}

function readXmlTag(xml: string, tag: string): string {
  const match = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(xml);
  return match?.[1]?.trim() ?? "";
}

function unwrapCdata(value: string): string {
  return value.replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1");
}

function decodeXmlText(value: string): string {
  return value.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (entity, code) => {
    if (code[0] === "#") {
      const numeric = code[1]?.toLowerCase() === "x"
        ? Number.parseInt(code.slice(2), 16)
        : Number.parseInt(code.slice(1), 10);
      return Number.isFinite(numeric) ? String.fromCodePoint(numeric) : entity;
    }

    switch (code.toLowerCase()) {
      case "amp": return "&";
      case "lt": return "<";
      case "gt": return ">";
      case "quot": return '"';
      case "apos": return "'";
      default: return entity;
    }
  });
}

function normalizeReferenceText(value: string): string {
  return decodeXmlText(value)
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&ndash;/gi, "–")
    .replace(/&mdash;/gi, "—")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}
