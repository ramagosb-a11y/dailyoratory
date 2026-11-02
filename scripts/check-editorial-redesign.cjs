const { chromium } = require('C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const base = process.env.EDITORIAL_BASE_URL || 'http://127.0.0.1:3014';
const routes = ['learn','pray','formation','catechism','news','indulgences','sacraments','sacraments/holy-orders'];
const folder = 'output/playwright/editorial-after';
(async () => {
  fs.mkdirSync(folder,{recursive:true});
  const browser = await chromium.launch({channel:'msedge',headless:true});
  const context = await browser.newContext({viewport:{width:1440,height:1000}, reducedMotion:'reduce'});
  await context.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
  const page = await context.newPage();
  const failures = [], errors = [], missing = [], results = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {if(response.status() >= 400 && response.url().startsWith(base)) missing.push({url:response.url(),status:response.status()});});
  for (const route of routes) {
    const response = await page.goto(`${base}/${route}`,{waitUntil:'networkidle'});
    assert.equal(response.status(),200,route);
    assert.equal(await page.locator('h1').count(),1,`One H1 ${route}`);
    assert.equal(await page.locator('main').count(),1,`One main ${route}`);
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),`https://dailyoratory.faith/${route}`);
    const brokenAnchors = await page.locator('main a[href^="#"]').evaluateAll(links => links.map(a=>a.getAttribute('href')).filter(href=>href.length>1&&!document.getElementById(decodeURIComponent(href.slice(1)))));
    assert.deepEqual(brokenAnchors,[],`Anchors ${route}`);
    for (const width of [1440,768,390,320]) {
      await page.setViewportSize({width,height:1000});
      const overflow = await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,offenders:[...document.querySelectorAll('main *')].filter(e=>e.getBoundingClientRect().right>innerWidth+2).slice(0,8).map(e=>({tag:e.tagName,text:e.textContent?.slice(0,70),class:e.className}))}));
      if(overflow.scrollWidth>width+1)failures.push({route,width,overflow});
      if(width===1440||width===390) {
        await page.locator('main header img').evaluate(image=>image.decode());
        await page.screenshot({path:`${folder}/${route.replaceAll('/','-')}-${width}-hero.png`});
        // Trigger lazy images in the actual rendered page before a full-page capture.
        await page.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=800){scrollTo(0,y);await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))}});
        await page.screenshot({path:`${folder}/${route.replaceAll('/','-')}-${width}.png`,fullPage:true});
        await page.evaluate(()=>scrollTo(0,0));
      }
    }
    await page.setViewportSize({width:640,height:1000});
    await page.evaluate(()=>document.documentElement.style.fontSize='200%');
    const zoom = await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
    if(zoom.scrollWidth>zoom.width+1)failures.push({route,zoom});
    await page.evaluate(()=>document.documentElement.style.fontSize='');
    await page.locator('main header a').first().focus();
    assert.ok(await page.locator('main header a').first().evaluate(e=>parseFloat(getComputedStyle(e).outlineWidth)>=2),'Hero visible focus');
    results.push({route,status:response.status(),h1:await page.locator('h1').innerText()});
    console.log('reviewed',route);
  }
  fs.writeFileSync(`${folder}/report.json`,JSON.stringify({base,results,failures,errors,missing},null,2));
  console.log(JSON.stringify({failures,errors,missing},null,2));
  await browser.close();
  assert.deepEqual(failures,[],'Responsive overflow');
  assert.deepEqual(errors,[],'Browser runtime errors');
  assert.deepEqual(missing,[],'Missing assets/routes');
})().catch(error=>{console.error(error);process.exit(1)});
