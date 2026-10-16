import { buildStrongholdsReturnPlan } from "../src/data/strongholdsSupport.ts";
import { strongholdsTeaching, strongholdsPassageContext } from "../src/data/strongholdsTeaching.ts";
import { struggleGuidance, triggerNames, triggerGuidance, getTriggerGuidance } from "../src/data/strongholdsGuidance.ts";
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { newStrongholdsDraft, moveStrongholdsStep, parseStrongholds, readStrongholds, saveStrongholds, deleteStrongholds, STRONGHOLDS_KEY, strongholdCategories, parseStrongholdsHistory, saveStrongholdsEntry, deleteStrongholdsEntry, deleteStrongholdsHistory, readStrongholdsHistory, STRONGHOLDS_HISTORY_KEY, STRONGHOLDS_HISTORY_LIMIT } from "../src/lib/strongholdsState.ts";
import { strongholdsFormationDays, strongholdsDiscernmentRules, strongholdsDiscernmentSuggestion } from "../src/data/strongholdsFormation.ts";
import { strongholdCounsel, strongholdsSteps, strongholdsResources, strongholdsComfortVerse } from "../src/data/strongholds.ts";
import { isSensitiveAnalyticsPath } from "../src/lib/analyticsPrivacy.ts";
import { createHash } from "node:crypto";
import { getStrongholdsScripture, getStrongholdsScriptureExcerpt } from "../src/lib/strongholdsScripture.ts";
import { STRONGHOLDS_CORE_REFERENCE, STRONGHOLDS_CORE_VERSES } from "../src/data/strongholdsPractice.ts";
import { strongholdsIntentionPrayers, strongholdsCategoryPrayers, strongholdsJourneyPrayers, strongholdsResourcePrayers, strongholdsFormationPrayers } from "../src/data/strongholdsPrayers.ts";

