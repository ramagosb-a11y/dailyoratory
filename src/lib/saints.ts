import { patronSaints } from "@/data/patronSaints";
import { saintCategories } from "@/data/saintCategories";
import { saintFaqs } from "@/data/saintFaqs";
import { saintOfTheDaySeeds } from "@/data/saintOfTheDay";
import { saintReadingPlan } from "@/data/saintReadingPlan";
import { saintResources } from "@/data/saintResources";
import { saints, saintCompanionRecommendations, saintGoogleSheetsSchema, saintLifeSituationOptions, saintStateOfLifeOptions, saintTypeOptions, saintVirtueOptions } from "@/data/saints";
import { saintVirtues } from "@/data/saintVirtues";
import type { Saint, SaintCategory, SaintCompanionInput, SaintCompanionPlan, SaintCompanionRecommendation, SaintCompanionType, SaintFinderPreferences, SaintLifeSituation, SaintOfDay, SaintRecord, StateOfLife } from "@/types/saints";

export const saintLinks = [
  { label: "Library", href: "/saints" },
  { label: "Saint Companion", href: "/saints/finder" },
  { label: "Calendar", href: "/saints/calendar" },
  { label: "Patron Saints", href: "/saints/patron-saints" },
  { label: "Virtues", href: "/saints/virtues" },
  { label: "Reading Plan", href: "/saints/reading-plan" },
  { label: "Confirmation", href: "/saints/confirmation" },
  { label: "Saint of the Day", href: "/saints/saint-of-the-day" },
] as const;

