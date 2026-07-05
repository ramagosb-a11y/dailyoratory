import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { ThreeDayCatholicFastingRetreat } from "@/components/three-day-retreat/ThreeDayCatholicFastingRetreat";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const title = "Three-Day Catholic Fasting and Spiritual Renewal Retreat";
const description =
  "A Catholic three-day fasting retreat with Confession, Mass, Eucharistic Adoration, Scripture, Rosary, Divine Mercy, indulgence prayers, and prayer intention templates.";
const path = "/three-day-catholic-fasting-retreat";

const baseMetadata = createPageMetadata({
  title: "Three-Day Catholic Fasting and Spiritual Renewal Retreat | Daily Oratory",
  description,
  path,
  keywords: [
    "Catholic fasting retreat",
    "three day Catholic retreat",
    "Eucharistic Adoration retreat",
    "Catholic spiritual renewal",
    "Catholic fasting prayer plan",
    "Divine Mercy Chaplet",
    "Rosary prayer retreat",
    "Catholic indulgence prayers",
    "prayer intentions",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Three-Day Catholic Fasting and Spiritual Renewal Retreat | Daily Oratory",
  description,
  openGraph: {
    ...baseMetadata.openGraph,
    title,
    description,
    url: path,
  },
  twitter: {
    ...baseMetadata.twitter,
    title,
    description,
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who can join the Three-Day Catholic Fasting and Spiritual Renewal Retreat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any Catholic or person seeking to draw closer to Jesus may join the retreat in prayer. The fasting portion should be adapted prudently according to health, vocation, work, age, and medical needs.",
      },
    },
    {
      "@type": "Question",
      name: "What if I cannot do a strict fast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You may modify the fast, use one simple protein shake if needed, or offer another sacrifice. The purpose is union with Christ, conversion, charity, and intercession, not harm to the body.",
      },
    },
    {
      "@type": "Question",
      name: "What prayers are included in the retreat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The retreat includes Scripture, Morning Offering, prayers for indulgences, Angelus, Mass or Spiritual Communion, Eucharistic Adoration, Divine Mercy Chaplet, Rosary, examination of conscience, Act of Contrition, and night surrender.",
      },
    },
    {
      "@type": "Question",
      name: "Can indulgences be offered for others?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indulgences may be applied to oneself or to the souls in Purgatory, but not directly to another living person.",
      },
    },
  ],
};

export default function ThreeDayCatholicFastingRetreatPage() {
  return (
    <div className="paper-texture">
      <StructuredDataScript
        data={[
          buildWebPageStructuredData({ name: title, description, path }),
          buildArticleStructuredData({
            headline: title,
            description,
            path,
            keywords: baseMetadata.keywords as string[] | undefined,
          }),
          buildBreadcrumbList([
            { name: "Pray", path: "/pray" },
            { name: title, path },
          ]),
          faqStructuredData,
        ]}
      />
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: title }]} />
        <ThreeDayCatholicFastingRetreat />
      </main>
    </div>
  );
}
