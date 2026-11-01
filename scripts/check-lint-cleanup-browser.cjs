const { chromium } = require(process.env.CLEANUP_PLAYWRIGHT_PATH || 'C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.env.CLEANUP_BASE_URL || 'http://127.0.0.1:3016';
const folder = 'output/playwright/lint-cleanup';
const stationKey = 'daily-oratory-way-of-cross-station';
const formKey = 'daily-oratory-way-of-cross-form';
(async () => {
  fs.mkdirSync(folder, {recursive:true});
  const browser = await chromium.launch({channel:'msedge',headless:true});
  const errors=[];
  async function context(seed, denied=false) {
    const c=await browser.newContext({viewport:{width:1280,height:900},reducedMotion:'reduce',permissions:['clipboard-read','clipboard-write']});
    await c.route('**/*',route=>{
      if(new URL(route.request().url()).origin===base)return route.continue();
      if(route.request().resourceType()==='image')return route.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360"><rect width="480" height="360" fill="#d8cdb9"/></svg>'});
      return route.abort();
    });
    if(seed)await c.addInitScript(({seed,formKey,stationKey,base})=>{
      if(location.origin!==base)return;
      if(!sessionStorage.getItem('cleanup-qa-seeded')){
        if(seed.form!==undefined)localStorage.setItem(formKey,seed.form);
        if(seed.station!==undefined)localStorage.setItem(stationKey,seed.station);
        sessionStorage.setItem('cleanup-qa-seeded','yes');
      }
    },{seed,formKey,stationKey,base});
    if(denied)await c.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new Error('Synthetic storage denial');}}));
    c.on('page',p=>{
      p.on('pageerror',e=>errors.push(e.message));
      p.on('console',m=>{if(m.type()==='error'&&/hydration|react error|same key|maximum update depth|snapshot.*cached/i.test(m.text()))errors.push(m.text());});
    });
    return c;
  }
  async function open(c,path='/way-of-cross') {
    const p=await c.newPage();const response=await p.goto(base+path);assert.equal(response.status(),200,path);return p;
  }
  async function station(p,index){await p.waitForFunction(index=>{
    const buttons=[...document.querySelectorAll('nav[aria-label="Stations"] button')];
    return index===-1 ? document.getElementById('opening-title')!==null : buttons[index+1]?.getAttribute('aria-current')==='step';
  },index);}
  try {
    let c=await context();let p=await open(c);await station(p,-1);
    assert.equal(await p.evaluate(key=>localStorage.getItem(key),stationKey),null,'No writes during restore');
    await p.getByRole('button',{name:'Begin the Way →',exact:true}).click();await station(p,0);
    await p.reload();await station(p,0);
    await p.getByRole('tab',{name:'St. Alphonsus · 1887 edition'}).click();await station(p,-1);
    await p.getByRole('button',{name:/^Go to Station VI:/}).click();await station(p,5);
    await p.reload();await station(p,5);
    assert.equal(await p.getByRole('tab',{name:'St. Alphonsus · 1887 edition'}).getAttribute('aria-selected'),'true');
    const second=await open(c);await station(second,5);
    await p.getByRole('button',{name:/^Go to Station IX:/}).click();await station(second,8);
    await p.evaluate(()=>localStorage.clear());await station(second,-1);
    await p.reload();await station(p,-1);
    await p.screenshot({path:folder+'/opening-desktop.png'});
    await p.setViewportSize({width:390,height:900});await p.screenshot({path:folder+'/opening-mobile.png'});
    await c.close();
    for(const saved of ['garbage','99','-2','1.5',' ']) {
      c=await context({form:'invalid',station:saved});p=await open(c);await station(p,-1);await c.close();
    }
    c=await context(undefined,true);p=await open(c);await station(p,-1);
    await p.getByRole('button',{name:'Begin the Way →',exact:true}).click();await station(p,0);
    await p.getByRole('tab',{name:'St. Alphonsus · 1887 edition'}).click();await station(p,-1);await c.close();
    console.log('PASS progress: empty, restore, reload, form switch, cross-tab navigation/clear, corrupt/out-of-range and denied storage; desktop/mobile.');
    c=await context();
    for(const path of ['/','/angels','/homilies','/media','/pray','/prayers/litanies/sacred-heart','/bible','/adoration','/devotions']) {
      p=await open(c,path);
      // Bring lazy images into view; remote thumbnails use a synthetic image response.
      const images=p.locator('img');
      for(let i=0;i<Math.min(await images.count(),4);i++){
        const img=images.nth(i);await img.scrollIntoViewIfNeeded();
        await img.evaluate(image=>image.decode());
        assert.ok(await img.evaluate(image=>image.getBoundingClientRect().width>0&&image.getBoundingClientRect().height>0),'Image has visible reserved layout');
      }
      assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),path+' overflow');
      if(path==='/adoration'){
        const prayerSection=p.locator('section').filter({has:p.getByRole('heading',{name:'Prayers Before the Blessed Sacrament',exact:true})});
        const button=prayerSection.getByRole('button',{name:/^Copy Prayer/}).first();await button.click();
        await prayerSection.getByRole('button',{name:/^Prayer copied/}).first().waitFor();
        assert.ok((await p.evaluate(()=>navigator.clipboard.readText())).length>10);
        await p.waitForTimeout(2300);
        await p.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw new Error('Synthetic clipboard denial');}}}));
        await prayerSection.getByRole('button',{name:/^Copy Prayer/}).first().click();
        await p.waitForTimeout(100);
        assert.equal(await prayerSection.getByRole('button',{name:/^Prayer copied/}).count(),0,'Denied copy does not report success');
      }
      if(path==='/media'){
        await p.waitForTimeout(800);
        const thumb=p.locator('#media-browser article img').first();
        await thumb.dispatchEvent('error');
        await p.waitForFunction(()=>new URL(document.querySelector('#media-browser article img').src).pathname==='/images/chapel-library-hero.webp');
      }
      if(path==='/prayers/litanies/sacred-heart'){
        await p.screenshot({path:folder+'/litany-intro.png'});
        await p.getByRole('button',{name:'Begin the Litany',exact:true}).click();
        await p.getByRole('button',{name:'Continue to next prayer movement',exact:true}).click();
        const art=p.locator('img:visible').first();
        await art.evaluate(image=>image.decode());
        assert.ok(await art.evaluate(image=>image.naturalWidth>0));
        await p.screenshot({path:folder+'/litany-section.png'});
      }
      console.log('PASS '+path+' images/content/copy where applicable');await p.close();
    }
    await c.close();assert.deepEqual(errors,[],'No hydration/store/runtime errors');
  } finally {await browser.close();}
})();
