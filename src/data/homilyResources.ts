import type { HomilyResource } from "@/types/homilies";

export const homilyResources: HomilyResource[] = [
  {
    id: "homily-resource-usccb-readings",
    title: "USCCB Daily Readings",
    url: "https://bible.usccb.org/daily-bible-reading",
    sourceName: "USCCB",
    sourceType: "official",
    description: "Official U.S. bishops resource for daily Mass readings that can be paired with homily listening.",
    official: true,
    sortOrder: 10,
  },
  {
    id: "homily-resource-vatican-news",
    title: "Vatican News",
    url: "https://www.vaticannews.va/en.html",
    sourceName: "Vatican News",
    sourceType: "official",
    description: "Official Vatican news and preaching-related resources, including papal reflections and homily coverage.",
    official: true,
    sortOrder: 20,
  },
];
