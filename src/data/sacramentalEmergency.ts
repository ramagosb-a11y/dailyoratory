import type {
  EmergencyChecklistItem,
  EmergencyPrayer,
  SacramentalEmergencyCard,
  SacramentalEmergencyLink,
  SacramentalEmergencyStep,
} from "@/types/sacramentalEmergency";

function link(id: string, label: string, href: string, description: string, sortOrder: number): SacramentalEmergencyLink {
  return { id, label, href, description, sortOrder };
}

export const sacramentalEmergencyCards: SacramentalEmergencyCard[] = [
  {
    id: "someone-dying",
    title: "Someone is dying",
    description:
      "Call emergency services if needed. Contact a Catholic priest immediately and ask for the sacraments of the sick, Viaticum, and prayer for the dying when appropriate.",
    primaryLabel: "Go to steps",
    primaryHref: "#someone-is-dying",
    relatedLinks: [
      link("card-dying-death", "Death and Christian Hope", "/formation/eschatology/death", "A Catholic guide to preparing with faith and hope.", 1),
      link("card-dying-anointing", "Anointing of the Sick", "/sacraments/anointing", "Learn about grace in serious illness.", 2),
      link("card-dying-pray", "Prayer with a Dying Person", "#pray-now", "Short prayers when urgency is present.", 3),
    ],
    category: "Urgent Care",
    sortOrder: 1,
  },
  {
    id: "need-anointing",
    title: "Need Anointing of the Sick",
    description:
      "Anointing of the Sick is for serious illness, danger of death, major surgery, frailty, or serious decline. Contact a priest early.",
    primaryLabel: "Learn what to do",
    primaryHref: "#anointing-of-the-sick",
    relatedLinks: [
      link("card-anointing", "Anointing of the Sick", "/sacraments/anointing", "See what the sacrament is and when to call.", 1),
      link("card-anointing-death", "Death and Christian Hope", "/formation/eschatology/death", "See the larger Catholic context of hope.", 2),
    ],
    category: "Urgent Care",
    sortOrder: 2,
  },
  {
    id: "urgent-confession",
    title: "Need Confession urgently",
    description:
      "If serious sin or danger of death is involved, contact a priest directly. If immediate Confession is not available, make an act of contrition and seek Confession as soon as possible.",
    primaryLabel: "Confession steps",
    primaryHref: "#urgent-confession",
    relatedLinks: [
      link("card-confession-guide", "Confession Guide", "/confession", "Prepare simply and honestly.", 1),
      link("card-confession-prayers", "Confession Prayers", "/confession/prayers", "Pray while you wait for a priest.", 2),
    ],
    category: "Urgent Care",
    sortOrder: 3,
  },
  {
    id: "need-priest",
    title: "Need a priest",
    description:
      "Call your parish, parish emergency line, nearby Catholic parishes, hospital chaplain, or local diocese. If at a hospital, ask staff for the Catholic chaplain.",
    primaryLabel: "Find a priest steps",
    primaryHref: "#need-a-priest",
    relatedLinks: [],
    category: "Contact",
    sortOrder: 4,
  },
  {
    id: "viaticum",
    title: "What is Viaticum?",
    description:
      "Viaticum is Holy Communion given to a Catholic near death as food for the journey.",
    primaryLabel: "Learn about Viaticum",
    primaryHref: "#viaticum",
    relatedLinks: [
      link("card-viaticum-eucharist", "Eucharist", "/sacraments/eucharist", "See why Communion is the Church's great gift at the end of life.", 1),
      link("card-viaticum-death", "Death and Christian Hope", "/formation/eschatology/death", "See how Viaticum fits into Christian hope.", 2),
    ],
    category: "Explainers",
    sortOrder: 5,
  },
  {
    id: "apostolic-pardon",
    title: "What is the Apostolic Pardon?",
    description:
      "The Apostolic Pardon is a priestly blessing with a plenary indulgence for a Catholic in danger of death.",
    primaryLabel: "Learn about Apostolic Pardon",
    primaryHref: "#apostolic-pardon",
    relatedLinks: [
      link("card-apostolic-death", "Death and Christian Hope", "/formation/eschatology/death", "Use the end-of-life guide while asking a priest about this blessing.", 1),
      link("card-apostolic-indulgences", "Indulgences", "/indulgences", "Learn what indulgences are and are not.", 2),
    ],
    category: "Explainers",
    sortOrder: 6,
  },
  {
    id: "pray-if-no-priest",
    title: "What to pray if a priest cannot arrive",
    description:
      "Do not despair. Pray calmly with the person, encourage trust in Jesus, and make acts of faith, hope, charity, and contrition.",
    primaryLabel: "Pray now",
    primaryHref: "#pray-now",
    relatedLinks: [],
    category: "Prayer",
    sortOrder: 7,
  },
  {
    id: "after-hours",
    title: "How to contact a parish after hours",
    description:
      "Call the parish office and listen for an emergency option. Try nearby Catholic parishes, hospital chaplaincy, or the local diocese.",
    primaryLabel: "Contact steps",
    primaryHref: "#contact-after-hours",
    relatedLinks: [],
    category: "Contact",
    sortOrder: 8,
  },
];

