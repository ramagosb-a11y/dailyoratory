import type {
  SacramentChecklistItem,
  SacramentCompanionRecord,
  SacramentName,
  SacramentPrayer,
  SacramentPreparationRole,
  SacramentPreparationStep,
  SacramentReflectionPrompt,
} from "@/types/sacramentCompanion";

const staticSource = { system: "static" as const };
const createdAt = "2026-05-06";
const updatedAt = "2026-05-06";

export const sacramentParishReminder =
  "This companion supports preparation but does not replace your parish or diocesan requirements.";

export const sacramentDecisionBoundary =
  "Daily Oratory does not make canonical, legal, medical, annulment, eligibility, or sacramental readiness decisions. Bring those questions to your parish, priest or deacon, diocesan office, tribunal, physician, or qualified professional as appropriate.";

type CompanionInput = Omit<
  SacramentCompanionRecord,
  | "category"
  | "status"
  | "createdAt"
  | "updatedAt"
  | "visibility"
  | "source"
  | "schemaVersion"
  | "contentType"
  | "parishReminder"
  | "decisionBoundary"
>;

function companion(input: CompanionInput): SacramentCompanionRecord {
  return {
    ...input,
    category: "Sacraments",
    status: "published",
    createdAt,
    updatedAt,
    visibility: "public",
    source: staticSource,
    schemaVersion: 1,
    contentType: "sacrament-companion",
    parishReminder: sacramentParishReminder,
    decisionBoundary: sacramentDecisionBoundary,
  };
}

function step(id: string, title: string, description: string, timeframe: string, resourceIds: string[] = []): SacramentPreparationStep {
  return { id, title, description, timeframe, resourceIds };
}

function checklist(
  id: string,
  title: string,
  description: string,
  role: SacramentPreparationRole = "all",
  category: SacramentChecklistItem["category"] = "formation",
): SacramentChecklistItem {
  return { id, title, description, role, category };
}

function prompt(id: string, promptText: string, context: string, role: SacramentPreparationRole = "all"): SacramentReflectionPrompt {
  return { id, prompt: promptText, context, role };
}

function prayer(id: string, title: string, text: string): SacramentPrayer {
  return { id, title, text, sourceNote: "Original Daily Oratory text" };
}

function baseTags(sacrament: SacramentName, extras: string[]) {
  return ["sacrament companion", sacrament.toLowerCase(), "preparation", ...extras];
}

