export type FeedbackCategory =
  | "bug"
  | "feature"
  | "billing"
  | "ux"
  | "performance"
  | "security"
  | "other";

export type FeedbackPriority = "low" | "medium" | "high" | "urgent";

export type FeedbackSentiment = "positive" | "neutral" | "negative";

export type FeedbackTeam =
  | "engineering"
  | "product"
  | "support"
  | "billing"
  | "security"
  | "design";

export interface IFeedback {
  _id: string;
  message: string;
  userName?: string;
  category: FeedbackCategory;
  priority: FeedbackPriority;
  sentiment: FeedbackSentiment;
  team: FeedbackTeam;
  createdAt: string;
}

export interface ICreateFeedbackPayload {
  message: string;
  userName?: string;
}

export interface IFeedbackQuery {
  page?: number;
  limit?: number;
  category?: FeedbackCategory;
  priority?: FeedbackPriority;
  search?: string;
 sentiment?: FeedbackSentiment;  
  team?: FeedbackTeam;            
}

export interface IFeedbackResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: IFeedback[];
}

export interface IFeedbackStats {
  byCategory: {
    _id: FeedbackCategory;
    count: number;
  }[];

  byPriority: {
    _id: FeedbackPriority;
    count: number;
  }[];
}

