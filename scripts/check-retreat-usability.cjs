const { chromium } = require('C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({reducedMotion:'reduce'});page.setDefaultTimeout(12000);
  await page.goto('http://localhost:3000/fasting-retreat#day=day-1&step=day-1-intentions');
  await page.getByRole('navigation',{name:'Top reading navigation'}).getByRole('button',{name:/Previous/}).click();
  await page.locator('[data-active-step="day-1-offering"]').waitFor();
  await page.goBack();await page.locator('[data-active-step="day-1-intentions"]').waitFor();
  await page.goForward();await page.locator('[data-active-step="day-1-offering"]').waitFor();
  await page.getByRole('button',{name:'Use larger text size',exact:true}).click();
  await page.reload();await page.getByRole('button',{name:'Use standard text size',exact:true}).waitFor();
  await page.getByRole('button',{name:'Open retreat sections',exact:true}).click();
  await page.locator('dialog[open]').waitFor();
  await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);
  await page.goto('http://localhost:3000/fasting-retreat#day=day-1&step=day-1-scripture');
  await page.getByRole('button',{name:'Begin silence',exact:true}).click();
  await page.getByRole('button',{name:'Pause',exact:true}).click();
  await page.getByRole('button',{name:'Reset',exact:true}).click();
  for(const width of [360,390,768,1440]){
   await page.setViewportSize({width,height:900});
   await page.goto('http://localhost:3000/fasting-retreat#day=preparation');
   await page.locator('[data-step-id="preparation-saints"]').waitFor();
   await page.locator('[data-step-id="preparation-saints"]').scrollIntoViewIfNeeded();
   await page.screenshot({path:'output/playwright/retreat-final-path-'+width+'.png'});
   const nav=page.getByRole('navigation',{name:'Retreat chapters'});
   const color=await nav.getByRole('button',{name:'Preparation',exact:true}).evaluate(e=>({text:getComputedStyle(e).color,bg:getComputedStyle(e).backgroundColor}));
   assert.notEqual(color.text,color.bg);
   await page.goto('http://localhost:3000/fasting-retreat#day=day-1&step=day-1-intentions');
   const field=page.getByLabel('Family',{exact:true});
   await field.fill('TEST accessibility');
   await field.focus();
   if(width<=700)assert.equal(await page.getByRole('navigation',{name:'Prayer navigation',exact:true}).evaluate(e=>getComputedStyle(e).position),'static');
   await field.scrollIntoViewIfNeeded();
   await page.screenshot({path:'output/playwright/retreat-final-form-'+width+'.png'});
   await field.press('Tab');
   assert(await page.getByLabel('Friends',{exact:true}).evaluate(e=>e===document.activeElement));
   await page.goto('http://localhost:3000/fasting-retreat#day=day-1&step=day-1-scripture');
   const prev=page.getByRole('navigation',{name:'Top reading navigation'}).getByRole('button',{name:/Previous/});
   const next=page.getByRole('navigation',{name:'Top reading navigation'}).getByRole('button',{name:/Continue/});
   if(width<=700)assert((await next.boundingBox()).y<(await prev.boundingBox()).y);
  }
  console.log('Previous, Back/Forward, text-size persistence, drawer Escape, timer pause/reset, active contrast, keyboard form order, mobile control placement PASS');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
