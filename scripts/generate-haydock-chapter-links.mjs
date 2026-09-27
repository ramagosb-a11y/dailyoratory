import { writeFile } from "node:fs/promises";

const haydockBase = "https://johnblood.gitlab.io/haydock/";
const sources = [
  { url: `${haydockBase}id330.html`, books: {
    GENESIS: "genesis", EXODUS: "exodus", LEVITICUS: "leviticus", NUMBERS: "numbers", DEUTERONOMY: "deuteronomy",
    JOSUE: "joshua", JUDGES: "judges", RUTH: "ruth", "1 KINGS": "1 samuel", "2 KINGS": "2 samuel",
    "3 KINGS": "1 kings", "4 KINGS": "2 kings", "1 PARALIPOMENON": "1 chronicles", "2 PARALIPOMENON": "2 chronicles",
    "1 ESDRAS": "ezra", "2 ESDRAS, ALIAS NEHEMIAS": "nehemiah", TOBIAS: "tobit", JUDITH: "judith", ESTHER: "esther",
    JOB: "job", PSALMS: "psalm", PROVERBS: "proverbs", ECCLESIASTES: "ecclesiastes", "CANTICLE OF CANTICLES": "song of songs",
    WISDOM: "wisdom", ECCLESIASTICUS: "sirach", ISAIAS: "isaiah", JEREMIAS: "jeremiah", LAMENTATIONS: "lamentations",
    BARUCH: "baruch", EZECHIEL: "ezekiel", DANIEL: "daniel", OSEE: "hosea", JOEL: "joel", AMOS: "amos", ABDIAS: "obadiah",
    JONAS: "jonah", MICHEAS: "micah", NAHUM: "nahum", HABACUC: "habakkuk", SOPHONIAS: "zephaniah", AGGEUS: "haggai",
    ZACHARIAS: "zechariah", MALACHIAS: "malachi", "1 MACHABEES": "1 maccabees", "2 MACHABEES": "2 maccabees",
  } },
  { url: `${haydockBase}index.html`, books: {
    MATTHEW: "matthew", MARK: "mark", LUKE: "luke", JOHN: "john", "ACTS OF THE APOSTLES": "acts", ROMANS: "romans",
    "1 CORINTHIANS": "1 corinthians", "2 CORINTHIANS": "2 corinthians", GALATIANS: "galatians", EPHESIANS: "ephesians",
    PHILIPPIANS: "philippians", COLOSSIANS: "colossians", "1 THESSALONIANS": "1 thessalonians", "2 THESSALONIANS": "2 thessalonians",
    "1 TIMOTHY": "1 timothy", "2 TIMOTHY": "2 timothy", TITUS: "titus", PHILEMON: "philemon", HEBREWS: "hebrews",
    JAMES: "james", "1 PETER": "1 peter", "2 PETER": "2 peter", "1 JOHN": "1 john", "2 JOHN": "2 john",
    "3 JOHN": "3 john", JUDE: "jude", APOCALYPSE: "revelation",
  } },
];

function visibleText(value) {
  return value.replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#(?:39|x27);/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function readChapterLinks({ url, books }) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Haydock index request failed (${response.status}): ${url}`);
  const html = await response.text();
  const headingPattern = /<(?:DIV|P)\b[^>]*>\s*<STRONG>([\s\S]*?)<\/STRONG>/gi;
  const headings = [...html.matchAll(headingPattern)]
    .filter((heading) => books[visibleText(heading[1]).toUpperCase()]);
  const links = {};

  for (let headingIndex = 0; headingIndex < headings.length; headingIndex += 1) {
    const heading = visibleText(headings[headingIndex][1]).toUpperCase();
    const canonicalBook = books[heading];
    if (!canonicalBook) continue;
    const start = headings[headingIndex].index + headings[headingIndex][0].length;
    const end = headings[headingIndex + 1]?.index ?? html.length;
    const section = html.slice(start, end);
    const anchorPattern = /<A\b[^>]*href=["']([^"']*id(\d+)\.html)["'][^>]*>([\s\S]*?)<\/A>/gi;
    for (const anchor of section.matchAll(anchorPattern)) {
      const label = visibleText(anchor[3]);
      const chapterLabel = canonicalBook === "psalm" ? label.match(/^(\d+)/)?.[1] : (/^\d+$/.test(label) ? label : undefined);
      if (!chapterLabel) continue;
      const key = `${canonicalBook}:${Number(chapterLabel)}`;
      const target = `${haydockBase}id${Number(anchor[2])}.html`;
      if (links[key] && links[key] !== target) throw new Error(`Conflicting Haydock targets for ${key}: ${links[key]} versus ${target}`);
      links[key] = target;
    }
  }

  return links;
}

const chapters = {};
for (const source of sources) Object.assign(chapters, await readChapterLinks(source));
for (const key of ["psalm:24", "psalm:114", "psalm:115", "psalm:146", "psalm:147", "genesis:1", "matthew:1", "revelation:22"]) {
  if (!chapters[key]) throw new Error(`Required Haydock chapter link was not found: ${key}`);
}

const output = JSON.stringify({
  source: [`${haydockBase}id330.html`, `${haydockBase}index.html`],
  checkedAt: new Date().toISOString().slice(0, 10),
  chapters,
}, null, 2);
await writeFile(new URL("../src/lib/haydockChapterLinks.generated.json", import.meta.url), `${output}\n`);
console.log(`Generated ${Object.keys(chapters).length} Haydock chapter destinations.`);