export const someoneIsDyingSteps: SacramentalEmergencyStep[] = [
  { id: "dying-1", title: "Call emergency services if there is immediate medical danger.", description: "Life-saving medical care comes first.", category: "someone-is-dying", sortOrder: 1 },
  { id: "dying-2", title: "Call the person's parish or the nearest Catholic parish.", description: "Say clearly that someone is in danger of death.", category: "someone-is-dying", sortOrder: 2 },
  { id: "dying-3", title: "Ask for a priest for someone in danger of death.", description: "Keep the request brief and direct.", category: "someone-is-dying", sortOrder: 3 },
  { id: "dying-4", title: "Ask about Confession, Anointing of the Sick, Viaticum, and prayer for the dying.", description: "The priest or parish can tell you what is possible.", category: "someone-is-dying", sortOrder: 4 },
  { id: "dying-5", title: "If in a hospital, ask staff to contact the Catholic chaplain.", description: "Use the hospital's own chaplain system if available.", category: "someone-is-dying", sortOrder: 5 },
  { id: "dying-6", title: "Keep the room calm and prayerful.", description: "A peaceful atmosphere helps everyone.", category: "someone-is-dying", sortOrder: 6 },
  { id: "dying-7", title: "Place a crucifix, Rosary, or sacred image nearby if appropriate.", description: "These signs can help focus the heart on Christ.", category: "someone-is-dying", sortOrder: 7 },
  { id: "dying-8", title: "Pray simply and encourage trust in Jesus.", description: "Do not overload the moment with too many words.", category: "someone-is-dying", sortOrder: 8 },
  { id: "dying-9", title: "Do not wait until the final moments if serious illness is present.", description: "Calling early often makes sacramental care more possible.", category: "someone-is-dying", sortOrder: 9 },
  { id: "dying-10", title: "Continue praying after the priest leaves.", description: "The family's prayer remains an act of love and hope.", category: "someone-is-dying", sortOrder: 10 },
];

export const emergencyChecklist: EmergencyChecklistItem[] = [
  { id: "check-1", label: "Call emergency services if medical danger is immediate.", description: "Safety comes first.", sortOrder: 1 },
  { id: "check-2", label: "Call the parish or nearest Catholic parish.", description: "Ask directly for a priest.", sortOrder: 2 },
  { id: "check-3", label: "Say clearly if someone is in danger of death.", description: "This helps the parish triage urgency.", sortOrder: 3 },
  { id: "check-4", label: "Ask about Confession if the person is able.", description: "A priest can guide what is possible.", sortOrder: 4 },
  { id: "check-5", label: "Ask for Anointing of the Sick.", description: "Do not wait if serious illness is present.", sortOrder: 5 },
  { id: "check-6", label: "Ask about Viaticum.", description: "Holy Communion may be possible if the person can receive.", sortOrder: 6 },
  { id: "check-7", label: "Ask about the Apostolic Pardon.", description: "Use simple language and ask the priest directly.", sortOrder: 7 },
  { id: "check-8", label: "Prepare a quiet prayerful space.", description: "Reduce noise and unnecessary activity.", sortOrder: 8 },
  { id: "check-9", label: "Keep a crucifix, Rosary, or sacred image nearby if appropriate.", description: "Let sacred signs support prayer.", sortOrder: 9 },
  { id: "check-10", label: "Pray calmly.", description: "Short, peaceful prayer is enough.", sortOrder: 10 },
  { id: "check-11", label: "Continue to trust Jesus.", description: "God's mercy remains greater than confusion or delay.", sortOrder: 11 },
];

export const emergencyPrayers: EmergencyPrayer[] = [
  {
    id: "dying-person-prayer",
    title: "Prayer with a Dying Person",
    prayer: `Lord Jesus Christ,\nYou are the Resurrection and the Life.\n\nDraw near to Your servant in this hour.\nSurround them with Your mercy.\nForgive their sins.\nStrengthen their faith.\nCalm every fear.\nReceive them into Your loving care.\n\nMary, Mother of Mercy,\npray for them.\n\nSaint Joseph,\npatron of a happy death,\npray for them.\n\nJesus, we trust in You.\n\nAmen.`,
    category: "main",
    isShort: false,
    sortOrder: 1,
  },
  { id: "short-1", title: "Jesus, I trust in You.", prayer: "Jesus, I trust in You.", category: "short", isShort: true, sortOrder: 2 },
  { id: "short-2", title: "Jesus, have mercy.", prayer: "Jesus, have mercy.", category: "short", isShort: true, sortOrder: 3 },
  { id: "short-3", title: "Lord, receive Your servant in peace.", prayer: "Lord, receive Your servant in peace.", category: "short", isShort: true, sortOrder: 4 },
  { id: "short-4", title: "Mary, Mother of Mercy, pray for us.", prayer: "Mary, Mother of Mercy, pray for us.", category: "short", isShort: true, sortOrder: 5 },
  { id: "short-5", title: "Saint Joseph, patron of a happy death, pray for us.", prayer: "Saint Joseph, patron of a happy death, pray for us.", category: "short", isShort: true, sortOrder: 6 },
  { id: "short-6", title: "Into Your hands, Lord, we entrust this soul.", prayer: "Into Your hands, Lord, we entrust this soul.", category: "short", isShort: true, sortOrder: 7 },
];
