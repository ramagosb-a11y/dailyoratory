// Read-only browser/content checks in an isolated browser; no user progress is changed.
const { chromium } = require('C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const readings = require('../src/data/holyWeekScripture.json');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    for (const width of [360, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const [id, passages] of Object.entries(readings)) {
        await page.goto('http://localhost:3000/holy-week?moment=' + id);
        await page.waitForFunction(ref => document.querySelector('.scripture-passage h3')?.textContent === ref, passages[0].reference);
        const actual = await page.locator('.scripture-passage').evaluateAll(blocks => blocks.map(b => ({
          reference: b.querySelector('h3').textContent,
          verses: [...b.querySelectorAll('.scripture-verse')].map(v => ({ number: Number(v.querySelector('sup').textContent), text: v.textContent.replace(/^\d+\s*/, '') }))
        })));
        assert.deepEqual(actual, passages.map(({ reference, verses }) => ({ reference, verses })), id);
        const overflow = await page.locator('.sacred-content, .sacred-nav, .sacred-moment-meta, .scripture-card, .sacred-hours-toolbar').evaluateAll(es => es.filter(e => e.scrollWidth > e.clientWidth + 1).map(e => e.className));
        assert.deepEqual(overflow, [], `${id} at ${width}`);
        const small = await page.locator('.sacred-hours .btn').evaluateAll(es => es.filter(e => e.getBoundingClientRect().height < 43).map(e => e.textContent));
        assert.deepEqual(small, [], 'Touch target height');
      }
      console.log(`${width}px: all 24 moments, complete Scripture text, layout and button sizes PASS`);
    }
    await page.goto('http://localhost:3000/holy-week?moment=palm-sunday');
    await page.getByRole('heading', { name: 'Meditation', exact: true }).waitFor();
    await page.locator('.meditation-copy').evaluate(e => e.scrollIntoView({ behavior: 'instant', block: 'start' }));
    const stickyTop = await page.locator('.sacred-artwork').evaluate(e => e.getBoundingClientRect().top);
    assert(Math.abs(stickyTop - 24) < 2, `Sticky artwork top: ${stickyTop}`);
    await page.screenshot({ path: 'output/playwright/design-final-desktop-reading.png' });
    await page.getByRole('button', { name: 'View image fullscreen', exact: true }).click();
    await page.waitForFunction(() => !!document.fullscreenElement);
    await page.getByRole('button', { name: 'Exit fullscreen', exact: true }).waitFor();
    await page.screenshot({ path: 'output/playwright/design-final-fullscreen.png' });
    await page.getByRole('button', { name: 'Exit fullscreen', exact: true }).click();
    await page.waitForFunction(() => !document.fullscreenElement);
    await page.locator('.sacred-hours-toolbar-actions').getByRole('button', { name: 'Next →', exact: true }).click();
    await page.waitForURL('**moment=holy-monday');
    await page.getByRole('button', { name: 'Choose a Sacred Moment', exact: true }).click();
    await page.getByRole('dialog').waitFor();
    await page.getByRole('button', { name: 'Close chooser' }).click();
    await page.setViewportSize({ width: 390, height: 900 });
    await page.locator('.sacred-moment-grid').evaluate(e => e.scrollIntoView({ behavior: 'instant', block: 'start' }));
    await page.screenshot({ path: 'output/playwright/design-final-mobile-artwork.png' });
    await page.locator('.reflection').evaluate(e => e.scrollIntoView({ behavior: 'instant', block: 'start' }));
    await page.screenshot({ path: 'output/playwright/design-final-mobile-prayers.png' });
    await page.locator('.sacred-nav').evaluate(e => e.scrollIntoView({ behavior: 'instant', block: 'center' }));
    await page.screenshot({ path: 'output/playwright/design-final-mobile-controls.png' });
    assert.deepEqual(errors, []);
    console.log('Sticky artwork, fullscreen enter/exit, next navigation, chooser and runtime checks PASS');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
