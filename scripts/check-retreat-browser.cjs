const { chromium } = require('C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const { steps, chapters } = require('../src/content/fasting-retreat.json');
const scripture = require('../src/content/fasting-retreat-scripture.json');
const url = 'http://localhost:3000/fasting-retreat';
const key = 'daily-oratory-retreat-intentions-v1';
const labels = ['Family','Friends','Priests and religious','The sick','The dying','Souls in Purgatory','Those away from God','Those who hurt me','Those I have hurt','Personal intentions'];
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try {
  const context=await browser.newContext({reducedMotion:'reduce'});
  const page=await context.newPage();page.setDefaultTimeout(12000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  async function open(step){await page.goto(url+'#day='+step.chapter+'&step='+step.id);await page.locator('[data-active-step="'+step.id+'"]').waitFor();}
  async function noClip(){assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
  for(const width of [360,390,768,1440]){
   await page.setViewportSize({width,height:900});
   for(const chapter of chapters){
    await page.goto(url+'#day='+chapter.id);
    await page.getByRole('heading',{name:chapter.title,exact:true,level:1}).waitFor();
    assert.equal(await page.locator('[data-step-id]').count(),steps.filter(s=>s.chapter===chapter.id).length);
    assert.equal(await page.getByRole('navigation',{name:'Retreat chapters'}).getByRole('button').count(),6);
    await noClip();
    if(['preparation','day-1'].includes(chapter.id))await page.screenshot({path:'output/playwright/retreat-'+chapter.id+'-'+width+'.png',fullPage:true});
   }
   for(const step of steps.filter(s=>s.passageIds.length||s.intentions||s.companion&&s.id.includes('litany'))){
    await open(step);
    const actual=await page.locator('[data-passage-id]').evaluateAll(es=>es.map(e=>({id:e.dataset.passageId,verses:[...e.querySelectorAll('[data-verse]')].map(v=>({number:Number(v.dataset.verse),text:v.querySelector('span').textContent}))})));
    assert.deepEqual(actual,step.passageIds.map(slot=>{const p=scripture.passages[scripture.slots[slot]];return{id:p.id,verses:p.verses}}),step.id);
    await noClip();
   }
   await open(steps.find(s=>s.id==='day-1-intentions'));
   await page.getByLabel('Family',{exact:true}).scrollIntoViewIfNeeded();
   await page.screenshot({path:'output/playwright/retreat-intentions-'+width+'.png'});
   await open(steps.find(s=>s.id==='day-1-scripture'));
   await page.locator('[data-passage-id]').scrollIntoViewIfNeeded();
   await page.screenshot({path:'output/playwright/retreat-scripture-'+width+'.png'});
   console.log(width+'px: all chapter paths, reading text, fields and horizontal layout PASS');
  }
  // Every top and bottom control, chapter stops and heading focus.
  for(const navName of ['Top reading navigation','Prayer navigation']){
   for(let i=0;i<steps.length;i++){
    const step=steps[i];await open(step);
    const nav=page.getByRole('navigation',{name:navName,exact:true});
    assert.equal(await nav.getByRole('button',{name:/Previous/}).isDisabled(),i===0);
    await nav.getByRole('button',{name:/Continue|Close this day|Retreat overview/}).click();
    const next=steps[i+1],isOverview=!next||step.dayEnd||next.chapter!==step.chapter;
    await page.waitForFunction(expected=>document.querySelector('#retreat-title')?.textContent.trim()===expected,isOverview?chapters.find(c=>c.id===(next?.chapter??'closing')).title:next.title);
    assert(await page.locator('#retreat-title').evaluate(e=>e===document.activeElement));
   }
  }
  for(const [stepId,slug] of [['preparation-saints','saints'],['day-1-litany','sacred-heart'],['day-2-litany','loreto'],['day-3-litany','saint-joseph']]){
   await open(steps.find(s=>s.id===stepId));
   const link=page.getByRole('link',{name:/Pray the Litany/});assert((await link.getAttribute('href')).includes('/prayers/litanies/'+slug+'?retreat='+stepId));
   await link.click();await page.getByRole('complementary',{name:'Return to fasting retreat'}).getByRole('link').click();
   await page.waitForURL('**step='+stepId);
  }
  await open(steps.find(s=>s.id==='preparation-intentions'));
  await page.getByLabel('Shared group intention (optional)',{exact:true}).fill('TEST shared intention');
  await page.getByLabel('Desired grace (optional)',{exact:true}).fill('TEST grace');
  for(let d=1;d<=3;d++){
   await open(steps.find(s=>s.id==='day-'+d+'-intentions'));
   assert(await page.getByText('TEST shared intention',{exact:true}).isVisible());
   for(const label of labels)await page.getByLabel(label,{exact:true}).fill('TEST '+d+' '+label);
   await page.reload();
   await page.locator('[data-active-step="day-'+d+'-intentions"]').waitFor();
   for(const label of labels)assert.equal(await page.getByLabel(label,{exact:true}).inputValue(),'TEST '+d+' '+label);
  }
  page.once('dialog',d=>d.dismiss());await page.getByRole('button',{name:'Clear this day’s intentions',exact:true}).click();
  assert.equal(await page.getByLabel('Family',{exact:true}).inputValue(),'TEST 3 Family');
  page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'Clear this day’s intentions',exact:true}).click();
  assert.equal(await page.getByLabel('Family',{exact:true}).inputValue(),'');
  await open(steps.find(s=>s.id==='day-1-intentions'));
  assert.equal(await page.getByLabel('Family',{exact:true}).inputValue(),'TEST 1 Family');
  page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'Clear all retreat intentions',exact:true}).click();
  const stored=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);
  assert.deepEqual(stored,{version:1,group:'',grace:'',days:{}});
  assert(await page.evaluate(()=>!!localStorage.getItem('daily-oratory-fasting-retreat-v1')));
  // Fail only intention writes, leaving unrelated app storage intact.
  const blocked=await browser.newContext();
  await blocked.addInitScript(k=>{const original=Storage.prototype.setItem;Storage.prototype.setItem=function(key,value){if(key===k)throw new DOMException('Quota exceeded','QuotaExceededError');return original.call(this,key,value)}},key);
  const bp=await blocked.newPage();await bp.goto(url+'#day=day-1&step=day-1-intentions');
  await bp.getByLabel('Family',{exact:true}).fill('TEST unsaved');
  assert(await bp.getByRole('status').filter({hasText:'Saving is unavailable'}).isVisible());
  assert.equal(await bp.getByLabel('Family',{exact:true}).inputValue(),'TEST unsaved');
  await blocked.close();
  assert.deepEqual(errors,[]);
  const slots=steps.flatMap(s=>s.passageIds);
  console.log(JSON.stringify({chapters:chapters.length,steps:steps.length,readingBlocks:slots.length,verseOccurrences:slots.reduce((n,id)=>n+scripture.passages[scripture.slots[id]].verses.length,0),footerVerses:1}));
  console.log('Every top/bottom forward control, day boundary, heading focus, all four litany returns, 30 saved intention fields, group intention, cancel/clear, storage failure and runtime PASS');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
