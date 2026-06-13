import { rosaryMysteries, rosaryMysteryGroups, rosaryPrayers as rosaryPrayerTexts } from "@/data/rosaryMysteries";
import type {
  LatinRosaryStep,
  RosaryMysteryGroupSlug,
  RosaryMysteryRecord,
  RosaryMysterySetName,
  RosaryMysterySetRecord,
  RosaryPrayerRecord,
} from "@/types/rosary";

const setNameBySlug: Record<RosaryMysteryGroupSlug, RosaryMysterySetName> = {
  "joyful-mysteries": "Joyful",
  "luminous-mysteries": "Luminous",
  "sorrowful-mysteries": "Sorrowful",
  "glorious-mysteries": "Glorious",
};

const setSubtitleBySlug: Record<RosaryMysteryGroupSlug, string> = {
  "joyful-mysteries": "The hidden beginnings of Christ's life with Mary.",
  "luminous-mysteries": "The public ministry of Christ, light for the world.",
  "sorrowful-mysteries": "The Passion of Christ contemplated with Mary.",
  "glorious-mysteries": "The victory of Christ and the hope of heaven.",
};

function toLegacyMysteryRecord(groupSlug: RosaryMysteryGroupSlug): RosaryMysteryRecord[] {
  return rosaryMysteries
    .filter((mystery) => mystery.groupSlug === groupSlug)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((mystery) => ({
      id: mystery.id,
      setSlug: groupSlug,
      setName: setNameBySlug[groupSlug],
      order: mystery.decadeNumber,
      title: mystery.title,
      scriptureReference: mystery.scriptureReference,
      fruit: mystery.fruitOfMystery,
      meditationPrompt: mystery.meditationPrompt,
    }));
}

export const rosaryMysterySets: RosaryMysterySetRecord[] = rosaryMysteryGroups
  .slice()
  .sort((a, b) => a.sortOrder - b.sortOrder)
  .map((group) => ({
    slug: group.slug,
    name: setNameBySlug[group.slug],
    title: group.title,
    subtitle: setSubtitleBySlug[group.slug],
    traditionalDays: group.traditionalDays,
    theme: group.theme,
    description: group.description,
    mysteries: toLegacyMysteryRecord(group.slug),
  }));

export const rosaryOpeningSteps = [
  "Make the Sign of the Cross.",
  "Pray the Apostles' Creed.",
  "Pray one Our Father.",
  "Pray three Hail Marys.",
  "Pray one Glory Be.",
  "Announce the first mystery.",
] as const;

export const rosaryDecadeSteps = [
  "Pray one Our Father.",
  "Pray ten Hail Marys slowly while contemplating the mystery.",
  "Pray one Glory Be.",
  "Pray the Fatima Prayer, if desired.",
  "Ask for the fruit of the mystery.",
] as const;

export const rosaryClosingSteps = [
  "Continue through all five mysteries.",
  "Pray the Hail Holy Queen.",
  "Offer the closing Rosary prayer and end with the Sign of the Cross.",
] as const;

export const rosaryPrayers: RosaryPrayerRecord[] = rosaryPrayerTexts.map((prayer) => ({
  id: prayer.id,
  title: prayer.title,
  english: prayer.body,
  latin: prayer.latin,
  note: prayer.note,
}));

export const latinRosarySteps: LatinRosaryStep[] = [
  {
    id: "latin-sign",
    title: "Signum Crucis",
    latin: "In nomine Patris, et Filii, et Spiritus Sancti. Amen.",
    englishCue: "Sign of the Cross",
    pronunciationHelp: "in NOH-mee-neh PAH-trees, et FEE-lee-ee, et SPEE-ree-toos SAHNK-tee",
  },
  {
    id: "latin-pater",
    title: "Pater Noster",
    latin:
      "Pater noster, qui es in caelis, sanctificetur nomen tuum; adveniat regnum tuum; fiat voluntas tua, sicut in caelo et in terra.",
    englishCue: "Our Father",
    pronunciationHelp: "PAH-ter NOH-ster, kwee es in CHAY-lees",
  },
  {
    id: "latin-ave",
    title: "Ave Maria",
    latin:
      "Ave Maria, gratia plena, Dominus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus.",
    englishCue: "Hail Mary",
    pronunciationHelp: "AH-veh mah-REE-ah, GRAH-tsee-ah PLEH-nah",
  },
  {
    id: "latin-gloria",
    title: "Gloria Patri",
    latin: "Gloria Patri, et Filio, et Spiritui Sancto.",
    englishCue: "Glory Be",
    pronunciationHelp: "GLOH-ree-ah PAH-tree, et FEE-lee-oh",
  },
  {
    id: "latin-salve",
    title: "Salve Regina",
    latin: "Salve Regina, Mater misericordiae, vita, dulcedo, et spes nostra, salve.",
    englishCue: "Hail Holy Queen",
    pronunciationHelp: "SAHL-veh reh-JEE-nah, MAH-ter mee-seh-ree-KOR-dee-eye",
  },
];
