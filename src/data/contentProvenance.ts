import type { ContentReviewStatus, CopyrightStatus } from "@/types/content";

export type ProvenanceContentType =
  | "scripture"
  | "prayer"
  | "hymn"
  | "reflection"
  | "saint-bio"
  | "image"
  | "icon"
  | "video"
  | "pdf"
  | "powerpoint"
  | "external-link"
  | "catechism-quote"
  | "liturgical-text"
  | "original-content";

export type CopyrightRiskLevel = "Low Risk" | "Medium Risk" | "High Risk" | "Unknown / Needs Review";

export type ContentProvenanceRegistryItem = {
  id: string;
  title: string;
  contentType: ProvenanceContentType;
  filePath: string;
  sourceType: "original" | "public-domain" | "licensed" | "permission" | "short-quotation" | "legacy" | "external-link" | "embedded-media" | "unknown";
  sourceName?: string;
  sourceUrl?: string;
  author?: string;
  creator?: string;
  license?: string;
  licenseUrl?: string;
  copyrightStatus: CopyrightStatus;
  attributionText?: string;
  attributionRequired: boolean;
  reviewStatus: ContentReviewStatus;
  riskLevel: CopyrightRiskLevel;
  notes: string;
};

export const contentProvenanceRegistry: ContentProvenanceRegistryItem[] = [
  {
    id: "homepage-hero-image",
    title: "Chapel Library Hero Image",
    contentType: "image",
    filePath: "public/images/chapel-library-hero.png",
    sourceType: "unknown",
    creator: "Unknown",
    copyrightStatus: "needs-review",
    attributionRequired: true,
    reviewStatus: "needs-review",
    riskLevel: "Unknown / Needs Review",
    notes: "Image origin is not documented in the repository. Add creator/source/license or replace with a verified original or licensed image.",
  },
  {
    id: "rosary-prayers",
    title: "Rosary Prayer Texts",
    contentType: "prayer",
    filePath: "src/components/rosary/RosaryQuietRoom.tsx",
    sourceType: "public-domain",
    sourceName: "Traditional Catholic prayers",
    copyrightStatus: "needs-review",
    attributionText: "Traditional Catholic prayers. Transcription should be verified against a public-domain or permissioned source.",
    attributionRequired: true,
    reviewStatus: "needs-review",
    riskLevel: "Medium Risk",
    notes: "Most Rosary prayers are traditional, but the exact transcription/source should be documented before treating them as low risk.",
  },
  {
    id: "divine-mercy-chaplet",
    title: "Divine Mercy Chaplet Guide",
    contentType: "prayer",
    filePath: "src/components/divine-mercy/DivineMercyQuietRoom.tsx",
    sourceType: "original",
    sourceName: "Daily Oratory summaries with traditional prayer references",
    creator: "Daily Oratory",
    copyrightStatus: "original",
    attributionText: "Original Daily Oratory Chaplet guide. Full Diary-based optional prayers should be taken from an approved source.",
    attributionRequired: true,
    reviewStatus: "reviewed",
    riskLevel: "Low Risk",
    notes: "Long Diary and Roman Missal excerpts were removed from the page. Keep any future full Chaplet text tied to a documented permissioned or official source.",
  },
  {
    id: "adoration-hymns",
    title: "O Saving Victim, Tantum Ergo, Holy God We Praise Thy Name",
    contentType: "hymn",
    filePath: "src/components/adoration/AdorationQuietRoom.tsx",
    sourceType: "public-domain",
    sourceName: "Traditional Eucharistic hymns",
    copyrightStatus: "needs-review",
    attributionText: "Traditional Eucharistic hymn texts; verify exact English translation/source before publication.",
    attributionRequired: true,
    reviewStatus: "needs-review",
    riskLevel: "Medium Risk",
    notes: "Latin originals are public domain, but English translations can vary. Document the translation source.",
  },
  {
    id: "way-of-cross-st-alphonsus",
    title: "St. Alphonsus Liguori's Way of the Cross",
    contentType: "prayer",
    filePath: "src/components/way-of-cross/WayOfCrossQuietRoom.tsx",
    sourceType: "public-domain",
    sourceName: "St. Alphonsus Liguori traditional Way of the Cross",
    author: "St. Alphonsus Liguori",
    copyrightStatus: "needs-review",
    attributionText: "Prayer text credited to St. Alphonsus Liguori; verify the English edition/source.",
    attributionRequired: true,
    reviewStatus: "needs-review",
    riskLevel: "Medium Risk",
    notes: "Author is public domain, but the English translation/editing source should be documented.",
  },
  {
    id: "eucharistic-stations-modern",
    title: "Fourteen Stations of the Eucharist",
    contentType: "prayer",
    filePath: "src/components/eucharistic-stations/EucharisticStationsQuietRoom.tsx",
    sourceType: "original",
    sourceName: "Daily Oratory original station prompts with external embedded video",
    creator: "Daily Oratory",
    copyrightStatus: "original",
    attributionText: "Original Daily Oratory station prompts. External video remains embedded from YouTube.",
    attributionRequired: true,
    reviewStatus: "reviewed",
    riskLevel: "Low Risk",
    notes: "Modern authored devotional text was replaced with concise original prompts. Do not restore full external station text without documented permission.",
  },
  {
    id: "resurrection-stations-video-and-pdf",
    title: "Stations of the Resurrection / Via Lucis",
    contentType: "pdf",
    filePath: "src/components/resurrection-stations/ResurrectionStationsQuietRoom.tsx",
    sourceType: "external-link",
    sourceName: "RCCA Way of Light Prayer Book PDF",
    sourceUrl: "https://rccav.org/wp-content/uploads/2023/05/Way-of-Light-Prayer-Book-Final.pdf",
    copyrightStatus: "needs-review",
    attributionText: "External Way of Light prayer booklet linked for user access; content is not copied into Daily Oratory.",
    attributionRequired: true,
    reviewStatus: "needs-review",
    riskLevel: "Medium Risk",
    notes: "Linking is lower risk than copying, but owner should confirm the external PDF is intended for public distribution.",
  },
  {
    id: "reflections-original",
    title: "Daily Oratory Mass Reflections",
    contentType: "reflection",
    filePath: "src/data/reflections.ts",
    sourceType: "original",
    creator: "Daily Oratory",
    copyrightStatus: "original",
    attributionText: "Original reflection by Daily Oratory. Scripture is referenced, not republished.",
    attributionRequired: false,
    reviewStatus: "reviewed",
    riskLevel: "Low Risk",
    notes: "Current records use Scripture references and original commentary, with brief Catechism paraphrase that should retain source citations.",
  },
  {
    id: "catechism-paraphrases",
    title: "Catechism References in Reflections and Eucharistic Stations",
    contentType: "catechism-quote",
    filePath: "src/data/reflections.ts; src/components/eucharistic-stations/EucharisticStationsQuietRoom.tsx",
    sourceType: "short-quotation",
    sourceName: "Catechism of the Catholic Church",
    copyrightStatus: "short-quotation",
    attributionText: "Brief Catechism references should cite paragraph numbers and avoid extended reproduction.",
    attributionRequired: true,
    reviewStatus: "needs-review",
    riskLevel: "Medium Risk",
    notes: "Paraphrases are likely lower risk than long quotations, but paragraph citations and attribution should be explicit.",
  },
  {
    id: "saint-biographies",
    title: "Saint Directory Short Biographies",
    contentType: "saint-bio",
    filePath: "src/data/saints.ts",
    sourceType: "original",
    creator: "Daily Oratory",
    copyrightStatus: "needs-review",
    attributionText: "Short saint biographies appear to be original summaries by Daily Oratory; source bibliography still recommended.",
    attributionRequired: false,
    reviewStatus: "needs-review",
    riskLevel: "Unknown / Needs Review",
    notes: "No copied source is evident, but provenance notes and factual source references should be added.",
  },
  {
    id: "youtube-embeds",
    title: "YouTube and Vimeo Embedded Prayer Videos",
    contentType: "video",
    filePath: "src/components/*; src/data/adoration.ts",
    sourceType: "embedded-media",
    sourceName: "YouTube/Vimeo creators",
    copyrightStatus: "needs-review",
    attributionText: "Embedded media remains hosted by the source platform; verify creator/channel suitability and embedding availability.",
    attributionRequired: true,
    reviewStatus: "needs-review",
    riskLevel: "Medium Risk",
    notes: "Embedding authorized public platform videos is generally lower operational risk, but unauthorized uploads should be replaced.",
  },
  {
    id: "next-vercel-icons",
    title: "Default Next.js/Vercel SVG Icons",
    contentType: "icon",
    filePath: "public/file.svg; public/globe.svg; public/next.svg; public/vercel.svg; public/window.svg",
    sourceType: "licensed",
    sourceName: "Next.js scaffold / Vercel assets",
    copyrightStatus: "licensed",
    attributionText: "Default framework scaffold icons; keep framework license notices in package metadata.",
    attributionRequired: false,
    reviewStatus: "reviewed",
    riskLevel: "Low Risk",
    notes: "These appear to be default scaffold assets and are not used as Catholic content.",
  },
  {
    id: "legacy-boa-content",
    title: "Legacy Brotherhood of Ascension Imported Content",
    contentType: "original-content",
    filePath: "src/data/contentRecords.ts; docs/migration-plan.md; docs/redirect-map-template.csv",
    sourceType: "legacy",
    sourceName: "Brotherhood of Ascension legacy content",
    copyrightStatus: "needs-owner-confirmation",
    attributionText: "Legacy source content requires owner confirmation before broad redistribution.",
    attributionRequired: true,
    reviewStatus: "needs-review",
    riskLevel: "Unknown / Needs Review",
    notes: "Confirm Daily Oratory controls the legacy content or has permission to reuse it.",
  },
];

export function getContentProvenanceById(id: string) {
  return contentProvenanceRegistry.find((item) => item.id === id);
}

export function getContentProvenanceByRisk(riskLevel: CopyrightRiskLevel) {
  return contentProvenanceRegistry.filter((item) => item.riskLevel === riskLevel);
}
