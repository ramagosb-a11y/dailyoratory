import type { FamilyFAQ } from "@/types/family";

export const familyFaqs: FamilyFAQ[] = [
  {
    id: "family-faq-perfect",
    question: "Do we need a perfect family routine before we begin?",
    answer: "No. A domestic church begins with small, faithful steps: one prayer, one act of mercy, one honest return to God.",
    category: "beginning",
    sortOrder: 10,
  },
  {
    id: "family-faq-mixed-faith",
    question: "What if everyone in the home is not Catholic?",
    answer: "Begin gently and respectfully. Choose practices that are honest, peaceful, and never coercive, and keep charity at the center.",
    category: "mixed-faith",
    sortOrder: 20,
  },
  {
    id: "family-faq-difficult-season",
    question: "What if our family is in a difficult season?",
    answer: "The domestic church is especially for difficult seasons. Keep prayer simple, seek help when needed, and let mercy shape the next step.",
    category: "pastoral-care",
    sortOrder: 30,
  },
];
