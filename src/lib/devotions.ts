import { devotionCategories } from "@/data/devotionCategories";
import { devotions, devotionRecommendationNeeds } from "@/data/devotions";
import { trustedDevotionLinks } from "@/data/trustedDevotionLinks";
import type {
  Devotion,
  DevotionCategory,
  DevotionFilterState,
  DevotionRecommendationNeed,
  DevotionSortOption,
  TrustedDevotionLink,
} from "@/types/devotions";

export function getDevotions() {
  return [...devotions].sort((a, b) => a.sortOrder - b.sortOrder || a.title.localeCompare(b.title));
}

export function getApprovedDevotions() {
  return getDevotions().filter(
    (devotion) => devotion.status === "approved" && devotion.reviewStatus === "approved" && devotion.copyrightStatus !== "do-not-publish",
  );
}

export function getFeaturedDevotions() {
  return getApprovedDevotions().filter((devotion) => devotion.featured);
}

export function getDevotionOfMonth() {
  return getApprovedDevotions().find((devotion) => devotion.devotionOfMonth) ?? getFeaturedDevotions()[0];
}

export function getDevotionBySlug(slug: string) {
  return getApprovedDevotions().find((devotion) => devotion.slug === slug);
}

export function getDevotionsByCategory(categorySlug: string) {
  const category = getDevotionCategoryBySlug(categorySlug);
  if (!category) return [];
  return getApprovedDevotions().filter((devotion) => devotion.categoryId === category.id);
}

export function getRelatedDevotions(devotion: Devotion) {
  const byId = new Map(getApprovedDevotions().map((item) => [item.id, item]));
  return devotion.relatedDevotionIds.map((id) => byId.get(id)).filter((item): item is Devotion => Boolean(item));
}

