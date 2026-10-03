import { legacyRedirects } from "../data/redirects";

// Exact retired routes must not compete with their canonical destinations.
const REDIRECTED_SITEMAP_PATHS = new Set([
  "/reflections",
  ...legacyRedirects.filter((rule) => !rule.source.includes(":")).map((rule) => rule.source),
]);

// Keep aligned with route-level noindex metadata and audited personal utility/form pages.
const NON_INDEXABLE_SITEMAP_PATHS = new Set([
  "/fasting-retreat",
  "/rosary/visual-meditation",
  "/prayers/litany-of-saint-darby",
  "/confession/examination/print",
  "/prayer-intentions/submit",
  "/adoration/submit-stream",
  "/reflections/reading-and-reflections",
  "/rule-of-life/builder",
  "/rule-of-life/examen",
  "/rule-of-life/my-rule",
  "/rule-of-life/print",
  "/pathways/start",
  "/pathways/my-pathways",
  "/pathways/recommended",
  "/pathways/settings",
  "/sacraments/my-preparation",
  "/sacraments/print",
  "/virtue-tracker",
  "/virtue-tracker/dashboard",
  "/virtue-tracker/check-in",
  "/virtue-tracker/patterns",
  "/virtue-tracker/confession-prep",
  "/virtue-tracker/settings",
  "/saints/companions",
  "/saints/settings",
  "/liturgical-living/settings",
]);

export function isIndexableSitemapPath(pathname: string): boolean {
  return !NON_INDEXABLE_SITEMAP_PATHS.has(pathname) && !REDIRECTED_SITEMAP_PATHS.has(pathname);
}
