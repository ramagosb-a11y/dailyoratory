import React from "react";

export type BibleReference = {
  raw: string;
  book: string;
  chapter?: string;
  verse?: string;
  url: string;
};

export type CccReference = {
  raw: string;
  paragraph?: string;
  url: string;
};

type CitationMatch =
  | (BibleReference & { type: "bible"; start: number })
  | (CccReference & { type: "ccc"; start: number });

const USCCB_BIBLE_BASE_URL = "https://bible.usccb.org/bible";
const CCC_INDEX_URL = "https://www.vatican.va/archive/ENG0015/_INDEX.HTM";
const RANGE_DASH = "[\\-\\u2013]";
const SECTION_SIGN = "\\u00A7";

const BIBLE_BOOK_ALIASES = {
  genesis: ["Genesis", "Gen", "Gn"],
  exodus: ["Exodus", "Exod", "Ex"],
  leviticus: ["Leviticus", "Lev", "Lv"],
  numbers: ["Numbers", "Num", "Nm"],
  deuteronomy: ["Deuteronomy", "Deut", "Dt"],
  joshua: ["Joshua", "Josh", "Jos"],
  judges: ["Judges", "Judg", "Jgs"],
  ruth: ["Ruth", "Ru"],
  "1samuel": ["1 Samuel", "1 Sam", "1 Sm"],
  "2samuel": ["2 Samuel", "2 Sam", "2 Sm"],
  "1kings": ["1 Kings", "1 Kgs", "1 Ki"],
  "2kings": ["2 Kings", "2 Kgs", "2 Ki"],
  "1chronicles": ["1 Chronicles", "1 Chr", "1 Ch"],
  "2chronicles": ["2 Chronicles", "2 Chr", "2 Ch"],
  ezra: ["Ezra"],
  nehemiah: ["Nehemiah", "Neh"],
  tobit: ["Tobit", "Tob"],
  judith: ["Judith", "Jdt"],
  esther: ["Esther", "Est"],
  "1maccabees": ["1 Maccabees", "1 Macc", "1 Mc"],
  "2maccabees": ["2 Maccabees", "2 Macc", "2 Mc"],
  job: ["Job"],
  psalms: ["Psalms", "Psalm", "Ps"],
  proverbs: ["Proverbs", "Prov", "Prv"],
  ecclesiastes: ["Ecclesiastes", "Eccl", "Qoheleth", "Qoh"],
  songofsongs: ["Song of Songs", "Song", "Sg"],
  wisdom: ["Wisdom", "Wis"],
  sirach: ["Sirach", "Sir", "Ecclesiasticus"],
  isaiah: ["Isaiah", "Isa", "Is"],
  jeremiah: ["Jeremiah", "Jer"],
  lamentations: ["Lamentations", "Lam"],
  baruch: ["Baruch", "Bar"],
  ezekiel: ["Ezekiel", "Ezek", "Ez"],
  daniel: ["Daniel", "Dan", "Dn"],
  hosea: ["Hosea", "Hos"],
  joel: ["Joel"],
  amos: ["Amos"],
  obadiah: ["Obadiah", "Obad"],
  jonah: ["Jonah", "Jon"],
  micah: ["Micah", "Mic"],
  nahum: ["Nahum", "Nah"],
  habakkuk: ["Habakkuk", "Hab"],
  zephaniah: ["Zephaniah", "Zeph", "Zep"],
  haggai: ["Haggai", "Hag"],
  zechariah: ["Zechariah", "Zech", "Zec"],
  malachi: ["Malachi", "Mal"],
  matthew: ["Matthew", "Matt", "Mt"],
  mark: ["Mark", "Mk"],
  luke: ["Luke", "Lk"],
  john: ["John", "Jn"],
  acts: ["Acts", "Acts of the Apostles"],
  romans: ["Romans", "Rom"],
  "1corinthians": ["1 Corinthians", "1 Cor"],
  "2corinthians": ["2 Corinthians", "2 Cor"],
  galatians: ["Galatians", "Gal"],
  ephesians: ["Ephesians", "Eph"],
  philippians: ["Philippians", "Phil"],
  colossians: ["Colossians", "Col"],
  "1thessalonians": ["1 Thessalonians", "1 Thess", "1 Thes"],
  "2thessalonians": ["2 Thessalonians", "2 Thess", "2 Thes"],
  "1timothy": ["1 Timothy", "1 Tim", "1 Tm"],
  "2timothy": ["2 Timothy", "2 Tim", "2 Tm"],
  titus: ["Titus", "Ti"],
  philemon: ["Philemon", "Phlm", "Phile"],
  hebrews: ["Hebrews", "Heb"],
  james: ["James", "Jas", "Jm"],
  "1peter": ["1 Peter", "1 Pet", "1 Pt"],
  "2peter": ["2 Peter", "2 Pet", "2 Pt"],
  "1john": ["1 John", "1 Jn"],
  "2john": ["2 John", "2 Jn"],
  "3john": ["3 John", "3 Jn"],
  jude: ["Jude"],
  revelation: ["Revelation", "Rev", "Apocalypse"],
} as const;

const bookAliasEntries = Object.entries(BIBLE_BOOK_ALIASES).flatMap(([slug, aliases]) =>
  aliases.map((alias) => ({
    alias,
    slug,
    normalizedAlias: normalizeAlias(alias),
  })),
);

