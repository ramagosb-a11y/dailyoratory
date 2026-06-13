import type {
  BurialDispositionOption,
  CatholicBurialFAQ,
  CatholicBurialReference,
  CatholicBurialRelatedLink,
  CatholicFuneralRite,
  FuneralPlanningChecklistItem,
  PrayerForDead,
} from "@/types/catholicBurial";

export const burialDispositionOptions: BurialDispositionOption[] = [
  {
    id: "traditional-burial",
    title: "Traditional Burial",
    description:
      "The Church continues to prefer burial of the body because it clearly expresses faith in the resurrection and reverence for the body.",
    catholicGuidance:
      "Burial in a cemetery is a deeply Christian witness that the body is not discarded, but laid to rest in hope.",
    href: "/formation/catholic-burial",
    sortOrder: 10,
  },
  {
    id: "cremation",
    title: "Cremation",
    description:
      "Cremation is permitted when it is not chosen for reasons contrary to Christian faith. Cremated remains should be treated with the same reverence as the body and placed in a sacred resting place.",
    catholicGuidance:
      "Choose reverent interment in a cemetery, mausoleum, or columbarium rather than scattering, dividing, or keeping remains as personal keepsakes.",
    href: "/formation/catholic-burial/cremation",
    sortOrder: 20,
  },
  {
    id: "entombment",
    title: "Entombment",
    description:
      "The body may be entombed in a mausoleum or crypt according to Catholic and local cemetery practice.",
    catholicGuidance:
      "Families should work with the parish and cemetery so the resting place remains reverent, stable, and suitable for prayer.",
    sortOrder: 30,
  },
  {
    id: "columbarium",
    title: "Columbarium",
    description:
      "Cremated remains may be placed in a columbarium niche, often within a Catholic cemetery, parish, or consecrated place.",
    catholicGuidance:
      "A columbarium can provide a sacred place of remembrance, prayer, and reverent interment for cremated remains.",
    sortOrder: 40,
  },
  {
    id: "organ-donation",
    title: "Donation of Organs",
    description:
      "Organ donation can be an act of charity when done with respect for the person and without violating moral law. It should not prevent proper funeral and burial arrangements.",
    catholicGuidance:
      "Families should preserve reverence for the body and seek moral clarity if questions arise about timing or procedure.",
    sortOrder: 50,
  },
  {
    id: "newer-forms",
    title: "Other Newer Forms",
    description:
      "Some newer methods of disposition may not align with Catholic respect for the body or belief in the resurrection.",
    catholicGuidance:
      "Before choosing scattering, composting, alkaline hydrolysis, or memorial keepsakes, speak with your parish, diocese, or Catholic cemetery.",
    sortOrder: 60,
  },
];

export const catholicFuneralRites: CatholicFuneralRite[] = [
  {
    id: "vigil",
    title: "Vigil or Wake",
    description: "A time for prayer, Scripture, memory, and support for the grieving family.",
    purpose: "The Vigil begins the Church's prayer for the deceased and gathers loved ones in hope and charity.",
    sortOrder: 10,
  },
  {
    id: "funeral-mass",
    title: "Funeral Mass or Funeral Liturgy",
    description:
      "The central prayer of the Church for the deceased. The Eucharist proclaims Christ's death and resurrection and offers the greatest prayer for the soul.",
    purpose: "The funeral liturgy commends the deceased to God and strengthens the living with the promise of Christ.",
    sortOrder: 20,
  },
  {
    id: "committal",
    title: "Rite of Committal",
    description:
      "The final prayer at the cemetery, mausoleum, or columbarium, entrusting the body or cremated remains to a sacred resting place.",
    purpose: "The Rite of Committal places the deceased in a place of reverent rest while keeping Christian hope fixed on resurrection.",
    sortOrder: 30,
  },
];

