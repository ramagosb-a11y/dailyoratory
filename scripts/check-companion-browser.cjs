const { chromium } = require('C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const scripture = require('../src/data/companionScripture.json');
const original = {};
new Function('exports', ts.transpileModule(fs.readFileSync('src/data/adorationCompanion.ts','utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText)(original);
const { meditationParts: parts, scriptureReadings: readings, scriptureThemes: themes } = original;

(async () => {
 const browser = await chromium.launch({channel:'msedge', headless:true});
 try {
  const context = await browser.newContext({ reducedMotion:'reduce', permissions:['clipboard-read','clipboard-write'] });
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  const errors = []; page.on('pageerror',e=>errors.push(e.message));
  const nav = page.getByRole('navigation',{name:'Adoration Companion sections'});
  async function section(label) {
   await nav.getByRole('button',{name:label,exact:true}).click();
   await page.waitForFunction(label => [...document.querySelectorAll('nav[aria-label="Adoration Companion sections"] button')].some(b=>b.getAttribute('aria-current')==='page' && b.textContent.includes(label)), label);
   await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  }
  async function checkPassages(expectedIds) {
   await page.waitForFunction(ids => JSON.stringify([...document.querySelectorAll('[data-passage-id]')].map(e=>e.dataset.passageId))===JSON.stringify(ids),expectedIds);
   const actual = await page.locator('[data-passage-id]').evaluateAll(es=>es.map(e=>({id:e.dataset.passageId,reference:e.querySelector('h4').textContent,verses:[...e.querySelectorAll('[data-verse]')].map(v=>({number:Number(v.dataset.verse),text:v.querySelector('span').textContent}))})));
   assert.deepEqual(actual,expectedIds.map(id=>{const p=scripture.passages[id];return {id,reference:p.reference,verses:p.verses}}));
   const clipped = await page.locator('[data-passage-id], [data-verse], article, main, select').evaluateAll(es=>es.filter(e=>e.getBoundingClientRect().width && e.scrollWidth>e.clientWidth+2).map(e=>e.className));
   assert.deepEqual(clipped,[]);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  }
  for(const width of [360,390,768,1440]) {
   await page.setViewportSize({width,height:900});
   await page.goto('http://localhost:3000/adoration/companion');
   await page.locator('[data-passage-id]').first().waitFor();
   assert.equal(await page.evaluate(()=>scrollY),0,'No initial auto scroll');
   for(let i=0;i<parts.length;i++) {
    console.log('Checking',width,parts[i].id);
    await page.getByLabel('Choose a meditation part').selectOption(String(i));
    await checkPassages(parts[i].scriptureReferences.map((_,index)=>scripture.slots[`meditation:${parts[i].id}:${index}`]));
   }
   await page.getByRole('button',{name:'Continuous Reading',exact:true}).click();
   await checkPassages(parts.flatMap(p=>p.scriptureReferences.map((_,index)=>scripture.slots[`meditation:${p.id}:${index}`])));
   assert.equal(await page.getByText('About This Meditation',{exact:true}).count(),1);
   await section('Guided Scripture');
   for(const reading of readings) {
    if(width<=760) await page.getByLabel('Choose a passage',{exact:true}).selectOption(reading.id);
    else await page.getByRole('button').filter({has:page.locator('strong',{hasText:reading.title})}).click();
    await checkPassages([scripture.slots['reading:'+reading.id]]);
   }
   await section('Holy Hour Guide');
   await checkPassages(Object.entries(scripture.slots).filter(([k])=>k.startsWith('holy-hour-')).map(([,id])=>id));
   for(const label of ['Meditation','Guided Scripture','Prayers & Hymns','Holy Hour Guide','Catechism Guide']) {
    await section(label);
    await page.screenshot({path:`output/playwright/companion-final-${label.split(' ')[0]}-${width}.png`});
   }
   console.log(`${width}px: 7 meditation parts, 10 guided readings, 19 Holy Hour blocks, all exact text and layout PASS`);
  }
  // Both control positions and reading modes, including first/last boundaries.
  for(const mode of ['Guided Steps','Continuous Reading']) {
   await section('Meditation');
   await page.getByRole('button',{name:mode,exact:true}).click();
   for(const position of ['top','bottom']) {
    await page.getByLabel('Choose a meditation part').selectOption('0');
    assert(await page.getByRole('navigation',{name:`Part 1 ${position} navigation`}).getByRole('button',{name:'← Previous',exact:true}).isDisabled());
    for(let i=0;i<6;i++) {
     await page.getByRole('navigation',{name:`Part ${i+1} ${position} navigation`}).getByRole('button',{name:'Next Part →',exact:true}).click();
     await page.waitForFunction(id=>document.activeElement?.id===`part-heading-${id}`,parts[i+1].id);
    }
    for(let i=6;i>0;i--) {
     await page.getByRole('navigation',{name:`Part ${i+1} ${position} navigation`}).getByRole('button',{name:'← Previous',exact:true}).click();
     await page.waitForFunction(id=>document.activeElement?.id===`part-heading-${id}`,parts[i-1].id);
    }
    await page.getByLabel('Choose a meditation part').selectOption('6');
    await page.getByRole('navigation',{name:`Part 7 ${position} navigation`}).getByRole('button',{name:'Continue to Holy Hour →',exact:true}).click();
    await page.getByRole('heading',{name:'A Simple Holy Hour Guide'}).waitFor();
    await section('Meditation');
   }
  }
  // Mobile utility controls; a private browser context never alters the user's session.
  await page.setViewportSize({width:390,height:900});
  await page.getByRole('button',{name:/Prayer timer/}).click();
  await page.getByRole('button',{name:'5m',exact:true}).click();
  await page.getByRole('button',{name:'Start Silent Prayer',exact:true}).click();
  await page.getByRole('button',{name:/Prayer timer/}).click();
  assert.match(await page.getByRole('button',{name:/Prayer timer/}).textContent(),/Running/);
  await section('Guided Scripture');
  assert.match(await page.getByRole('button',{name:/Prayer timer/}).textContent(),/Running/);
  for(const theme of themes) { await page.getByLabel('Scripture theme').selectOption(theme.id); assert(await page.getByLabel('Choose a passage',{exact:true}).locator('option').count()>0); }
  await page.getByRole('button',{name:'Journal what stood out'}).click();
  await page.getByRole('textbox').fill('Local automated verification note');
  await page.getByRole('button',{name:'Return to Prayer'}).click();
  await section('Prayers & Hymns');
  await page.getByRole('button',{name:'Latin',exact:true}).click();
  await page.getByRole('button',{name:'English',exact:true}).click();
  await page.getByRole('button',{name:'Side-by-side',exact:true}).click();
  await page.getByRole('button',{name:'Play a gentle generated chime',exact:true}).click();
  await page.getByRole('button',{name:'Copy',exact:true}).click();
  await page.getByRole('button',{name:'Copied',exact:true}).waitFor();
  await page.getByRole('button',{name:'Journal intentions from this prayer'}).click();
  assert.equal(await page.getByRole('textbox').inputValue(),'Local automated verification note');
  await page.getByRole('button',{name:'Return to Prayer'}).click();
  await section('Catechism Guide');
  await page.getByRole('searchbox').fill('zzzz-no-match');
  await page.getByText('No guide matches that search.',{exact:false}).waitFor();
  await page.getByRole('searchbox').fill('');
  await page.getByRole('button',{name:/Prayer timer/}).click();
  await page.getByRole('button',{name:'Pause',exact:true}).click();
  await page.getByRole('button',{name:'Reset',exact:true}).click();
  assert.match(await page.getByRole('button',{name:/Prayer timer/}).textContent(),/30:00.*Paused/);
  await page.goto('http://localhost:3000/adoration/companion?mode=holy-hour');
  await page.getByRole('heading',{name:'A Simple Holy Hour Guide'}).waitFor();
  await page.goto('http://localhost:3000/');
  await page.goBack();
  await page.getByRole('heading',{name:'A Simple Holy Hour Guide'}).waitFor();
  await page.goForward();
  assert.equal(new URL(page.url()).pathname,'/');
  assert.deepEqual(errors,[]);
  console.log('Top/bottom navigation in both modes, focus, final transition, timer, filters, language, copy, journal, search, deep link, Back/Forward and runtime PASS');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
