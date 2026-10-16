/* eslint-disable @typescript-eslint/no-require-imports */
// Uses the same bundled Playwright runtime as the repository's existing browser checks.
const { chromium } = require(process.env.STRONGHOLDS_PLAYWRIGHT_PATH || "C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.STRONGHOLDS_BASE_URL || "http://127.0.0.1:3010";
const key = "daily-oratory-strongholds-v1";
const historyKey = "daily-oratory-strongholds-history-v1";
const categories = ["Fear or anxiety", "Pride", "Anger", "Lust or impurity", "Resentment", "Envy", "Discouragement", "Desire for control", "Dishonesty", "Other", "Unsure"];
const marker = "SYNTHETIC_STRONGHOLDS_QA";

(async () => {
  fs.mkdirSync("output/playwright/strongholds", { recursive: true });
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const errors = [];
  const requests = [];
  async function context() {
    const result = await browser.newContext({ viewport: { width: 360, height: 900 }, reducedMotion: "reduce" });
    // Never send QA traffic to external analytics or services.
    await result.route("**/*", route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
    result.on("request", request => requests.push(request.url() + (request.postData() || "")));
    result.on("page", page => {
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => {
        if (/hydration|hydrating|did not match|server rendered HTML/i.test(message.text())) errors.push(message.text());
      });
    });
    return result;
  }
  try {
    const c = await context();
    const page = await c.newPage();
    page.setDefaultTimeout(15000);
    const button = name => page.getByRole("button", { name, exact: true });
    const heading = name => page.getByRole("heading", { name, exact: true });
    const next = async () => {
      await button("Continue").click();
      await page.waitForFunction(() => window.scrollY === 0 && document.activeElement?.tagName === "H1");
    };
    const nav = page.getByRole("navigation", { name: "Strongholds", exact: true });
    const sanctuary = () => nav.getByRole("link", { name: "Sanctuary", exact: true }).click();
    const help = () => page.getByRole("link", { name: "Help Me Right Now", exact: true }).click();
    async function noOverflow() { assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), "No horizontal overflow"); }
    await page.goto(`${base}/strongholds`);
    await heading("Strongholds").waitFor();
    assert.match(await page.locator('meta[name="robots"]').getAttribute("content"), /noindex/);
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), "https://dailyoratory.faith/strongholds");
    assert.equal(await button("Resume Saved Journey").count(), 0);
    assert.equal(await page.evaluate(key => localStorage.getItem(key), key), null);
    assert.equal(await page.evaluate(key => localStorage.getItem(key), historyKey), null);
    assert.deepEqual(await nav.getByRole("link").allTextContents(), ["Sanctuary", "6-Step Battle", "Defenses", "Weapons", "Discernment", "My Journey"]);
    assert.equal(await nav.getByRole("link", { name: "Sanctuary", exact: true }).getAttribute("aria-current"), "page");
    await page.screenshot({ path: "output/playwright/strongholds/hub-360.png", fullPage: true });
    for (const category of categories) {
      await button("Begin Guided Prayer").click();
      await heading("Recognize the Battle").waitFor();
      await page.getByRole("group", { name: "Name the struggle (optional)" }).getByRole("button", { name: category, exact: true }).click();
      await next();
      await heading("Identify the Stronghold").waitFor();
      assert.equal(await page.locator("h1").evaluate(el => el === document.activeElement), true);
      await page.getByLabel("The thought in my own words (optional)").fill(marker);
      await next();
      await heading("Examine the Counsel").waitFor();
      await button("Back").click();
      assert.equal(await page.getByLabel("The thought in my own words (optional)").inputValue(), marker);
      await next(); await next();
      await heading("Bring the Thought to Christ").waitFor();
      await button("Bring This Thought to Christ").click();
      await page.getByText("You have turned toward Christ in prayer. Remain with Him at your own pace.", { exact: true }).waitFor();
      await next();
      await heading("Choose a Response to Grace").waitFor();
      await page.getByRole("group", { name: "One practical response for this struggle or circumstance (optional)" }).getByRole("button").first().click();
      await next();
      await heading("Walk in Freedom").waitFor();
      assert.ok((await page.getByRole("article", { name: "Prayer summary" }).innerText()).includes(category));
      await noOverflow();
      assert.equal(await page.evaluate(key => localStorage.getItem(key), key), null);
      await sanctuary();
      await heading("Strongholds").waitFor();
    }
    // Cross-route memory, explicit snapshot save, reload, resume and deletion.
    await button("Begin Guided Prayer").click();
    await button("Fear or anxiety").click();
    await next();
    await page.getByLabel("The thought in my own words (optional)").fill(marker);
    await help();
    await heading("Help Me Right Now").waitFor();
    await nav.getByRole("link", { name: "6-Step Battle", exact: true }).click();
    assert.equal(await page.getByLabel("The thought in my own words (optional)").inputValue(), marker);
    await page.getByText("Save or delete on this device", { exact: true }).click();
    await button("Save on This Device").click();
    await page.getByText(/Only this snapshot was saved/).waitFor();
    await page.getByLabel("The thought in my own words (optional)").fill("Unsaved edit");
    await page.reload();
    await heading("Recognize the Battle").waitFor();
    await sanctuary();
    await button("Resume Saved Journey").click();
    assert.equal(await page.getByLabel("The thought in my own words (optional)").inputValue(), marker);
    for (let i = 0; i < 4; i++) await next();
    await heading("Walk in Freedom").waitFor();
    // My Journey is a separate explicit save, never a side effect of completion.
    assert.equal(await page.evaluate(key => localStorage.getItem(key), historyKey), null);
    await page.evaluate(() => localStorage.setItem("qa-other-tool", "preserved"));
    await button("Save Reflection to My Journey").click();
    await page.getByText(/Reflection saved to My Journey on this browser/).waitFor();
    assert.equal(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).entries.length, historyKey), 1);
    assert.equal(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).entries[0].draft.thought, historyKey), marker);
    let printCalled = false;
    await page.exposeFunction("qaPrint", () => { printCalled = true; });
    await page.evaluate(() => { window.print = () => window.qaPrint(); });
    await button("Print Summary").click();
    assert.equal(printCalled, true);
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.getByRole("article", { name: "Prayer summary" }).isVisible(), true);
    assert.equal(await nav.isVisible(), false);
    assert.equal(await heading("Walk in Freedom").isVisible(), false);
    await page.pdf({ path: "output/playwright/strongholds/summary.pdf", format: "A4" });
    await page.screenshot({ path: "output/playwright/strongholds/print-summary.png", fullPage: true });
    await page.emulateMedia({ media: "screen" });
    await button("Finish Without Saving").click();
    await heading("Go in hope").waitFor();
    assert.equal(await page.evaluate(key => localStorage.getItem(key), key), null);
    assert.equal(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).entries.length, historyKey), 1, "Finishing clears the saved draft without deleting explicitly saved reflections");
    await nav.getByRole("link", { name: "My Journey", exact: true }).click();
    await heading("My Journey").waitFor();
    await page.getByText("Read saved reflection", { exact: true }).click();
    const savedArticle = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "Fear or anxiety", exact: true }) });
    assert.ok((await savedArticle.innerText()).includes(marker));
    await button("Reopen Reflection").click();
    await heading("Walk in Freedom").waitFor();
    assert.ok((await page.getByRole("article", { name: "Prayer summary" }).innerText()).includes(marker));
    await nav.getByRole("link", { name: "My Journey", exact: true }).click();
    await page.getByText("Read saved reflection", { exact: true }).click();
    await button("Delete This Reflection").click();
    await page.getByText(/Saved reflection data deleted from this browser/).waitFor();
    assert.equal(await heading("My Journey").evaluate(el => el === document.activeElement), true);
    assert.equal(await page.evaluate(key => localStorage.getItem(key), historyKey), null);
    assert.equal(await page.evaluate(() => localStorage.getItem("qa-other-tool")), "preserved");
    // Keyboard action, optional notes, 360px through desktop, all help mappings.
    await sanctuary();
    await button("Begin Guided Prayer").focus();
    await page.keyboard.press("Enter");
    await heading("Recognize the Battle").waitFor();
    assert.equal(await page.locator("h1").evaluate(el => el === document.activeElement), true);
    for (let i = 0; i < 5; i++) await next();
    await heading("Walk in Freedom").waitFor();
    for (const width of [360, 390, 768, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      await noOverflow();
    }
    await help();
    await heading("Pause. Turn toward Christ.").waitFor();
    await button("Continue").click();
    await heading("Name the struggle").waitFor();
    for (const category of categories) {
      await page.getByRole("group", { name: "Name the struggle (optional)" }).getByRole("button", { name: category, exact: true }).click();
      // Category is help step 2. Four unhurried transitions lead to action.
      for (let i = 0; i < 4; i++) await button("Continue").click();
      await heading("Choose one small action").waitFor();
      assert.equal(await heading("Choose one small action").evaluate(el => el === document.activeElement), true);
      await page.getByRole("group", { name: "A practical response (optional)" }).getByRole("button").first().click();
      if (category !== categories.at(-1)) {
        for (let i = 0; i < 4; i++) await button("Back").click();
        await heading("Name the struggle").waitFor();
      }
    }
    for (const width of [360, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      await noOverflow();
      await page.screenshot({ path: `output/playwright/strongholds/help-${width}.png`, fullPage: true });
    }
    assert.equal(await page.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches), true);
    // Seven daily selections are memory-only and link to the existing prayer tools.
    await nav.getByRole("link", { name: "Defenses", exact: true }).click();
    await heading("Daily Defenses").waitFor();
    const days = page.getByRole("group", { name: "Choose a day of reflection", exact: true }).getByRole("button");
    const themes = ["Eucharistic devotion", "Prudent rest", "Humility", "Trust in Providence", "Charity", "Diligence", "Mercy"];
    assert.equal(await days.count(), 7);
    for (let i = 0; i < themes.length; i++) {
      await days.nth(i).click();
      await heading(themes[i]).waitFor();
      assert.equal(await days.nth(i).getAttribute("aria-pressed"), "true");
      assert.equal(await page.getByRole("group", { name: "Choose a day of reflection", exact: true }).locator('[aria-pressed="true"]').count(), 1);
      await noOverflow();
    }
    assert.equal(await page.getByRole("link", { name: "Guided Morning Prayer", exact: true }).getAttribute("href"), "/morning-prayer");
    assert.equal(await page.getByRole("link", { name: "The Last Light · Nightly Examen", exact: true }).getAttribute("href"), "/daily-examen/nightly");
    await sanctuary();
    await nav.getByRole("link", { name: "Defenses", exact: true }).click();
    await heading("Eucharistic devotion").waitFor();
    assert.equal(await page.evaluate(key => localStorage.getItem(key), key), null);
    assert.equal(await page.evaluate(key => localStorage.getItem(key), historyKey), null);
    // Native resource dialogs must close with Escape and return keyboard focus.
    await nav.getByRole("link", { name: "Weapons", exact: true }).click();
    await heading("Spiritual Weapons").waitFor();
    const resources = page.locator('button[aria-haspopup="dialog"]');
    const resourceNames = ["Prayer", "Scripture", "Faith", "Humility", "Obedience to God", "Charity", "The Holy Spirit", "Reconciliation", "The Eucharist", "The Rosary"];
    assert.equal(await resources.count(), resourceNames.length);
    for (let i = 0; i < resourceNames.length; i++) {
      await resources.nth(i).click();
      const resourceDialog = page.getByRole("dialog", { name: resourceNames[i], exact: true });
      await resourceDialog.waitFor();
      assert.equal(await resourceDialog.getByRole("button", { name: "Close resource", exact: true }).evaluate(el => el === document.activeElement), true);
      await resourceDialog.getByRole("heading", { name: "A short prayer", exact: true }).waitFor();
      await resourceDialog.getByRole("heading", { name: "Put it into practice", exact: true }).waitFor();
      await page.keyboard.press("Escape");
      await resourceDialog.waitFor({ state: "hidden" });
      assert.equal(await resources.nth(i).evaluate(el => el === document.activeElement), true);
    }
    // Suggestions are displayed only by the explicit button; filters are reading aids.
    await nav.getByRole("link", { name: "Discernment", exact: true }).click();
    await heading("Discernment").waitFor();
    const atmospheres = ["Peaceful or encouraged", "Troubled or unsettled"];
    const directions = ["Toward harmful isolation or secrecy", "Toward humble fidelity and charity"];
    assert.equal(await page.getByRole("heading", { name: "You can begin without certainty", exact: true }).count(), 0);
    await button("Consider a next step").click();
    await heading("You can begin without certainty").waitFor();
    for (const atmosphere of atmospheres) for (const direction of directions) {
      await button(atmosphere).click();
      await button(direction).click();
      assert.equal(await page.locator("#discernment-suggestion-heading").count(), 0);
      await button("Consider a next step").click();
      await page.locator("#discernment-suggestion-heading").waitFor();
      assert.equal(await page.locator('[aria-labelledby="discernment-suggestion-heading"]').evaluate(el => el === document.activeElement), true);
      assert.ok((await page.locator('[aria-labelledby="discernment-suggestion-heading"]').innerText()).includes("not a spiritual assessment"));
    }
    await button("Clear choices").click();
    assert.equal(await page.locator("#discernment-suggestion-heading").count(), 0);
    const ruleSummaries = page.locator("details summary").filter({ hasText: /Rule \d+:/ });
    assert.equal(await ruleSummaries.count(), 14);
    await button("During desolation").click();
    assert.equal(await ruleSummaries.count(), 6);
    await ruleSummaries.filter({ hasText: "Rule 5:" }).click();
    assert.ok((await page.locator("details[open]").innerText()).includes("remaining in danger"));
    await button("During consolation").click();
    assert.equal(await ruleSummaries.count(), 3);
    await button("All rules").click();
    assert.equal(await ruleSummaries.count(), 14);
    // Settings stay within the feature session and leave both saved-record keys empty.
    const settingsOpener = button("Open Settings and Sacred Integrity");
    await settingsOpener.click();
    const settings = page.getByRole("dialog", { name: "Settings & Sacred Integrity", exact: true });
    await settings.waitFor();
    const surface = page.locator("[data-theme][data-reading]");
    assert.equal(await surface.getAttribute("data-theme"), "midnight");
    const darkColor = await surface.evaluate(el => getComputedStyle(el).backgroundColor);
    await settings.getByRole("button", { name: "Ivory Dawn (Light)", exact: true }).click();
    assert.equal(await surface.getAttribute("data-theme"), "ivory");
    assert.notEqual(await surface.evaluate(el => getComputedStyle(el).backgroundColor), darkColor);
    const standardSize = await surface.evaluate(el => parseFloat(getComputedStyle(el).fontSize));
    await settings.getByRole("button", { name: "Large Reading Size", exact: true }).click();
    assert.equal(await surface.getAttribute("data-reading"), "large");
    assert.ok(await surface.evaluate((el, standard) => parseFloat(getComputedStyle(el).fontSize) > standard, standardSize));
    await settings.getByRole("checkbox", { name: "Reduced motion", exact: true }).check();
    assert.equal(await surface.getAttribute("data-reduced-motion"), "true");
    await page.keyboard.press("Escape");
    await settings.waitFor({ state: "hidden" });
    assert.equal(await settingsOpener.evaluate(el => el === document.activeElement), true);
    await nav.getByRole("link", { name: "Defenses", exact: true }).click();
    assert.equal(await surface.getAttribute("data-theme"), "ivory");
    assert.equal(await surface.getAttribute("data-reading"), "large");
    await noOverflow();
    assert.equal(await page.evaluate(key => localStorage.getItem(key), key), null);
    assert.equal(await page.evaluate(key => localStorage.getItem(key), historyKey), null);
    await settingsOpener.click();
    await settings.getByRole("button", { name: "Midnight Sacred (Dark)", exact: true }).click();
    await settings.getByRole("button", { name: "Standard Size", exact: true }).click();
    await settings.getByRole("button", { name: "Done", exact: true }).click();
    // Malformed/future data, successful deletion focus and isolation.
    await page.evaluate(key => { localStorage.setItem(key, '{"version":99}'); localStorage.setItem("qa-other-tool", "preserved"); }, key);
    await page.goto(`${base}/strongholds`);
    await page.getByText(/saved record is unreadable/).waitFor();
    await button("Delete Saved Draft").click();
    assert.equal(await button("Begin Guided Prayer").evaluate(el => el === document.activeElement), true);
    assert.equal(await page.evaluate(() => localStorage.getItem("qa-other-tool")), "preserved");
    // Denied storage never blocks prayer, saving failure, deletion failure or finish.
    const denied = await context();
    await denied.addInitScript(() => {
      for (const name of ["getItem", "setItem", "removeItem"]) Object.defineProperty(Storage.prototype, name, { value() { throw new Error("Synthetic storage denial"); } });
    });
    const deniedPage = await denied.newPage();
    await deniedPage.goto(`${base}/strongholds/journey`);
    await deniedPage.getByText("Save or delete on this device", { exact: true }).click();
    await deniedPage.getByRole("button", { name: "Save on This Device", exact: true }).click();
    await deniedPage.getByText(/This browser could not save/).waitFor();
    for (let i = 0; i < 5; i++) await deniedPage.getByRole("button", { name: "Continue", exact: true }).click();
    await deniedPage.getByRole("button", { name: "Save Reflection to My Journey", exact: true }).click();
    await deniedPage.getByText(/This browser could not save the reflection/).waitFor();
    await deniedPage.getByRole("button", { name: "Finish Without Saving", exact: true }).click();
    await deniedPage.getByRole("heading", { name: "Go in hope", exact: true }).waitFor();
    await deniedPage.getByText(/Saved data could not be deleted/).waitFor();
    await denied.close();
    // Response markers never appear in requests, URL, metadata or inherited analytics queue.
    assert.equal(requests.some(request => request.includes(marker)), false);
    assert.equal(page.url().includes(marker), false);
    assert.equal(await page.locator("head").innerHTML().then(text => text.includes(marker)), false);
    assert.equal(await page.evaluate(marker => JSON.stringify(window.dataLayer || []).includes(marker), marker), false);
    assert.deepEqual(errors, []);
    // Links and existing guided prayer regression smoke checks.
    for (const path of ["/strongholds/defenses", "/strongholds/weapons", "/strongholds/discernment", "/strongholds/my-journey", "/confession", "/sacraments", "/adoration", "/rosary", "/pray", "/bible", "/catechism", "/rule-of-life", "/daily-examen", "/morning-prayer", "/daily-examen/nightly"]) {
      const response = await page.request.get(base + path);
      assert.ok(response.ok(), `${path}: ${response.status()}`);
    }
    await page.goto(`${base}/morning-prayer`);
    await page.getByRole("heading", { name: "Sign of the Cross", exact: true }).waitFor();
    await page.getByRole("navigation", { name: "Morning prayer navigation" }).getByRole("button", { name: "Continue", exact: true }).click();
    await page.getByRole("heading", { name: "Offering of Indulgences", exact: true }).waitFor();
    await page.getByRole("button", { name: "Previous", exact: true }).click();
    await page.getByRole("heading", { name: "Sign of the Cross", exact: true }).waitFor();
    await page.goto(`${base}/daily-examen/nightly`);
    await page.getByRole("button", { name: "Pray without journaling", exact: true }).click();
    const firstExamenHeading = await page.locator("h1, h2").allTextContents();
    await page.getByRole("button", { name: "Continue", exact: true }).click();
    assert.notDeepEqual(await page.locator("h1, h2").allTextContents(), firstExamenHeading);
    await page.getByRole("button", { name: "Back", exact: true }).click();
    assert.deepEqual(await page.locator("h1, h2").allTextContents(), firstExamenHeading);
    assert.deepEqual(errors, []);
    await c.close();
    console.log("PASS: 11 journey/help categories, optional writing, Back/focus, cross-route memory, explicit draft/history saves and scoped deletion, seven defense days, ten resource dialogs/Escape focus, discernment suggestions/filters, session-only appearance settings, corrupt/future/denied storage, finish, print, responsive/reduced motion, response isolation and existing-tool smoke checks.");
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
