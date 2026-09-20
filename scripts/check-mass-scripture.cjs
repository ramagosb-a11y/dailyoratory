const {chromium}=require("C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const assert=require("node:assert/strict");
const plan=require("../src/data/massScripturePlan.json");
const scripture=require("../src/data/massScripture.json");
(async()=>{
 const browser=await chromium.launch({channel:"msedge",headless:true});
 try {
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:"reduce"});
 const errors=[];page.on("pageerror",e=>errors.push(e.message));
 await page.goto("http://localhost:3000/mass?step=lamb-of-god");
 await page.locator('.mass-experience[data-ready="true"]').waitFor();
 const ids=[...new Set(plan.map(p=>p.step))];
 for(const width of [360,390,768,1440]){
  await page.setViewportSize({width,height:1000});
  for(const id of ids){
   await page.getByRole("combobox",{name:"Choose a moment"}).selectOption(id);
   const lesson=page.locator("#lesson-"+id);
   await lesson.waitFor({state:"visible"});
   const root=page.locator(".mass-lesson:visible");
   const expected=plan.filter(p=>p.step===id);
   assert.deepEqual(await root.locator("[data-passage-id]").evaluateAll(nodes=>nodes.map(n=>n.dataset.passageId)),expected.map(p=>p.id));
   assert(await root.locator("> section").first().evaluate(n=>n.querySelector("h3").textContent==="What you see"));
   assert(await root.locator("> section").nth(6).evaluate(n=>n.classList.contains("mass-scripture") && n.previousElementSibling.tagName==="DETAILS"));
   assert(await root.locator("> section").last().evaluate(n=>n.classList.contains("mass-heavenly-liturgy") && n.previousElementSibling.classList.contains("mass-scripture")));
   assert(await root.locator(".mass-heavenly-liturgy").isVisible());
   for(const p of expected){
    const block=root.locator('[data-passage-id="'+p.id+'"]');
    assert.equal(await block.locator("h4").innerText(),p.reference);
    assert.deepEqual(await block.locator("[data-verse]").evaluateAll(nodes=>nodes.map(n=>({number:Number(n.dataset.verse),text:n.querySelector("span").textContent}))),scripture.passages[p.id].verses);
    assert.equal(await block.locator("a").getAttribute("href"),scripture.passages[p.id].sourceUrl);
    assert(await block.locator("[data-verse]").last().isVisible());
    assert(await block.evaluate(n=>!n.closest("details") && getComputedStyle(n).overflowY==="visible"));
   }
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),"overflow "+width+" "+id);
   assert(await lesson.evaluate(n=>n.scrollWidth<=n.clientWidth+1),"title clipping "+id);
   assert(await page.locator(".mass-chapter-banner").evaluate(n=>n.scrollWidth<=n.clientWidth+1));
  }
  await page.getByRole("combobox",{name:"Choose a moment"}).selectOption("lamb-of-god");
  await page.locator(".mass-chapter-banner").scrollIntoViewIfNeeded();
  await page.screenshot({path:"output/playwright/mass-scripture-header-"+width+".png"});
  await page.locator("#lesson-lamb-of-god").scrollIntoViewIfNeeded();
  await page.screenshot({path:"output/playwright/mass-scripture-reading-"+width+".png"});
  await page.getByRole("button",{name:"Text size: standard"}).click();
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await page.locator("#lesson-lamb-of-god").scrollIntoViewIfNeeded();
  await page.screenshot({path:"output/playwright/mass-scripture-large-"+width+".png"});
  await page.getByRole("button",{name:"Text size: large"}).click();
 }
 await page.evaluate(()=>document.documentElement.style.zoom="2");
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await page.locator("#lesson-lamb-of-god").scrollIntoViewIfNeeded();
 await page.screenshot({path:"output/playwright/mass-scripture-zoom.png"});
 await page.evaluate(()=>document.documentElement.style.zoom="");
 await page.emulateMedia({media:"print"});
 assert.equal(await page.locator(".mass-lesson:visible").count(),1);
 assert.equal(await page.locator(".mass-scripture:visible [data-verse]").count(),10);
 await page.pdf({path:"output/playwright/mass-scripture-print.pdf",format:"A4"});
 await page.screenshot({path:"output/playwright/mass-scripture-print.png",fullPage:true});
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({lessons:24,passageBlocks:32,verses:129,widths:[360,390,768,1440],allRenderedTextsMatch:true,zoom:true,print:true,runtimeErrors:errors}));
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
