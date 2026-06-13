import type { SacramentFAQ } from "@/types/sacraments";

export const sacramentFaqs: SacramentFAQ[] = [
  {
    id: "faq-why-seven",
    sacramentId: "all",
    question: "Why are there seven sacraments?",
    answer:
      "The Church recognizes seven sacraments instituted by Christ and handed on in apostolic tradition. Together they accompany Christian life from new birth to mission, healing, service, and communion.",
    category: "general",
    sortOrder: 10,
  },
  {
    id: "faq-what-is-grace",
    sacramentId: "all",
    question: "What is grace?",
    answer:
      "Grace is God's free and undeserved help that heals, strengthens, forgives, and draws us into His own life. The sacraments are privileged channels of this grace.",
    category: "general",
    sortOrder: 20,
  },
  {
    id: "faq-sacrament-sacramental",
    sacramentId: "all",
    question: "What is the difference between a sacrament and a sacramental?",
    answer:
      "A sacrament is instituted by Christ and truly gives sacramental grace in the life of the Church. A sacramental is a sacred sign established by the Church to dispose the faithful to grace and sanctify daily life.",
    category: "general",
    sortOrder: 30,
  },
  {
    id: "faq-returning-years",
    sacramentId: "all",
    question: "What if I am returning after many years?",
    answer:
      "Start simply. Contact a parish, attend Sunday Mass, and speak with a priest or parish staff member about confession, sacramental history, or any next steps you are unsure about.",
    category: "returning",
    sortOrder: 40,
  },
  {
    id: "faq-records",
    sacramentId: "all",
    question: "How do I get sacramental records?",
    answer:
      "Contact the parish where the sacrament was celebrated. If you are unsure, a parish office or diocesan office may help you begin the search.",
    category: "records",
    sortOrder: 50,
  },
  {
    id: "faq-parish-prep",
    sacramentId: "all",
    question: "Can I receive sacraments without parish preparation?",
    answer:
      "Preparation requirements vary, and the parish or diocese is responsible for guiding that process. Daily Oratory supports prayerful learning but does not replace local formation.",
    category: "parish",
    sortOrder: 60,
  },
  {
    id: "faq-annulment",
    sacramentId: "matrimony",
    question: "What if I have a difficult marriage or annulment question?",
    answer:
      "Bring that question to your parish priest, deacon, parish office, diocesan marriage office, or tribunal. Daily Oratory does not provide canonical or legal marriage advice.",
    category: "boundary",
    sortOrder: 70,
  },
  {
    id: "faq-emergency-priest",
    sacramentId: "anointing",
    question: "What if I need a priest in an emergency?",
    answer:
      "If there is an immediate medical emergency, contact emergency services first. For urgent sacramental care, contact your parish, hospital chaplain, or local Catholic emergency priest line if available.",
    category: "emergency",
    sortOrder: 80,
  },
];
