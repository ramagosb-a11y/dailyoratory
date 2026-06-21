export type MassIntentionLink = {
  id: string;
  name: string;
  href: string;
  description: string;
  location: string;
  note: string;
};

export const massIntentionLinks: MassIntentionLink[] = [
  {
    id: "tfp-daily-mass-departed",
    name: "Daily Mass for the Departed",
    href: "https://www.tfp.org/daily-mass-for-the-departed/",
    description: "Request remembrance for departed loved ones through the Masses described by TFP.",
    location: "Online",
    note: "Review the organization's current offering details and policies before submitting a request.",
  },
  {
    id: "st-louis-cathedral-mass-intentions",
    name: "St. Louis Cathedral Mass Intentions",
    href: "https://www.stlouiscathedral.org/mass-intentions",
    description: "Request Mass intentions through the Cathedral-Basilica of Saint Louis King of France.",
    location: "New Orleans, Louisiana",
    note: "Cathedral schedules and availability may change; follow the parish instructions on the external page.",
  },
  {
    id: "saint-joseph-abbey-mass-intentions",
    name: "Saint Joseph Abbey Mass Intentions",
    href: "https://www.saintjosephabbey.com/massintentions",
    description: "Request Mass intentions through Saint Joseph Abbey.",
    location: "Covington, Louisiana",
    note: "Abbey policies, dates, and intention availability are managed by the abbey.",
  },
  {
    id: "franciscan-missions-masses",
    name: "Franciscan Missions Masses",
    href: "https://give.franciscanmissions.org/masses?_gl=1*cewj4z*_gcl_au*Nzk4Mjc3OTU3LjE2OTk2NDM4MTc.&msclkid=f9e69b397b8b129e6f9af13aee93bedf&utm_source=bing&utm_medium=cpc&utm_campaign=General%20Mass%20Intentions&utm_term=mass%20intentions&utm_content=General%20Mass%20Intentions",
    description: "Request Masses through Franciscan Missions.",
    location: "Online",
    note: "External donation, stipend, and receipt handling belongs to Franciscan Missions.",
  },
  {
    id: "st-jude-shrine-mass-intentions",
    name: "St. Jude Shrine Mass Intentions",
    href: "https://stjudeshrine.org/mass-intentions-at-st-jude-shrine/",
    description: "Request Mass intentions through the St. Jude Shrine for the living or the departed.",
    location: "St. Jude Shrine",
    note: "Mass scheduling, offerings, and intention policies are managed directly by the shrine.",
  },
];