export const funeralPlanningChecklistItems: FuneralPlanningChecklistItem[] = [
  { id: "parish", label: "Contact the parish as soon as possible.", description: "Begin with pastoral guidance rather than handling everything alone.", sortOrder: 10 },
  { id: "funeral-home", label: "Contact a Catholic funeral home or funeral director if available.", description: "Ask about local parish and cemetery practices.", sortOrder: 20 },
  { id: "vigil", label: "Ask about a Vigil or wake service.", description: "The Vigil is often the first public prayer for the deceased.", sortOrder: 30 },
  { id: "mass", label: "Plan the Funeral Mass or funeral liturgy with the parish.", description: "Work with the parish on timing, rite, and pastoral needs.", sortOrder: 40 },
  { id: "readings", label: "Choose Scripture readings with parish guidance.", description: "Let the Word of God speak hope and mercy into grief.", sortOrder: 50 },
  { id: "music", label: "Ask about music that is appropriate for Catholic liturgy.", description: "Music should serve prayer, worship, and Christian hope.", sortOrder: 60 },
  { id: "interment", label: "Arrange burial or entombment in a cemetery, mausoleum, or columbarium.", description: "Choose a sacred resting place suited to prayer and remembrance.", sortOrder: 70 },
  { id: "cremation", label: "If cremation is chosen, ask how the cremated remains should be handled.", description: "Plan reverent interment rather than scattering or keeping remains at home.", sortOrder: 80 },
  { id: "committal", label: "Arrange the Rite of Committal.", description: "Include the final Church prayer at the place of burial or interment.", sortOrder: 90 },
  { id: "masses", label: "Consider requesting Masses for the deceased.", description: "Continue prayer for the soul after the funeral rites.", sortOrder: 100 },
  { id: "continue-prayer", label: "Continue praying for the soul after the funeral.", description: "Love and intercession do not end when the rites are complete.", sortOrder: 110 },
];

export const prayersForTheDead: PrayerForDead[] = [
  {
    id: "deceased-loved-one",
    title: "Prayer for a Deceased Loved One",
    prayer:
      "Lord Jesus Christ,\nYou are the Resurrection and the Life.\n\nI entrust my beloved dead to Your mercy.\nForgive their sins,\npurify them in Your love,\nand bring them into the joy of Your Kingdom.\n\nComfort those who mourn.\nStrengthen our faith.\nTeach us to grieve with hope.\n\nMay the souls of the faithful departed,\nthrough the mercy of God,\nrest in peace.\n\nAmen.",
    category: "general",
    sortOrder: 10,
  },
  {
    id: "faithful-departed",
    title: "Prayer for the Faithful Departed",
    prayer:
      "Eternal rest grant unto them, O Lord,\nand let perpetual light shine upon them.\nMay they rest in peace.\nAmen.\n\nMay their souls and the souls of all the faithful departed,\nthrough the mercy of God,\nrest in peace.\nAmen.",
    category: "general",
    sortOrder: 20,
  },
  {
    id: "recently-deceased",
    title: "Prayer for Someone Recently Deceased",
    prayer:
      "Merciful Father,\nreceive Your servant with compassion.\nCalm every fear,\nforgive every sin,\nand let the hope of Christ surround all who mourn.\n\nBring this soul into Your peace,\nand strengthen us to trust in Your mercy.\n\nAmen.",
    category: "bereavement",
    sortOrder: 30,
  },
  {
    id: "anniversary",
    title: "Prayer on the Anniversary of Death",
    prayer:
      "Lord,\nwe remember with gratitude the life of our loved one today.\nHold them in Your mercy,\npurify what still needs healing,\nand deepen in us the hope of the resurrection.\n\nTeach us to remember with love,\npray with faith,\nand live in readiness for eternal life.\n\nAmen.",
    category: "anniversary",
    sortOrder: 40,
  },
  {
    id: "souls-in-purgatory",
    title: "Prayer for Souls in Purgatory",
    prayer:
      "Lord Jesus,\nin Your mercy remember the souls who await the fullness of Heaven.\nPurify them in love,\nreceive the prayers of Your Church for them,\nand bring them into the light of Your face.\n\nAmen.",
    category: "purgatory",
    sortOrder: 50,
  },
  {
    id: "cemetery-visit",
    title: "Prayer Before Visiting a Cemetery",
    prayer:
      "Lord God,\nbless this visit and make it an act of faith.\nAs I come to this place of rest,\nhelp me pray with charity for the dead,\nremember with gratitude,\nand hope in the resurrection promised in Christ.\n\nAmen.",
    category: "cemetery",
    sortOrder: 60,
  },
  {
    id: "after-funeral",
    title: "Prayer After a Funeral",
    prayer:
      "Lord,\nnow that the funeral rites are complete,\nkeep us close to Your mercy.\nReceive the soul of the departed,\ncomfort all who grieve,\nand help us continue in prayer, faith, and hope.\n\nAmen.",
    category: "bereavement",
    sortOrder: 70,
  },
];

