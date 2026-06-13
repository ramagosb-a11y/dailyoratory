import type {
  ExaminationMode,
  ExaminationOfConscienceRecord,
  ExaminationPath,
  ExaminationPrompt,
  ExaminationSection,
  ExaminationStateOfLife,
} from "@/types/examination";

const staticSource = { system: "static" as const };
const allModes: ExaminationMode[] = ["quick", "standard", "thorough", "returning"];
const standardModes: ExaminationMode[] = ["standard", "thorough", "returning"];
const thoroughModes: ExaminationMode[] = ["thorough", "returning"];

export const examinationPrivacyNote =
  "Your marked items and notes stay in this browser's localStorage only. Daily Oratory does not send confession preparation data to a server.";

export const examinationPastoralDisclaimer =
  "This guide does not determine mortal or venial sin. If you are unsure, bring the matter simply and honestly to a priest in confession or pastoral conversation.";

export const examinationModeOptions: { value: ExaminationMode; label: string; description: string }[] = [
  { value: "quick", label: "Quick", description: "A short review before confession." },
  { value: "standard", label: "Standard", description: "A balanced examination across prayer, duties, virtue, and mercy." },
  { value: "thorough", label: "Thorough", description: "A deeper preparation when you have more time." },
  { value: "returning", label: "Returning after a long time", description: "A gentle path for coming back without panic." },
];

export const examinationStateOfLifeOptions: { value: ExaminationStateOfLife; label: string }[] = [
  { value: "adult", label: "Adult" },
  { value: "young-adult", label: "Young adult" },
  { value: "teen", label: "Teen" },
  { value: "married", label: "Married" },
  { value: "parent", label: "Parent" },
  { value: "single", label: "Single" },
  { value: "clergy-religious", label: "Clergy/religious" },
  { value: "student", label: "Student" },
  { value: "worker-professional", label: "Worker/professional" },
];

export const examinationPathOptions: { value: ExaminationPath; label: string; description: string }[] = [
  { value: "ten-commandments", label: "Ten Commandments", description: "Love of God and neighbor through the commandments." },
  { value: "beatitudes", label: "Beatitudes", description: "A Gospel review of poverty of spirit, mercy, purity, and peace." },
  { value: "state-of-life", label: "State of life", description: "Duties and relationships connected to your vocation and season." },
  { value: "virtues", label: "Virtues and vices", description: "Patterns of virtue, vice, temptation, and growth in grace." },
  { value: "relationships-duties", label: "Relationships and duties", description: "Family, work, promises, justice, and speech." },
  { value: "prayer-sacramental-life", label: "Prayer and sacramental life", description: "Prayer, Mass, confession, reverence, and trust." },
  { value: "works-of-mercy", label: "Works of mercy", description: "Mercy in action toward the hungry, lonely, sick, and forgotten." },
];

function prompt(
  id: string,
  path: ExaminationPath,
  text: string,
  mode: ExaminationMode[],
  tags: string[],
  stateOfLife: ExaminationStateOfLife[] | "all" = "all",
  relatedVirtue?: string,
  relatedVice?: string,
): ExaminationPrompt {
  return {
    id,
    path,
    text,
    mode,
    stateOfLife,
    relatedVirtue,
    relatedVice,
    tags,
    pastoralNote: "If you are unsure how to confess this, speak with a priest simply and honestly.",
  };
}

