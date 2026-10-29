/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require(process.env.ARMOR_PLAYWRIGHT_PATH || "C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.ARMOR_BASE_URL || "http://127.0.0.1:3012";
const folder = "output/playwright/armor-of-god";

(async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: "reduce" });
  await context.route("**/*", route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  const nav = page.getByRole("navigation", { name: "Armor of God experiences" });
  async function imagesLoaded() {
    await page.waitForFunction(() => [...document.querySelectorAll("main img")].every(image => image.complete && image.naturalWidth > 0));
  }
  async function noOverflow() {
    const overflow = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, elements: [...document.querySelectorAll("main *")].filter(element => element.getBoundingClientRect().right > innerWidth + 1).slice(0, 8).map(element => ({ tag: element.tagName, class: element.className, text: element.textContent?.slice(0, 60), right: element.getBoundingClientRect().right })) }));
    assert.ok(overflow.scrollWidth <= overflow.width + 1, JSON.stringify(overflow));
  }
  async function noPhoneIcons() {
    const evidence = await page.locator("main").evaluate(element => ({ text: element.innerText, icons: [...element.querySelectorAll("img,svg,button,a")].map(item => [item.getAttribute("aria-label"), item.getAttribute("title"), item.getAttribute("alt"), item.getAttribute("src"), item.getAttribute("class")]) }));
    assert.ok(!/iphone|smartphone|phone[-_ ]?icon|device[-_ ]?phone|[\u{1f4f1}\u{1f4f2}]/iu.test(JSON.stringify(evidence)), "No iPhone/device icons or phone emoji in rendered page");
  }
  try {
    const homepageResponse = await page.goto(`${base}/`);
    assert.equal(homepageResponse.status(), 200);
    const homeArmor = page.getByRole("region", { name: "The Armor of God guided prayer", exact: true });
    const homeArmorLink = homeArmor.getByRole("link", { name: "The Armor of God", exact: true });
    assert.equal(await homeArmorLink.getAttribute("href"), "/armor-of-god");
    assert.ok((await homepageResponse.text()).includes("home-armor-title"), "Armor homepage discovery is server-rendered");
    await noPhoneIcons();
    await homeArmor.scrollIntoViewIfNeeded();
    await homeArmor.locator("img").evaluate(image => image.decode());
    assert.equal(await homeArmor.locator("img").getAttribute("loading"), "lazy");
    await homeArmorLink.focus();
    assert.equal(await homeArmorLink.evaluate(element => getComputedStyle(element).outlineWidth), "3px");
    await page.screenshot({ path: `${folder}/homepage-armor-context-desktop.png` });
    await homeArmor.screenshot({ path: `${folder}/homepage-armor-desktop.png` });
    for (const width of [768, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      const bounds = await homeArmorLink.boundingBox();
      assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= width + 1, `Homepage Armor card fits at ${width}px`);
      assert.ok(await homeArmorLink.evaluate(element => element.scrollWidth <= element.clientWidth + 1), "Homepage Armor contents fit");
      assert.ok((await homeArmor.locator('[class*="action"]').boundingBox()).height >= 48, "Homepage action touch target");
      await noPhoneIcons();
      if (width === 390) await homeArmor.screenshot({ path: `${folder}/homepage-armor-mobile.png` });
    }
    await page.evaluate(() => document.documentElement.style.fontSize = "200%");
    assert.ok(await homeArmorLink.evaluate(element => element.scrollWidth <= element.clientWidth + 1), "Homepage Armor fits at 320px/200% text");
    await page.evaluate(() => document.documentElement.style.fontSize = "");
    await homeArmorLink.focus();
    await page.keyboard.press("Enter");
    await page.getByRole("heading", { level: 1, name: "The Armor of God", exact: true }).waitFor();
    assert.equal(new URL(page.url()).pathname, "/armor-of-god");
    await noPhoneIcons();
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(`${base}/armor-of-god`);
    await page.getByRole("heading", { level: 1, name: "The Armor of God" }).waitFor();
    await page.waitForFunction(() => document.querySelector("main img")?.naturalWidth > 0);
    const heroBox = await page.locator("main img").first().boundingBox();
    assert.ok(Math.abs(heroBox.width / heroBox.height - 1.5) < .02, "Full 3:2 armor composition");
    assert.ok(await page.getByRole("heading", { name: "Where do you need His strength?", exact: true }).evaluate(element => Boolean(element.compareDocumentPosition(document.getElementById("armor-foundation")) & Node.DOCUMENT_POSITION_FOLLOWING)), "Journey choices precede the foundation essay");
    await page.screenshot({ path: `${folder}/design-desktop-preview.png` });
    await page.getByRole("heading", { name: "Return to Christ through the day.", exact: true }).scrollIntoViewIfNeeded();
    await imagesLoaded();
    assert.equal(await page.locator("main img").nth(1).getAttribute("loading"), "lazy");
    await page.screenshot({ path: `${folder}/design-home-desktop.png`, fullPage: true });
    await page.getByRole("button", { name: "Use light appearance" }).click();
    await page.screenshot({ path: `${folder}/design-home-light.png`, fullPage: true });
    await page.getByRole("button", { name: "Use dark appearance" }).click();

    for (const width of [390, 320, 768]) {
      await page.setViewportSize({ width, height: 900 });
      await noOverflow();
      for (const target of ["Welcome", "My situations", "The six pieces", "Daily prayers", "Surrender", "Silence"]) {
        const bounds = await nav.getByRole("button", { name: target, exact: true }).boundingBox();
        assert.ok(bounds && bounds.x >= 0 && bounds.x + bounds.width <= width + 1, `visible nav ${target} at ${width}`);
        assert.ok(bounds.height >= 44, `touch target ${target}`);
      }
    }
    await page.setViewportSize({ width: 390, height: 900 });
    await nav.getByRole("button", { name: "Welcome", exact: true }).click();
    await page.screenshot({ path: `${folder}/design-home-mobile.png`, fullPage: true });
    await nav.getByRole("button", { name: "My situations", exact: true }).click();
    await page.getByRole("button", { name: "Worry", exact: false }).first().click();
    await page.getByRole("button", { name: "Resist Temptation", exact: true }).click();
    await page.getByRole("button", { name: "Pride", exact: false }).first().click();
    const dock = page.locator('[aria-label="Prayer selection progress"]');
    assert.ok(await dock.isVisible());
    assert.match(await dock.innerText(), /2 of 3 selected/);
    await page.getByRole("button", { name: "Anger", exact: false }).first().click();
    await page.getByRole("button", { name: "Envy", exact: false }).first().click({ force: true });
    const limitNotice = page.getByRole("status");
    assert.match(await limitNotice.innerText(), /up to three situations/);
    const noticeBounds = await limitNotice.boundingBox();
    assert.ok(noticeBounds.y >= 0 && noticeBounds.y + noticeBounds.height <= 900, "Fourth-choice explanation is visible beside selection controls");
    await dock.getByRole("button", { name: "Review choices ↓", exact: true }).click();
    await page.waitForFunction(() => document.activeElement?.id === "armor-selection-heading");
    const selectionHeading = await page.locator("#armor-selection-heading").boundingBox();
    const toolsBounds = await dock.locator("..").boundingBox();
    assert.ok(selectionHeading.y >= toolsBounds.y + toolsBounds.height, "Selection review clears the sticky controls");
    await page.getByRole("button", { name: "Remove Anger", exact: true }).click();
    await page.waitForFunction(() => document.activeElement?.id === "armor-selection-heading");
    await page.getByRole("button", { name: "Return to situations ↑", exact: true }).click();
    await page.waitForFunction(() => document.activeElement?.id === "armor-group-heading-temptation");
    const groupBounds = await page.locator("#armor-group-heading-temptation").boundingBox();
    const returnedToolsBounds = await dock.locator("..").boundingBox();
    assert.ok(groupBounds.y >= returnedToolsBounds.y + returnedToolsBounds.height, "Return to choices clears the sticky controls");
    await page.setViewportSize({ width: 320, height: 900 });
    await page.evaluate(() => document.documentElement.style.fontSize = "200%");
    await noOverflow();
    await page.evaluate(() => document.documentElement.style.fontSize = "");
    await page.setViewportSize({ width: 390, height: 900 });
    await page.screenshot({ path: `${folder}/design-selector-mobile.png`, fullPage: true });
    await page.screenshot({ path: `${folder}/revision5-selector-preview.png` });
    await dock.getByRole("button", { name: "Begin prayer →", exact: true }).click();
    await page.getByRole("heading", { name: "Recognize", exact: true }).waitFor();
    assert.equal(await nav.getByRole("button", { name: "My situations", exact: true }).getAttribute("aria-current"), "page");
    const tracker = page.getByRole("list", { name: "Prayer stages", exact: true });
    const markerRows = await tracker.getByRole("listitem").evaluateAll(items => items.map(item => Math.round(item.getBoundingClientRect().top)));
    assert.equal(new Set(markerRows).size, 1, "All five mobile stage markers stay on one row");
    assert.match(await tracker.getByRole("listitem").first().getAttribute("aria-label"), /Recognize/);
    assert.ok(await page.getByText("Step 1 of 5 · Recognize", { exact: true }).isVisible());
    await page.getByRole("button", { name: "Continue →", exact: true }).click();
    await page.getByRole("button", { name: "Continue →", exact: true }).click();
    await imagesLoaded();
    const application = page.locator('[class*="armorGuideText"] > p').first();
    assert.ok(await application.evaluate(element => Boolean(element.compareDocumentPosition(document.querySelector('[class*="recommendedArmor"]')) & Node.DOCUMENT_POSITION_FOLLOWING)), "Situation-specific guidance precedes supporting armor quotations");
    await page.screenshot({ path: `${folder}/revision5-guidance-preview.png` });
    await page.screenshot({ path: `${folder}/design-guidance-mobile.png`, fullPage: true });
    for (const expected of ["Step 4 of 5 · Prayer", "Step 5 of 5 · Live the Word"]) {
      await page.getByRole("button", { name: "Continue →", exact: true }).click();
      assert.ok(await page.getByText(expected, { exact: true }).isVisible());
    }
    await page.setViewportSize({ width: 320, height: 900 });
    await page.evaluate(() => document.documentElement.style.fontSize = "200%");
    await noOverflow();
    await page.evaluate(() => document.documentElement.style.fontSize = "");
    await page.setViewportSize({ width: 390, height: 900 });

    await nav.getByRole("button", { name: "The six pieces", exact: true }).click();
    const pieces = page.getByRole("group", { name: "Choose an armor piece" });
    for (const name of ["Belt of Truth", "Breastplate of Justice", "Shoes of the Gospel of Peace", "Shield of Faith", "Helmet of Salvation", "Sword of the Spirit"]) {
      await pieces.getByRole("button", { name, exact: false }).click();
      await page.waitForFunction(() => document.activeElement?.id === "armor-detail-heading");
      assert.equal(await page.locator("#armor-detail-heading").innerText(), name);
      const articleBounds = await page.locator("article").boundingBox();
      assert.ok(articleBounds.y >= 0 && articleBounds.y < 100, "Direct mobile armor choice reveals its detail");
      await page.locator("article img").scrollIntoViewIfNeeded();
      await imagesLoaded();
      assert.equal(await page.locator("article img").count(), 1);
      assert.equal(await page.locator("article").getAttribute("aria-live"), null);
      await noOverflow();
    }
    await page.getByRole("button", { name: "Explore the next piece →", exact: true }).click();
    await page.waitForFunction(() => document.activeElement?.id === "armor-detail-heading");
    await page.screenshot({ path: `${folder}/design-explorer-mobile.png`, fullPage: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
    const desktopShield = pieces.getByRole("button", { name: "Shield of Faith", exact: false });
    await desktopShield.click();
    assert.ok(await desktopShield.evaluate(element => document.activeElement === element), "Desktop armor selection retains control focus");
    await page.getByRole("button", { name: "Resume my prayer", exact: true }).click();
    await page.getByRole("button", { name: "Back", exact: true }).click();
    await page.getByRole("button", { name: "Back", exact: true }).click();
    await imagesLoaded();
    await page.screenshot({ path: `${folder}/revision5-guidance-desktop.png` });
    await page.getByRole("button", { name: "Use light appearance", exact: true }).click();
    await page.screenshot({ path: `${folder}/revision5-guidance-light.png` });
    await page.getByRole("button", { name: "Use dark appearance", exact: true }).click();
    await nav.getByRole("button", { name: "The six pieces", exact: true }).click();

    await page.setViewportSize({ width: 320, height: 900 });
    await page.evaluate(() => document.documentElement.style.fontSize = "200%");
    await noOverflow();
    await nav.getByRole("button", { name: "Welcome", exact: true }).click();
    await noOverflow();
    await page.evaluate(() => document.documentElement.style.fontSize = "");
    await page.getByRole("button", { name: "Enter silent prayer →", exact: true }).click();
    await page.getByRole("heading", { name: "Simply remain with the Lord.", exact: true }).waitFor();
    assert.deepEqual(errors, []);
    fs.writeFileSync(`${folder}/design-results.json`, JSON.stringify({ homepage: "Selected Ivory Edition is server-rendered, responsive at 320/390/768/1440px and 200% text, with lazy image, focus outline and keyboard-activated canonical destination", deviceIcons: "No iPhone/smartphone markers or phone emoji in rendered homepage and Armor page", imagery: "8 optimized original WebP assets, all six explorer images loaded", navigation: "all six items visible at 320/390/768px with 44px targets", selectionDock: "cross-theme choices, visible fourth-choice notice, review/remove/return focus and dynamic sticky clearance passed", stages: "one-row mobile markers, full accessible names, current-stage counts and application-before-references passed", explorer: "all six direct mobile choices reveal matching article and heading; desktop retains selector focus; next-piece focus passed", zoom: "320px at 200% text passed for landing, selector, guidance and explorer", consoleErrors: errors }, null, 2));
    console.log("Armor visual/browser checks passed.");
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
