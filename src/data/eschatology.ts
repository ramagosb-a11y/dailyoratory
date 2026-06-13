import type {
  EschatologyRelatedLink,
  EschatologyScriptureReference,
  EschatologyTopic,
} from "@/types/eschatology";

const catechismUrl = "https://www.vatican.va/archive/ENG0015/_INDEX.HTM";

export const eschatologyScriptureReferences: EschatologyScriptureReference[] = [
  {
    id: "esch-scripture-john-11",
    reference: "John 11:25–26",
    description: "Jesus reveals Himself as the Resurrection and the Life.",
    usccbUrl: "https://bible.usccb.org/bible/john/11",
    sortOrder: 1,
  },
  {
    id: "esch-scripture-matt-25",
    reference: "Matthew 25:31–46",
    description: "Christ speaks about judgment, mercy, and works of love.",
    usccbUrl: "https://bible.usccb.org/bible/matthew/25",
    sortOrder: 2,
  },
  {
    id: "esch-scripture-luke-23",
    reference: "Luke 23:42–43",
    description: "The good thief entrusts himself to Jesus at the hour of death.",
    usccbUrl: "https://bible.usccb.org/bible/luke/23",
    sortOrder: 3,
  },
  {
    id: "esch-scripture-john-14",
    reference: "John 14:1–3",
    description: "Christ prepares a place for His disciples.",
    usccbUrl: "https://bible.usccb.org/bible/john/14",
    sortOrder: 4,
  },
  {
    id: "esch-scripture-1cor-15",
    reference: "1 Corinthians 15",
    description: "Saint Paul teaches the Resurrection at the heart of Christian hope.",
    usccbUrl: "https://bible.usccb.org/bible/1corinthians/15",
    sortOrder: 5,
  },
  {
    id: "esch-scripture-2cor-5",
    reference: "2 Corinthians 5:10",
    description: "Each person appears before the judgment seat of Christ.",
    usccbUrl: "https://bible.usccb.org/bible/2corinthians/5",
    sortOrder: 6,
  },
  {
    id: "esch-scripture-1thes-4",
    reference: "1 Thessalonians 4:13–18",
    description: "Christians grieve with hope because the Lord will come again.",
    usccbUrl: "https://bible.usccb.org/bible/1thessalonians/4",
    sortOrder: 7,
  },
  {
    id: "esch-scripture-rev-21",
    reference: "Revelation 21:1–5",
    description: "The new heaven and new earth reveal the final fulfillment of God's Kingdom.",
    usccbUrl: "https://bible.usccb.org/bible/revelation/21",
    sortOrder: 8,
  },
  {
    id: "esch-scripture-heb-9",
    reference: "Hebrews 9:27",
    description: "Human life has an end, and after death comes judgment.",
    usccbUrl: "https://bible.usccb.org/bible/hebrews/9",
    sortOrder: 9,
  },
] as const;

export const eschatologyCatechismReferences = [
  {
    id: "esch-ccc-death",
    reference: "CCC 1005–1014",
    title: "Death",
    description: "Catholic teaching on death, Christian hope, and preparation for the end of earthly life.",
    url: catechismUrl,
  },
  {
    id: "esch-ccc-particular-judgment",
    reference: "CCC 1020–1022",
    title: "Particular Judgment",
    description: "What the Church teaches about the soul's encounter with Christ after death.",
    url: catechismUrl,
  },
  {
    id: "esch-ccc-heaven",
    reference: "CCC 1023–1029",
    title: "Heaven",
    description: "The Beatific Vision and perfect communion with God and the saints.",
    url: catechismUrl,
  },
  {
    id: "esch-ccc-purgatory",
    reference: "CCC 1030–1032",
    title: "Purgatory",
    description: "Final purification for those who die in God's grace and friendship.",
    url: catechismUrl,
  },
  {
    id: "esch-ccc-hell",
    reference: "CCC 1033–1037",
    title: "Hell",
    description: "The Church's sober teaching on definitive self-exclusion from communion with God.",
    url: catechismUrl,
  },
  {
    id: "esch-ccc-final-judgment",
    reference: "CCC 1038–1041",
    title: "Final Judgment",
    description: "The final revelation of God's justice, truth, and mercy in history.",
    url: catechismUrl,
  },
  {
    id: "esch-ccc-new-creation",
    reference: "CCC 1042–1050",
    title: "A New Heaven and a New Earth",
    description: "The final fulfillment of God's Kingdom and the renewal of creation.",
    url: catechismUrl,
  },
  {
    id: "esch-ccc-resurrection",
    reference: "CCC 988–1019",
    title: "The Resurrection of the Body",
    description: "The dignity of the whole person and the Christian hope of bodily resurrection.",
    url: catechismUrl,
  },
] as const;

