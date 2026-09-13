/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const { chromium } = require("C:/Users/brent/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const baseUrl = "http://localhost:3000";
const categoryLabels = ["Pray", "Mass & Adoration", "Learn", "External Resources"];

function normalizeDestination(rawHref) {
  const url = new URL(rawHref, baseUrl);
  return url.origin === baseUrl ? `${url.pathname}${url.search}` : url.href;
}

(async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const errors = [];

  try {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    page.on("pageerror", (error) => errors.push(error.message));
    page.setDefaultTimeout(10_000);

    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(baseUrl);
    await page.getByRole("heading", { name: "Daily Oratory", level: 1 }).waitFor();

    const homepageDestinations = new Set(
      await page.locator("main a[href]").evaluateAll((links) =>
        links.map((link) => link.href),
      ),
    );
    const normalizedHomepageDestinations = new Set(
      Array.from(homepageDestinations, normalizeDestination),
    );

    assert.equal(normalizedHomepageDestinations.size, 27, "Homepage must expose 27 unique content destinations");
    assert.equal(
      Array.from(normalizedHomepageDestinations).filter((href) => href.startsWith("http")).length,
      7,
      "Homepage must expose seven external destinations",
    );

    const primaryNavigation = page.getByRole("navigation", { name: "Primary navigation" });
    const desktopDestinations = new Set();
    assert.equal(await primaryNavigation.getByRole("button").count(), 4);
    assert.equal(await primaryNavigation.locator("a[href]").count(), 0, "Top-level desktop categories must not navigate");

    for (const label of categoryLabels) {
      const button = primaryNavigation.getByRole("button", { name: label, exact: true });
      await button.click();
      assert.equal(await button.getAttribute("aria-expanded"), "true");
      const links = await primaryNavigation.locator("a[href]").evaluateAll((items) =>
        items.map((item) => ({
          href: item.href,
          target: item.getAttribute("target"),
          rel: item.getAttribute("rel"),
        })),
      );
      for (const link of links) {
        desktopDestinations.add(normalizeDestination(link.href));
        if (link.href.startsWith("http") && !link.href.startsWith(baseUrl)) {
          assert.equal(link.target, "_blank");
          assert.match(link.rel ?? "", /noopener/);
          assert.match(link.rel ?? "", /noreferrer/);
        }
      }
    }

    assert.deepEqual(
      [...desktopDestinations].sort(),
      [...normalizedHomepageDestinations].sort(),
      "Desktop menu destinations must exactly match homepage destinations",
    );

    const prayButton = primaryNavigation.getByRole("button", { name: "Pray", exact: true });
    await prayButton.click();
    await page.screenshot({ path: "output/playwright/home-menu-desktop-1440.png" });
    await page.keyboard.press("Escape");
    assert.equal(await prayButton.getAttribute("aria-expanded"), "false");
    assert.equal(await page.evaluate(() => document.activeElement?.textContent?.trim()), "Pray");

    for (const width of [360, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(baseUrl);
      assert(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1),
        `Page-level horizontal overflow at ${width}px`,
      );
    }

    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto(baseUrl);
    const mobileMenuButton = page.getByRole("button", { name: "Open Daily Oratory menu" });
    await mobileMenuButton.click();
    const mobileNavigation = page.getByRole("navigation", { name: "Mobile navigation" });
    await mobileNavigation.waitFor();

    const mobileDestinations = new Set();
    for (const label of categoryLabels) {
      const button = mobileNavigation.getByRole("button", { name: label, exact: true });
      assert((await button.boundingBox()).height >= 44, `${label} mobile target is shorter than 44px`);
      await button.click();
      assert.equal(await button.getAttribute("aria-expanded"), "true");
      if (label === "Pray") {
        await page.screenshot({ path: "output/playwright/home-menu-mobile-390.png" });
      }
      const links = await mobileNavigation.locator("a[href]").evaluateAll((items) =>
        items.map((item) => item.href),
      );
      links.forEach((href) => mobileDestinations.add(normalizeDestination(href)));
    }

    assert.deepEqual(
      [...mobileDestinations].sort(),
      [...normalizedHomepageDestinations].sort(),
      "Mobile menu destinations must exactly match homepage destinations",
    );
    await page.keyboard.press("Escape");
    assert.equal(await page.getByRole("navigation", { name: "Mobile navigation" }).count(), 0);
    await page.waitForFunction(() => document.activeElement?.getAttribute("aria-label") === "Open Daily Oratory menu");
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute("aria-label")), "Open Daily Oratory menu");

    assert.deepEqual(errors, []);
    console.log(JSON.stringify({
      categories: 4,
      uniqueDestinations: normalizedHomepageDestinations.size,
      internalDestinations: 20,
      externalDestinations: 7,
      widths: [360, 390, 768, 1024, 1440],
      runtimeErrors: errors,
    }));
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
