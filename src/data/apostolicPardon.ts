import type {
  ApostolicPardonFAQ,
  ApostolicPardonRelatedLink,
  EndOfLifeChecklistItem,
} from "@/types/apostolicPardon";

export const apostolicPardonPrayer = `Lord Jesus Christ,
You are the Resurrection and the Life.

Draw near to Your servant in this hour.
Surround them with Your mercy.
Forgive their sins.
Strengthen their faith.
Calm every fear.
Receive them into Your loving care.

Mary, Mother of Mercy,
pray for them.

Saint Joseph,
patron of a happy death,
pray for them.

Jesus, we trust in You.

Amen.`;

export const apostolicPardonFamilySteps = [
  "Contact the parish or local priest as soon as serious illness or danger of death is present.",
  "Ask for Confession, Anointing of the Sick, Viaticum, and the Apostolic Pardon if appropriate.",
  "Do not wait until the person is unconscious if it can be avoided.",
  "Prepare a quiet and prayerful space.",
  "Place a crucifix, candle, Rosary, or sacred image nearby if appropriate.",
  "Pray calmly with the person.",
  "Encourage trust in Jesus, not fear.",
  "Continue praying after the priest leaves.",
] as const;

export const apostolicPardonChecklistItems: EndOfLifeChecklistItem[] = [
  {
    id: "end-of-life-call-priest",
    label: "Call a priest early.",
    description: "Contact the parish or Catholic chaplain as soon as serious illness or danger of death is present.",
    sortOrder: 1,
  },
  {
    id: "end-of-life-confession",
    label: "Ask for Confession if the person is able.",
    description: "Confession allows the person to receive absolution and reconciliation with God.",
    sortOrder: 2,
  },
  {
    id: "end-of-life-anointing",
    label: "Ask for Anointing of the Sick.",
    description: "This sacrament gives peace, courage, grace, and spiritual strength.",
    sortOrder: 3,
  },
  {
    id: "end-of-life-viaticum",
    label: "Ask about Viaticum.",
    description: "Holy Communion near death strengthens the soul for the final journey.",
    sortOrder: 4,
  },
  {
    id: "end-of-life-apostolic-pardon",
    label: "Ask about the Apostolic Pardon.",
    description: "A priest may give this special blessing with plenary indulgence at the hour of death.",
    sortOrder: 5,
  },
  {
    id: "end-of-life-crucifix",
    label: "Keep a crucifix or sacred image nearby.",
    description: "Simple sacramentals can help create a peaceful, prayerful setting.",
    sortOrder: 6,
  },
  {
    id: "end-of-life-pray-calmly",
    label: "Pray calmly and simply.",
    description: "Short prayers of trust, mercy, and surrender help the soul rest in Christ.",
    sortOrder: 7,
  },
  {
    id: "end-of-life-encourage-trust",
    label: "Encourage trust in Jesus.",
    description: "Avoid frightening language and gently remind the person of God's mercy.",
    sortOrder: 8,
  },
  {
    id: "end-of-life-avoid-fear",
    label: "Avoid frightening the person.",
    description: "The goal is peace, confidence in Christ, and readiness to receive grace.",
    sortOrder: 9,
  },
  {
    id: "end-of-life-pray-after-death",
    label: "After death, continue praying for the soul.",
    description: "Commend the person to God with prayer, charity, and hope.",
    sortOrder: 10,
  },
  {
    id: "end-of-life-funeral",
    label: "Arrange a Catholic funeral and burial if possible.",
    description: "The funeral rites continue the Church's prayer and hope for the departed.",
    sortOrder: 11,
  },
  {
    id: "end-of-life-masses",
    label: "Offer Masses for the deceased.",
    description: "Mass intentions are a fitting and loving way to pray for the dead.",
    sortOrder: 12,
  },
] as const;

