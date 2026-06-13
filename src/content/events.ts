import type { FaithEvent } from "./types";

export const events: FaithEvent[] = [
  {
    slug: "live-rosary-monday",
    title: "Daily Rosary Room",
    date: "2026-05-04",
    time: "8:00 PM CT",
    location: "Online",
    type: "Live Prayer",
    description: "A live community Rosary room with shared intentions and a short Marian reflection.",
  },
  {
    slug: "eucharistic-adoration",
    title: "Eucharistic Adoration",
    date: "2026-05-18",
    time: "7:00 PM CT",
    location: "St. Michael Chapel",
    type: "Live Prayer",
    description: "Silent adoration, Benediction, and prayer for families and vocations.",
  },
  {
    slug: "parish-formation-night",
    title: "Parish Formation Night",
    date: "2026-05-22",
    time: "7:30 PM CT",
    location: "Parish Hall",
    type: "Formation",
    description: "Small-group conversation on prayer, virtue, vocation, family life, and faithful witness.",
  },
  {
    slug: "marian-consecration",
    title: "Marian Consecration",
    date: "2026-05-30",
    time: "6:30 PM CT",
    location: "Our Lady's Chapel",
    type: "Discussion",
    description: "A guided start for Marian consecration with reading plan and group check-ins.",
  },
];