export const eschatologyRelatedLinks: EschatologyRelatedLink[] = [
  {
    id: "esch-link-prophecy",
    title: "Prophecy Series",
    description: "Keep reflection on prophecy grounded in Catholic hope, Scripture, and discernment.",
    href: "/prophecy-series",
    category: "formation",
    sortOrder: 1,
  },
  {
    id: "esch-link-confession",
    title: "Confession Guide",
    description: "Prepare the soul to live and die in God's grace.",
    href: "/confession",
    category: "sacrament",
    sortOrder: 2,
  },
  {
    id: "esch-link-examination",
    title: "Examination of Conscience",
    description: "Review your life with honesty, mercy, and hope.",
    href: "/confession/examination",
    category: "sacrament",
    sortOrder: 3,
  },
  {
    id: "esch-link-sin",
    title: "Sin and Temptation",
    description: "See how daily conversion prepares the soul for eternity.",
    href: "/sin-and-temptation",
    category: "conversion",
    sortOrder: 4,
  },
  {
    id: "esch-link-detachment",
    title: "Complete Detachment from Sin",
    description: "Ask God to free the heart from what keeps it from His love.",
    href: "/indulgences/detachment-from-sin",
    category: "conversion",
    sortOrder: 5,
  },
  {
    id: "esch-link-penitential-psalms",
    title: "Seven Penitential Psalms",
    description: "Pray repentance, mercy, and renewed conversion with Scripture.",
    href: "/prayers/seven-penitential-psalms",
    category: "prayer",
    sortOrder: 6,
  },
  {
    id: "esch-link-purgatory",
    title: "Purgatory",
    description: "Learn about final purification and praying for the dead.",
    href: "/formation/eschatology/purgatory",
    category: "topic",
    sortOrder: 7,
  },
  {
    id: "esch-link-indulgences",
    title: "Indulgences",
    description: "Explore the Church's teaching on indulgences, mercy, and prayer for the faithful departed.",
    href: "/indulgences",
    category: "topic",
    sortOrder: 8,
  },
  {
    id: "esch-link-pray",
    title: "Prayer",
    description: "Pray daily in the light of eternity with peace and trust.",
    href: "/pray",
    category: "prayer",
    sortOrder: 9,
  },
  {
    id: "esch-link-formation",
    title: "Formation",
    description: "Continue growing in doctrine, virtue, prayer, and discipleship.",
    href: "/formation",
    category: "formation",
    sortOrder: 10,
  },
  {
    id: "esch-link-bible",
    title: "Bible",
    description: "Read Scripture with the Church and let hope be shaped by the Word of God.",
    href: "/bible",
    category: "scripture",
    sortOrder: 11,
  },
  {
    id: "esch-link-advent",
    title: "Advent",
    description: "Live watchfully in hope for the coming of Christ.",
    href: "/liturgical-living/advent",
    category: "season",
    sortOrder: 12,
  },
] as const;