export function getTrustedLinksForDevotion(devotionId: string) {
  return trustedDevotionLinks
    .filter((link) => link.devotionId === devotionId)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getDevotionCategories() {
  return [...devotionCategories].sort((a, b) => a.sortOrder - b.sortOrder || a.title.localeCompare(b.title));
}

export function getDevotionCategoryBySlug(slug: string) {
  return getDevotionCategories().find((category) => category.slug === slug);
}

export function getRecommendedDevotionsByNeed(needSlug: string) {
  const need = devotionRecommendationNeeds.find((entry) => entry.slug === needSlug);
  if (!need) return { need: undefined, devotions: [] as Devotion[] };
  const byId = new Map(getApprovedDevotions().map((item) => [item.id, item]));
  return {
    need,
    devotions: need.suggestedDevotionIds.map((id) => byId.get(id)).filter((item): item is Devotion => Boolean(item)),
  };
}

export function filterDevotions(filters: DevotionFilterState) {
  const query = (filters.q ?? "").trim().toLowerCase();

  return getApprovedDevotions().filter((devotion) => {
    const category = devotionCategories.find((item) => item.id === devotion.categoryId);
    const searchable = [
      devotion.title,
      devotion.shortDescription,
      devotion.longDescription,
      ...devotion.spiritualFruits,
      ...devotion.theologicalFocus,
      ...devotion.liturgicalSeason,
      ...devotion.spiritualNeedTags,
      devotion.devotionType,
      category?.title ?? "",
    ]
      .join(" ")
      .toLowerCase();

    if (query && !searchable.includes(query)) return false;
    if (filters.category && category?.slug !== filters.category) return false;
    if (filters.beginnerFriendly && devotion.beginnerFriendly !== filters.beginnerFriendly) return false;
    if (filters.liturgicalSeason && !devotion.liturgicalSeason.includes(filters.liturgicalSeason)) return false;
    if (filters.spiritualNeed && !devotion.spiritualNeedTags.includes(filters.spiritualNeed)) return false;
    if (filters.relatedSacrament && !devotion.relatedSacraments.includes(filters.relatedSacrament)) return false;
    if (filters.devotionType && devotion.devotionType !== filters.devotionType) return false;
    if (filters.marian && category?.slug !== "marian") return false;
    if (filters.eucharistic && category?.slug !== "eucharistic") return false;
    if (filters.reparation && !devotion.spiritualFruits.some((fruit) => ["reparation", "repentance"].includes(fruit))) return false;
    if (filters.familyFriendly && !devotion.familyFriendly) return false;
    if (filters.timeNeeded) {
      const normalized = devotion.timeNeeded.toLowerCase();
      if (!normalized.includes(filters.timeNeeded.toLowerCase())) return false;
    }

    return true;
  });
}

export function sortDevotions(items: Devotion[], sort: DevotionSortOption) {
  const list = [...items];

  switch (sort) {
    case "alphabetical":
      return list.sort((a, b) => a.title.localeCompare(b.title));
    case "beginner-friendly":
      return list.sort((a, b) => beginnerRank(a.beginnerFriendly) - beginnerRank(b.beginnerFriendly) || a.title.localeCompare(b.title));
    case "time-needed":
      return list.sort((a, b) => timeRank(a.timeNeeded) - timeRank(b.timeNeeded) || a.title.localeCompare(b.title));
    case "seasonal":
      return list.sort((a, b) => a.liturgicalSeason.join(",").localeCompare(b.liturgicalSeason.join(",")) || a.title.localeCompare(b.title));
    case "featured":
    default:
      return list.sort((a, b) => Number(b.featured) - Number(a.featured) || a.sortOrder - b.sortOrder || a.title.localeCompare(b.title));
  }
}

export function getRecommendationNeeds() {
  return [...devotionRecommendationNeeds];
}

export function getRelatedCategoryForDevotion(devotion: Devotion) {
  return devotionCategories.find((item) => item.id === devotion.categoryId);
}

export function getDevotionsGoogleSheetsSchema() {
  return {
    sheetName: "Daily Oratory Devotions Admin",
    tabs: [
      { name: "Config", headers: ["Key", "Value", "Notes"] },
      {
        name: "Devotions",
        headers: [
          "Devotion ID",
          "Title",
          "Slug",
          "Category ID",
          "Short Description",
          "Long Description",
          "Spiritual Fruits",
          "Theological Focus",
          "How To Begin",
          "When To Practice",
          "Suggested Rhythm",
          "Time Needed",
          "Beginner Friendly",
          "Liturgical Season",
          "Related Sacraments",
          "Related Daily Oratory Links",
          "Related Devotion IDs",
          "Trusted Link IDs",
          "Prayer Guide",
          "Common Misunderstandings",
          "Source Notes",
          "Copyright Status",
          "Review Status",
          "Featured",
          "Devotion Of Month",
          "Status",
          "Sort Order",
          "Created At",
          "Updated At",
          "Notes",
        ],
      },
      {
        name: "Devotion_Categories",
        headers: ["Category ID", "Title", "Slug", "Description", "Icon Name", "Sort Order", "Featured", "Status", "Updated At"],
      },
      {
        name: "Trusted_Devotion_Links",
        headers: ["Link ID", "Devotion ID", "Label", "URL", "Source Name", "Source Type", "Description", "Official", "Status", "Sort Order", "Updated At", "Notes"],
      },
      {
        name: "Devotion_Recommendations",
        headers: ["Need ID", "Title", "Slug", "Description", "Suggested Devotion IDs", "Related Links", "Status", "Sort Order", "Updated At"],
      },
      { name: "Export_Log", headers: ["Timestamp", "Action", "Count", "Warnings", "Notes"] },
      { name: "Change_Log", headers: ["Timestamp", "Editor", "Record ID", "Field", "Old Value", "New Value", "Notes"] },
      { name: "Copyright_Review", headers: ["Review ID", "Devotion ID", "Title", "Issue", "Copyright Status", "Review Status", "Reviewed By", "Reviewed At", "Notes"] },
    ],
  };
}

function beginnerRank(value: Devotion["beginnerFriendly"]) {
  if (value === "yes") return 0;
  if (value === "moderate") return 1;
  return 2;
}

function timeRank(value: string) {
  const normalized = value.toLowerCase();
  if (normalized.includes("2-5")) return 0;
  if (normalized.includes("5-10")) return 1;
  if (normalized.includes("10-15")) return 2;
  if (normalized.includes("15-60")) return 3;
  if (normalized.includes("20-30")) return 4;
  if (normalized.includes("20-45")) return 5;
  if (normalized.includes("monthly")) return 6;
  if (normalized.includes("variable")) return 7;
  return 8;
}
