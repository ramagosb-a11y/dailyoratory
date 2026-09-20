const { chromium } = require('C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const baseline = require('../output/playwright/mass-reflection-baseline.json');
const base='http://localhost:3000/reflections/mass-readings';
const normalize=s=>s.replace(/\s+/g,' ').trim();
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({reducedMotion:'reduce'});
  page.setDefaultTimeout(15000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const width of [360,390,768,1440]){
   await page.setViewportSize({width,height:1000});await page.goto(base);
   const manuscript=page.locator('[data-manuscript]');
   await manuscript.waitFor();
   assert.equal(await page.locator('h1').count(),1);
   assert.equal(await page.locator('[data-current-reflection] article').count(),0);
   assert.equal(normalize(await manuscript.locator('.content-prose').innerText()),normalize(baseline.body));
   assert(await page.locator('[data-reflection-page-content]').evaluate(el=>el.scrollWidth<=el.clientWidth+1));
   const links=page.getByRole('navigation',{name:'Reflection page navigation'}).getByRole('link');
   assert.equal(await links.count(),7);
   // Wait for React to attach event handlers after the streamed HTML arrives.
   await page.waitForFunction(()=>{
    const link=document.querySelector('[data-reflection-navigation] a');
    return link && Object.keys(link).some(key=>key.startsWith('__reactProps$'));
   });
   for(let i=0;i<7;i++){
    await links.nth(i).click();
    assert(await page.evaluate(()=>document.activeElement?.tagName==='H2'));
   }
   await page.getByRole('link',{name:'↑ Back to page navigation',exact:true}).first().click();
   assert.equal(await page.evaluate(()=>document.activeElement?.id),'page-navigation');
   await page.screenshot({path:'output/playwright/mass-parchment-top-'+width+'.png'});
   await manuscript.locator('.content-prose').scrollIntoViewIfNeeded();
   await page.screenshot({path:'output/playwright/mass-parchment-reading-'+width+'.png'});
   console.log(width+'px: exact reflection text, seven anchors, focus, one heading and layout PASS');
  }
  await page.goto(base);
  const fields=['type','season','cycleYear','weekdayCycle','lectionaryNumber','scriptureReference'];
  for(const field of fields){
   const select=page.locator('select[name="'+field+'"]');
   const values=await select.locator('option').evaluateAll(es=>es.map(e=>e.value).filter(Boolean));
   if(!values.length){console.log(field+': no populated options in current data');continue;}
   await select.selectOption(values[0]);
   await page.getByRole('button',{name:'Filter reflections',exact:true}).click();
   await page.waitForURL(u=>u.searchParams.get(field)===values[0]);
   await page.getByRole('heading',{name:/reflection(s)? found/}).waitFor();
   await page.getByRole('link',{name:'Clear filters',exact:true}).click();
   await page.waitForURL(base);
  }
  await page.getByRole('searchbox',{name:'Search reflections',exact:true}).fill('ZZZ-no-matching-reflection-test');
  await page.getByRole('button',{name:'Filter reflections',exact:true}).click();
  await page.getByRole('heading',{name:'No reflections found',exact:true}).waitFor();
  const pill=page.getByRole('link').filter({hasText:'Search: ZZZ-no-matching-reflection-test'});
  await pill.click();await page.waitForURL(base);
  await page.goBack();await page.getByRole('heading',{name:'No reflections found',exact:true}).waitFor();
  await page.goForward();await page.waitForURL(base);
  const frame=page.getByTitle('Daily Oratory Mass Readings reflection calendar');
  assert((await frame.getAttribute('src')).startsWith('https://calendar.google.com/calendar/embed?'));
  assert(await page.getByRole('link',{name:'Open in Google Calendar',exact:true}).isVisible());
  const detail=await page.getByRole('link',{name:'Open reflection page',exact:true}).getAttribute('href');
  const currentDetail=await page.goto('http://localhost:3000'+detail);
  console.log('Current detail destination status: '+currentDetail.status()+' ('+detail+')');
  await page.goto('http://localhost:3000/reflections/mass-readings/archive');
  const publishedDetail='/reflections/mass-readings/2026-05-16-saturday-of-the-sixth-week-of-easter';
  for(const path of [publishedDetail,'/reflections/mass-readings/archive','/reflections/mass-readings/calendar']){
   const response=await page.goto('http://localhost:3000'+path);
   assert(response.status()<400);assert.equal(await page.locator('[data-manuscript]').count(),0);
   assert((await page.locator('main').first().innerText()).length>100);
  }
  await page.goto(base);await page.setViewportSize({width:720,height:500});
  // Desktop 1440px viewport at 200% zoom has an effective CSS viewport of 720px.
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await page.screenshot({path:'output/playwright/mass-parchment-zoom-reflow.png'});
  await page.emulateMedia({media:'print'});
  assert(await page.locator('[data-manuscript]').isVisible());
  assert(!(await page.getByRole('navigation',{name:'Reflection page navigation'}).isVisible()));
  await page.pdf({path:'output/playwright/mass-parchment-print.pdf',format:'A4',printBackground:true});
  await page.screenshot({path:'output/playwright/mass-parchment-print.png',fullPage:true});
  assert.deepEqual(errors,[]);
  console.log('Filters, empty results, remove filter, Back/Forward, calendar configuration, three destination regressions, zoom reflow, print and runtime PASS');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
