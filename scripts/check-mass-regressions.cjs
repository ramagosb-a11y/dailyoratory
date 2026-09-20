const {chromium}=require("C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const assert=require("node:assert/strict");
(async()=>{const b=await chromium.launch({channel:"msedge",headless:true});const p=await b.newPage({viewport:{width:390,height:900}});const errors=[];p.on("pageerror",e=>errors.push(e.message));
await p.goto("http://localhost:3000/mass?step=peace");await p.locator('.mass-experience[data-ready="true"]').waitFor();await p.locator("#lesson-peace").waitFor({state:"visible"});assert.equal(await p.evaluate(()=>scrollY),0);
await p.getByRole("button",{name:"Quiet mode: on"}).click();assert(await p.locator(".site-header").isVisible());
await p.getByRole("button",{name:"Quiet mode: off"}).click();assert.equal(await p.locator(".site-header").isVisible(),false);
await p.getByRole("link",{name:"Home",exact:true}).click();await p.waitForURL("http://localhost:3000/");assert(await p.locator(".site-header").isVisible());assert.equal(await p.locator(".mass-experience").count(),0);
for(const path of ["/way-of-cross","/adoration/companion","/fasting-retreat","/reflections/mass-readings"]){const response=await p.goto("http://localhost:3000"+path);assert.equal(response.status(),200);assert.equal(await p.locator(".mass-experience").count(),0);}
await p.goto("http://localhost:3000/mass");await p.locator('.mass-experience[data-ready="true"]').waitFor();
await p.screenshot({path:"output/playwright/mass-journey-welcome-390.png",fullPage:true});
await p.evaluate(()=>localStorage.setItem("daily-oratory:mass-journey:v1",JSON.stringify({version:1,lastStep:"nonsense",quiet:"yes",large:"large"})));await p.reload();await p.locator('.mass-experience[data-ready="true"]').waitFor();assert(await p.locator("#mass-welcome-heading").isVisible());assert.equal(await p.getByRole("button",{name:"Resume:"}).count(),0);
await p.goto("http://localhost:3000/mass?step=gloria");await p.locator('.mass-experience[data-ready="true"]').waitFor();await p.locator("#lesson-gloria").waitFor({state:"visible"});
await p.getByText("Skip to content",{exact:true}).focus();await p.keyboard.press("Enter");assert(await p.locator("#lesson-gloria").isVisible());assert.equal(await p.locator(".mass-full-guide").isVisible(),false);
assert.deepEqual(errors,[]);console.log({regressionRoutes:5,quietToggle:true,invalidPreferences:true,skipLink:true,initialScroll:true,errors});await b.close()})().catch(e=>{console.error(e);process.exit(1)});