export function getSaints() {
  return [...saints].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getApprovedSaints() {
  return getSaints().filter((saint) => saint.status === "published");
}

export const getPublishedSaints = getApprovedSaints;

export function getFeaturedSaints() {
  return getApprovedSaints().filter((saint) => saint.featured);
}

export function getSaintBySlug(slug: string) {
  return getApprovedSaints().find((saint) => saint.slug === slug);
}

export function getSaintById(id: string) {
  return getApprovedSaints().find((saint) => saint.id === id);
}

export function getSaintsByCategory(categorySlug: string) {
  const category = saintCategories.find((item) => item.slug === categorySlug);
  if (!category) return [];
  const saintIds = new Set(category.saintIds);
  return getApprovedSaints().filter((saint) => saintIds.has(saint.id));
}

export function getSaintsByVirtue(virtueSlug: string) {
  const virtue = saintVirtues.find((item) => item.slug === virtueSlug);
  if (!virtue) return [];
  const saintIds = new Set(virtue.exampleSaintIds);
  return getApprovedSaints().filter(
    (saint) => saintIds.has(saint.id) || saint.keyVirtues.some((item) => slugify(item) === virtueSlug),
  );
}

export function getSaintsByPatronage(patronageSlug: string) {
  const patronage = patronSaints.find((item) => item.slug === patronageSlug);
  if (!patronage) return [];
  const saintIds = new Set(patronage.saintIds);
  return getApprovedSaints().filter((saint) => saintIds.has(saint.id));
}

export function getSaintsByFeastDay(date: Date | string) {
  const monthDay = toMonthDay(date);
  return getApprovedSaints().filter((saint) => saint.feastDay === monthDay);
}

export function getSaintOfTheDay(date = new Date()) {
  const sameDay = getSaintsByFeastDay(date);
  const saint = sameDay[0] ?? null;
  if (!saint) return null;
  return buildSaintOfDay(saint);
}

export function getSaintCompanionFallback() {
  return {
    title: "Today's Saint Companion",
    subtitle: "A holy witness for today's prayer, virtue, and daily life.",
    text: "The saints remind us that holiness is possible in every age and state of life. Explore the saints and find a companion for today's prayer and virtue.",
    links: [
      { label: "Explore the Saints", href: "/saints" },
      { label: "Find a Saint Companion", href: "/saints/finder" },
    ],
  };
}

export function getSaintVirtueForToday(saint: Saint | SaintOfDay) {
  if ("keyVirtue" in saint) return saint.keyVirtue;
  return saint.keyVirtues[0] ?? "Faithfulness";
}

export function getSaintFruitOfSpiritConnection(saint: Saint | SaintOfDay) {
  if ("fruitOfTheSpirit" in saint) return saint.fruitOfTheSpirit;
  const virtue = getSaintVirtueForToday(saint);
  return inferFruitOfSpirit(virtue);
}

export function getSaintRelatedLinks(saint: Saint | SaintOfDay) {
  if ("relatedDailyOratoryLinks" in saint) return saint.relatedDailyOratoryLinks;
  return [];
}

export function formatSaintPrayerForCopy(saint: Saint | SaintOfDay) {
  if ("shortPrayer" in saint) return saint.shortPrayer;
  return saint.prayer;
}

export function getModernSaints() {
  return getApprovedSaints().filter((saint) => saint.modernSaint);
}

export function getDoctorsOfTheChurch() {
  return getApprovedSaints().filter((saint) => saint.doctorOfChurch);
}

export function getMartyrs() {
  return getApprovedSaints().filter((saint) => saint.martyr);
}

export function getSaintCategories() {
  return [...saintCategories].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSaintVirtues() {
  return [...saintVirtues].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getPatronages() {
  return [...patronSaints].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSaintResources(saintId?: string) {
  if (!saintId) return saintResources;
  return saintResources.filter((resource) => resource.saintId === "shared" || resource.saintId === saintId);
}

export function getSaintFaqs() {
  return [...saintFaqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSaintReadingPlan() {
  return [...saintReadingPlan].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSaintCompanionRecommendations(input?: Partial<SaintCompanionInput>) {
  if (!input?.needSlug) return [...saintCompanionRecommendations];
  return saintCompanionRecommendations.filter((recommendation) => recommendation.needSlug === input.needSlug);
}

export function buildSaintCompanionPlan(input: SaintCompanionInput): SaintCompanionPlan | null {
  const recommendation = saintCompanionRecommendations.find((item) => item.needSlug === input.needSlug);
  if (!recommendation) return null;
  const primarySaint = getSaintById(recommendation.primarySaintId);
  const companionSaint = getSaintById(recommendation.companionSaintId);
  const stretchSaint = getSaintById(recommendation.stretchSaintId);
  if (!primarySaint || !companionSaint || !stretchSaint) return null;

  return {
    recommendation,
    primarySaint,
    companionSaint,
    stretchSaint,
    stateLabel: input.stateSlug ? formatStateLabel(input.stateSlug) : undefined,
    createdAt: input.createdAt ?? new Date().toISOString(),
  };
}

export function formatSaintCompanionPlanForCopy(input: SaintCompanionInput) {
  const plan = buildSaintCompanionPlan(input);
  if (!plan) return "No saint companion recommendation is available for that selection yet.";

  return [
    "Daily Oratory Saint Companion Plan",
    "",
    `Need: ${plan.recommendation.userNeed}`,
    plan.stateLabel ? `State of life: ${plan.stateLabel}` : "",
    "",
    `Primary saint: ${plan.primarySaint.name}`,
    `Why: ${plan.recommendation.explanation}`,
    `Virtue to imitate: ${plan.primarySaint.keyVirtues[0] ?? "faithfulness"}`,
    "",
    `Companion saint: ${plan.companionSaint.name}`,
    `Stretch saint: ${plan.stretchSaint.name}`,
    "",
    `Virtue practice: ${plan.recommendation.virtuePractice}`,
    `Prayer: ${plan.recommendation.prayerPrompt}`,
    "",
    "Daily Oratory links:",
    ...plan.recommendation.relatedLinks.map((link) => `- ${link.label}: ${link.href}`),
    "",
    "This guide is for prayer and formation. It does not replace parish, spiritual, or pastoral guidance.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function getRelatedSaints(saintId: string, limit = 3) {
  const saint = getSaintById(saintId);
  if (!saint) return [];
  const explicit = saint.relatedSaintIds.map((id) => getSaintById(id)).filter((item): item is Saint => Boolean(item));
  if (explicit.length) return explicit.slice(0, limit);

  return getApprovedSaints()
    .filter((candidate) => candidate.id !== saint.id)
    .map((candidate) => ({
      candidate,
      score:
        candidate.keyVirtues.filter((virtue) => saint.keyVirtues.includes(virtue)).length +
        candidate.categories.filter((category) => saint.categories.includes(category)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.candidate);
}

export function getRelatedDailyOratoryToolsForSaint(saintId: string) {
  return getSaintById(saintId)?.relatedDailyOratoryLinks ?? [];
}

export function getPatronageGroups() {
  return getPatronages().map((group) => ({
    title: group.title,
    description: group.description,
    saints: group.saintIds.map((id) => getSaintById(id)).filter((item): item is Saint => Boolean(item)),
  }));
}

export function getSaintsByFeastMonth(month: number) {
  return getApprovedSaints().filter((saint) => Number.parseInt(saint.feastDay.split("-")[0] ?? "0", 10) === month);
}

export function getUpcomingSaintFeasts(date = new Date(), limit = 6) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return getApprovedSaints()
    .map((saint) => ({
      saint,
      nextOccurrence: getNextFeastOccurrence(saint.feastDay, start),
    }))
    .sort((a, b) => a.nextOccurrence.getTime() - b.nextOccurrence.getTime() || a.saint.sortOrder - b.saint.sortOrder)
    .slice(0, limit);
}

export function getSaintFinderDefaults(): SaintFinderPreferences {
  return {
    lifeSituation: "prayer",
    virtue: "faith",
    stateOfLife: "layperson",
    saintType: "beginner",
  };
}

export function getSaintFinderOptions() {
  return {
    lifeSituations: saintLifeSituationOptions,
    virtues: saintVirtueOptions,
    statesOfLife: saintStateOfLifeOptions,
    saintTypes: saintTypeOptions,
  };
}

export function recommendSaints(preferences: SaintFinderPreferences, limit = 5) {
  return getApprovedSaints()
    .map((saint) => {
      const reasons: string[] = [];
      let score = 0;

      if (saint.lifeSituations?.includes(preferences.lifeSituation)) {
        score += 3;
        reasons.push(`A strong companion for ${formatLifeSituationLabel(preferences.lifeSituation).toLowerCase()}.`);
      }

      if (saint.keyVirtues.some((virtue) => slugify(virtue) === slugify(preferences.virtue))) {
        score += 2;
        reasons.push(`Known for ${preferences.virtue}.`);
      }

      if (saint.stateOfLife === preferences.stateOfLife) {
        score += 2;
        reasons.push(`Speaks directly to ${formatStateLabel(preferences.stateOfLife).toLowerCase()} life.`);
      }

      if (saint.saintTypes?.includes(preferences.saintType)) {
        score += 2;
        reasons.push(`A helpful ${preferences.saintType.replace("-", " ")} saint.`);
      }

      if (saint.featured) score += 1;
      if (saint.modernSaint) score += 1;

      return { saint, score, reasons };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.saint.sortOrder - b.saint.sortOrder)
    .slice(0, limit);
}

export function getSaintAdminSchemaRows() {
  const saintFields = [
    "Saint ID",
    "Name",
    "Slug",
    "Title",
    "Feast Day",
    "Feast Day Display",
    "Birth Year",
    "Death Year",
    "Century",
    "Region",
    "Country",
    "State Of Life",
    "Tradition Group",
    "Categories",
    "Patronages",
    "Key Virtues",
    "Short Description",
    "Biography",
    "Why Matters",
    "Imitate Today",
    "Prayer",
    "Scripture References",
    "Sacrament Connections",
    "Devotion Connections",
    "Related Saint IDs",
    "Related Daily Oratory Links",
    "External Resource IDs",
    "Image URL",
    "Image Alt",
    "Image Credit",
    "Image License",
    "Source Notes",
    "Canonization Status",
    "Featured",
    "Modern Saint",
    "Doctor Of Church",
    "Martyr",
    "Status",
    "Sort Order",
    "Created At",
    "Updated At",
    "Notes",
  ];

  return [
    { field: "Workbook", notes: `${saintGoogleSheetsSchema.sheetName}: ${saintGoogleSheetsSchema.tabs.join(", ")}` },
    ...saintFields.map((field) => ({
      field,
      notes: field === "Status" ? "Export approved, published content only." : "Editable in the Saints tab.",
    })),
    {
      field: "Export rules",
      notes:
        "Export only approved rows, validate slugs and URLs, confirm image credits/licenses, and do not publish rows marked do-not-publish in copyright review.",
    },
  ];
}

export function getSaintTypeLabel(value: SaintCompanionType) {
  return saintTypeOptions.find((option) => option.value === value)?.label ?? value;
}

export function getLifeSituationLabel(value: SaintLifeSituation) {
  return saintLifeSituationOptions.find((option) => option.value === value)?.label ?? value;
}

export function formatFeastDate(feastDay: string) {
  const [month, day] = feastDay.split("-").map((value) => Number.parseInt(value, 10));
  if (!month || !day) return feastDay;
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" }).format(new Date(2026, month - 1, day));
}

function toMonthDay(date: Date | string) {
  if (typeof date === "string") {
    if (/^\d{2}-\d{2}$/.test(date)) return date;
    const parts = date.split("-");
    return `${parts[1]}-${parts[2]}`;
  }

  return `${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getNextFeastOccurrence(feastDay: string, fromDate: Date) {
  const [month, day] = feastDay.split("-").map((value) => Number.parseInt(value, 10));
  const candidate = new Date(fromDate.getFullYear(), (month || 1) - 1, day || 1);

  if (candidate < fromDate) {
    candidate.setFullYear(candidate.getFullYear() + 1);
  }

  return candidate;
}

function formatStateLabel(value: string | StateOfLife) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatLifeSituationLabel(value: string) {
  return value
    .replace(/\//g, " or ")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildSaintOfDay(saint: Saint): SaintOfDay {
  const seed = saintOfTheDaySeeds.find((item) => item.saintId === saint.id);
  const relatedLinks = [
    { label: "Saint of the Day", href: "/saints/saint-of-the-day" },
    { label: "Find a Saint Companion", href: "/saints/finder" },
    ...saint.relatedDailyOratoryLinks,
  ].slice(0, 5);

  const externalResourceLinks = getSaintResources(saint.id)
    .slice(0, 2)
    .map((resource) => ({ label: resource.title, href: resource.url }));

  return {
    id: saint.id,
    name: saint.name,
    slug: saint.slug,
    feastDay: saint.feastDayDisplay,
    feastRank: seed?.feastRank ?? inferFeastRank(saint),
    title: seed?.title ?? inferSaintTitle(saint),
    shortDescription: saint.shortDescription,
    whyThisSaintMatters: seed?.whyThisSaintMatters ?? saint.whyMatters,
    keyVirtue: getSaintVirtueForToday(saint),
    fruitOfTheSpirit: seed?.fruitOfTheSpirit ?? inferFruitOfSpirit(getSaintVirtueForToday(saint)),
    patronage: seed?.patronage ?? saint.patronages[0],
    imitateToday: seed?.imitateToday ?? saint.imitateToday[0] ?? "Ask this saint to help you follow Christ faithfully today.",
    shortPrayer: seed?.shortPrayer ?? saint.prayer,
    relatedDailyOratoryLinks: relatedLinks,
    externalResourceLinks,
    sourceNotes: saint.sourceNotes ?? "Daily Oratory original summary with trusted external links.",
  };
}

function inferFeastRank(saint: Saint) {
  if (saint.feastDay === "01-01" || saint.feastDay === "06-29") return "Solemnity";
  if (saint.doctorOfChurch || saint.martyr) return "Memorial";
  return "Feast or memorial";
}

function inferSaintTitle(saint: Saint) {
  if (saint.doctorOfChurch && saint.stateOfLife === "bishop") return "Bishop and Doctor of the Church";
  if (saint.doctorOfChurch) return "Doctor of the Church";
  if (saint.martyr) return "Martyr";
  if (saint.stateOfLife === "apostle") return "Apostle";
  if (saint.stateOfLife === "bishop") return "Bishop";
  if (saint.stateOfLife === "priest") return "Priest";
  if (saint.stateOfLife === "monk") return "Abbot";
  if (saint.stateOfLife === "mary") return "Mother of God";
  return saint.traditionGroup;
}

function inferFruitOfSpirit(virtue?: string) {
  if (!virtue) return undefined;
  const normalized = slugify(virtue);
  const map: Record<string, string> = {
    faith: "Faithfulness",
    hope: "Joy",
    charity: "Love",
    prudence: "Self-control",
    justice: "Goodness",
    fortitude: "Courage",
    temperance: "Self-control",
    humility: "Gentleness",
    patience: "Patience",
    chastity: "Self-control",
    diligence: "Faithfulness",
    mercy: "Kindness",
    gratitude: "Joy",
    simplicity: "Peace",
    obedience: "Faithfulness",
    courage: "Courage",
    perseverance: "Patience",
    forgiveness: "Kindness",
    zeal: "Joy",
    peace: "Peace",
    gentleness: "Gentleness",
    love: "Love",
    repentance: "Faithfulness",
    conversion: "Self-control",
    wisdom: "Peace",
  };
  return map[normalized];
}

