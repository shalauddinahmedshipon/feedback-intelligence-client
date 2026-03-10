import type {
  FeedbackCategory,
  FeedbackPriority,
  FeedbackSentiment,
  FeedbackTeam,
} from "@/types/feedback.types"

export const categories: { label: string; value: FeedbackCategory }[] = [
  { label: "Bug", value: "bug" },
  { label: "Feature", value: "feature" },
  { label: "Billing", value: "billing" },
  { label: "UX", value: "ux" },
  { label: "Performance", value: "performance" },
  { label: "Security", value: "security" },
  { label: "Other", value: "other" },
]

export const priorities: { label: string; value: FeedbackPriority }[] = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Urgent", value: "urgent" },
]

export const sentiments: { label: string; value: FeedbackSentiment }[] = [
  { label: "Positive", value: "positive" },
  { label: "Neutral", value: "neutral" },
  { label: "Negative", value: "negative" },
]

export const teams: { label: string; value: FeedbackTeam }[] = [
  { label: "Engineering", value: "engineering" },
  { label: "Product", value: "product" },
  { label: "Support", value: "support" },
  { label: "Billing", value: "billing" },
  { label: "Design", value: "design" },
  { label: "Security", value: "security" },
]
