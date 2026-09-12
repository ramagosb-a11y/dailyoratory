import fs from 'node:fs';
import assert from 'node:assert/strict';
const plan = JSON.parse(fs.readFileSync('src/data/massScripturePlan.json','utf8'));
const chapterUrl = s => `https://ebible.org/engDRA/${s.book}${String(s.chapter).padStart(s.book === 'PSA' ? 3 : 2,'0')}.htm`;
const decode = s => s.replace(/&#(x[\da-f]+|\d+);/gi, (_,n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1),16) : Number(n))).replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const chapters = new Map();
await Promise.all([...new Set(plan.map(s => chapterUrl(s)))].map(async url => {
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

const result = { edition: 'Douay-Rheims · Challoner revision · 1899 American Edition', source: 'eBible.org engDRA', editionUrl: 'https://ebible.org/engDRA/copyright.htm', passages: {} };
for (const s of plan) {
 const numbers = s.range.split(',').flatMap(r => { const [a,b=a]=r.split('-').map(Number); return Array.from({length:b-a+1},(_,i)=>a+i); });
 assert.equal(new Set(numbers).size,numbers.length);
 assert(!result.passages[s.id], 'Duplicate passage ID');
 const url=chapterUrl(s);
 result.passages[s.id]={id:s.id,reference:s.reference,book:s.book,chapter:s.chapter,verseNumbers:numbers,verses:numbers.map(number=>{
 const text=chapters.get(url)[number];assert(text,s.id+':'+number);return {number,text};
 }),sourceUrl:url+'#V'+numbers[0]};
}
assert.equal(new Set(plan.map(s=>s.step)).size,24);
assert.equal(plan.length,32);
const count=Object.values(result.passages).reduce((n,p)=>n+p.verses.length,0);
assert.equal(count,129);
const target='src/data/massScripture.json';
if(process.argv.includes('--verify')){
 assert.deepEqual(JSON.parse(fs.readFileSync(target,'utf8')),result);
 console.log(JSON.stringify({lessons:24,passageBlocks:32,displayedVerses:count,status:'Exact coverage and text matched fresh eBible source'}));
}else{
 console.log('*** Begin Patch\n*** Add File: '+target+'\n'+JSON.stringify(result,null,2).split('\n').map(l=>'+'+l).join('\n')+'\n*** End Patch');
}

