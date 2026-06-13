export type BeginInPrayerSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  prayerIds: string[];
};

export const beginInPrayerSections: BeginInPrayerSection[] = [
  {
    id: "morning",
    eyebrow: "Morning",
    title: "Start the day with God",
    description: "Begin simply with surrender, trust, and one clear act of prayer before the day gets noisy.",
    prayerIds: ["sign-of-the-cross", "morning-offering", "our-father"],
  },
  {
    id: "midday",
    eyebrow: "Midday",
    title: "Pause and recollect",
    description: "Return the heart to God in the middle of ordinary work, fatigue, decisions, and distraction.",
    prayerIds: ["angelus", "come-holy-spirit", "prayer-for-trust"],
  },
  {
    id: "mercy",
    eyebrow: "Mercy",
    title: "Return when you need mercy",
    description: "When the conscience is heavy or the soul feels unsettled, begin again with repentance and trust.",
    prayerIds: ["jesus-prayer", "act-of-contrition", "prayer-before-confession"],
  },
  {
    id: "mary",
    eyebrow: "Mary",
    title: "Pray with Mary",
    description: "Let Our Lady lead you to Jesus through steady, familiar, and beautiful Catholic prayer.",
    prayerIds: ["hail-mary", "memorare", "regina-caeli"],
  },
  {
    id: "evening",
    eyebrow: "Evening",
    title: "End the day in peace",
    description: "Close the day with gratitude, mercy, and trust instead of carrying everything into the night.",
    prayerIds: ["evening-prayer", "night-prayer-before-sleep", "eternal-rest"],
  },
];