const deathLinks = [
  { id: "death-link-anointing", title: "Anointing of the Sick", description: "See the sacrament Christ gives for suffering, peace, and spiritual strength.", href: "/sacraments/anointing", category: "sacrament", sortOrder: 1 },
  { id: "death-link-confession", title: "Confession", description: "Prepare the soul to meet Christ in mercy.", href: "/confession", category: "sacrament", sortOrder: 2 },
  { id: "death-link-eucharist", title: "Eucharist", description: "Receive Christ as food for the journey and life of grace.", href: "/sacraments/eucharist", category: "sacrament", sortOrder: 3 },
  { id: "death-link-purgatory", title: "Purgatory", description: "Understand the Church's hope for purification after death.", href: "/formation/eschatology/purgatory", category: "topic", sortOrder: 4 },
  { id: "death-link-heaven", title: "Heaven", description: "Keep your eyes fixed on union with God.", href: "/formation/eschatology/heaven", category: "topic", sortOrder: 5 },
] satisfies EschatologyRelatedLink[];

const judgmentLinks = [
  { id: "judgment-link-confession", title: "Confession", description: "Return to God's mercy and live in grace.", href: "/confession", category: "sacrament", sortOrder: 1 },
  { id: "judgment-link-mercy", title: "Works of Mercy", description: "Let judgment lead to concrete charity and faithful love.", href: "/formation", category: "formation", sortOrder: 2 },
  { id: "judgment-link-sin", title: "Sin and Temptation", description: "Live today with repentance and vigilance.", href: "/sin-and-temptation", category: "formation", sortOrder: 3 },
  { id: "judgment-link-prophecy", title: "Prophecy Series", description: "Keep reflection on final things rooted in Christ and Scripture.", href: "/prophecy-series", category: "media", sortOrder: 4 },
] satisfies EschatologyRelatedLink[];

const heavenLinks = [
  { id: "heaven-link-saints", title: "Saints", description: "Remember the communion of saints and our common destiny in Christ.", href: "/saints", category: "saints", sortOrder: 1 },
  { id: "heaven-link-eucharist", title: "Eucharist", description: "Taste already the sacramental foretaste of heavenly communion.", href: "/sacraments/eucharist", category: "sacrament", sortOrder: 2 },
  { id: "heaven-link-prayer", title: "Prayer", description: "Let prayer deepen your desire for God above every passing good.", href: "/pray", category: "prayer", sortOrder: 3 },
  { id: "heaven-link-easter", title: "Easter Hope", description: "Let the Resurrection shape your hope for eternal life.", href: "/liturgical-living/seasons", category: "season", sortOrder: 4 },
] satisfies EschatologyRelatedLink[];

const hellLinks = [
  { id: "hell-link-confession", title: "Confession", description: "Stay close to Christ's mercy and begin again quickly.", href: "/confession", category: "sacrament", sortOrder: 1 },
  { id: "hell-link-sin", title: "Sin and Temptation", description: "Take freedom seriously without losing hope in grace.", href: "/sin-and-temptation", category: "formation", sortOrder: 2 },
  { id: "hell-link-resist", title: "Resisting Temptation", description: "Turn temptation into a moment of prayer and fidelity.", href: "/sin-and-temptation/resisting-temptation", category: "formation", sortOrder: 3 },
  { id: "hell-link-detachment", title: "Detachment from Sin", description: "Ask for freedom from every attachment that pulls the heart from God.", href: "/indulgences/detachment-from-sin", category: "formation", sortOrder: 4 },
] satisfies EschatologyRelatedLink[];

const purgatoryLinks = [
  { id: "purg-link-indulgences", title: "Indulgences", description: "Learn how the Church encourages prayer and mercy for the faithful departed.", href: "/indulgences", category: "formation", sortOrder: 1 },
  { id: "purg-link-detachment", title: "Detachment from Sin", description: "See how purification begins already in this life by grace.", href: "/indulgences/detachment-from-sin", category: "formation", sortOrder: 2 },
  { id: "purg-link-penitential-psalms", title: "Seven Penitential Psalms", description: "Pray with repentance, mercy, and hope for purification.", href: "/prayers/seven-penitential-psalms", category: "prayer", sortOrder: 3 },
] satisfies EschatologyRelatedLink[];