export const guidedExaminationSections: ExaminationSection[] = [
  {
    id: "exam-ten-commandments",
    title: "Ten Commandments",
    description: "Review love of God, reverence, worship, family, life, purity, truth, justice, and desire.",
    path: "ten-commandments",
    prompts: [
      prompt("exam-commandments-prayer", "ten-commandments", "Have I neglected prayer, treated God as an afterthought, or refused to trust him?", allModes, ["prayer", "faith"], "all", "faith", "sloth"),
      prompt("exam-commandments-reverence", "ten-commandments", "Have I used God's name, holy things, or sacred spaces carelessly or irreverently?", standardModes, ["reverence", "worship"], "all", "religion"),
      prompt("exam-commandments-sunday", "ten-commandments", "Have I neglected Sunday worship or treated the Lord's Day as ordinary when I could keep it holy?", allModes, ["mass", "sabbath"], "all", "justice"),
      prompt("exam-commandments-family", "ten-commandments", "Have I failed in charity, respect, or responsibility toward parents, family, elders, or those entrusted to me?", standardModes, ["family", "duties"], "all", "charity"),
      prompt("exam-commandments-life", "ten-commandments", "Have I harmed another through anger, contempt, reckless words, neglect, or refusal to forgive?", allModes, ["anger", "life"], "all", "patience", "anger"),
      prompt("exam-commandments-purity", "ten-commandments", "Have I failed to respect the dignity of my body or another person's body in thought, speech, media, or action?", standardModes, ["purity", "chastity"], "all", "chastity", "lust"),
      prompt("exam-commandments-truth", "ten-commandments", "Have I lied, exaggerated, concealed truth unjustly, gossiped, or damaged another's reputation?", allModes, ["truth", "speech"], "all", "truthfulness"),
      prompt("exam-commandments-justice", "ten-commandments", "Have I taken, wasted, misused, or withheld what belongs to another or to the common good?", standardModes, ["justice", "work"], "all", "justice"),
      prompt("exam-commandments-envy", "ten-commandments", "Have I fed envy, resentment, comparison, or disordered desire for what belongs to another?", thoroughModes, ["envy", "desire"], "all", "gratitude", "envy"),
    ],
  },
  {
    id: "exam-beatitudes",
    title: "Beatitudes",
    description: "Let the Gospel search the heart through humility, mercy, purity, and peace.",
    path: "beatitudes",
    prompts: [
      prompt("exam-beatitudes-poor", "beatitudes", "Have I resisted poverty of spirit by clinging to control, image, comfort, or self-sufficiency?", allModes, ["humility", "poverty of spirit"], "all", "humility", "pride"),
      prompt("exam-beatitudes-mourn", "beatitudes", "Have I ignored the suffering of others or refused to grieve sin and injustice?", standardModes, ["compassion", "mourning"], "all", "compassion"),
      prompt("exam-beatitudes-meek", "beatitudes", "Have I used power, knowledge, authority, or emotion to dominate rather than serve?", standardModes, ["meekness", "authority"], "all", "meekness", "anger"),
      prompt("exam-beatitudes-mercy", "beatitudes", "Have I withheld mercy, forgiveness, patience, or a fair hearing from someone?", allModes, ["mercy", "forgiveness"], "all", "mercy"),
      prompt("exam-beatitudes-pure", "beatitudes", "Have I allowed a divided heart, secret habit, or hidden compromise to pull me from Christ?", thoroughModes, ["purity", "integrity"], "all", "integrity"),
      prompt("exam-beatitudes-peace", "beatitudes", "Have I stirred conflict, avoided needed reconciliation, or refused to be a peacemaker?", standardModes, ["peace", "relationships"], "all", "peace"),
      prompt("exam-beatitudes-persecuted", "beatitudes", "Have I hidden my faith from fear, convenience, or desire to be approved?", thoroughModes, ["witness", "courage"], "all", "fortitude"),
    ],
  },
  {
    id: "exam-state-of-life",
    title: "State of Life",
    description: "Review the duties and relationships connected to your vocation, age, work, and household.",
    path: "state-of-life",
    prompts: [
      prompt("exam-state-married", "state-of-life", "In marriage, have I loved with patience, fidelity, tenderness, honesty, and willingness to forgive?", standardModes, ["marriage", "vocation"], ["married"], "charity"),
      prompt("exam-state-parent", "state-of-life", "As a parent, have I formed, protected, listened to, disciplined, and prayed for my children with love?", standardModes, ["parent", "family"], ["parent"], "prudence"),
      prompt("exam-state-single", "state-of-life", "In single life, have I used freedom for love of God and neighbor, or only for comfort and avoidance?", standardModes, ["single", "vocation"], ["single"], "generosity"),
      prompt("exam-state-teen", "state-of-life", "As a teen, have I honored parents or guardians, used technology wisely, and chosen friends who help me grow?", allModes, ["teen", "family"], ["teen"], "prudence"),
      prompt("exam-state-student", "state-of-life", "As a student, have I studied honestly, avoided cheating, and used gifts with diligence?", allModes, ["student", "work"], ["student"], "diligence", "sloth"),
      prompt("exam-state-worker", "state-of-life", "At work, have I acted with honesty, diligence, justice, respect, and concern for those affected by my decisions?", standardModes, ["work", "justice"], ["worker-professional"], "justice"),
      prompt("exam-state-religious", "state-of-life", "In clerical or religious life, have I lived obedience, prayer, service, chastity, and pastoral charity faithfully?", thoroughModes, ["vocation", "religious life"], ["clergy-religious"], "fidelity"),
      prompt("exam-state-young-adult", "state-of-life", "As a young adult, have I sought wisdom, community, chastity, work, prayer, and discernment with seriousness?", standardModes, ["young adult", "discernment"], ["young-adult"], "prudence"),
    ],
  },
  {
    id: "exam-virtues",
    title: "Virtues and Vices",
    description: "Name patterns and ask for the grace of concrete virtue.",
    path: "virtues",
    prompts: [
      prompt("exam-virtue-pride", "virtues", "Where has pride made me defensive, self-important, dismissive, or unwilling to apologize?", allModes, ["pride", "humility"], "all", "humility", "pride"),
      prompt("exam-virtue-anger", "virtues", "Where has anger ruled my words, silence, driving, messages, or imagination?", allModes, ["anger", "patience"], "all", "patience", "anger"),
      prompt("exam-virtue-sloth", "virtues", "Where have I avoided prayer, duty, study, work, or charity through laziness or discouragement?", standardModes, ["sloth", "diligence"], "all", "diligence", "sloth"),
      prompt("exam-virtue-greed", "virtues", "Where have money, possessions, status, food, comfort, or security become disordered?", standardModes, ["temperance", "greed"], "all", "temperance", "greed"),
      prompt("exam-virtue-envy", "virtues", "Where have I resented another person's gifts, success, vocation, relationship, or holiness?", thoroughModes, ["envy", "gratitude"], "all", "gratitude", "envy"),
      prompt("exam-virtue-charity", "virtues", "Where did I fail to choose concrete love when love was possible?", allModes, ["charity", "mercy"], "all", "charity"),
    ],
  },
  {
    id: "exam-relationships-duties",
    title: "Relationships and Duties",
    description: "Review charity in speech, promises, family, work, boundaries, and responsibility.",
    path: "relationships-duties",
    prompts: [
      prompt("exam-duty-promises", "relationships-duties", "Have I broken promises, avoided commitments, or failed to communicate honestly?", standardModes, ["promises", "truth"], "all", "fidelity"),
      prompt("exam-duty-speech", "relationships-duties", "Have my words online or in person protected the dignity of others?", allModes, ["speech", "online"], "all", "charity"),
      prompt("exam-duty-boundaries", "relationships-duties", "Have I failed to respect healthy boundaries, privacy, time, or trust?", standardModes, ["boundaries", "respect"], "all", "justice"),
      prompt("exam-duty-neglect", "relationships-duties", "Have I knowingly neglected a serious duty in family, work, parish, school, or community?", thoroughModes, ["duties", "responsibility"], "all", "diligence"),
      prompt("exam-duty-restitution", "relationships-duties", "Is there someone I need to repay, apologize to, correct, or seek reconciliation with?", allModes, ["restitution", "reconciliation"], "all", "justice"),
    ],
  },
  {
    id: "exam-prayer-sacraments",
    title: "Prayer and Sacramental Life",
    description: "Review prayer, Mass, confession, reverence, Adoration, Scripture, and trust.",
    path: "prayer-sacramental-life",
    prompts: [
      prompt("exam-prayer-daily", "prayer-sacramental-life", "Have I made space for daily prayer according to my real responsibilities?", allModes, ["daily prayer"], "all", "faith"),
      prompt("exam-prayer-mass", "prayer-sacramental-life", "Have I prepared for Mass, participated attentively, and given thanks?", standardModes, ["mass", "eucharist"], "all", "reverence"),
      prompt("exam-prayer-confession", "prayer-sacramental-life", "Have I delayed confession from fear, pride, indifference, or discouragement?", standardModes, ["confession", "mercy"], "all", "humility"),
      prompt("exam-prayer-scripture", "prayer-sacramental-life", "Have I neglected Scripture or ignored a word from God that I already understood?", thoroughModes, ["scripture", "obedience"], "all", "docility"),
      prompt("exam-prayer-trust", "prayer-sacramental-life", "Have I refused to trust God with a person, wound, need, or future concern?", allModes, ["trust", "hope"], "all", "hope"),
    ],
  },
  {
    id: "exam-works-mercy",
    title: "Works of Mercy",
    description: "Review love for Christ in the poor, lonely, hungry, sick, grieving, imprisoned, and forgotten.",
    path: "works-of-mercy",
    prompts: [
      prompt("exam-mercy-hungry", "works-of-mercy", "Have I ignored opportunities to feed, clothe, visit, comfort, teach, forgive, or pray for others?", standardModes, ["works of mercy"], "all", "mercy"),
      prompt("exam-mercy-lonely", "works-of-mercy", "Have I neglected the lonely, grieving, elderly, sick, imprisoned, or isolated when I could have shown care?", thoroughModes, ["lonely", "sick"], "all", "compassion"),
      prompt("exam-mercy-forgive", "works-of-mercy", "Have I refused to forgive, pray for, or seek peace with someone who wounded me?", allModes, ["forgiveness", "peace"], "all", "mercy"),
      prompt("exam-mercy-correct", "works-of-mercy", "Have I corrected others harshly, or avoided a needed correction from cowardice?", thoroughModes, ["correction", "truth"], "all", "prudence"),
      prompt("exam-mercy-prayer", "works-of-mercy", "Have I failed to pray for the living and the dead, especially those entrusted to me?", standardModes, ["intercession"], "all", "charity"),
    ],
  },
];