export const catholicBurialReferences: CatholicBurialReference[] = [
  {
    id: "usccb-cremation-funerals",
    title: "USCCB: Cremation and Funerals",
    description: "Pastoral guidance on Catholic funerals, cremation, and reverent handling of cremated remains.",
    url: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/bereavement-and-funerals/cremation-and-funerals",
    source: "USCCB",
    sortOrder: 10,
  },
  {
    id: "vatican-ad-resurgendum",
    title: "Vatican: Ad resurgendum cum Christo",
    description: "Instruction on burial of the deceased and conservation of cremated remains in the case of cremation.",
    url: "https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_20160815_ad-resurgendum-cum-christo_en.html",
    source: "Vatican",
    sortOrder: 20,
  },
  {
    id: "usccb-cremains-guidance",
    title: "USCCB News: Vatican Guidance on Handling Cremains",
    description: "Helpful summary of more recent Vatican guidance on reverent treatment of cremated remains.",
    url: "https://www.usccb.org/news/2023/vatican-offers-further-guidance-handling-cremains",
    source: "USCCB",
    sortOrder: 30,
  },
];

export const catholicBurialRelatedLinks: CatholicBurialRelatedLink[] = [
  {
    id: "death-hope",
    title: "Death and Christian Hope",
    description: "Prepare for death with faith, repentance, hope, and trust in Christ.",
    href: "/formation/eschatology/death",
    category: "eschatology",
    sortOrder: 10,
  },
  {
    id: "purgatory",
    title: "Purgatory",
    description: "Learn why Catholics pray for the dead and trust God's final purification.",
    href: "/formation/eschatology/purgatory",
    category: "eschatology",
    sortOrder: 20,
  },
  {
    id: "resurrection",
    title: "Resurrection of the Body",
    description: "See why reverence for the body matters in Christian hope.",
    href: "/formation/eschatology/resurrection-of-the-body",
    category: "eschatology",
    sortOrder: 30,
  },
  {
    id: "anointing",
    title: "Anointing of the Sick",
    description: "Learn about the Church's care for the seriously ill and those near death.",
    href: "/sacraments/anointing",
    category: "sacraments",
    sortOrder: 40,
  },
  {
    id: "confession",
    title: "Confession Guide",
    description: "A gentle guide to mercy, repentance, and sacramental preparation.",
    href: "/confession",
    category: "sacraments",
    sortOrder: 50,
  },
  {
    id: "indulgences",
    title: "Indulgences",
    description: "Learn how the Church prays for mercy, purification, and the faithful departed.",
    href: "/indulgences",
    category: "formation",
    sortOrder: 60,
  },
  {
    id: "mass-intentions",
    title: "Mass Intentions",
    description: "Learn why Catholics request Masses for the dead and how to begin with the parish.",
    href: "/mass-intentions",
    category: "prayer",
    sortOrder: 65,
  },
  {
    id: "prayers-dead",
    title: "Prayers for the Dead",
    description: "Pray for deceased loved ones, souls in Purgatory, and cemetery visits.",
    href: "/formation/catholic-burial/prayers-for-the-dead",
    category: "prayer",
    sortOrder: 70,
  },
  {
    id: "penitential-psalms",
    title: "Seven Penitential Psalms",
    description: "Pray with repentance, mercy, and hope before God.",
    href: "/prayers/seven-penitential-psalms",
    category: "prayer",
    sortOrder: 80,
  },
  {
    id: "formation",
    title: "Formation",
    description: "Continue growing in Catholic faith, hope, virtue, and discipleship.",
    href: "/formation",
    category: "formation",
    sortOrder: 90,
  },
];

export const catholicBurialFaqs: CatholicBurialFAQ[] = [
  {
    id: "is-cremation-allowed",
    question: "Is cremation allowed for Catholics?",
    answer:
      "Yes. Cremation is permitted when it is not chosen for reasons contrary to Christian faith. The cremated remains should still be treated with reverence and placed in a sacred resting place.",
    category: "cremation",
    sortOrder: 10,
  },
  {
    id: "ashes-at-home",
    question: "What if ashes are already being kept at home?",
    answer:
      "Do not panic or feel ashamed. Contact a parish priest or Catholic cemetery for guidance on reverent interment. The next faithful step matters.",
    category: "cremation",
    sortOrder: 20,
  },
  {
    id: "funeral-mass-necessary",
    question: "Does every Catholic funeral include a Funeral Mass?",
    answer:
      "A Funeral Mass is the fullest expression of the Church's prayer for the deceased when it is possible and appropriate. In some situations, a funeral liturgy outside Mass may be used according to pastoral and diocesan guidance.",
    category: "funeral",
    sortOrder: 30,
  },
  {
    id: "need-parish-guidance",
    question: "Should families contact the parish before making arrangements?",
    answer:
      "Yes. The parish can help with funeral rites, readings, music, scheduling, and local burial or cremation norms. It is best to involve the parish early.",
    category: "planning",
    sortOrder: 40,
  },
];
