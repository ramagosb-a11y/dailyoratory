/* eslint-disable @typescript-eslint/no-require-imports */
// Matches the repository's existing bundled Playwright/Edge browser-check convention.
const { chromium } = require(process.env.ARMOR_PLAYWRIGHT_PATH || "C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.ARMOR_BASE_URL || "http://127.0.0.1:3012";
const marker = "SYNTHETIC_ARMOR_CONCERN_7294";

(async () => {
  const { armorJourneys, armorStruggles, armorPieces, scripturePassages } = await import("../src/data/armorOfGod.ts");
  fs.mkdirSync("output/playwright/armor-of-god", { recursive: true });
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const errors = [], traffic = [];
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  await context.route("**/*", route => {
    const request = route.request();
    traffic.push(request.url() + (request.postData() || ""));
    return new URL(request.url()).origin === base ? route.continue() : route.abort();
  });
  const page = await context.newPage();
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => { if (/hydration|hydrating|did not match|server rendered HTML/i.test(message.text())) errors.push(message.text()); });
  page.setDefaultTimeout(20000);
  const button = name => page.getByRole("button", { name, exact: true });
  const heading = name => page.getByRole("heading", { name, exact: true });
  const nav = page.getByRole("navigation", { name: "Armor of God experiences", exact: true });
  const navigate = name => nav.getByRole("button", { name, exact: true }).click();
  const noOverflow = async () => assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), "no horizontal overflow");
  const groupFor = id => page.locator(`#armor-group-${id}`);
  async function openGroup(journey) {
    const group = groupFor(journey.id);
    if (!await group.isVisible()) await button(journey.title).click();
    return group;
  }
  try {
    const response = await page.goto(`${base}/armor-of-god`);
    assert.equal(response.status(), 200);
    await heading("The Armor of God").waitFor();
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), "https://dailyoratory.faith/armor-of-god");
    assert.match(await page.title(), /Catholic Prayer & Spiritual Strength/);
    assert.equal(await page.locator("h1").count(), 1);
    const serverHtml = await response.text();
    assert.ok(serverHtml.includes("Every day brings moments that test our peace"), "intro is server-rendered");
    assert.ok(serverHtml.includes("breastplate of justice"), "Scripture is server-rendered");
    const sitemap = await context.request.get(`${base}/sitemap.xml`);
    assert.ok((await sitemap.text()).includes("https://dailyoratory.faith/armor-of-god"), "public route is in sitemap");
    await noOverflow();
    await page.screenshot({ path: "output/playwright/armor-of-god/home-mobile.png", fullPage: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.screenshot({ path: "output/playwright/armor-of-god/home-desktop.png", fullPage: true });
    await button("Use light appearance").click();
    await page.screenshot({ path: "output/playwright/armor-of-god/home-light.png", fullPage: true });
    await button("Use dark appearance").click();
    await page.setViewportSize({ width: 390, height: 844 });
    await navigate("Surrender");
    await page.getByLabel("What concern are you carrying today?", { exact: true }).fill(marker);
    await navigate("Welcome");
    await button("Put On the Armor").click();
    await button("Begin My Guided Prayer →").click();
    assert.match(await page.getByRole("status").innerText(), /at least one/);
    const queue = [armorStruggles[0], armorStruggles.find(item => item.journeyId === "temptation"), armorStruggles.find(item => item.journeyId === "trials")];
    for (const item of queue) {
      await openGroup(armorJourneys.find(journey => journey.id === item.journeyId));
      await groupFor(item.journeyId).getByRole("button", { name: item.title, exact: false }).click();
    }
    await openGroup(armorJourneys[0]);
    await groupFor("peace").getByRole("button", { name: armorStruggles[1].title, exact: false }).click({ force: true });
    assert.match(await page.getByRole("status").innerText(), /up to three/);
    assert.equal(await page.getByRole("complementary", { name: "Selected situations" }).getByRole("listitem").count(), 3);
    await noOverflow();
    await page.screenshot({ path: "output/playwright/armor-of-god/selector-mobile.png", fullPage: true });
    await button("Begin My Guided Prayer →").click();
    for (let i = 0; i < queue.length; i++) {
      await heading("Recognize").waitFor();
      assert.equal(await heading("Recognize").evaluate(el => document.activeElement === el), true);
      assert.equal(await page.locator("[aria-label='Prayer stages']").getByRole("listitem", { name: "5. Live the Word", exact: true }).count(), 1);
      if (i === 0) {
        await button("Continue →").click();
        await heading("Scripture").waitFor();
        await navigate("Welcome");
        await button("Resume my prayer →").click();
        await heading("Scripture").waitFor();
        await button("Back").click();
        await heading("Recognize").waitFor();
      }
      for (let stage = 0; stage < 4; stage++) await button("Continue →").click();
      await heading("Live the Word").waitFor();
      await button("Receive My Daily Armor Card").click();
      await page.getByRole("region", { name: `Daily Armor Card: ${queue[i].title}`, exact: true }).waitFor();
      assert.equal(await page.getByRole("region", { name: `Daily Armor Card: ${queue[i].title}`, exact: true }).locator("blockquote").innerText(), scripturePassages[queue[i].scriptureReference].text);
      await button(i < queue.length - 1 ? "Pray through my next situation →" : "Finish my prayer →").click();
    }
    await heading("Go forward in peace.").waitFor();
    assert.equal(await page.getByRole("region", { name: /^Daily Armor Card:/ }).count(), 3);

    // Native sharing includes only the public card fields, cancellation is harmless.
    await page.evaluate(() => Object.defineProperty(navigator, "share", { configurable: true, value: async payload => { window.__armorShare = payload; } }));
    await button("Share").first().click();
    const shared = await page.evaluate(() => window.__armorShare);
    assert.match(shared.text, /Worry/);
    assert.ok(shared.text.includes(scripturePassages[queue[0].scriptureReference].text));
    assert.match(shared.text, /Douay-Rheims 1899/);
    assert.ok(!shared.text.includes(marker));
    await page.evaluate(() => Object.defineProperty(navigator, "share", { configurable: true, value: async () => { throw new DOMException("Canceled", "AbortError"); } }));
    await button("Share").first().click();
    assert.match(await page.getByRole("status").first().innerText(), /canceled/);
    await page.evaluate(() => Object.defineProperty(navigator, "share", { configurable: true, value: undefined }));
    await button("Share").first().click();
    await page.getByLabel("Card text", { exact: true }).waitFor();
    await page.evaluate(() => Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async () => { throw new Error("denied"); } } }));
    await button("Copy card text").click();
    assert.match(await page.getByRole("status").first().innerText(), /Copy is unavailable/);
    await page.evaluate(() => Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async text => { window.__armorClipboard = text; } } }));
    await button("Copy card text").click();
    assert.ok(!(await page.evaluate(() => window.__armorClipboard)).includes(marker));
    await page.emulateMedia({ media: "print" });
    await page.evaluate(() => { window.print = () => {}; });
    await button("Save My Card").first().click({ force: true });
    assert.equal(await page.locator("[data-armor-print-root]").count(), 1);
    assert.equal(await page.locator("[data-armor-print-root] h4").innerText(), queue[0].title);
    assert.ok(!await page.locator("[data-armor-print-root]").innerText().then(text => text.includes(queue[1].title)));
    await page.pdf({ path: "output/playwright/armor-of-god/card.pdf", format: "A4" });
    await page.evaluate(() => window.dispatchEvent(new Event("afterprint")));
    await page.emulateMedia({ media: "screen" });
    await button("Begin Another Journey").click();

    // Every situation is exercised with its actual verse, armor application, prayer and action.
    for (const item of armorStruggles) {
      const journey = armorJourneys.find(candidate => candidate.id === item.journeyId);
      await openGroup(journey);
      await groupFor(item.journeyId).getByRole("button", { name: item.title, exact: false }).click();
      await button("Begin My Guided Prayer →").click();
      await heading("Recognize").waitFor();
      assert.ok((await page.locator("main").innerText()).includes(item.reflection));
      await button("Continue →").click();
      assert.ok((await page.locator("blockquote").innerText()).includes(scripturePassages[item.scriptureReference].text));
      await button("Continue →").click();
      assert.ok((await page.locator("main").innerText()).includes(item.armorApplication));
      for (const armorId of item.armorIds) {
        const piece = armorPieces.find(candidate => candidate.id === armorId);
        assert.ok((await page.locator("main").innerText()).includes(scripturePassages[piece.scriptureReference].text), `embedded armor verse: ${piece.id}`);
      }
      if (item.id === queue[0].id) await page.screenshot({ path: "output/playwright/armor-of-god/armor-guidance-mobile.png", fullPage: true });
      await button("Continue →").click();
      assert.ok((await page.locator("main").innerText()).includes(item.prayer));
      await button("Continue →").click();
      assert.ok((await page.locator("main").innerText()).includes(item.dailyAction));
      await button("Receive My Daily Armor Card").click();
      await button("Finish my prayer →").click();
      await button("Begin Another Journey").click();
    }
    // A two-situation queue retains removal and selection order too.
    await openGroup(armorJourneys[0]);
    for (const item of armorStruggles.slice(0, 3)) await groupFor("peace").getByRole("button", { name: item.title, exact: false }).click();
    await button(`Remove ${armorStruggles[1].title}`).click();
    await button("Begin My Guided Prayer →").click();
    for (const item of [armorStruggles[0], armorStruggles[2]]) {
      await heading(item.title).waitFor();
      for (let stage = 0; stage < 4; stage++) await button("Continue →").click();
      await button("Receive My Daily Armor Card").click();
      await button(item === armorStruggles[0] ? "Pray through my next situation →" : "Finish my prayer →").click();
    }
    await heading("Go forward in peace.").waitFor();
    assert.equal(await page.getByRole("region", { name: /^Daily Armor Card:/ }).count(), 2);
    await navigate("The six pieces");
    const armorGroup = page.getByRole("group", { name: "Choose an armor piece" });
    for (const piece of armorPieces) {
      await armorGroup.getByRole("button", { name: piece.name, exact: false }).click();
      await heading(piece.name).waitFor();
      assert.equal(await page.locator("blockquote").innerText(), scripturePassages[piece.scriptureReference].text);
      assert.equal(await armorGroup.getByRole("button", { name: piece.name, exact: false }).getAttribute("aria-pressed"), "true");
    }
    await page.getByText("Stand firm in the Lord. Go forward in peace.", { exact: true }).waitFor();
    await noOverflow();
    await page.screenshot({ path: "output/playwright/armor-of-god/explorer-mobile.png", fullPage: true });
    await navigate("Daily prayers");
    for (const [mode, total] of [["Morning", 6], ["Midday", 5], ["Evening", 5]]) {
      await page.getByRole("group", { name: "Choose a daily prayer" }).getByRole("button", { name: mode, exact: true }).click();
      if (mode === "Morning") assert.equal(await page.locator("blockquote").innerText(), scripturePassages[armorPieces[0].scriptureReference].text);
      for (let i = 0; i < total - 1; i++) await button("Continue").click();
      await button("Closing prayer").click();
      await heading("Place this day in His hands").waitFor();
      await button("Pray Again").click();
    }
    await navigate("Silence");
    await page.clock.install();
    await button("1 minute").click();
    await button("Begin silence").click();
    await page.clock.fastForward(12000);
    assert.equal(await page.getByRole("timer").innerText(), "0:48");
    await button("Pause silence").click();
    await page.clock.fastForward(10000);
    assert.equal(await page.getByRole("timer").innerText(), "0:48");
    await button("Restart timer").click();
    assert.equal(await page.getByRole("timer").innerText(), "1:00");
    await button("Begin silence").click();
    await page.clock.fastForward(61000);
    assert.equal(await page.getByRole("timer").innerText(), "0:00");
    assert.match(await page.getByRole("status").innerText(), /complete/);
    for (const duration of ["30 seconds", "3 minutes", "5 minutes"]) await button(duration).click();

    await navigate("Surrender");
    assert.equal(await heading("Surrender to Christ").evaluate(el => el === document.activeElement), true);
    await page.getByLabel("What concern are you carrying today?", { exact: true }).fill(marker);
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.getByLabel("What concern are you carrying today?", { exact: true }).isVisible(), false);
    await page.emulateMedia({ media: "screen" });
    await button("Place It in God's Hands").click();
    assert.ok(!(await page.content()).includes(marker), "private marker erased from DOM");
    await page.screenshot({ path: "output/playwright/armor-of-god/surrender-mobile.png", fullPage: true });
    await button("Begin again").click();
    assert.equal(await page.getByLabel("What concern are you carrying today?", { exact: true }).inputValue(), "");
    await button("Place It in God's Hands").click();
    await heading("Remain with the Lord.").waitFor();
    await button("Begin again").click();
    await page.getByLabel("What concern are you carrying today?", { exact: true }).fill(marker);
    await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent("pagehide", { persisted: true })));
    await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent("pageshow", { persisted: true })));
    assert.equal(await page.getByLabel("What concern are you carrying today?", { exact: true }).inputValue(), "");
    await page.getByLabel("What concern are you carrying today?", { exact: true }).fill(marker);
    await navigate("Welcome");
    await navigate("Surrender");
    assert.equal(await page.getByLabel("What concern are you carrying today?", { exact: true }).inputValue(), "");
    const state = await page.evaluate(() => ({ local: JSON.stringify(localStorage), session: JSON.stringify(sessionStorage), queue: JSON.stringify(window.dataLayer || []), url: location.href }));
    assert.ok(!JSON.stringify(state).includes(marker));
    assert.ok(!traffic.some(request => request.includes(marker)));
    await page.reload();
    await heading("The Armor of God").waitFor();
    assert.equal(await button("Resume my prayer →").count(), 0);
    await page.setViewportSize({ width: 320, height: 800 });
    await noOverflow();
    await page.evaluate(() => document.documentElement.style.fontSize = "200%");
    await noOverflow();
    await page.evaluate(() => document.documentElement.style.fontSize = "");
    await page.keyboard.press("Tab");
    assert.ok(await page.evaluate(() => document.activeElement !== document.body));
    const regression = [];
    for (const route of ["/rosary/visual-meditation", "/adoration/companion", "/morning-prayer", "/daily-examen/nightly", "/way-of-cross", "/strongholds"]) {
      const result = await context.request.get(`${base}${route}`);
      assert.equal(result.status(), 200, route);
      regression.push({ route, status: result.status() });
    }
    const discovery = await context.newPage();
    discovery.on("pageerror", error => errors.push(error.message));
    await discovery.setViewportSize({ width: 1440, height: 1000 });
    await discovery.goto(base);
    const desktopNav = discovery.getByRole("navigation", { name: "Primary navigation", exact: true });
    await desktopNav.getByRole("button", { name: "Pray", exact: true }).click();
    assert.equal(await desktopNav.getByRole("link", { name: "The Armor of God", exact: true }).getAttribute("href"), "/armor-of-god");
    await discovery.keyboard.press("Escape");
    await discovery.setViewportSize({ width: 390, height: 900 });
    await discovery.getByRole("button", { name: "Open Daily Oratory menu", exact: true }).click();
    const mobileNav = discovery.getByRole("navigation", { name: "Mobile navigation", exact: true });
    await mobileNav.getByRole("button", { name: "Pray", exact: true }).click();
    await mobileNav.getByRole("link", { name: "The Armor of God", exact: true }).click();
    await discovery.waitForURL(`${base}/armor-of-god`);
    await discovery.goto(`${base}/pray`);
    assert.equal(await discovery.getByRole("link", { name: "Put On the Armor", exact: true }).getAttribute("href"), "/armor-of-god");
    await discovery.close();
    assert.deepEqual(errors, []);
    const result = { journeysExercised: 31, queueSizesExercised: [1, 2, 3], armorPieces: 6, dailyPrayers: 3, timers: "pause/restart/background advance/finish", surrender: "empty/submit/exit/history/reload", export: "native/cancel/fallback/clipboard-success-and-denied/isolated-PDF", responsive: "390/1440/320px, 200% text, reduced motion, dark/light", seo: "server-rendered intro/Scripture, canonical, title, sitemap", discovery: "desktop Pray menu, mobile Pray menu, prayer tools directory", regression, errors, privateMarkerInRequests: false };
    fs.writeFileSync("output/playwright/armor-of-god/results.json", JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