function memoryStorage() {
  const map = new Map([["another-tool", "preserved"]]);
  return { map, getItem: key => map.get(key) ?? null, setItem: (key, value) => map.set(key, value), removeItem: key => map.delete(key) };
}
test("every requested struggle has Scripture, truth, prayer and 2–4 practical responses", () => {
  const expected = ["fear", "pride", "anger", "lust", "resentment", "envy", "discouragement", "control", "dishonesty", "other", "unsure"];
  assert.deepEqual([...strongholdCategories], expected);
  assert.deepEqual(Object.keys(strongholdCounsel), expected);
  for (const category of expected) {
    const c = strongholdCounsel[category];
    assert.ok(c.reference && c.truth && c.prayer);
    assert.ok(c.actions.length >= 2 && c.actions.length <= 4);
  }
});
test("all steps accept empty writing; Back preserves answers; transitions are bounded", () => {
  for (const category of strongholdCategories) {
    let draft = { ...newStrongholdsDraft(), category };
    for (let i = 0; i < 5; i++) draft = moveStrongholdsStep(draft, 1);
    assert.equal(draft.step, 5);
    assert.equal(moveStrongholdsStep(draft, 1).step, 5);
    draft = { ...draft, thought: "Synthetic QA thought", notes: ["QA", "", "", "", "", ""], action: "A synthetic action" };
    const back = moveStrongholdsStep(draft, -1);
    assert.equal(back.thought, draft.thought);
    assert.deepEqual(back.notes, draft.notes);
    assert.equal(back.category, category);
    for (let i = 0; i < 6; i++) draft = moveStrongholdsStep(draft, -1);
    assert.equal(draft.step, 0);
  }
});
test("explicit snapshot save/resume/delete is scoped and does not mutate after saving", () => {
  const storage = memoryStorage();
  assert.equal(storage.getItem(STRONGHOLDS_KEY), null);
  const draft = { ...newStrongholdsDraft(), category: "other", thought: "Synthetic QA thought", step: 3 };
  assert.equal(saveStrongholds(storage, draft), true);
  draft.thought = "Unsaved edit";
  const loaded = readStrongholds(storage);
  assert.equal(loaded.status, "saved");
  assert.equal(loaded.saved.draft.thought, "Synthetic QA thought");
  assert.equal(loaded.saved.draft.step, 3);
  assert.equal(deleteStrongholds(storage), true);
  assert.equal(readStrongholds(storage).status, "empty");
  assert.equal(storage.getItem("another-tool"), "preserved");
});
test("denied storage, quota errors, malformed records and schema changes fail safely", () => {
  const denied = { getItem() { throw Error("denied"); }, setItem() { throw Error("quota"); }, removeItem() { throw Error("denied"); } };
  assert.equal(readStrongholds(denied).status, "unavailable");
  assert.equal(saveStrongholds(denied, newStrongholdsDraft()), false);
  assert.equal(deleteStrongholds(denied), false);
  for (const raw of ["{", "null", "[]", JSON.stringify({ version: 2, draft: newStrongholdsDraft() }), JSON.stringify({ version: 1, draft: { ...newStrongholdsDraft(), category: "invalid" } }), JSON.stringify({ version: 1, draft: { ...newStrongholdsDraft(), step: -1 } }), JSON.stringify({ version: 1, draft: { ...newStrongholdsDraft(), notes: [] } }), JSON.stringify({ version: 1, draft: { ...newStrongholdsDraft(), thought: "x".repeat(2001) } }), "x".repeat(24001)]) {
    assert.equal(parseStrongholds(raw).status, "invalid");
  }
  assert.equal(parseStrongholds(null).status, "empty");
  const clean = parseStrongholds(JSON.stringify({ version: 1, draft: { ...newStrongholdsDraft(), extra: "discard me" } }));
  assert.equal("extra" in clean.saved.draft, false);
});
test("step art is distinct and documented; every resource destination exists", () => {
  assert.equal(new Set(strongholdsSteps.map(s => s.image)).size, 6);
  for (const step of strongholdsSteps) {
    assert.ok(step.questions.length >= 2 && step.questions.length <= 3);
    assert.ok(existsSync(new URL(`../public/images/strongholds/${step.image}.webp`, import.meta.url)));
  }
  for (const card of strongholdsResources) assert.ok(existsSync(new URL(`../src/app${card.href}/page.tsx`, import.meta.url)), card.href);
});
test("Help Now excerpt exactly matches local verified Douay-Rheims record", () => {
  const source = JSON.parse(readFileSync(new URL("../src/data/companionScripture.json", import.meta.url), "utf8"));
  assert.equal(strongholdsComfortVerse.text, source.passages["mat-11-28"].verses[0].text);
  assert.equal(strongholdsComfortVerse.reference, source.passages["mat-11-28"].reference);
});
test("Strongholds paths suppress application interaction telemetry", () => {
  for (const path of ["/strongholds", "/strongholds/journey", "/strongholds/help-now", "/strongholds/defenses", "/strongholds/weapons", "/strongholds/discernment", "/strongholds/my-journey"]) assert.equal(isSensitiveAnalyticsPath(path), true);
});
test("legacy snapshots remain compatible and selected fruits survive Back and saving", () => {
  const old = newStrongholdsDraft(); delete old.fruits;
  assert.deepEqual(parseStrongholds(JSON.stringify({version:1,draft:old})).saved.draft.fruits,[]);
  const draft = {...newStrongholdsDraft(),step:3,fruits:["Synthetic QA fruit"]};
  assert.deepEqual(moveStrongholdsStep(draft,-1).fruits,draft.fruits);
  assert.deepEqual(parseStrongholds(JSON.stringify({version:1,draft})).saved.draft.fruits,draft.fruits);
});
test("history saves only explicit snapshots, updates by ID, deletes by scope and rejects unsafe schema", () => {
  const storage = memoryStorage();
  const draft = {...newStrongholdsDraft(),step:5,thought:"Synthetic QA history"};
  const entry = {id:"qa-1",savedAt:"2026-10-15T12:00:00.000Z",draft};
  assert.equal(readStrongholdsHistory(storage).status,"empty");
  saveStrongholds(storage,draft);
  assert.equal(readStrongholdsHistory(storage).status,"empty");
  assert.equal(saveStrongholdsEntry(storage,entry),true);
  draft.thought = "Unsaved change";
  assert.equal(readStrongholdsHistory(storage).entries[0].draft.thought,"Synthetic QA history");
  assert.equal(saveStrongholdsEntry(storage,entry),true);
  assert.equal(readStrongholdsHistory(storage).entries.length,1);
  assert.equal(deleteStrongholdsEntry(storage,"qa-1"),true);
  assert.equal(readStrongholdsHistory(storage).status,"empty");
  for (let i=0;i<STRONGHOLDS_HISTORY_LIMIT;i++) assert.equal(saveStrongholdsEntry(storage,{...entry,id:`qa-${i}`}),true);
  assert.equal(saveStrongholdsEntry(storage,{...entry,id:"overflow"}),false);
  assert.equal(readStrongholdsHistory(storage).entries.length,20);
  assert.equal(deleteStrongholdsHistory(storage),true);
  assert.equal(readStrongholds(storage).status,"saved");
  assert.equal(storage.getItem("another-tool"),"preserved");
  for (const raw of ["{", "null", JSON.stringify({version:2,entries:[]}),JSON.stringify({version:1,entries:[{...entry,id:"<bad>"}]}),JSON.stringify({version:1,entries:[entry,entry]})]) assert.equal(parseStrongholdsHistory(raw).status,"invalid");
  storage.setItem(STRONGHOLDS_HISTORY_KEY,"{");
  assert.equal(saveStrongholdsEntry(storage,entry),false);
  assert.equal(storage.getItem(STRONGHOLDS_HISTORY_KEY),"{");
  const denied = {getItem(){throw Error("denied");},setItem(){throw Error("quota");},removeItem(){throw Error("denied");}};
  assert.equal(readStrongholdsHistory(denied).status,"unavailable");
  assert.equal(saveStrongholdsEntry(denied,entry),false);
  assert.equal(deleteStrongholdsHistory(denied),false);
});
test("formation and discernment cover seven days, fourteen first-week rules and optional answers", () => {
  assert.equal(strongholdsFormationDays.length,7);
  for (const day of strongholdsFormationDays) for (const key of ["theme","virtue","watchFor","reflection","morningPrayer","action","scripture","church"]) assert.ok(day[key]);
  assert.deepEqual(strongholdsDiscernmentRules.map(r=>r.paragraph),Array.from({length:14},(_,i)=>314+i));
  assert.match(strongholdsDiscernmentRules[4].application,/never means remaining in danger/);
  for (const atmosphere of [null,"peaceful","troubled"]) for (const direction of [null,"isolation","fidelity"]) {
    const result = strongholdsDiscernmentSuggestion(atmosphere,direction);
    assert.ok(result.heading && result.text && result.action);
  }
});
test("every Scripture reference resolves to the checked public-domain Douay-Rheims archive", () => {
  const archive = JSON.parse(readFileSync(new URL('../src/data/strongholdsScripture.json',import.meta.url),'utf8'));
  assert.equal(archive.source.editionId,'engDRA');
  assert.equal(archive.source.rights,'public-domain');
  assert.equal(archive.source.rightsUrl,'https://ebible.org/engDRA/copyright.htm');
  assert.equal(archive.source.textSha256,'96282bfa7c89a74680cea66fe873aafa5e7cd446407f0ff2531a723e19eee2c2');
  const references = [...Object.values(strongholdCounsel).map(c=>c.reference),...strongholdsSteps.map(s=>s.reference),...strongholdsResources.map(r=>r.scripture),...strongholdsFormationDays.map(d=>d.scripture),strongholdsComfortVerse.reference];
  for (const reference of references) assert.ok(getStrongholdsScripture(reference),reference);
  let count=0;
  for (const passage of Object.values(archive.passages)) {
    assert.equal(createHash('sha256').update(JSON.stringify(passage.verses)).digest('hex'),passage.versesSha256);
    assert.match(passage.sourceUrl,/^https:\/\/ebible\.org\/engDRA\/[A-Z0-9]+\.htm#V\d+$/);
    assert.ok(passage.verses.length);
    for (let i=1;i<passage.verses.length;i++) assert.equal(passage.verses[i].number,passage.verses[i-1].number+1);
    count+=passage.verses.length;
  }
  assert.equal(Object.keys(archive.passages).length,30);
  assert.equal(count,102);
  assert.equal(strongholdsResources.find(r=>r.title==='Faith').scripture,'Mark 9:23');
  assert.match(getStrongholdsScripture('Mark 9:23').verses[0].text,/I do believe, Lord: help my unbelief/);
  assert.equal(getStrongholdsScripture('John 6:51').verses[0].text,'I am the living bread which came down from heaven.');
  assert.equal(getStrongholdsScripture('Matthew 11:28').verses[0].text,strongholdsComfortVerse.text);
});
test("Scripture excerpt labels identify actual verses, including nonconsecutive selections", () => {
  assert.equal(getStrongholdsScriptureExcerpt('2 Corinthians 10:3–6',[4]).reference,'2 Corinthians 10:4');
  assert.equal(getStrongholdsScriptureExcerpt('2 Corinthians 10:3–6',[4,5]).reference,'2 Corinthians 10:4–5');
  assert.equal(getStrongholdsScriptureExcerpt('2 Corinthians 10:3–6',[3,5]).reference,'2 Corinthians 10:3, 5');
  assert.equal(getStrongholdsScriptureExcerpt('Psalm 50 (Douay-Rheims)').reference,'Psalm 50:12');
  assert.equal(getStrongholdsScriptureExcerpt('Unverified reference'),null);
  assert.equal(getStrongholdsScriptureExcerpt('Matthew 11:28',[999]),null);
});
test("the highlighted core message contains the complete source-exact 2 Corinthians 10:3–6 passage", () => {
  const highlighted = getStrongholdsScriptureExcerpt(STRONGHOLDS_CORE_REFERENCE,STRONGHOLDS_CORE_VERSES);
  assert.equal(highlighted.reference,'2 Corinthians 10:3–6');
  assert.deepEqual(highlighted.verses.map(verse=>verse.number),[3,4,5,6]);
  assert.deepEqual(highlighted.verses,getStrongholdsScripture(STRONGHOLDS_CORE_REFERENCE).verses);
  assert.match(highlighted.verses[1].text,/weapons of our warfare are not carnal/);
  assert.match(highlighted.verses[2].text,/bringing into captivity every understanding unto the obedience of Christ/);
});

test("six illustrated lessons use verified core verses and preserve context", () => {
 assert.equal(strongholdsTeaching.length,6);
 assert.equal(new Set(strongholdsTeaching.map(l=>l.image)).size,6);
 for(const [index,lesson] of strongholdsTeaching.entries()) {
  const excerpt=getStrongholdsScriptureExcerpt(STRONGHOLDS_CORE_REFERENCE,lesson.verses);
  assert.deepEqual(excerpt.verses.map(v=>v.number),lesson.verses);
  assert.equal(strongholdsSteps[index].image,lesson.image);
  assert.ok(lesson.application && lesson.practice && lesson.caption && lesson.alt);
  assert.ok(existsSync(new URL(`../public/images/strongholds/${lesson.image}.webp`,import.meta.url)));
 }
 assert.match(strongholdsTeaching[4].application,/not permission to punish yourself or another person/);
 assert.match(strongholdsPassageContext,/apostolic ministry/);
 assert.match(strongholdsPassageContext,/unwanted thought is not disobedience/);
});

test("all struggles have distinct relevant virtues, exact DR verse selections, examples and counsel", () => {
 assert.deepEqual(Object.keys(struggleGuidance),[...strongholdCategories]);
 for(const category of strongholdCategories){
  const g=struggleGuidance[category], c=strongholdCounsel[category];
  assert.ok(g.virtue && g.virtuePractice && g.encouragement && g.remember);
  assert.ok(g.examples.length>=2 && g.examples.length<=3);
  assert.equal(g.questions.length,3);
  assert.deepEqual(getStrongholdsScriptureExcerpt(c.reference,g.verses).verses.map(v=>v.number),g.verses);
 }
 assert.match(struggleGuidance.lust.virtue,/Chastity/);
 assert.match(struggleGuidance.fear.encouragement,/professional care/);
 assert.match(struggleGuidance.resentment.encouragement,/unsafe access/);
 assert.match(struggleGuidance.unsure.encouragement,/does not decide/);
});
test("all nine antecedents and all category combinations return safe bounded guidance", () => {
 assert.deepEqual(Object.keys(triggerGuidance),[...triggerNames]);
 for(const category of strongholdCategories){
  assert.deepEqual(getTriggerGuidance(category,[]),[]);
  for(const name of triggerNames){
   const result=getTriggerGuidance(category,[name]);
   assert.equal(result.length,1);assert.equal(result[0].name,name);
   for(const key of ['notice','question','action','plan'])assert.ok(result[0][key]);
  }
  assert.equal(getTriggerGuidance(category,[...triggerNames,...triggerNames,'unknown']).length,9);
 }
 assert.match(getTriggerGuidance('lust',['Digital content'])[0].specific,/device in another room/);
 assert.match(getTriggerGuidance('anger',['Conflict'])[0].specific,/delay the reply/);
 assert.equal(getTriggerGuidance('pride',['Boredom'])[0].specific,null);
 assert.equal(getTriggerGuidance('unsure',['unknown']).length,0);
});
test("selected antecedents and category persist through Back, explicit save and resume", () => {
 const storage=memoryStorage();
 for(const category of strongholdCategories){
  const original={...newStrongholdsDraft(),category,triggers:['Fatigue','Digital content'],step:4,action:'Synthetic selected action'};
  const back=moveStrongholdsStep(original,-1);
  assert.equal(saveStrongholds(storage,back),true);
  const restored=readStrongholds(storage).saved.draft;
  assert.equal(restored.category,category);assert.deepEqual(restored.triggers,original.triggers);
  assert.deepEqual(getTriggerGuidance(category,restored.triggers),getTriggerGuidance(category,original.triggers));
  assert.equal(restored.action,original.action);
 }
});

test("expanded original prayers cover every intention, struggle, step, resource and formation day",()=>{
 assert.equal(strongholdsIntentionPrayers.length,5);
 assert.deepEqual(Object.keys(strongholdsCategoryPrayers),[...strongholdCategories]);
 assert.equal(strongholdsJourneyPrayers.length,6);
 assert.equal(strongholdsResourcePrayers.length,10);
 assert.equal(strongholdsFormationPrayers.length,7);
 const all=[...strongholdsIntentionPrayers.map(p=>p.text),...Object.values(strongholdsCategoryPrayers),...strongholdsJourneyPrayers,...strongholdsResourcePrayers,...strongholdsFormationPrayers];
 assert.equal(all.length,39);assert.equal(new Set(all).size,39);
 for(const prayer of all){assert.ok(prayer.split(/\s+/).length>=35);assert.match(prayer,/Amen\.$/);}
 for(const category of strongholdCategories)assert.equal(strongholdCounsel[category].prayer,strongholdsCategoryPrayers[category]);
 assert.deepEqual(strongholdsSteps.map(s=>s.prayer),strongholdsJourneyPrayers);
 assert.deepEqual(strongholdsResources.map(r=>r.prayer),strongholdsResourcePrayers);
 assert.deepEqual(strongholdsFormationDays.map(d=>d.morningPrayer),strongholdsFormationPrayers);
 assert.ok(strongholdsJourneyPrayers[0].startsWith('Lord Jesus, help me recognize what is happening within me and respond with Your grace.'));
 for(const resource of strongholdsResources)assert.ok(!/^\/prayers(?:[\/#?]|$)/.test(resource.href));
});


test("return plans work for all struggles, empty choices and saved records without a schema change", () => {
  for (const category of strongholdCategories) {
    const record={...newStrongholdsDraft(),category,triggers:["Fatigue","Digital content"],action:strongholdCounsel[category].actions[0]};
    const circumstances=getTriggerGuidance(category,record.triggers);
    const plan=buildStrongholdsReturnPlan(circumstances,record.action,strongholdCounsel[category].actions[0]);
    assert.equal(plan.chosen,true);
    assert.equal(plan.response,record.action);
    assert.match(plan.when,/fatigue.*digital content/);
    const storage=memoryStorage();assert.equal(saveStrongholds(storage,record),true);
    const restored=readStrongholds(storage).saved.draft;
    assert.deepEqual(buildStrongholdsReturnPlan(getTriggerGuidance(restored.category,restored.triggers),restored.action,strongholdCounsel[category].actions[0]),plan);
    const fallback=buildStrongholdsReturnPlan([],"  ",strongholdCounsel[category].actions[0]);
    assert.equal(fallback.chosen,false);assert.equal(fallback.response,strongholdCounsel[category].actions[0]);
    assert.equal(fallback.when,"If I notice this struggle returning");
  }
});
test("new formation readings resolve complete biblical prayer and Gospel ranges", () => {
  for(const [reference,numbers] of [["Matthew 4:1–11",[1,2,3,4,5,6,7,8,9,10,11]],["Matthew 6:9–13",[9,10,11,12,13]],["Matthew 26:41",[41]],["Hebrews 4:15–16",[15,16]],["1 Corinthians 10:13",[13]]]) {
    const excerpt=getStrongholdsScriptureExcerpt(reference,numbers);
    assert.ok(excerpt,reference);assert.deepEqual(excerpt.verses.map(verse=>verse.number),numbers);
    assert.equal(excerpt.reference,reference);
  }
  assert.equal(strongholdsResources.find(resource=>resource.title==="Reconciliation").href,"/confession/examination-companion");
});


test("prayer handoffs use Strongholds or the exact owner-approved companion modules", () => {
 for(const title of ["Prayer","Humility","Obedience to God","Charity","The Holy Spirit"]){
  assert.match(strongholdsResources.find(r=>r.title===title).href,/^\/strongholds(?:[\/#]|$)/,title);
 }
 assert.equal(strongholdsResources.find(r=>r.title==="Reconciliation").href,"/confession/examination-companion");
 assert.equal(strongholdsResources.find(r=>r.title==="The Eucharist").href,"/adoration/companion");
 assert.equal(strongholdsResources.find(r=>r.title==="The Rosary").href,"/rosary/visual-meditation");
 assert.match(readFileSync(new URL("../src/components/strongholds/StrongholdsSupport.tsx",import.meta.url),"utf8"),/href="\/divine-mercy\/chaplet"/);
 const formationSource=readFileSync(new URL('../src/components/strongholds/StrongholdsFormation.tsx',import.meta.url),'utf8');
 assert.ok(!/href=["']\/(?:prayers|rosary|morning-prayer|daily-examen|adoration)(?:[\/#"'])/.test(formationSource));
});


test("Strongholds links cannot reach the prayer library through known redirects", () => {
 const redirects=new Map([...readFileSync(new URL('../src/data/redirects.ts',import.meta.url),'utf8').matchAll(/source:\s*"([^"]+)"\s*,\s*destination:\s*"([^"]+)"[\s\S]*?status:\s*"([^"]+)"/g)].filter(match=>match[3]==="implemented" && match[1]!==match[2]).map(match=>[match[1],match[2]]));
 const base=new URL('../src/components/strongholds/',import.meta.url);
 const files=readdirSync(base).filter(name=>name.endsWith('.tsx')).map(name=>new URL(name,base));
 files.push(new URL('../src/app/strongholds/page.tsx',import.meta.url));
 const destinations=[...strongholdsResources.map(resource=>resource.href)];
 for(const file of files) for(const match of readFileSync(file,'utf8').matchAll(/href(?:=|:)\s*["']([^"']+)["']/g)) destinations.push(match[1]);
 for(const destination of destinations){
  let path=new URL(destination,'https://dailyoratory.faith/strongholds').pathname;
  const visited=new Set();
  while(redirects.has(path)){assert.ok(!visited.has(path),'redirect loop: '+destination);visited.add(path);path=redirects.get(path);}
  assert.ok(!/^\/(?:prayers|library)(?:\/|$)/.test(path),'prayer-library detour: '+destination);
 }
});
