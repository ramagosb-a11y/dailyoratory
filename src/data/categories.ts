import type { ResourceCategory, LiturgicalSeason } from "@/content/types";

export const categories: {
  label: ResourceCategory;
  description: string;
}[] = [
  { label: "Prayer", description: "Begin in prayer with daily prayers, Adoration, and devotional habits." },
  { label: "Rosary", description: "Holy Rosary, Latin Rosary, mysteries, and live prayer." },
  { label: "Daily Reflection", description: "Mass readings reflections, daily Mass reflections, Sunday Mass reflections, and Scripture prayer." },
  { label: "Liturgical Year", description: "Live the liturgical year through seasons, feasts, colors, and practices." },
  { label: "Sacraments", description: "Mass, confession, Eucharist, and sacramental preparation." },
  { label: "Saints & Devotions", description: "Find a saint companion and enter Catholic devotions." },
  { label: "Formation", description: "Grow in virtue through grace, self-knowledge, and spiritual growth." },
  { label: "Community", description: "Ask for prayer, find groups, join events, and use discussion topics." },
  { label: "Scripture", description: "Pray with the Church through Scripture and lectio divina." },
  { label: "Reference", description: "Indexes, calendars, dashboards, and long-term formation resources." },
];

export const resourceTaxonomy: {
  label: string;
  slug: string;
  description: string;
  categories: ResourceCategory[];
}[] = [
  {
    label: "Prayer Resources",
    slug: "prayer-resources",
    description: "Prayer Library, Rosary, Divine Mercy, Adoration, and daily rule of life.",
    categories: ["Prayer", "Rosary"],
  },
  {
    label: "Reflection Resources",
    slug: "reflection-resources",
    description: "Mass readings reflections, daily Mass reflections, Sunday Mass reflections, and examination of conscience.",
    categories: ["Daily Reflection", "Scripture", "Formation"],
  },
  {
    label: "Formation Resources",
    slug: "formation-resources",
    description: "Spiritual growth pathways, virtue, vice, Scripture, Mass, saints, and devotions.",
    categories: ["Formation", "Scripture", "Saints & Devotions"],
  },
  {
    label: "Sacramental Resources",
    slug: "sacramental-resources",
    description: "Confession, Mass, Eucharist, sacraments, and preparation guides.",
    categories: ["Sacraments", "Prayer", "Formation"],
  },
  {
    label: "Seasonal Resources",
    slug: "seasonal-resources",
    description: "Liturgical calendar, seasons, holy days, and family liturgical living.",
    categories: ["Liturgical Year", "Prayer", "Reference"],
  },
  {
    label: "Community Resources",
    slug: "community-resources",
    description: "Prayer intentions, prayer chain, live rooms, events, groups, and discussion topics.",
    categories: ["Community", "Prayer"],
  },
];

export const tagTaxonomy = [
  { label: "Adoration", slug: "adoration", section: "Pray" },
  { label: "Live Adoration", slug: "live-adoration", section: "Pray" },
  { label: "Rosary", slug: "rosary", section: "Pray" },
  { label: "Divine Mercy", slug: "divine-mercy", section: "Pray" },
  { label: "Rule of Life", slug: "rule-of-life", section: "Pray" },
  { label: "Confession", slug: "confession", section: "Pray" },
  { label: "Daily Reflection", slug: "daily-reflection", section: "Reflect" },
  { label: "Sunday Mass", slug: "sunday-mass", section: "Reflect" },
  { label: "Examination of Conscience", slug: "examination-of-conscience", section: "Reflect" },
  { label: "Virtue", slug: "virtue", section: "Reflect" },
  { label: "Vice", slug: "vice", section: "Reflect" },
  { label: "Sacraments", slug: "sacraments", section: "Learn" },
  { label: "Saints", slug: "saints", section: "Learn" },
  { label: "Devotions", slug: "devotions", section: "Learn" },
  { label: "Scripture", slug: "scripture", section: "Learn" },
  { label: "Mass", slug: "mass", section: "Learn" },
  { label: "Liturgical Living", slug: "liturgical-living", section: "Liturgical Year" },
  { label: "Holy Days", slug: "holy-days", section: "Liturgical Year" },
  { label: "Family Prayer", slug: "family-prayer", section: "Liturgical Year" },
  { label: "Prayer Intentions", slug: "prayer-intentions", section: "Community" },
  { label: "Prayer Chain", slug: "prayer-chain", section: "Community" },
  { label: "Live Prayer Rooms", slug: "live-prayer-rooms", section: "Community" },
  { label: "Events", slug: "events", section: "Community" },
  { label: "Local Faith Groups", slug: "local-faith-groups", section: "Community" },
];

export const liturgicalSeasonTaxonomy: {
  label: LiturgicalSeason;
  slug: string;
  color: string;
  focus: string;
}[] = [
  { label: "Advent", slug: "advent", color: "Violet", focus: "Watchful hope and preparation for Christ." },
  { label: "Christmas", slug: "christmas", color: "White", focus: "Joy in the Nativity and Incarnation." },
  { label: "Lent", slug: "lent", color: "Violet", focus: "Prayer, fasting, almsgiving, and conversion." },
  { label: "Easter", slug: "easter", color: "White", focus: "Resurrection joy and baptismal renewal." },
  { label: "Pentecost", slug: "pentecost", color: "Red", focus: "The Holy Spirit and mission." },
  { label: "Ordinary Time", slug: "ordinary-time", color: "Green", focus: "Steady discipleship and growth in virtue." },
  { label: "Marian", slug: "marian", color: "Blue", focus: "Prayer with Mary and Marian devotion." },
  { label: "All Year", slug: "all-year", color: "Gold", focus: "Daily Catholic prayer and devotion." },
];

export const seasons: LiturgicalSeason[] = liturgicalSeasonTaxonomy.map((season) => season.label);
