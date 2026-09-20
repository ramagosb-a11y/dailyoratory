const { chromium } = require('C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const ids = ['invitation','intercession','personal-needs','sadness-anxiety','thanksgiving','resolutions','departure'];
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try {
  const page=await browser.newPage({reducedMotion:'reduce'});
  page.setDefaultTimeout(15000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const width of [360,390,768,1440]) {
   await page.setViewportSize({width,height:900});
   await page.goto('http://localhost:3000/adoration/companion');
   await page.waitForFunction(()=>{
    const button=document.querySelector('figure button');
    return button && Object.keys(button).some(key=>key.startsWith('__reactProps$'));
   });
   for(let i=0;i<ids.length;i++) {
    console.log('Artwork check',width,ids[i]);
    await page.getByLabel('Choose a meditation part').selectOption(String(i));
    const trigger=page.getByRole('button',{name:'View for contemplation',exact:true});
    const preview=page.getByRole('button',{name:/Enlarge artwork:/}).locator('img');
    await preview.scrollIntoViewIfNeeded();
    await page.waitForFunction(()=>[...document.querySelectorAll('button img')].every(img=>img.complete&&img.naturalWidth>0));
    assert((await preview.getAttribute('src')).includes(encodeURIComponent(ids[i]+'.webp')));
    await trigger.click();
    const dialog=page.locator('dialog[open]');
    await page.waitForFunction(()=>{const img=document.querySelector('dialog[open] img');return img?.complete&&img.naturalWidth>0});
    const geometry=await dialog.evaluate(d=>{
     const img=d.querySelector('img'),close=d.querySelector('button');
     const r=img.getBoundingClientRect(),b=close.getBoundingClientRect();
     return {fit:r.x>=0&&r.right<=innerWidth+1&&r.y>=0&&r.bottom<=innerHeight,close:b.height>=44&&b.right<=innerWidth,contain:getComputedStyle(img).objectFit,locked:document.body.style.overflow==='hidden'};
    });
    assert.deepEqual(geometry,{fit:true,close:true,contain:'contain',locked:true});
    await page.keyboard.press('Tab');
    assert(await dialog.evaluate(d=>d.contains(document.activeElement)));
    if(i===0)await page.screenshot({path:`output/playwright/companion-artwork-viewer-${width}.png`});
    await page.keyboard.press('Escape');
    await page.waitForFunction(()=>!document.querySelector('dialog[open]')&&document.body.style.overflow!=='hidden');
    assert(await trigger.evaluate(b=>document.activeElement===b));
    await trigger.click();
    await page.getByRole('button',{name:'Close image',exact:true}).click();
   }
   await page.getByRole('button',{name:'Continuous Reading',exact:true}).click();
   assert.equal(await page.getByRole('button',{name:/Enlarge artwork:/}).count(),7);
   await page.getByRole('button',{name:'View for contemplation',exact:true}).nth(4).click();
   assert((await page.locator('dialog[open] img').getAttribute('src')).includes('thanksgiving.webp'));
   await page.keyboard.press('Escape');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   console.log(`${width}px: all seven artwork mappings, loading, dialog sizing, close, Escape and focus PASS`);
  }
  assert.deepEqual(errors,[]);console.log('No browser runtime errors.');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
