import type { Resource, ResourceBlock } from "./types";

function reflectionBody(title: string, href: string, summary: string): ResourceBlock[] {
  return [
    { type: "heading", text: title },
    { type: "paragraph", text: summary },
    { type: "paragraph", text: `Read the full reflection at ${href}.` },
  ];
}

export const resources: Resource[] = [
  {
    slug: "2026-05-17-ascension-of-the-lord",
    title: "The Ascension of the Lord",
    description:
      "A liturgical reflection on Christ reigning in glory, interceding for His Church, and sending us on mission.",
    category: "Daily Reflection",
    format: "Reflection",
    season: "Easter",
    tags: ["ascension", "mission", "eucharist", "sunday reflection"],
    featured: true,
    minutes: 8,
    updatedAt: "2026-05-15",
    status: "published",
    related: ["2026-05-24-pentecost-sunday-vigil-mass"],
    body: reflectionBody(
      "The Ascension of the Lord",
      "/reflections/2026-05-17-ascension-of-the-lord",
      "Christ ascends not to abandon us, but to reign, intercede, and send His Church forth in the power of the Holy Spirit.",
    ),
  },
  {
    slug: "2026-05-24-pentecost-sunday-vigil-mass",
    title: "Pentecost Sunday - Vigil Mass",
    description:
      "A Pentecost Vigil reflection on the Holy Spirit who creates, unites, restores, and gives new life in Christ.",
    category: "Daily Reflection",
    format: "Reflection",
    season: "Easter",
    tags: ["pentecost", "holy spirit", "mary", "sunday reflection"],
    featured: true,
    minutes: 9,
    updatedAt: "2026-05-15",
    status: "published",
    related: ["2026-05-17-ascension-of-the-lord"],
    body: reflectionBody(
      "Pentecost Sunday - Vigil Mass",
      "/reflections/2026-05-24-pentecost-sunday-vigil-mass",
      "Pentecost is the fulfillment of God's promise: the Holy Spirit is poured out to renew the earth, restore humanity, and unite what sin has divided.",
    ),
  },
];