export const apostolicPardonFaqs: ApostolicPardonFAQ[] = [
  {
    id: "apostolic-pardon-faq-anointing",
    question: "Is the Apostolic Pardon the same as Anointing of the Sick?",
    answer:
      "No. Anointing of the Sick is a sacrament. The Apostolic Pardon is a special blessing with a plenary indulgence for someone in danger of death. They are often given together when possible.",
    sortOrder: 1,
  },
  {
    id: "apostolic-pardon-faq-layperson",
    question: "Can a layperson give the Apostolic Pardon?",
    answer:
      "No. The Apostolic Pardon is given by a priest. Laypeople can still pray with the dying person, encourage trust in Jesus, and entrust them to God's mercy.",
    sortOrder: 2,
  },
  {
    id: "apostolic-pardon-faq-wait",
    question: "Should we wait until the final moments?",
    answer:
      "No. Contact a priest as soon as serious illness or danger of death is present. It is better for the person to receive the sacraments while conscious if possible.",
    sortOrder: 3,
  },
  {
    id: "apostolic-pardon-faq-not-practicing",
    question: "What if the person has not been practicing the faith?",
    answer:
      "Still contact a priest. Encourage peace, trust, and openness to God's mercy. The priest can guide the situation pastorally.",
    sortOrder: 4,
  },
  {
    id: "apostolic-pardon-faq-unconscious",
    question: "What if the person is unconscious?",
    answer:
      "Call a priest anyway. The Church provides pastoral care for those who are unconscious or unable to speak, especially if they would have desired the sacraments.",
    sortOrder: 5,
  },
  {
    id: "apostolic-pardon-faq-afraid",
    question: "What if I am afraid for my loved one?",
    answer:
      "Pray, contact a priest, and entrust them to Jesus. Fear should not be the final word. God is merciful.",
    sortOrder: 6,
  },
] as const;

export const apostolicPardonRelatedLinks: ApostolicPardonRelatedLink[] = [
  {
    id: "apostolic-pardon-link-death",
    title: "Death and Christian Hope",
    description: "Learn how the Church prepares the soul to meet Christ with faith and peace.",
    href: "/formation/eschatology/death",
    category: "eschatology",
    sortOrder: 1,
  },
  {
    id: "apostolic-pardon-link-purgatory",
    title: "Purgatory and Final Purification",
    description: "See how mercy, purification, and prayer for the dead fit together.",
    href: "/formation/eschatology/purgatory",
    category: "eschatology",
    sortOrder: 2,
  },
  {
    id: "apostolic-pardon-link-indulgences",
    title: "Indulgences Guide",
    description: "Understand how indulgences express the Church's ministry of mercy.",
    href: "/indulgences",
    category: "indulgences",
    sortOrder: 3,
  },
  {
    id: "apostolic-pardon-link-detachment",
    title: "Complete Detachment from Sin",
    description: "Learn how grace and sincere conversion dispose the heart toward mercy.",
    href: "/indulgences/detachment-from-sin",
    category: "indulgences",
    sortOrder: 4,
  },
  {
    id: "apostolic-pardon-link-confession",
    title: "Confession Guide",
    description: "Prepare the soul through repentance and absolution when Confession is possible.",
    href: "/confession",
    category: "sacrament",
    sortOrder: 5,
  },
  {
    id: "apostolic-pardon-link-anointing",
    title: "Anointing of the Sick",
    description: "See how this sacrament strengthens the sick and dying with grace and peace.",
    href: "/sacraments/anointing",
    category: "sacrament",
    sortOrder: 6,
  },
  {
    id: "apostolic-pardon-link-penitential-psalms",
    title: "Seven Penitential Psalms",
    description: "Pray repentance, mercy, and hope when preparing the soul for God.",
    href: "/prayers/seven-penitential-psalms",
    category: "prayer",
    sortOrder: 7,
  },
  {
    id: "apostolic-pardon-link-eschatology",
    title: "Catholic Eschatology",
    description: "Return to the larger Catholic teaching on death, judgment, mercy, and eternal life.",
    href: "/formation/eschatology",
    category: "formation",
    sortOrder: 8,
  },
] as const;
