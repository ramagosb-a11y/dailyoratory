const {chromium}=require("C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const assert=require("node:assert/strict");
const fs=require("node:fs");
(async()=>{
const browser=await chromium.launch({channel:"msedge",headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:"reduce"});
const page=await context.newPage(); const errors=[];page.on("pageerror",e=>errors.push(e.message));
async function ready(){await page.locator('.mass-experience[data-ready="true"]').waitFor();}
async function lesson(id){await page.locator("#lesson-"+id).waitFor({state:"visible"});await page.waitForFunction(id=>document.activeElement?.id==="lesson-"+id,id);}
await page.goto("http://localhost:3000/mass");await ready();
assert.equal(await page.locator("main").count(),1);
assert.equal(await page.locator(".site-header").isVisible(),false);
assert.equal(await page.locator("select option").count(),25);
assert.equal(await page.locator("select optgroup").count(),7);
assert.equal(await page.evaluate(()=>scrollY),0);
const ids=await page.locator("select option").evaluateAll(nodes=>nodes.map(x=>x.value).filter(Boolean));
await page.getByRole("button",{name:"Begin the journey"}).click();await lesson(ids[0]);
assert(await page.getByRole("navigation",{name:"Top lesson navigation"}).getByRole("button",{name:"Previous"}).isDisabled());
for(let i=0;i<24;i++){
 const id=ids[i];if(i){await page.getByRole("navigation",{name:i%2?"Top lesson navigation":"Bottom lesson navigation"}).getByRole("button",{name:"Continue",exact:false}).click();await lesson(id);}
 assert.equal(await page.locator(".mass-lesson:visible").count(),1);
 assert.equal(await page.locator(".mass-lesson:visible > section").count(),8);
 assert.equal(await page.locator("main").count(),1);
 await page.locator(".mass-artwork img").evaluate(img=>img.decode());
 assert(await page.locator(".mass-artwork img").evaluate(img=>img.naturalWidth>0));
}
assert(page.url().endsWith("?step=thanksgiving"));
await page.getByRole("navigation",{name:"Bottom lesson navigation"}).getByRole("button",{name:"Return to overview"}).click();
await page.getByRole("button",{name:"Resume:"}).waitFor();
await page.getByRole("button",{name:"Resume:"}).click();await lesson("thanksgiving");
for(let i=22;i>=0;i--){await page.getByRole("navigation",{name:i%2?"Top lesson navigation":"Bottom lesson navigation"}).getByRole("button",{name:"Previous"}).click();await lesson(ids[i]);}
for(let i=1;i<24;i++){await page.getByRole("navigation",{name:i%2?"Bottom lesson navigation":"Top lesson navigation"}).getByRole("button",{name:"Continue",exact:false}).click();await lesson(ids[i]);}
await page.getByRole("navigation",{name:"Top lesson navigation"}).getByRole("button",{name:"Explore the Full Guide"}).click();await page.locator(".mass-full-guide").waitFor({state:"visible"});
await page.getByRole("link",{name:"Illustrated journey",exact:false}).click();await page.getByRole("button",{name:"Resume:"}).click();await lesson("thanksgiving");
await page.getByRole("navigation",{name:"Bottom lesson navigation"}).getByRole("button",{name:"Explore the Full Guide"}).click();await page.locator(".mass-full-guide").waitFor({state:"visible"});
await page.getByRole("link",{name:"Illustrated journey",exact:false}).click();await page.getByRole("button",{name:"Resume:"}).click();await lesson("thanksgiving");
await page.getByRole("navigation",{name:"Top lesson navigation"}).getByRole("button",{name:"Return to overview"}).click();await page.getByRole("button",{name:"Resume:"}).click();await lesson("thanksgiving");
for(let i=22;i>=0;i--){await page.getByRole("navigation",{name:i%2?"Bottom lesson navigation":"Top lesson navigation"}).getByRole("button",{name:"Previous"}).click();await lesson(ids[i]);}
await page.getByRole("combobox",{name:"Choose a moment"}).selectOption("consecration");await lesson("consecration");
await page.getByRole("button",{name:"View full image"}).click();await page.locator("dialog[open]").waitFor();
assert.equal(await page.evaluate(()=>document.activeElement.textContent),"Close image");
await page.keyboard.press("Tab");assert.equal(await page.evaluate(()=>document.activeElement.textContent),"Close image");
await page.keyboard.press("Escape");await page.locator("dialog[open]").waitFor({state:"hidden"});
assert.equal(await page.evaluate(()=>document.activeElement.textContent),"View full image");
await page.getByRole("button",{name:"View full image"}).click();await page.getByRole("button",{name:"Close image"}).click();
await page.goBack();await page.locator("#lesson-prepare").waitFor({state:"visible"});
await page.goForward();await page.locator("#lesson-consecration").waitFor({state:"visible"});
await page.reload();await ready();await page.locator("#lesson-consecration").waitFor({state:"visible"});
await page.getByRole("link",{name:"Full Guide / Exit journey"}).click();await page.locator(".mass-full-guide").waitFor({state:"visible"});
assert(await page.locator(".site-header").isVisible());
assert.equal(await page.getByRole("heading",{level:1}).count(),1);
await page.getByRole("link",{name:"Illustrated journey",exact:false}).click();await page.locator("#mass-welcome-heading").waitFor({state:"visible"});
page.on("dialog",d=>d.accept());await page.getByRole("button",{name:"Reset saved position"}).click();
assert.equal(await page.getByRole("button",{name:"Resume:"}).count(),0);
for(const anchor of ["mass-roadmap","liturgy-of-the-word","sacred-spaces","sacred-vessels-linens","mass-for-beginners","featured-videos"]){
 await page.goto("http://localhost:3000/mass#"+anchor);await ready();await page.locator(".mass-full-guide").waitFor({state:"visible"});
 assert(await page.locator("#"+anchor).isVisible());await page.waitForFunction(id=>{const rect=document.getElementById(id).getBoundingClientRect();return rect.top<innerHeight && rect.bottom>0},anchor);
}
await page.goto("http://localhost:3000/mass?step=invalid");await ready();assert(await page.locator("#mass-welcome-heading").isVisible());
for(const width of [360,390,768,1440]){
 await page.setViewportSize({width,height:1000});await page.goto("http://localhost:3000/mass?step=consecration");await ready();await page.locator("#lesson-consecration").waitFor({state:"visible"});
 await page.locator(".mass-artwork img").evaluate(img=>img.decode());
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"overflow "+width);
 await page.screenshot({path:"output/playwright/mass-journey-"+width+".png",fullPage:true});
 await page.getByRole("button",{name:"Text size: standard"}).click();
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"large overflow "+width);
 await page.screenshot({path:"output/playwright/mass-journey-large-"+width+".png",fullPage:true});
 await page.getByRole("button",{name:"Text size: large"}).click();
 await page.getByRole("button",{name:"View full image"}).click();
 await page.screenshot({path:"output/playwright/mass-journey-image-"+width+".png"});
 await page.keyboard.press("Escape");
}
await page.emulateMedia({media:"print"});
assert.equal(await page.locator(".mass-step-nav").first().isVisible(),false);
assert(await page.locator("#lesson-consecration").isVisible());
await page.pdf({path:"output/playwright/mass-journey-print.pdf",format:"A4",printBackground:false});
await page.screenshot({path:"output/playwright/mass-journey-print.png",fullPage:true});
await page.emulateMedia({media:"screen"});
await page.evaluate(()=>document.documentElement.style.zoom="2");
assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"zoom overflow");
await page.screenshot({path:"output/playwright/mass-journey-zoom.png",fullPage:true});
await page.evaluate(()=>document.documentElement.style.zoom="");
const nojs=await browser.newContext({javaScriptEnabled:false});const nojsPage=await nojs.newPage();
await nojsPage.goto("http://localhost:3000/mass?view=guide");
assert(await nojsPage.locator(".mass-full-guide").isVisible());
assert.equal(await nojsPage.locator("main").count(),1);
assert(await nojsPage.locator("#sacred-spaces").isVisible());await nojs.close();
const blocked=await browser.newContext();
await blocked.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException("Blocked","QuotaExceededError")};Storage.prototype.getItem=function(){throw new DOMException("Blocked","SecurityError")};});
const bp=await blocked.newPage();await bp.goto("http://localhost:3000/mass");await bp.locator('.mass-experience[data-ready="true"]').waitFor();
await bp.getByRole("button",{name:"Begin the journey"}).click();await bp.locator("#lesson-prepare").waitFor({state:"visible"});
assert(await bp.getByRole("status").isVisible());
await bp.getByRole("button",{name:"Text size: standard"}).click();assert(await bp.getByRole("button",{name:"Text size: large"}).isVisible());await blocked.close();
assert.deepEqual(errors,[]);console.log(JSON.stringify({steps:24,forwardControls:46,backControls:46,chapters:7,widths:[360,390,768,1440],images:24,legacyAnchors:6,noJavaScriptGuide:true,storageFailure:true,runtimeErrors:errors}));
await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
