const { chromium } = require('C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const readings = require('../src/data/holyWeekScripture.json');
(async () => {
 const browser = await chromium.launch({channel:'msedge', headless:true});
 try {
  const page = await browser.newPage();
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  for (const width of [390, 1440]) {
   await page.setViewportSize({width,height:900});
   for (const id of ['holy-monday','last-supper','annas-caiaphas','peace-be-to-you']) {
    await page.goto('http://localhost:3000/holy-week?moment='+id);
    await page.waitForFunction(id => document.querySelector('.scripture-passage h3')?.textContent === id, readings[id][0].reference);
    const rendered = await page.locator('.scripture-passage').evaluateAll(blocks => blocks.map(b => ({reference:b.querySelector('h3').textContent, verses:[...b.querySelectorAll('.scripture-verse')].map(v => ({number:Number(v.querySelector('sup').textContent),text:v.textContent.replace(/^\d+\s*/, '')}))})));
    assert.deepEqual(rendered,readings[id].map(({reference,verses})=>({reference,verses})));
    const clipped = await page.locator('.scripture-card, .scripture-passage, .scripture-verse').evaluateAll(els => els.some(e=>e.scrollWidth>e.clientWidth+1 || e.getBoundingClientRect().right>innerWidth+1 || e.getBoundingClientRect().left<0));
    assert(!clipped, `${id} clipped at ${width}`);
    await page.locator('.scripture-card').screenshot({path:`output/playwright/${id}-${width}.png`});
    console.log(`${width}px ${id}: ${rendered.length} passages, ${rendered.reduce((n,p)=>n+p.verses.length,0)} verses; exact text and layout PASS`);
   }
  }
  assert.deepEqual(errors, []);
 } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1});
