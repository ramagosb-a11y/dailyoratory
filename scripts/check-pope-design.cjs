/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
(async () => {
  fs.mkdirSync('output/playwright/pope', { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', permissions: ['clipboard-read','clipboard-write'] });
  await context.route('**/*', route => new URL(route.request().url()).origin === 'http://127.0.0.1:3014' ? route.continue() : route.abort());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', message => {
    if (message.type() === 'error' && /same key|hydration|hydrating|react error/i.test(message.text())) errors.push(message.text());
  });
  try {
    const response = await page.goto('http://127.0.0.1:3014/pope');
    assert.equal(response.status(), 200);
    await page.getByRole('heading', { name: 'The Pope', exact: true, level: 1 }).waitFor();
    await page.locator('main img').evaluate(img => img.decode());
    await page.screenshot({ path: 'output/playwright/pope/desktop.png' });
    await page.getByRole('navigation', {name:'Explore the Pope page'}).screenshot({path:'output/playwright/pope/chapters.png'});
    for (const link of await page.getByRole('navigation', {name:'Explore the Pope page'}).getByRole('link').all()) {
      const target = await link.getAttribute('href');
      assert.equal(await page.locator(target).count(), 1);
      await link.click();
      assert.equal(new URL(page.url()).hash, target);
    }
    const summary = page.locator('main details summary').first();
    await summary.focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('main details').first().getAttribute('open'), '');
    await page.getByRole('button', {name:'Copy Prayer for the Pope',exact:true}).click();
    await page.getByRole('status').filter({hasText:'Prayer copied to clipboard.'}).waitFor();
    assert.ok((await page.evaluate(() => navigator.clipboard.readText())).length > 80);
    await page.locator('#pray-for-the-holy-father').screenshot({path:'output/playwright/pope/prayer.png'});
    await page.waitForTimeout(2300);
    await page.evaluate(() => { Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('QA denial'); } } }); });
    await page.getByRole('button', {name:'Copy Prayer for the Pope',exact:true}).click();
    await page.getByRole('status').filter({hasText:'Unable to copy.'}).waitFor();
    for (const width of [768,390,320]) {
      await page.setViewportSize({width,height:900});
      await page.evaluate(() => scrollTo(0,0));
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'No overflow at '+width);
      if (width===390) await page.screenshot({path:'output/playwright/pope/mobile.png'});
    }
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'No overflow at 320px and 200% text');
    assert.deepEqual(errors, []);
    console.log('PASS: desktop, 768/390/320px, 200% text, chapter targets, FAQ keyboard, prayer copy success/denial, image and runtime errors.');
  } finally { await browser.close(); }
})();
