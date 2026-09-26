import type { MassReadingReference } from "@/types/massReadingsReflections";

export type ScriptureStudyPassage = {
  label: string;
  reference: string;
  douayHref: string;
  haydockHref: string;
  haydockDirect: boolean;
};

const douayBookNumbers: Record<string, number> = {
  genesis: 1,
  exodus: 2,
  leviticus: 3,
  numbers: 4,
  deuteronomy: 5,
  joshua: 6,
  judges: 7,
  ruth: 8,
  "1 samuel": 9,
  "2 samuel": 10,
  "1 kings": 11,
  "2 kings": 12,
  "1 chronicles": 13,
  "2 chronicles": 14,
  ezra: 15,
  nehemiah: 16,
  tobit: 17,
  tobías: 17,
  judith: 18,
  esther: 19,
  job: 20,
  psalm: 21,
  psalms: 21,
  proverbs: 22,
  ecclesiastes: 23,
  "song of songs": 24,
  "song of solomon": 24,
  canticles: 24,
  wisdom: 25,
  sirach: 26,
  ecclesiasticus: 26,
  isaiah: 27,
  jeremiah: 28,
  lamentations: 29,
  baruch: 30,
  ezekiel: 31,
  daniel: 32,
  hosea: 33,
  joel: 34,
  amos: 35,
  obadiah: 36,
  jonah: 37,
  micah: 38,
  nahum: 39,
  habakkuk: 40,
  zephaniah: 41,
  haggai: 42,
  zechariah: 43,
  malachi: 44,
  "1 maccabees": 45,
  "2 maccabees": 46,
  matthew: 47,
  mark: 48,
  luke: 49,
  john: 50,
  acts: 51,
  "acts of the apostles": 51,
  romans: 52,
  "1 corinthians": 53,
  "2 corinthians": 54,
  galatians: 55,
  ephesians: 56,
  philippians: 57,
  colossians: 58,
  "1 thessalonians": 59,
  "2 thessalonians": 60,
  "1 timothy": 61,
  "2 timothy": 62,
  titus: 63,
  philemon: 64,
  hebrews: 65,
  james: 66,
  "1 peter": 67,
  "2 peter": 68,
  "1 john": 69,
  "2 john": 70,
  "3 john": 71,
  jude: 72,
  revelation: 73,
  apocalypse: 73,
};

const referenceAliases: Record<string, string> = {
  gen: "genesis",
  ex: "exodus",
  exod: "exodus",
  lev: "leviticus",
  num: "numbers",
  deut: "deuteronomy",
  dt: "deuteronomy",
  jos: "joshua",
  josh: "joshua",
  judg: "judges",
  jdg: "judges",
  "1 sam": "1 samuel",
  "2 sam": "2 samuel",
  "1 sa": "1 samuel",
  "2 sa": "2 samuel",
  "1 kgs": "1 kings",
  "2 kgs": "2 kings",
  "1 kin": "1 kings",
  "2 kin": "2 kings",
  "1 chr": "1 chronicles",
  "2 chr": "2 chronicles",
  "1 chron": "1 chronicles",
  "2 chron": "2 chronicles",
  neh: "nehemiah",
  tob: "tobit",
  ps: "psalm",
  prov: "proverbs",
  eccl: "ecclesiastes",
  eccles: "ecclesiastes",
  song: "song of songs",
  wis: "wisdom",
  sir: "sirach",
  isa: "isaiah",
  is: "isaiah",
  jer: "jeremiah",
  lam: "lamentations",
  ezek: "ezekiel",
  ez: "ezekiel",
  dan: "daniel",
  hos: "hosea",
  obad: "obadiah",
  mic: "micah",
  nah: "nahum",
  hab: "habakkuk",
  zeph: "zephaniah",
  hag: "haggai",
  zech: "zechariah",
  mal: "malachi",
  "1 macc": "1 maccabees",
  "2 macc": "2 maccabees",
  mt: "matthew",
  matt: "matthew",
  mk: "mark",
  mr: "mark",
  lk: "luke",
  lu: "luke",
  jn: "john",
  acts: "acts",
  rom: "romans",
  "1 cor": "1 corinthians",
  "2 cor": "2 corinthians",
  gal: "galatians",
  eph: "ephesians",
  phil: "philippians",
  ph: "philippians",
  col: "colossians",
  "1 thess": "1 thessalonians",
  "2 thess": "2 thessalonians",
  "1 tim": "1 timothy",
  "2 tim": "2 timothy",
  tit: "titus",
  phlm: "philemon",
  heb: "hebrews",
  jas: "james",
  "1 pet": "1 peter",
  "2 pet": "2 peter",
  "1 jn": "1 john",
  "2 jn": "2 john",
  "3 jn": "3 john",
  rev: "revelation",
  apoc: "revelation",
};

