import { getLiturgicalDashboardModel } from "@/lib/liturgicalLiving";

export type SeasonalMarianPrayer = {
  title: "The Angelus" | "Regina Caeli";
  href: "/prayers/angelus" | "/prayers/regina-caeli";
  seasonLabel: "Outside the Easter Season" | "Easter Season";
  description: string;
};

export function getSeasonalMarianPrayer(date = new Date()): SeasonalMarianPrayer {
  const model = getLiturgicalDashboardModel(date);

  if (model.day.season === "Easter") {
    return {
      title: "Regina Caeli",
      href: "/prayers/regina-caeli",
      seasonLabel: "Easter Season",
      description: "During the Easter season, Catholics traditionally pray the Regina Caeli in place of the Angelus.",
    };
  }

  return {
    title: "The Angelus",
    href: "/prayers/angelus",
    seasonLabel: "Outside the Easter Season",
    description: "Outside the Easter season, Catholics traditionally pray the Angelus morning, noon, and evening.",
  };
}
