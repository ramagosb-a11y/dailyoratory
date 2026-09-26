export type LifeOfJesusRecordKind =
  | "narrated-event"
  | "teaching-segment"
  | "theological-prologue"
  | "doctrinal-mystery"
  | "editorial-summary";

export type LifeOfJesusChronologyConfidence =
  | "explicit"
  | "strong-inference"
  | "traditional-harmony"
  | "uncertain";

export type LifeOfJesusSequenceBasis =
  | "gospel-order"
  | "traditional-harmony"
  | "liturgical-presentation"
  | "editorial-grouping";

export type LifeOfJesusPassageRole = "primary" | "parallel" | "supporting" | "typological";
export type LifeOfJesusRelationshipKind =
  | "distinct"
  | "parallel"
  | "possibly-parallel"
  | "disputed"
  | "interleaved";
export type LifeOfJesusCatholicClassification =
  | "narrated-history"
  | "typology"
  | "doctrine"
  | "liturgical-commemoration"
  | "devotional-tradition";
export type LifeOfJesusMediaTreatment =
  | "historical-scene"
  | "traditional-sacred-art"
  | "symbolic"
  | "no-scene";
export type LifeOfJesusVerificationStatus = "verified" | "unresolved" | "rejected";

export interface LifeOfJesusScripturePassage {
  displayLabel: string;
  role: LifeOfJesusPassageRole;
  book: string;
  bookSlug: string;
  chapter: number;
  verses?: string;
  /** Stable, guaranteed destination. */
  href: string;
  /** Optional verse landing; may be used only when verificationStatus is verified. */
  deepLinkUrl?: string;
  edition: "NABRE / USCCB";
  verificationStatus: LifeOfJesusVerificationStatus;
  reviewer?: string;
  reviewedAt?: string;
  accessedAt?: string;
  sourceNotes?: string[];
}

export interface LifeOfJesusDouayRheimsPassage {
  reference: string;
  editionReference: string;
  numberingNote?: string;
  edition: "Douay-Rheims American Edition, 1899";
  sourceUrl: string;
  editionUrl: string;
  rightsStatus: "public-domain";
  attribution: string;
  sourceAccessedAt: string;
  sourceSha256: string;
  archiveSha256: string;
  verificationStatus: "automated-exact-range";
  humanReviewStatus: "pending";
  verses: readonly {
    chapter: number;
    number: number;
    /** An editorially identified first part of a source verse, never a new canonical verse. */
    part?: "a";
    text: string;
  }[];
}

export interface LifeOfJesusRelationship {
  targetRecordId: string;
  kind: LifeOfJesusRelationshipKind;
  note: string;
}

export interface LifeOfJesusChurchSource {
  title: string;
  locator: string;
  url: string;
  verificationStatus: LifeOfJesusVerificationStatus;
  reviewer?: string;
  reviewedAt?: string;
  sourceNotes?: string[];
}

export interface LifeOfJesusRecord {
  id: string;
  sourceEntryNumber: number;
  /** Assigned only to top-level pilgrimage stops. */
  stopNumber?: number;
  parentStopId?: string;
  localOrder?: number;
  eraId: string;
  chapterId: string;
  title: string;
  summary: string;
  kind: LifeOfJesusRecordKind;
  chronologyConfidence: LifeOfJesusChronologyConfidence;
  chronologyNote: string;
  sequenceBasis: LifeOfJesusSequenceBasis;
  catholicClassifications: LifeOfJesusCatholicClassification[];
  scripturePassages: LifeOfJesusScripturePassage[];
  relationships: LifeOfJesusRelationship[];
  churchSources: LifeOfJesusChurchSource[];
  mediaTreatment: LifeOfJesusMediaTreatment;
  sourceNotes: string[];
  unresolvedCluster?: string;
}

export interface LifeOfJesusStop extends LifeOfJesusRecord {
  stopNumber: number;
  parentStopId?: undefined;
  teachingUnits: LifeOfJesusRecord[];
  unresolvedClusters?: string[];
}

export interface LifeOfJesusChapter {
  id: string;
  chapterNumber: number;
  title: string;
  stops: LifeOfJesusStop[];
}

export interface LifeOfJesusEra {
  id: string;
  partNumber: number;
  romanNumeral: string;
  title: string;
  theme?: string;
  approximatePeriod?: string;
  chapters: LifeOfJesusChapter[];
}

export type LifeOfJesusVisualTreatment = "hero" | "era" | "milestone";

export interface LifeOfJesusImageAsset {
  id: string;
  src: string;
  alt: string;
  caption: string;
  focalPosition?: string;
  treatment: LifeOfJesusVisualTreatment;
  provenance: "daily-oratory-sacred-art-library" | "pending-review";
  licenseStatus: "internal-library-pending-review" | "cleared";
  iconographyReview: "pending" | "reviewed";
}

export interface LifeOfJesusVisualMilestone {
  id: string;
  eraId: string;
  recordId?: string;
  label: string;
  assetId: string;
}

export interface EraVisualAnchor {
  eraId: string;
  routePosition: "left" | "right" | "center";
  locationLabel: string;
  assetId: string;
}