// These direct Haydock chapter URLs were checked against the source site's own chapter navigation.
const haydockDirectPages: Record<string, string> = {
  "acts 1": "https://johnblood.gitlab.io/haydock/id116.html",
  "acts 12": "https://johnblood.gitlab.io/haydock/id127.html",
  "ecclesiastes 3": "https://johnblood.gitlab.io/haydock/id1129.html",
  "genesis 1": "https://johnblood.gitlab.io/haydock/id327.html",
  "matthew 16": "https://johnblood.gitlab.io/haydock/id34.html",
  "matthew 28": "https://johnblood.gitlab.io/haydock/id46.html",
  "2 timothy 4": "https://johnblood.gitlab.io/haydock/id236.html",
};

const haydockOldTestamentIndex = "https://johnblood.gitlab.io/haydock/id330.html";
const haydockNewTestamentIndex = "https://johnblood.gitlab.io/haydock/index.html";

export function getScriptureStudyPassages(readings: MassReadingReference[]): ScriptureStudyPassage[] {
  const passages = readings.flatMap((reading) =>
    reading.reference
      .split(";")
      .map((reference) => reference.trim())
      .filter(Boolean)
      .map((reference) => ({ reading, reference, parsed: parseReference(reference) }))
      .filter((item) => item.parsed),
  );

  return passages.map(({ reading, reference, parsed }) => {
    const bookNumber = douayBookNumbers[parsed!.book];
    const chapter = parsed!.chapter;
    const douayChapter = parsed!.book === "psalm" ? toDouayPsalmNumber(chapter) : chapter;
    const douayHref = `https://www.drbo.org/chapter/${String(bookNumber).padStart(2, "0")}${String(douayChapter).padStart(3, "0")}.htm`;
    const haydockKey = `${parsed!.book} ${chapter}`;
    const haydockHref = haydockDirectPages[haydockKey] ?? (bookNumber <= 46 ? haydockOldTestamentIndex : haydockNewTestamentIndex);

    return {
      label: reading.label,
      reference,
      douayHref,
      haydockHref,
      haydockDirect: Boolean(haydockDirectPages[haydockKey]),
    };
  });
}

function parseReference(reference: string) {
  const normalized = reference.replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
  const match = normalized.match(/^(.+?)\s+(\d+)(?:\s*[:.].*)?$/);
  if (!match) return null;

  const sourceBook = match[1].toLowerCase().replace(/\.$/, "");
  const book = referenceAliases[sourceBook] ?? sourceBook;
  if (!(book in douayBookNumbers)) return null;
  return { book, chapter: Number(match[2]) };
}

function toDouayPsalmNumber(modernNumber: number) {
  if (modernNumber <= 8) return modernNumber;
  if (modernNumber <= 10) return 9;
  if (modernNumber <= 113) return modernNumber - 1;
  if (modernNumber <= 115) return 113;
  if (modernNumber <= 146) return modernNumber - 1;
  if (modernNumber === 147) return 146;
  return modernNumber;
}
