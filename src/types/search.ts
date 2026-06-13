export type SearchItemType =
  | "page"
  | "prayer"
  | "reflection"
  | "media"
  | "saint"
  | "devotion"
  | "sacrament"
  | "guide"
  | "tool"
  | "resource"
  | "external-resource";

export type SearchItemStatus = "approved" | "hidden" | "draft";

export type SearchItem = {
  id: string;
  title: string;
  slug: string;
  href: string;
  description: string;
  content: string;
  category: string;
  type: SearchItemType;
  tags: string[];
  audience: string[];
  section: string;
  priority: number;
  status: SearchItemStatus;
  image?: string;
  updatedAt?: string;
};

export type SearchCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  sortOrder: number;
};

export type SearchOptions = {
  category?: string;
  type?: SearchItemType | "";
  limit?: number;
};