const resurrectionLinks = [
  { id: "res-link-season", title: "Liturgical Seasons", description: "See how Easter hope runs through the Church's year.", href: "/liturgical-living/seasons", category: "season", sortOrder: 1 },
  { id: "res-link-glorious", title: "Glorious Mysteries", description: "Pray the Resurrection and the promise of glory with Mary.", href: "/devotions/holy-rosary/glorious-mysteries", category: "devotion", sortOrder: 2 },
  { id: "res-link-heaven", title: "Heaven", description: "Keep your hope fixed on eternal communion with God.", href: "/formation/eschatology/heaven", category: "topic", sortOrder: 3 },
] satisfies EschatologyRelatedLink[];

const secondComingLinks = [
  { id: "second-link-prophecy", title: "Prophecy Series", description: "Think about prophecy with Scripture, humility, and Catholic discernment.", href: "/prophecy-series", category: "media", sortOrder: 1 },
  { id: "second-link-advent", title: "Advent", description: "Live watchfully for Christ's coming with prayer and hope.", href: "/liturgical-living/advent", category: "season", sortOrder: 2 },
  { id: "second-link-judgment", title: "Judgment", description: "See how watchfulness and judgment belong together in Christian hope.", href: "/formation/eschatology/judgment", category: "topic", sortOrder: 3 },
] satisfies EschatologyRelatedLink[];

