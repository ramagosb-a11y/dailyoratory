export type SacramentalEmergencyLink = {
  id: string;
  label: string;
  href: string;
  description: string;
  sortOrder: number;
};

export type SacramentalEmergencyCard = {
  id: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  relatedLinks: SacramentalEmergencyLink[];
  category: string;
  sortOrder: number;
};

export type SacramentalEmergencyStep = {
  id: string;
  title: string;
  description: string;
  category: string;
  sortOrder: number;
};

export type EmergencyChecklistItem = {
  id: string;
  label: string;
  description: string;
  sortOrder: number;
};

export type EmergencyPrayer = {
  id: string;
  title: string;
  prayer: string;
  category: string;
  isShort: boolean;
  sortOrder: number;
};
