import test from "node:test";
import assert from "node:assert/strict";
import {
  getAnalyticsPagePath,
  getSafeCampaignAttribution,
  isSensitiveAnalyticsPath,
  sanitizeAnalyticsEventParams,
  sanitizeAnalyticsUrl,
} from "./analyticsPrivacy.ts";
import { isIndexableSitemapPath } from "./sitemapEligibility.ts";

test("page tracking drops query strings and fragments and redacts public intention slugs", () => {
  assert.equal(getAnalyticsPagePath("/library?q=private#top"), "/library");
  assert.equal(getAnalyticsPagePath("/prayer-intentions/private-family-title"), "/prayer-intentions/:slug");
  assert.equal(sanitizeAnalyticsUrl("https://dailyoratory.faith/prayer-intentions/private?email=a%40b.com#detail"),
    "https://dailyoratory.faith/prayer-intentions/:slug");
});

test("personal spiritual-tool routes are classified for path-only reporting", () => {
  assert.equal(isSensitiveAnalyticsPath("/confession/examination/review"), true);
  assert.equal(isSensitiveAnalyticsPath("/prayer-intentions/submit"), true);
  assert.equal(isSensitiveAnalyticsPath("/reflections/reading-and-reflections"), true);
  assert.equal(isSensitiveAnalyticsPath("/confession/examination-companion"), true);
  assert.equal(isSensitiveAnalyticsPath("/adoration/companion"), true);
  assert.equal(isSensitiveAnalyticsPath("/pray"), true);
  assert.equal(isSensitiveAnalyticsPath("/formation"), true);
  assert.equal(isSensitiveAnalyticsPath("/ocia"), true);
  assert.equal(isSensitiveAnalyticsPath("/body-soul-spirit"), true);
  assert.equal(isSensitiveAnalyticsPath("/relics"), true);
  assert.equal(isSensitiveAnalyticsPath("/pathways/recommended"), true);
  assert.equal(isSensitiveAnalyticsPath("/saints/confirmation"), true);
  assert.equal(isSensitiveAnalyticsPath("/library/catechism"), false);
});

test("campaign attribution retains only bounded safe source and medium", () => {
  assert.deepEqual(
    getSafeCampaignAttribution("?utm_source=parish&utm_medium=email&utm_term=private+need&utm_campaign=contains%20space"),
    { campaign_source: "parish", campaign_medium: "email" },
  );
  assert.deepEqual(getSafeCampaignAttribution("?utm_source=alice&utm_medium=EMAIL"),
    { campaign_medium: "email" });
});

test("event fields are limited, URLs are stripped, and private values are removed", () => {
  assert.deepEqual(
    sanitizeAnalyticsEventParams({
      page_path: "/library?q=private#top",
      destination: "https://example.org/resource?email=person%40example.com",
      query_length: 12,
      intention: "private request",
      free_text: "journal entry",
      has_contact_email: true,
    }),
    {
      page_path: "/library",
      destination: "https://example.org/resource",
      query_length: 12,
    },
  );
});

test("sitemap excludes noindex and personal utility routes while preserving public content", () => {
  for (const path of [
    "/fasting-retreat", "/rosary/visual-meditation", "/confession/examination/print",
    "/reflections/reading-and-reflections", "/rule-of-life/my-rule", "/virtue-tracker/check-in",
    "/rule-of-life/examen", "/pathways/recommended",
    "/saints/companions", "/liturgical-living/settings", "/prayer-intentions/submit", "/adoration/submit-stream",
  ]) assert.equal(isIndexableSitemapPath(path), false, `${path} should be omitted`);

  for (const path of ["/", "/rosary", "/library/catechism", "/prayer-intentions/approved-intention"])
    assert.equal(isIndexableSitemapPath(path), true, `${path} should remain eligible`);
});