export const examinationsOfConscience: ExaminationOfConscienceRecord[] = [
  {
    id: "exam-before-confession",
    title: "Guided Examination Before Confession",
    slug: "guided-examination-before-confession",
    description: "A private, local-only examination for preparing for confession with truth, peace, and trust in mercy.",
    category: "Examination",
    tags: ["confession", "examination of conscience", "mercy", "private notes"],
    relatedResourceIds: ["res-confession-guide", "confession-guide-standard"],
    status: "published",
    createdAt: "2026-05-01",
    updatedAt: "2026-05-06",
    visibility: "public",
    source: staticSource,
    schemaVersion: 1,
    contentType: "examination-of-conscience",
    season: "All Year",
    audience: "before-confession",
    modes: allModes,
    paths: examinationPathOptions.map((option) => option.value),
    privacyNote: examinationPrivacyNote,
    pastoralDisclaimer: examinationPastoralDisclaimer,
    closingPrayer:
      "Lord Jesus, give me sorrow for sin, confidence in your mercy, and courage to begin again.",
    sections: guidedExaminationSections,
  },
  {
    id: "exam-daily-review",
    title: "Daily Review of Life",
    slug: "daily-review-of-life",
    description: "A short evening review for gratitude, repentance, and one concrete next step.",
    category: "Examination",
    tags: ["daily examen", "evening prayer", "virtue"],
    relatedResourceIds: ["rule-template-simple-daily-rule", "prayer-family-evening"],
    status: "published",
    createdAt: "2026-05-01",
    updatedAt: "2026-05-06",
    visibility: "public",
    source: staticSource,
    schemaVersion: 1,
    contentType: "examination-of-conscience",
    season: "All Year",
    audience: "general",
    modes: ["quick", "standard"],
    paths: ["prayer-sacramental-life", "virtues", "relationships-duties"],
    privacyNote: examinationPrivacyNote,
    pastoralDisclaimer: examinationPastoralDisclaimer,
    closingPrayer: "Lord, receive this day. Heal what was wounded and strengthen what began in grace.",
    sections: [
      {
        id: "exam-gratitude",
        title: "Gratitude",
        description: "Notice where God was generous today.",
        path: "prayer-sacramental-life",
        prompts: [
          prompt("prompt-gift", "prayer-sacramental-life", "What grace, person, duty, or consolation should I thank God for?", ["quick", "standard"], ["gratitude"], "all", "hope"),
        ],
      },
      {
        id: "exam-next-step",
        title: "One Next Step",
        description: "Choose one concrete response for tomorrow.",
        path: "virtues",
        prompts: [
          prompt("prompt-next-charity", "virtues", "What one act of charity should I prepare for tomorrow?", ["quick", "standard"], ["charity"], "all", "charity"),
        ],
      },
    ],
  },
];