export const eschatologyTopics: EschatologyTopic[] = [
  {
    id: "esch-topic-death",
    title: "Death and Christian Hope",
    slug: "death",
    subtitle: "Catholic teaching sees death not as the final word, but as a passage transformed by Christ.",
    description: "Learn how the Church speaks about death with realism, faith, mercy, and hope in eternal life.",
    href: "/formation/eschatology/death",
    category: "last-things",
    scriptureReferences: [eschatologyScriptureReferences[0], eschatologyScriptureReferences[2], eschatologyScriptureReferences[8]],
    catechismReferences: ["CCC 1005–1014"],
    reflectionQuestions: [
      "Do I prepare for death with faith or avoid thinking about it altogether?",
      "How would I live differently if I remembered that life is a gift ordered toward eternity?",
      "What step would help me live more peacefully in God's grace now?",
    ],
    relatedLinks: deathLinks,
    sortOrder: 1,
  },
  {
    id: "esch-topic-judgment",
    title: "Particular Judgment and Final Judgment",
    slug: "judgment",
    subtitle: "Catholic teaching on the soul's encounter with Christ after death and the final revelation of all things.",
    description: "See how judgment reveals truth, justice, mercy, and the seriousness of how we live.",
    href: "/formation/eschatology/judgment",
    category: "last-things",
    scriptureReferences: [eschatologyScriptureReferences[1], eschatologyScriptureReferences[5], eschatologyScriptureReferences[8]],
    catechismReferences: ["CCC 1020–1022", "CCC 1038–1041"],
    reflectionQuestions: [
      "Does the thought of judgment lead me to fear alone or to honest conversion?",
      "How can I let the works of mercy shape the way I live now?",
      "What part of my life needs to be brought more fully into the light of Christ?",
    ],
    relatedLinks: judgmentLinks,
    sortOrder: 2,
  },
  {
    id: "esch-topic-heaven",
    title: "Heaven and the Beatific Vision",
    slug: "heaven",
    subtitle: "The fulfillment of human longing in perfect communion with God.",
    description: "Contemplate Heaven as union with God, communion with the saints, and the end for which we were made.",
    href: "/formation/eschatology/heaven",
    category: "last-things",
    scriptureReferences: [eschatologyScriptureReferences[3], eschatologyScriptureReferences[7]],
    catechismReferences: ["CCC 1023–1029"],
    reflectionQuestions: [
      "Do I desire Heaven more than passing comforts?",
      "How can prayer deepen my longing for God Himself?",
      "What does hope for Heaven change in the way I live today?",
    ],
    relatedLinks: heavenLinks,
    sortOrder: 3,
  },
  {
    id: "esch-topic-hell",
    title: "Hell and the Seriousness of Freedom",
    slug: "hell",
    subtitle: "A sober Catholic explanation of eternal separation from God and the call to repentance.",
    description: "Approach the Church's teaching on Hell with sobriety, mercy, and the call to repentance, never with sensationalism.",
    href: "/formation/eschatology/hell",
    category: "last-things",
    scriptureReferences: [eschatologyScriptureReferences[1], eschatologyScriptureReferences[8]],
    catechismReferences: ["CCC 1033–1037"],
    reflectionQuestions: [
      "Does this teaching lead me to repentance and trust in mercy?",
      "Where do I need to stop presuming on time or grace?",
      "What next step would keep me close to Christ and His sacraments?",
    ],
    relatedLinks: hellLinks,
    sortOrder: 4,
  },
  {
    id: "esch-topic-purgatory",
    title: "Purgatory and Final Purification",
    slug: "purgatory",
    subtitle: "God's merciful purification of those who die in His grace but still need healing before Heaven.",
    description: "Understand Purgatory as hope-filled purification and a summons to pray for the dead with love.",
    href: "/formation/eschatology/purgatory",
    category: "last-things",
    scriptureReferences: [eschatologyScriptureReferences[6], eschatologyScriptureReferences[7]],
    catechismReferences: ["CCC 1030–1032"],
    reflectionQuestions: [
      "Do I pray for the faithful departed with love and hope?",
      "How can my own life become more open to purification and healing now?",
      "What act of mercy could I offer for the dead this week?",
    ],
    relatedLinks: purgatoryLinks,
    sortOrder: 5,
  },
  {
    id: "esch-topic-resurrection",
    title: "The Resurrection of the Body",
    slug: "resurrection-of-the-body",
    subtitle: "Catholic hope includes the whole person: body and soul.",
    description: "See how Christ's Resurrection grounds the dignity of the human body and the hope of final glory.",
    href: "/formation/eschatology/resurrection-of-the-body",
    category: "last-things",
    scriptureReferences: [eschatologyScriptureReferences[0], eschatologyScriptureReferences[4], eschatologyScriptureReferences[7]],
    catechismReferences: ["CCC 988–1019"],
    reflectionQuestions: [
      "How does belief in bodily resurrection change the way I view the human person?",
      "How can Easter hope make me more faithful in suffering and waiting?",
      "Where is Christ asking me to live with hope instead of resignation?",
    ],
    relatedLinks: resurrectionLinks,
    sortOrder: 6,
  },
  {
    id: "esch-topic-second-coming",
    title: "The Second Coming of Christ",
    slug: "second-coming",
    subtitle: "Christ will return in glory to judge the living and the dead and bring God's Kingdom to fulfillment.",
    description: "Approach the Lord's return with vigilance, hope, and freedom from panic, speculation, and date-setting.",
    href: "/formation/eschatology/second-coming",
    category: "last-things",
    scriptureReferences: [eschatologyScriptureReferences[6], eschatologyScriptureReferences[7]],
    catechismReferences: ["CCC 1042–1050", "CCC 1038–1041"],
    reflectionQuestions: [
      "Does thinking about Christ's return lead me to peace and conversion?",
      "What would watchfulness look like in my prayer and daily life now?",
      "Where do I need to replace speculation with trust in Christ?",
    ],
    relatedLinks: secondComingLinks,
    sortOrder: 7,
  },
] as const;

export const eternityPrayer = `Lord Jesus Christ,
You are the Resurrection and the Life.

Teach me to live each day in the light of eternity.
Free me from fear, presumption, and despair.
Give me true repentance,
deep trust in Your mercy,
and a heart ready to meet You.

Help me prepare for death with faith,
welcome Your judgment with humility,
long for Heaven with hope,
pray for the dead with love,
and live now as a faithful citizen of Your Kingdom.

May my life be ordered toward You,
my final end and my eternal joy.

Amen.`;
