import type { BaseContentRecord, ContentBlock } from "@/types/content";

export type DiscussionTopicAudience =
  | "individuals"
  | "families"
  | "parish-groups"
  | "prayer-communities"
  | "formation-teams";

export type GroupDiscussionTopicRecord = BaseContentRecord & {
  contentType: "group-discussion-topic";
  bestFor: DiscussionTopicAudience[];
  durationMinutes: number;
  scriptureReference?: string;
  openingPrayer: string;
  questions: string[];
  facilitatorNotes: string[];
  body?: ContentBlock[];
};

export type CommunityContactReason =
  | "prayer"
  | "events"
  | "local-groups"
  | "content"
  | "technical"
  | "general";

export type CommunityContactOption = {
  id: CommunityContactReason;
  label: string;
  description: string;
};
