const {chromium}=require("C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const assert=require("node:assert/strict");
(async()=>{
 const browser=await chromium.launch({channel:"msedge",headless:true});
 try{
 const page=await browser.newPage({reducedMotion:"reduce"});const errors=[];
 page.on("pageerror",e=>errors.push(e.message));
 for(const width of [360,390,768,1440]){
 await page.setViewportSize({width,height:1000});
 await page.goto("http://localhost:3000/mass?step=great-amen");
 await page.locator('.mass-experience[data-ready="true"]').waitFor();
 await page.screenshot({path:"output/playwright/mass-design-"+process.argv[2]+"-"+width+".png"});
 await page.locator(".mass-heavenly-liturgy:visible").scrollIntoViewIfNeeded();
 await page.screenshot({path:"output/playwright/mass-design-"+process.argv[2]+"-heaven-"+width+".png"});
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 }
 await page.emulateMedia({forcedColors:"active"});
 await page.getByRole("combobox",{name:"Choose a moment"}).focus();
 assert.equal(await page.evaluate(()=>document.activeElement.tagName),"SELECT");
 await page.screenshot({path:"output/playwright/mass-design-"+process.argv[2]+"-contrast.png"});
 assert.deepEqual(errors,[]);console.log("Four widths, keyboard focus, forced colors, no overflow or runtime errors");
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