const bookAliasLookup = new Map(bookAliasEntries.map((entry) => [entry.normalizedAlias, entry.slug]));
const bibleAliasPattern = bookAliasEntries
  .map((entry) => entry.alias)
  .sort((a, b) => b.length - a.length)
  .map(escapeRegExp)
  .join("|");

const bibleReferencePattern = new RegExp(
  String.raw`(?<![\w/])(${bibleAliasPattern})\s+(\d+)(?::(\d+(?:\s*${RANGE_DASH}\s*\d+)?(?:\s*,\s*\d+(?:\s*${RANGE_DASH}\s*\d+)?)*)?)?(?![\w/])`,
  "gi",
);

const cccPatterns = [
  new RegExp(String.raw`\b(CCC\s+\d+(?:\s*${RANGE_DASH}\s*\d+)?)\b`, "gi"),
  new RegExp(
    String.raw`\b(Catechism(?: of the Catholic Church)?(?:,\s*|\s+)\d+(?:\s*${RANGE_DASH}\s*\d+)?)\b`,
    "gi",
  ),
  new RegExp(String.raw`(?<!\w)(${SECTION_SIGN}{1,2}\s*\d+(?:\s*${RANGE_DASH}\s*\d+)?)(?!\w)`, "g"),
];

const excludedPattern = /https?:\/\/\S+|\b\S+@\S+\b|`[^`]*`/g;

export function bibleBookUrl(bookNameOrAbbreviation: string): string | null {
  const slug = bookAliasLookup.get(normalizeAlias(bookNameOrAbbreviation));
  return slug ? `${USCCB_BIBLE_BASE_URL}/${slug}/0` : null;
}

export function cccUrl(_reference?: string) {
  return CCC_INDEX_URL;
}

export function detectBibleReferences(text: string): BibleReference[] {
  return getCitationMatches(text)
    .filter((match): match is CitationMatch & { type: "bible" } => match.type === "bible")
    .map(({ raw, book, chapter, verse, url }) => ({ raw, book, chapter, verse, url }));
}

export function detectCccReferences(text: string): CccReference[] {
  return getCitationMatches(text)
    .filter((match): match is CitationMatch & { type: "ccc" } => match.type === "ccc")
    .map(({ raw, paragraph, url }) => ({ raw, paragraph, url }));
}

export function linkCitationText(text: string): React.ReactNode[] {
  const matches = getCitationMatches(text);
  if (!matches.length) return [text];

  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  matches.forEach((match, index) => {
    if (match.start > cursor) {
      nodes.push(text.slice(cursor, match.start));
    }

    const ariaLabel =
      match.type === "bible"
        ? `${match.raw}, opens the ${match.book} book at the USCCB Bible`
        : `${match.raw}, opens the Catechism of the Catholic Church at the Vatican website`;

    nodes.push(
      React.createElement(
        "a",
        {
          key: `citation-${index}`,
          href: match.url,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": ariaLabel,
          className:
            "underline decoration-gold/80 underline-offset-4 transition hover:text-navy hover:decoration-gold",
        },
        match.raw,
      ),
    );

    cursor = match.start + match.raw.length;
  });

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

function getCitationMatches(text: string): CitationMatch[] {
  const excludedRanges = getExcludedRanges(text);
  const matches: CitationMatch[] = [];

  for (const match of text.matchAll(bibleReferencePattern)) {
    const raw = match[0];
    const start = match.index ?? -1;
    if (start < 0 || isInExcludedRange(start, start + raw.length, excludedRanges)) continue;

    const url = bibleBookUrl(match[1]);
    if (!url) continue;

    matches.push({
      raw,
      book: match[1],
      chapter: match[2],
      verse: match[3]?.replace(/\s+/g, "") || undefined,
      url,
      type: "bible",
      start,
    });
  }

  for (const pattern of cccPatterns) {
    for (const match of text.matchAll(pattern)) {
      const raw = match[1] ?? match[0];
      const start = match.index ?? -1;
      if (start < 0 || isInExcludedRange(start, start + raw.length, excludedRanges)) continue;

      const paragraphMatch = raw.match(new RegExp(String.raw`\d+(?:\s*${RANGE_DASH}\s*\d+)?`));
      matches.push({
        raw,
        paragraph: paragraphMatch?.[0]?.replace(/\s+/g, "") || undefined,
        url: cccUrl(raw),
        type: "ccc",
        start,
      });
    }
  }

  return matches
    .sort((a, b) => a.start - b.start || b.raw.length - a.raw.length)
    .filter((match, index, array) => {
      const previous = array[index - 1];
      return !(previous && previous.start === match.start && previous.raw === match.raw && previous.type === match.type);
    });
}

function normalizeAlias(value: string) {
  return value.toLowerCase().replace(/\./g, "").replace(/\s+/g, " ").trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getExcludedRanges(text: string) {
  return Array.from(text.matchAll(excludedPattern)).map((match) => ({
    start: match.index ?? 0,
    end: (match.index ?? 0) + match[0].length,
  }));
}

function isInExcludedRange(start: number, end: number, ranges: Array<{ start: number; end: number }>) {
  return ranges.some((range) => start < range.end && end > range.start);
}
