import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import sharp from "sharp";
import { massJourneySteps, massChapters } from "../src/data/massJourney.ts";
import { massParts } from "../src/data/massParts.ts";
assert.equal(massJourneySteps.length,24);
assert.equal(massChapters.length,7);
assert.equal(new Set(massJourneySteps.map(s=>s.id)).size,24);
const mapped = massJourneySteps.flatMap(s=>s.parts);
assert.equal(mapped.length,34); assert.equal(new Set(mapped).size,34);
assert.deepEqual([...mapped].sort(),massParts.map(p=>p.id).sort());
const counts=[];
const scripture=JSON.parse(await readFile("src/data/massScripture.json","utf8"));
const scripturePlan=JSON.parse(await readFile("src/data/massScripturePlan.json","utf8"));
assert.deepEqual([...new Set(scripturePlan.map(p=>p.step))],massJourneySteps.map(s=>s.id));
let passageBlocks=0,displayedVerses=0;
let assets=0,bytes=0,masters=0;
for(const s of massJourneySteps){
 const expected=scripturePlan.filter(p=>p.step===s.id);
 assert.deepEqual(s.scripture,expected.map(p=>({passageId:p.id,connection:p.connection})));
 assert(s.scripture.length>0);
 for(const p of expected){
  const passage=scripture.passages[p.id];assert(passage,p.id);
  const numbers=p.range.split(',').flatMap(r=>{const [a,b=a]=r.split('-').map(Number);return Array.from({length:b-a+1},(_,i)=>a+i);});
  assert.deepEqual(passage.verseNumbers,numbers);assert.deepEqual(passage.verses.map(v=>v.number),numbers);
  assert.equal(passage.reference,p.reference);assert.equal(passage.book,p.book);assert.equal(passage.chapter,p.chapter);
  assert(passage.verses.every(v=>v.text && !v.text.includes("...") && !v.text.includes("…")));
  passageBlocks++;displayedVerses+=numbers.length;
 }
 assert(massChapters.some(c=>c[0]===s.chapter),s.id+" missing chapter");
 assert(s.sources.length>=2 && s.sources.every(c=>c.href.startsWith("https://")),s.id+" citations");
 const content=[s.see,...s.parts.map(id=>massParts.find(p=>p.id===id).whatHappens),s.meaning,s.participation,s.prayer,s.notice].join(" ");
 const count=content.trim().split(/\s+/).length; counts.push({id:s.id,words:count});
 assert(count>=200 && count<=350,s.id+" word count "+count);
 const path="public"+s.artwork.src, meta=await sharp(path).metadata();
 assert.equal(meta.format,"webp");assert.equal(meta.width,s.artwork.width);assert.equal(meta.height,s.artwork.height);
 assert(s.artwork.alt.length>30); bytes+=(await stat(path)).size;masters+=(await stat("output/imagegen/mass/"+s.id+".png")).size;assets++;
}
const original=execFileSync("git",["show","HEAD:src/app/mass/page.tsx"],{encoding:"utf8"}).replace(/\r/g,"").replace("export default function MassPage()","export function MassFullGuide()").replace('<main className=', '<div className=').replace("</main>","</div>").trim();
assert.equal((await readFile("src/components/mass/MassFullGuide.tsx","utf8")).replace(/\r/g,"").trim(),original,"Full Guide preservation");
assert.equal(passageBlocks,32);assert.equal(displayedVerses,129);
console.log(JSON.stringify({steps:24,chapters:7,passageBlocks,displayedVerses,mappedParts:34,assets,bytes,masterBytes:masters,savings:(100*(1-bytes/masters)).toFixed(1),words:counts},null,2));