export const sacramentCompanions: SacramentCompanionRecord[] = [
  companion({
    id: "sacrament-baptism-companion",
    title: "Baptism Preparation Companion",
    slug: "baptism",
    description: "A calm companion for preparing for Baptism with parish guidance, prayer, and family reflection.",
    tags: baseTags("Baptism", ["baptism", "godparent", "family"]),
    relatedResourceIds: ["legacy-sacraments", "prayer-family-evening"],
    sacrament: "Baptism",
    route: "/sacraments/baptism",
    audience: ["families", "parish-groups", "all"],
    preparationFor: ["Parents preparing a child for Baptism", "Adults beginning parish preparation", "Godparents praying for the child"],
    overview:
      "Baptism preparation helps families and candidates receive the sacrament as new life in Christ and entrance into the Church.",
    bestFor: ["Parents", "Godparents", "Adults beginning parish preparation"],
    prayerPractice: "Pray weekly for the person to be baptized and for the household to live the promises with joy.",
    pastoralNote: "Parishes set their own preparation meetings, forms, sponsor expectations, and scheduling process.",
    parishChecklist: ["Contact the parish office", "Attend required preparation", "Confirm godparent or sponsor expectations", "Ask about documents and scheduling"],
    preparationSteps: [
      step("baptism-step-contact-parish", "Contact the Parish", "Begin with the parish that will celebrate the Baptism.", "First step", ["legacy-sacraments"]),
      step("baptism-step-pray-promises", "Pray the Promises", "Reflect on the promises made in Baptism and the household's Catholic life.", "During preparation", ["prayer-family-evening"]),
      step("baptism-step-prepare-day", "Prepare the Day", "Confirm parish details and plan a reverent celebration.", "Before the celebration"),
    ],
    roleChecklists: [
      checklist("baptism-parent-parish", "Confirm parish requirements", "Ask your parish what classes, forms, documents, and scheduling steps are needed.", "parent", "parish"),
      checklist("baptism-parent-prayer", "Pray for the child", "Set a simple weekly family prayer for the child to be baptized.", "parent", "prayer"),
      checklist("baptism-godparent-conversation", "Speak with the parents", "Ask how you can support the child's Catholic life after Baptism.", "godparent", "conversation"),
      checklist("baptism-family-celebration", "Keep the day reverent", "Plan the celebration so prayer, Mass, and family welcome remain central.", "family", "formation"),
    ],
    reflectionPrompts: [
      prompt("baptism-reflect-household", "How will this household help the baptized person know Christ and his Church?", "For parents and family", "family"),
      prompt("baptism-reflect-godparent", "What concrete prayer or presence can I offer as godparent?", "For godparents", "godparent"),
    ],
    prayers: [
      prayer("baptism-prayer-family", "Prayer for Baptism Preparation", "Lord Jesus, prepare this household to welcome the grace of Baptism with faith, gratitude, and lasting love."),
    ],
    printSections: ["Parish requirements to confirm", "Family prayer plan", "Godparent support plan", "Questions for the parish"],
    featured: true,
  }),
  companion({
    id: "sacrament-reconciliation-companion",
    title: "First Reconciliation Companion",
    slug: "reconciliation",
    description: "A gentle preparation path for First Reconciliation and a peaceful return to confession.",
    tags: baseTags("First Reconciliation", ["confession", "mercy", "examination"]),
    relatedResourceIds: ["res-confession-guide", "exam-before-confession", "legacy-sins"],
    sacrament: "First Reconciliation",
    route: "/sacraments/reconciliation",
    audience: ["individuals", "families", "all"],
    preparationFor: ["Children preparing for First Reconciliation", "Parents helping a child prepare", "Catholics returning to confession"],
    overview:
      "Reconciliation preparation keeps the focus on mercy, truth, contrition, and trust in Christ rather than fear.",
    bestFor: ["First Reconciliation families", "Returning Catholics", "Confession preparation"],
    prayerPractice: "Ask the Holy Spirit for light, sorrow for sin, courage, and trust in mercy.",
    pastoralNote: "Use your parish's catechetical sequence and priestly guidance for sacramental preparation.",
    parishChecklist: ["Confirm preparation schedule", "Use parish examination materials", "Ask how the first celebration will be arranged"],
    preparationSteps: [
      step("reconciliation-step-mercy", "Begin with Mercy", "Receive confession as a sacrament of healing and forgiveness.", "Beginning", ["res-confession-guide"]),
      step("reconciliation-step-examine", "Examine Conscience", "Review love of God and neighbor simply and honestly.", "Before confession", ["exam-before-confession"]),
      step("reconciliation-step-go-in-peace", "Go in Peace", "Receive absolution and complete penance promptly.", "After confession"),
    ],
    roleChecklists: [
      checklist("reconciliation-parent-calm", "Keep the tone calm", "Help a child prepare without fear, pressure, or excessive detail.", "parent", "formation"),
      checklist("reconciliation-candidate-examine", "Make a simple examination", "Name sins clearly and trust Christ's mercy.", "candidate", "prayer"),
      checklist("reconciliation-returning-parish", "Confirm confession times", "Find a parish confession time or ask for an appointment.", "returning-catholic", "parish"),
      checklist("reconciliation-penance", "Complete penance", "Do the assigned penance promptly and give thanks.", "all", "prayer"),
    ],
    reflectionPrompts: [
      prompt("reconciliation-reflect-mercy", "Where do I need to trust Christ's mercy more than my fear?", "Before confession"),
      prompt("reconciliation-reflect-amendment", "What one concrete habit can help me begin again?", "After confession"),
    ],
    prayers: [
      prayer("reconciliation-prayer-trust", "Prayer Before Confession", "Merciful Jesus, give me honesty, sorrow for sin, courage to confess, and trust in your forgiveness."),
    ],
    printSections: ["Simple examination", "Confession time", "Questions for parents or catechist", "Thanksgiving after confession"],
    featured: true,
  }),
  companion({
    id: "sacrament-first-communion-companion",
    title: "First Communion Companion",
    slug: "first-communion",
    description: "A family-centered companion for preparing for First Communion with reverence and gratitude.",
    tags: baseTags("First Communion", ["eucharist", "mass", "family"]),
    relatedResourceIds: ["legacy-the-eucharist", "legacy-mass", "prayer-before-adoration"],
    sacrament: "First Communion",
    route: "/sacraments/first-communion",
    audience: ["families", "parish-groups", "all"],
    preparationFor: ["Children preparing for First Communion", "Parents and families", "Catechists supporting parish preparation"],
    overview:
      "First Communion preparation helps a child and family approach the Eucharist with faith, reverence, and thanksgiving.",
    bestFor: ["First Communion families", "Catechists", "Parish sacrament teams"],
    prayerPractice: "Attend Sunday Mass together and make a brief thanksgiving after Communion.",
    pastoralNote: "Your parish determines readiness process, catechesis schedule, rehearsal, attire, and celebration details.",
    parishChecklist: ["Attend parish sessions", "Confirm rehearsal and celebration details", "Ask about First Reconciliation sequence", "Prepare for Sunday Mass"],
    preparationSteps: [
      step("communion-step-sunday-mass", "Enter Sunday Mass", "Make Sunday Mass the center of preparation.", "Throughout preparation", ["legacy-mass"]),
      step("communion-step-eucharist", "Learn Eucharistic Reverence", "Practice quiet, posture, and thanksgiving before the Lord.", "During preparation", ["legacy-the-eucharist"]),
      step("communion-step-thanksgiving", "Prepare Thanksgiving", "Plan a simple prayer of thanksgiving after First Communion.", "Before the celebration", ["prayer-before-adoration"]),
    ],
    roleChecklists: [
      checklist("communion-parent-mass", "Keep Sunday Mass central", "Help the child connect preparation to real worship with the parish.", "parent", "formation"),
      checklist("communion-child-prayer", "Practice thanksgiving", "Help the child pray a simple thanksgiving after Communion.", "candidate", "prayer"),
      checklist("communion-family-simple", "Keep celebration ordered", "Let the day remain reverent and not only social.", "family", "formation"),
      checklist("communion-parish-details", "Confirm parish details", "Ask about rehearsal, arrival time, attire, photos, and seating.", "parent", "parish"),
    ],
    reflectionPrompts: [
      prompt("communion-reflect-hunger", "What does it mean to hunger for Jesus in the Eucharist?", "For child and family", "family"),
      prompt("communion-reflect-thanksgiving", "How can our family practice thanksgiving after Mass?", "For parents", "parent"),
    ],
    prayers: [
      prayer("communion-prayer-thanksgiving", "Prayer for First Communion", "Jesus, Bread of Life, prepare this heart to receive you with reverence, joy, and gratitude."),
    ],
    printSections: ["Mass rhythm", "Parish dates", "Thanksgiving prayer", "Family support plan"],
    featured: true,
  }),
  companion({
    id: "sacrament-confirmation-companion",
    title: "Confirmation Companion",
    slug: "confirmation",
    description: "A companion for Confirmation preparation rooted in the Holy Spirit, discipleship, sponsor support, and mission.",
    tags: baseTags("Confirmation", ["holy spirit", "sponsor", "mission"]),
    relatedResourceIds: ["legacy-sacraments", "legacy-saints", "legacy-group-discussion-topics"],
    sacrament: "Confirmation",
    route: "/sacraments/confirmation",
    audience: ["individuals", "families", "formation-teams", "all"],
    preparationFor: ["Confirmation candidates", "Parents", "Sponsors", "Parish formation teams"],
    overview:
      "Confirmation preparation invites candidates to receive the Holy Spirit and live Catholic discipleship with courage and charity.",
    bestFor: ["Confirmation candidates", "Sponsors", "Youth or adult formation"],
    prayerPractice: "Pray daily for the gifts of the Holy Spirit and courage to follow Christ.",
    pastoralNote: "Your parish or diocese determines preparation sequence, sponsor requirements, service expectations, and celebration details.",
    parishChecklist: ["Attend required formation", "Confirm sponsor expectations", "Ask about saint name practices if used locally", "Confirm celebration logistics"],
    preparationSteps: [
      step("confirmation-step-spirit", "Pray for the Holy Spirit", "Begin with openness to the Spirit's gifts.", "Beginning", ["legacy-sacraments"]),
      step("confirmation-step-sponsor", "Walk with a Sponsor", "Meet and pray with a sponsor or mentor.", "During preparation", ["legacy-saints"]),
      step("confirmation-step-mission", "Prepare for Mission", "Connect Confirmation to worship, virtue, and service.", "Before celebration", ["legacy-group-discussion-topics"]),
    ],
    roleChecklists: [
      checklist("confirmation-candidate-prayer", "Pray for the Holy Spirit", "Ask for wisdom, courage, understanding, counsel, knowledge, fortitude, piety, and fear of the Lord.", "candidate", "prayer"),
      checklist("confirmation-sponsor-meet", "Meet with candidate", "Pray together and discuss the candidate's Catholic life.", "sponsor", "conversation"),
      checklist("confirmation-parent-support", "Support parish formation", "Help the candidate attend sessions and Mass without making faith feel like a transaction.", "parent", "formation"),
      checklist("confirmation-service", "Choose service with reflection", "Connect any service expectations to love of God and neighbor.", "candidate", "service"),
    ],
    reflectionPrompts: [
      prompt("confirmation-reflect-spirit", "Where do I need the Holy Spirit's courage right now?", "For candidates", "candidate"),
      prompt("confirmation-reflect-witness", "How can I witness to Christ without pressure or pride?", "For candidates and sponsors", "all"),
    ],
    prayers: [
      prayer("confirmation-prayer-spirit", "Prayer to the Holy Spirit", "Holy Spirit, strengthen this heart in faith, deepen love for Christ, and make this life fruitful in service."),
    ],
    printSections: ["Sponsor conversation notes", "Holy Spirit prayer", "Service reflection", "Parish dates"],
    featured: true,
  }),
  companion({
    id: "sacrament-anointing-companion",
    title: "Anointing of the Sick Companion",
    slug: "anointing",
    description: "A compassionate companion for preparing to request Anointing of the Sick with parish and pastoral care.",
    tags: baseTags("Anointing of the Sick", ["sick", "pastoral care", "healing"]),
    relatedResourceIds: ["legacy-sacraments", "prayer-before-adoration"],
    sacrament: "Anointing of the Sick",
    route: "/sacraments/anointing",
    audience: ["individuals", "families", "all"],
    preparationFor: ["A person who is seriously ill", "Family or caregivers", "Parish visitors or pastoral care teams"],
    overview:
      "This companion helps families ask for pastoral care with reverence while leaving medical and sacramental judgments to proper authorities.",
    bestFor: ["Families", "Caregivers", "Those seeking pastoral care"],
    prayerPractice: "Pray for peace, trust, healing according to God's will, and the consolation of Christ.",
    pastoralNote: "Contact your parish or chaplain for pastoral guidance. In medical emergencies, use appropriate emergency services.",
    parishChecklist: ["Contact parish or chaplain", "Share location and urgency clearly", "Ask about confession, Communion, and pastoral visit needs"],
    preparationSteps: [
      step("anointing-step-contact", "Contact Pastoral Care", "Reach the parish, hospital chaplain, or pastoral care contact.", "When need arises", ["legacy-sacraments"]),
      step("anointing-step-prepare-room", "Prepare a Prayerful Space", "Make the room calm when possible and gather family prayerfully.", "Before visit"),
      step("anointing-step-remain", "Remain with Christ", "Continue prayer and pastoral support after the sacrament.", "After visit", ["prayer-before-adoration"]),
    ],
    roleChecklists: [
      checklist("anointing-caregiver-call", "Call parish or chaplain", "Do not wait for uncertainty to become panic; ask for pastoral guidance.", "caregiver", "parish"),
      checklist("anointing-family-presence", "Offer calm presence", "Keep the person accompanied with prayer and dignity.", "family", "prayer"),
      checklist("anointing-medical-boundary", "Use medical care appropriately", "Daily Oratory does not provide medical advice or emergency triage.", "all", "conversation"),
      checklist("anointing-sacramental-questions", "Ask sacramental questions locally", "Bring timing and pastoral questions to a priest, deacon, chaplain, or parish office.", "all", "parish"),
    ],
    reflectionPrompts: [
      prompt("anointing-reflect-peace", "What prayer brings peace in this moment of illness or care?", "For family and caregivers", "family"),
      prompt("anointing-reflect-presence", "How can I remain present without trying to control what I cannot control?", "For caregivers", "caregiver"),
    ],
    prayers: [
      prayer("anointing-prayer-peace", "Prayer in Illness", "Jesus, be near in suffering, bring peace to this room, guide caregivers, and hold this person in your merciful love."),
    ],
    printSections: ["Parish or chaplain contact", "Pastoral care notes", "Family prayer", "Questions to ask locally"],
  }),
  companion({
    id: "sacrament-marriage-companion",
    title: "Matrimony Preparation Companion",
    slug: "marriage",
    description: "A reverent companion for couples preparing for Matrimony through parish formation, prayer, and conversation.",
    tags: baseTags("Matrimony", ["marriage", "couple", "family"]),
    relatedResourceIds: ["legacy-sacraments", "legacy-mass", "legacy-scripture-prayer"],
    sacrament: "Matrimony",
    route: "/sacraments/matrimony",
    audience: ["individuals", "families", "all"],
    preparationFor: ["Engaged couples", "Couples beginning parish marriage preparation", "Mentor couples supporting formation"],
    overview:
      "Matrimony preparation helps a couple pray, speak honestly, and follow parish and diocesan preparation with reverence.",
    bestFor: ["Engaged couples", "Mentor couples", "Parish marriage preparation"],
    prayerPractice: "Pray together briefly each week for charity, chastity, honesty, and fidelity.",
    pastoralNote: "Parish and diocesan requirements, timelines, paperwork, freedom-to-marry questions, and annulment matters belong with parish or diocesan authorities.",
    parishChecklist: ["Contact parish before setting final plans", "Confirm preparation timeline", "Ask about required documents", "Bring prior marriage questions to the parish"],
    preparationSteps: [
      step("marriage-step-parish", "Begin with the Parish", "Meet parish requirements and timeline before making assumptions.", "First step", ["legacy-sacraments"]),
      step("marriage-step-conversation", "Practice Honest Conversation", "Discuss prayer, family life, finances, conflict, children, and faith.", "During preparation"),
      step("marriage-step-liturgy", "Prepare the Liturgy", "Keep the sacrament and worship at the center of wedding planning.", "Before celebration", ["legacy-mass"]),
    ],
    roleChecklists: [
      checklist("marriage-couple-contact", "Contact the parish", "Ask about timing, preparation process, documents, and liturgy planning.", "spouse", "parish"),
      checklist("marriage-couple-prayer", "Begin praying together", "Choose a short weekly prayer that is honest and sustainable.", "spouse", "prayer"),
      checklist("marriage-couple-conversation", "Name important topics", "Set aside unrushed conversations about Catholic marriage and shared life.", "spouse", "conversation"),
      checklist("marriage-boundary", "Bring eligibility or annulment questions to the parish", "Daily Oratory does not decide freedom to marry or annulment questions.", "all", "parish"),
    ],
    reflectionPrompts: [
      prompt("marriage-reflect-vocation", "How is Christ inviting us to love each other as a vocation, not only an event?", "For couples", "spouse"),
      prompt("marriage-reflect-prayer", "What prayer rhythm can our future home actually keep?", "For couples", "spouse"),
    ],
    prayers: [
      prayer("marriage-prayer-couple", "Prayer for an Engaged Couple", "Lord Jesus, teach us patient love, honest speech, faithful sacrifice, and joy rooted in you."),
    ],
    printSections: ["Parish timeline", "Conversation topics", "Prayer rhythm", "Questions for priest or deacon"],
    featured: true,
  }),
  companion({
    id: "sacrament-holy-orders-companion",
    title: "Holy Orders Discernment Companion",
    slug: "holy-orders",
    description: "A companion for prayerful discernment of Holy Orders with spiritual guidance and diocesan contact.",
    tags: baseTags("Holy Orders", ["discernment", "vocation", "priesthood", "diaconate"]),
    relatedResourceIds: ["legacy-religious-orders", "legacy-scripture-prayer"],
    sacrament: "Holy Orders",
    route: "/sacraments/holy-orders",
    audience: ["individuals", "formation-teams", "all"],
    preparationFor: ["Men discerning priesthood or diaconate", "Families praying with a discerner", "Vocation teams"],
    overview:
      "This companion supports prayer and conversation for discernment while directing formal questions to vocation directors and diocesan offices.",
    bestFor: ["Vocational discernment", "Family prayer", "Vocation ministry"],
    prayerPractice: "Pray for freedom, humility, courage, and wise counsel in discernment.",
    pastoralNote: "Formation, admission, suitability, and canonical questions are handled through diocesan vocation offices and Church authorities.",
    parishChecklist: ["Speak with a trusted priest", "Contact diocesan vocation office when appropriate", "Keep sacramental and prayer life steady"],
    preparationSteps: [
      step("orders-step-prayer", "Pray for Freedom", "Ask God for freedom to hear and follow his call.", "Beginning", ["legacy-scripture-prayer"]),
      step("orders-step-counsel", "Seek Counsel", "Speak with a priest, spiritual director, or vocation director.", "During discernment", ["legacy-religious-orders"]),
      step("orders-step-next", "Take the Next Faithful Step", "Move from private thought to an appropriate conversation or visit.", "When ready"),
    ],
    roleChecklists: [
      checklist("orders-discernment-prayer", "Keep daily prayer", "Stay rooted in Mass, Scripture, silence, and confession.", "discernment", "prayer"),
      checklist("orders-discernment-counsel", "Seek wise counsel", "Bring discernment into the light with a priest or vocation director.", "discernment", "conversation"),
      checklist("orders-family-prayer", "Pray without pressure", "Families can support discernment with prayer and freedom.", "family", "prayer"),
      checklist("orders-boundary", "Do not self-decide suitability", "Formal admission and formation decisions belong to Church authorities.", "all", "parish"),
    ],
    reflectionPrompts: [
      prompt("orders-reflect-freedom", "Where do I need greater freedom to listen to God?", "For discerners", "discernment"),
      prompt("orders-reflect-charity", "How is this discernment increasing humility, charity, and love for the Church?", "For discerners", "discernment"),
    ],
    prayers: [
      prayer("orders-prayer-discernment", "Prayer for Vocational Discernment", "Lord, make my heart free for your will and guide me through your Church with humility and courage."),
    ],
    printSections: ["Prayer rhythm", "People to speak with", "Questions for vocation director", "Next faithful step"],
  }),
  companion({
    id: "sacrament-ocia-companion",
    title: "OCIA Companion",
    slug: "ocia",
    description: "A companion for adults exploring or preparing to enter the Catholic Church through parish OCIA.",
    tags: baseTags("OCIA", ["conversion", "catechumen", "candidate", "adult formation"]),
    relatedResourceIds: ["legacy-sacraments", "legacy-mass", "legacy-scripture-prayer"],
    sacrament: "OCIA",
    route: "/sacraments/ocia",
    audience: ["individuals", "parish-groups", "formation-teams", "all"],
    preparationFor: ["Adults exploring Catholic faith", "Catechumens and candidates", "Sponsors and parish teams"],
    overview:
      "OCIA preparation is a parish journey of inquiry, conversion, catechesis, prayer, liturgy, and discernment.",
    bestFor: ["Inquirers", "Catechumens", "Candidates", "Sponsors"],
    prayerPractice: "Bring questions to prayer and Sunday Mass, asking Christ for light and courage.",
    pastoralNote: "Your parish OCIA team guides rites, catechesis, discernment, and sacramental timing.",
    parishChecklist: ["Contact parish OCIA", "Attend inquiry or formation sessions", "Ask about sponsor support", "Bring sacramental history questions to the parish"],
    preparationSteps: [
      step("ocia-step-inquiry", "Begin Inquiry", "Ask questions honestly and meet the parish OCIA team.", "Beginning", ["legacy-sacraments"]),
      step("ocia-step-worship", "Pray with the Church", "Attend Mass and begin a simple rhythm of Scripture and prayer.", "During formation", ["legacy-mass", "legacy-scripture-prayer"]),
      step("ocia-step-discernment", "Discern with the Parish", "Stay close to the parish process for rites, readiness, and sacramental preparation.", "As preparation deepens"),
    ],
    roleChecklists: [
      checklist("ocia-inquirer-questions", "Bring honest questions", "Write questions and bring them to OCIA leaders without embarrassment.", "candidate", "conversation"),
      checklist("ocia-sponsor-presence", "Walk with the inquirer", "Sponsors should pray, listen, and accompany without rushing the person.", "sponsor", "conversation"),
      checklist("ocia-parish-history", "Share sacramental history locally", "Bring prior baptism, marriage, or sacramental questions to the parish OCIA team.", "all", "parish"),
      checklist("ocia-prayer", "Begin a prayer rhythm", "Use short daily Scripture prayer and Sunday Mass attendance as a foundation.", "all", "prayer"),
    ],
    reflectionPrompts: [
      prompt("ocia-reflect-attraction", "What draws me toward Christ and the Catholic Church?", "For inquirers", "candidate"),
      prompt("ocia-reflect-questions", "What question do I need to bring into the light with the parish team?", "For inquirers", "candidate"),
    ],
    prayers: [
      prayer("ocia-prayer-light", "Prayer for Inquiry", "Lord Jesus, guide my questions, lead me into truth, and help me follow you with freedom and peace."),
    ],
    printSections: ["Questions for OCIA", "Prayer notes", "Sponsor conversation", "Parish process details"],
    featured: true,
  }),
  companion({
    id: "sacrament-sponsor-godparent-companion",
    title: "Sponsor and Godparent Companion",
    slug: "sponsor-godparent",
    description: "A companion for preparing to serve as a sponsor or godparent with prayer, presence, and responsibility.",
    tags: baseTags("Sponsor/Godparent", ["sponsor", "godparent", "baptism", "confirmation"]),
    relatedResourceIds: ["legacy-sacraments", "legacy-saints", "res-holy-rosary"],
    sacrament: "Sponsor/Godparent",
    route: "/sacraments/sponsor-godparent",
    audience: ["individuals", "families", "parish-groups", "all"],
    preparationFor: ["Baptism godparents", "Confirmation sponsors", "Adults accompanying OCIA candidates"],
    overview:
      "Sponsor and godparent preparation helps the companion pray, stay present, and support Catholic life beyond the celebration day.",
    bestFor: ["Godparents", "Confirmation sponsors", "OCIA sponsors"],
    prayerPractice: "Pray regularly by name for the person you accompany and ask how to support their Catholic life.",
    pastoralNote: "Parishes determine sponsor or godparent requirements and documentation. Confirm expectations locally.",
    parishChecklist: ["Ask the parish about requirements", "Confirm forms or attestations if needed", "Meet with the person or family", "Plan ongoing prayer"],
    preparationSteps: [
      step("sponsor-step-ask", "Ask What Is Required", "Confirm parish expectations before assuming details.", "First step", ["legacy-sacraments"]),
      step("sponsor-step-pray", "Pray by Name", "Begin praying regularly for the person you accompany.", "Throughout preparation", ["res-holy-rosary"]),
      step("sponsor-step-presence", "Plan Ongoing Presence", "Choose how you will support Catholic life after the celebration.", "Before celebration", ["legacy-saints"]),
    ],
    roleChecklists: [
      checklist("sponsor-parish", "Confirm parish expectations", "Ask what forms, eligibility, formation, or presence are expected.", "sponsor", "parish"),
      checklist("godparent-family", "Speak with the family", "Ask how you can support prayer, Mass, and Catholic formation.", "godparent", "conversation"),
      checklist("sponsor-prayer", "Pray consistently", "Choose a simple weekly prayer by name.", "sponsor", "prayer"),
      checklist("sponsor-boundary", "Refer eligibility questions locally", "Do not make eligibility assumptions; ask the parish.", "all", "parish"),
    ],
    reflectionPrompts: [
      prompt("sponsor-reflect-presence", "How will I remain present after the sacrament is celebrated?", "For sponsors and godparents", "sponsor"),
      prompt("sponsor-reflect-witness", "What does my Catholic witness need in order to be honest and humble?", "For sponsors and godparents", "sponsor"),
    ],
    prayers: [
      prayer("sponsor-prayer", "Prayer for a Sponsor or Godparent", "Lord, make me a faithful companion, steady in prayer, humble in witness, and generous in love."),
    ],
    printSections: ["Parish requirements", "Prayer plan", "Conversation notes", "Ongoing support"],
  }),
  companion({
    id: "sacrament-returning-catholic-companion",
    title: "Returning Catholic Companion",
    slug: "returning-catholic",
    description: "A gentle preparation companion for Catholics returning to Mass, confession, prayer, and parish life.",
    tags: baseTags("Returning Catholic", ["returning", "confession", "mass", "parish"]),
    relatedResourceIds: ["res-confession-guide", "legacy-mass", "legacy-local-faith-groups"],
    sacrament: "Returning Catholic",
    route: "/sacraments/returning-catholic",
    audience: ["individuals", "all"],
    preparationFor: ["Catholics returning after time away", "Adults unsure where to begin", "Parish welcome teams"],
    overview:
      "This companion helps a returning Catholic begin again through prayer, Sunday Mass, confession, and a parish conversation when needed.",
    bestFor: ["Returning Catholics", "Parish welcome teams", "Those unsure where to begin"],
    prayerPractice: "Begin with a short daily prayer of trust and one concrete step toward parish life.",
    pastoralNote: "Questions about sacramental status, marriage, confession, Communion, or parish process should be brought to a priest, deacon, or parish staff.",
    parishChecklist: ["Attend Sunday Mass", "Ask about confession", "Bring complicated sacramental questions to the parish", "Find a local point of contact"],
    preparationSteps: [
      step("returning-step-prayer", "Begin in Prayer", "Start with a simple prayer of trust and return.", "First step", ["res-morning-offering"]),
      step("returning-step-mass", "Return to Mass", "Attend Mass and let the parish rhythm become familiar again.", "Next step", ["legacy-mass"]),
      step("returning-step-confession", "Prepare for Confession", "Ask for guidance if you are unsure how to return to the sacrament.", "When ready", ["res-confession-guide"]),
    ],
    roleChecklists: [
      checklist("returning-prayer", "Pray simply", "Ask Christ for courage, humility, and trust.", "returning-catholic", "prayer"),
      checklist("returning-mass", "Attend Mass", "Return to Sunday Mass and sit where you can pray peacefully.", "returning-catholic", "formation"),
      checklist("returning-parish", "Speak with the parish", "Bring sacramental or marital status questions to a priest, deacon, or parish staff.", "returning-catholic", "parish"),
      checklist("returning-support", "Find support", "Consider a parish group, trusted Catholic friend, or spiritual conversation.", "returning-catholic", "conversation"),
    ],
    reflectionPrompts: [
      prompt("returning-reflect-desire", "What desire or grace is drawing me back toward the Church?", "For returning Catholics", "returning-catholic"),
      prompt("returning-reflect-next", "What is the next peaceful step I can take without trying to solve everything today?", "For returning Catholics", "returning-catholic"),
    ],
    prayers: [
      prayer("returning-prayer", "Prayer for Returning", "Jesus, lead me back with mercy, courage, and peace. Show me the next faithful step and help me trust your Church again."),
    ],
    printSections: ["Next parish step", "Confession preparation", "Questions to ask locally", "Prayer plan"],
    featured: true,
  }),
];

export const sacramentCompanionRouteSlugs = sacramentCompanions.map((companionRecord) => companionRecord.slug);
