import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';

// Public-domain Douay-Rheims, Challoner revision, 1899 American Edition.
// Emits an apply_patch document; --verify compares the embedded data to fresh source text.
const file = 'src/data/holyWeekMeditations.ts';
const original = fs.readFileSync(file, 'utf8');
const books = { Matthew: 'MAT', Mark: 'MRK', Luke: 'LUK', John: 'JHN', Isaiah: 'ISA', '1 Peter': '1PE' };
const ranges = {};
for (const line of original.split('\n')) {
  const seed = line.match(/id: "([^"]+)".*?scriptureReference: "([^"]+)"/);
  if (seed) ranges[seed[1]] = seed[2].split(';').map(s => s.trim());
}
assert.equal(Object.keys(ranges).length, 24);
const extras = { 'peter-denies': ['Mark 14:60–61', 'Mark 14:72'], 'mocked-night': ['Isaiah 53:7'], 'jesus-dies': ['Matthew 27:50'], 'taken-down': ['John 19:38–42'], 'sacred-silence': ['Isaiah 53:8–10'], 'peace-be-to-you': ['Luke 24:13–35'] };
for (const [id, refs] of Object.entries(extras)) for (const ref of refs) {
  // Replace a contained range with its approved broader reading, retaining all verses.
  const prefix = ref.split(':')[0];
  if (id === 'taken-down') ranges[id] = ranges[id].filter(r => !r.startsWith(prefix + ':'));
  ranges[id].push(ref);
}
function parse(ref) {
  const m = ref.match(/^(.+) (\d+):(.+)$/);
  assert(m, ref);
  const numbers = m[3].split(',').flatMap(segment => {
    const [a, b = a] = segment.trim().split(/[–-]/).map(Number);
    return Array.from({ length: b - a + 1 }, (_, i) => a + i);
  });
  return { numbers, url: `https://ebible.org/engDRA/${books[m[1]]}${m[2].padStart(2, '0')}.htm` };
}
const decode = s => s.replace(/&#(x[\da-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1), 16) : Number(n))).replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const chapters = new Map();
await Promise.all([...new Set(Object.values(ranges).flat().map(r => parse(r).url))].map(async url => {
  const res = await fetch(url); assert(res.ok, url);
  const html = await res.text(); assert(html.includes('Douay-Rheims 1899'), url);
  const body = html.split("<ul class='tnav'>")[1];
  assert(body);
  const full = html.slice(html.indexOf('class=\'chapterlabel\'' )).split("<ul class='tnav'>")[0];
  const verses = {};
  for (const m of full.matchAll(/<span class="verse" id="V(\d+)">[\s\S]*?<\/span>([\s\S]*?)(?=<span class="verse"|$)/g)) {
    assert(!verses[m[1]], 'Duplicate verse');
    verses[m[1]] = decode(m[2].replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
  }
  assert(Object.keys(verses).length > 0, url);
  chapters.set(url, verses);
}));
const readings = {};
for (const [id, refs] of Object.entries(ranges)) readings[id] = refs.map(reference => {
  const { numbers, url } = parse(reference);
  const verses = numbers.map(number => { const text = chapters.get(url)[number]; assert(text, `${reference}:${number}`); return { number, text }; });
  assert.equal(new Set(numbers).size, numbers.length);
  return { reference, sourceUrl: url + '#V' + numbers[0], verses };
});
const target = 'src/data/holyWeekScripture.json';
if (process.argv.includes('--verify')) {
  assert.deepEqual(JSON.parse(fs.readFileSync(target, 'utf8')), readings);
  const js = ts.transpileModule(original.replace(/^import .*$/gm, ''), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const exported = {};
  new Function('exports', 'holyWeekScripture', js)(exported, readings);
  for (const moment of exported.holyWeekMeditations) {
    assert.deepEqual(moment.scripturePassages, readings[moment.id]);
    assert.equal(moment.scriptureReference, readings[moment.id].map(p => p.reference).join('; '));
  }
  console.log(JSON.stringify({ moments: Object.keys(readings).length, passages: Object.values(readings).flat().length, verses: Object.values(readings).flat().reduce((n,p) => n + p.verses.length, 0), source: 'eBible.org engDRA; fresh source and final assembled data verified' }));
} else {
  console.log('*** Begin Patch\n*** Add File: brotherhood-of-ascension/' + target + '\n' + JSON.stringify(readings, null, 2).split('\n').map(l => '+' + l).join('\n') + '\n*** End Patch');
}
