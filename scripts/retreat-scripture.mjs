import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';

// Read-only generator: emits an apply_patch document, or verifies against fresh eBible text.
function data(file) {
  const source = fs.readFileSync(file, 'utf8').replace(/^import .*$/gm, '');
  const exported = {};
  new Function('exports', ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText)(exported);
  return exported;
}
const slots = [
['preparation','Psalm 50:3–4, 12–14'],
['day-1','John 15:1–11'],['day-2','Luke 1:26–38'],['day-3','Matthew 1:18–25'],
['day-1-evening','Matthew 5'],['day-2-evening','Matthew 6'],['day-3-evening','Matthew 7:13–14'],
['preparation-psalm','Psalm 50'],['preparation-hebrews','Hebrews 12:1'],
['morning-psalm','Psalm 62'],['abide-chapter','John 15'],['bread-of-life','John 6'],
['finding-jesus','Luke 2:41–52'],['priestly-prayer','John 17'],['footer','James 4:8']
].map(([slot,reference])=>({slot,reference}));
const books = { Hebrews: 'HEB', James: 'JAS', Matthew: 'MAT', Luke: 'LUK', John: 'JHN', '1 Timothy': '1TI', Philippians: 'PHP', '1 Thessalonians': '1TH', Psalm: 'PSA', '1 Corinthians': '1CO', Exodus: 'EXO', Revelation: 'REV', '1 Kings': '1KI', Isaiah: 'ISA', Ezekiel: 'EZK', Galatians: 'GAL', Joshua: 'JOS' };
function parse(reference) {
  const oldSamuel = reference === '1 Kings 3:10 (Douay-Rheims)';
  const normalized = reference.replace(/ \(\d+\)/g, '').replace(' (Douay-Rheims)', '');
  const m = normalized.match(/^(.+?) (\d+)(?::(.+))?$/);
  assert(m, reference);
  const book = oldSamuel ? '1SA' : books[m[1]];
  assert(book, reference);
  const chapter = Number(m[2]);
  const numbers = m[3]?.split(',').flatMap(s => {
    const [a,b=a] = s.trim().split(/[–-]/).map(Number);
    return Array.from({ length: b-a+1 }, (_,i) => a+i);
  });
  const displayReference = oldSamuel ? '1 Kings (1 Samuel) 3:10' : reference.replace(' (Douay-Rheims)', '');
  return { book, chapter, numbers, displayReference, url: `https://ebible.org/engDRA/${book}${String(chapter).padStart(book === 'PSA' ? 3 : 2, '0')}.htm` };
}
const decode = s => s.replace(/&#(x[\da-f]+|\d+);/gi, (_,n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1),16) : Number(n))).replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const chapters = new Map();
await Promise.all([...new Set(slots.map(s => parse(s.reference).url))].map(async url => {
  let html;
  for (let attempt = 0; attempt < 3; attempt++) {
    try { const response = await fetch(url, { signal: AbortSignal.timeout(30000) }); assert(response.ok, `${response.status} ${url}`); html = await response.text(); break; }
    catch(e) { if (attempt === 2) throw e; }
  }
  assert(html.includes('Douay-Rheims 1899'), url);
  const body = html.slice(html.indexOf("class='chapterlabel'")).split("<ul class='tnav'>")[0];
  const verses = {};
  for (const m of body.matchAll(/<span class="verse" id="V(\d+)">[\s\S]*?<\/span>([\s\S]*?)(?=<span class="verse"|$)/g)) {
    assert(!verses[m[1]], `duplicate verse ${url}`);
    verses[m[1]] = decode(m[2].replace(/<[^>]*>/g,'')).replace(/\s+/g,' ').trim();
  }
  assert(Object.keys(verses).length, url);
  chapters.set(url, verses);
}));
const result = { edition: 'Douay-Rheims · Challoner revision · 1899 American Edition', source: 'eBible.org engDRA', byReference: {}, slots: {}, passages: {} };
for (const s of slots) {
  const { book, chapter, numbers, displayReference, url } = parse(s.reference);
  const requested = numbers ?? Object.keys(chapters.get(url)).map(Number);
  assert.equal(new Set(requested).size, requested.length);
  const id = `${book.toLowerCase()}-${chapter}-${requested.join('-')}`;
  result.byReference[s.reference] = id;
  result.slots[s.slot] = id;
  result.passages[id] = { id, reference: displayReference, book, chapter, verseNumbers: requested, verses: requested.map(number => {
    const text = chapters.get(url)[number]; assert(text, `${s.reference}:${number}`); return { number, text };
  }), sourceUrl: `${url}#V${requested[0]}` };
}
const target = 'src/content/fasting-retreat-scripture.json';
if (process.argv.includes('--verify')) {
  assert.deepEqual(JSON.parse(fs.readFileSync(target, 'utf8')), result);
  console.log(JSON.stringify({ passageBlocks: slots.length, uniquePassages: Object.keys(result.passages).length, displayedVerses: slots.reduce((n,s) => n + result.passages[result.slots[s.slot]].verses.length, 0), status: 'Every verse and range matched fresh eBible source' }));
} else {
  console.log('*** Begin Patch\n*** Add File: ' + target + '\n' + JSON.stringify(result,null,2).split('\n').map(l => '+'+l).join('\n') + '\n*** End Patch');
}
