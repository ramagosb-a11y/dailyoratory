import type { Metadata } from "next";
import { AdorationCompanion } from "@/components/adoration/companion/AdorationCompanion";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pagePath = "/adoration/companion";
const pageDescription =
  "A Catholic Adoration companion with guided meditation, a structured Holy Hour, Douay-Rheims Scripture, Eucharistic prayers and hymns, and Catechism study links.";

export const metadata: Metadata = createPageMetadata({
  title: "Adoration Companion | Daily Oratory",
  description: pageDescription,
  path: pagePath,
  keywords: [
    "Catholic Adoration companion",
    "Blessed Sacrament meditation",
    "Eucharistic prayers and hymns",
    "Douay-Rheims Scripture",
    "Catholic Holy Hour guide",
  ],
});

export default function AdorationCompanionPage() {
  return (
    <div className="paper-texture companion-page">
      <StructuredDataScript
        data={[
          buildWebPageStructuredData({
            name: "Adoration Companion",
            description: pageDescription,
            path: pagePath,
          }),
          buildBreadcrumbList([
            { name: "Adoration", path: "/adoration" },
            { name: "Adoration Companion", path: pagePath },
          ]),
        ]}
      />
      <AdorationCompanion />
    </div>
  );
}
