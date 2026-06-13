import { getLiturgicalDashboardModel, type LiturgicalDashboardModel } from "@/lib/liturgicalLiving";

export type DailyPrayerModel = {
  liturgicalTitle: string;
  prayerTitle: string;
  prayerLead: string;
  prayerBody: string;
  prayerTextForCopy: string;
  prompts: string[];
  relatedLinks: Array<{ label: string; href: string }>;
};

export function getDailyPrayerModel(date = new Date()): DailyPrayerModel {
  const model = getLiturgicalDashboardModel(date);
  const day = model.day;
  const prayerTitle = day.suggestedPrayer?.title ?? "Begin in prayer";
  const prayerLead = day.suggestedPrayer?.description ?? "Offer the day to the Lord and ask for grace to live faithfully.";
  const invocation = getInvocation(model);
  const thanksgiving = getThanksgiving(model);
  const petition = getPetition(model);

  const prayerBody = [
    `${invocation}`,
    "",
    `As the Church keeps ${day.title}, I come before You with gratitude and trust.`,
    `${thanksgiving}`,
    "",
    `${petition}`,
    "",
    "Shape my heart for holy worship, steady prayer, and daily obedience.",
    "Let faith, repentance, charity, and peace grow quietly in me today.",
    "",
    "Keep me close to Scripture, the sacraments, and the communion of the Church.",
    "May everything in this day lead me nearer to You.",
    "",
    "Amen.",
  ].join("\n");

  return {
    liturgicalTitle: day.title,
    prayerTitle,
    prayerLead,
    prayerBody,
    prayerTextForCopy: [
      "Daily Oratory Suggested Prayer",
      prayerTitle,
      `${day.title}`,
      "",
      prayerBody,
    ].join("\n"),
    prompts: getPrompts(model),
    relatedLinks: [
      { label: "Daily readings", href: model.officialReadingsUrl },
      { label: "Mass readings reflections", href: "/reflections/mass-readings" },
      { label: "Prayer library", href: "/pray" },
      { label: "Today in the Church", href: "/today" },
    ],
  };
}

function getInvocation(model: LiturgicalDashboardModel) {
  switch (model.day.season) {
    case "Easter":
      return "Lord Jesus Christ, risen and victorious,";
    case "Lent":
      return "Merciful Lord Jesus,";
    case "Advent":
      return "Come, Lord Jesus,";
    case "Christmas":
      return "Lord Jesus, Word made flesh,";
    case "Pentecost":
      return "Holy Spirit, breath of the living God,";
    default:
      return "Heavenly Father,";
  }
}

function getThanksgiving(model: LiturgicalDashboardModel) {
  if (model.day.season === "Easter") {
    return "Thank You for the joy of the Resurrection and for the new life You keep giving to Your Church.";
  }

  if (model.day.season === "Lent") {
    return "Thank You for calling me back to conversion, mercy, and a heart that is willing to begin again.";
  }

  if (model.day.season === "Advent") {
    return "Thank You for stirring hope in the Church and teaching me to wait for You with a faithful heart.";
  }

  if (model.day.season === "Christmas") {
    return "Thank You for drawing near in humility and love, and for letting heaven touch earth in Christ.";
  }

  return "Thank You for this day, for the grace to pray, and for the quiet ways You remain near.";
}

function getPetition(model: LiturgicalDashboardModel) {
  const title = model.day.title;

  if (title.includes("Ascension")) {
    return "Lift my heart toward heaven and teach me to live on earth with courage, mission, and peace.";
  }

  if (title.includes("Pentecost")) {
    return "Pour out Your Spirit upon me, renew what is tired, and make me bold in charity and truth.";
  }

  if (title.includes("Mary")) {
    return "Let me receive the Word with humility and say yes to Your will with trust and love.";
  }

  if (title.includes("Apostles") || title.includes("Apostle")) {
    return "Give me apostolic courage, fidelity to the Gospel, and a willingness to bear witness with love.";
  }

  return "Give me the grace most needed for this day, and teach me how to receive it with humility.";
}

function getPrompts(model: LiturgicalDashboardModel) {
  const prompts = [
    model.day.suggestedPrayer?.description,
    model.day.suggestedDevotion?.description,
    model.day.familyPrayerIdea?.description,
    model.day.worksOfMercySuggestion?.description,
  ].filter((item): item is string => Boolean(item));

  return Array.from(new Set(prompts)).slice(0, 4);
}
