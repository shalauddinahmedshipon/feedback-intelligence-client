import { Badge } from "@/components/ui/badge"
import type {
  FeedbackCategory,
  FeedbackPriority,
  FeedbackSentiment,
  FeedbackTeam,
} from "@/types/feedback.types"

const categoryStyles: Record<FeedbackCategory, string> = {
  bug: "bg-red-100 text-red-700 border-red-200",
  feature: "bg-blue-100 text-blue-700 border-blue-200",
  billing: "bg-purple-100 text-purple-700 border-purple-200",
  ux: "bg-pink-100 text-pink-700 border-pink-200",
  performance: "bg-orange-100 text-orange-700 border-orange-200",
  security: "bg-rose-100 text-rose-700 border-rose-200",
  other: "bg-gray-100 text-gray-700 border-gray-200",
}

const priorityStyles: Record<FeedbackPriority, string> = {
  low: "bg-gray-100 text-gray-700 border-gray-200",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  high: "bg-orange-100 text-orange-700 border-orange-200",
  urgent: "bg-red-100 text-red-700 border-red-200",
}

const sentimentStyles: Record<FeedbackSentiment, string> = {
  positive: "bg-green-100 text-green-700 border-green-200",
  neutral: "bg-blue-100 text-blue-700 border-blue-200",
  negative: "bg-red-100 text-red-700 border-red-200",
}

const teamStyles: Record<FeedbackTeam, string> = {
  engineering: "bg-indigo-100 text-indigo-700 border-indigo-200",
  product: "bg-blue-100 text-blue-700 border-blue-200",
  support: "bg-green-100 text-green-700 border-green-200",
  billing: "bg-purple-100 text-purple-700 border-purple-200",
  design: "bg-pink-100 text-pink-700 border-pink-200",
  security: "bg-red-100 text-red-700 border-red-200",
}

export const TeamBadge = ({ team }: { team: FeedbackTeam }) => {
  return (
    <Badge variant="outline" className={teamStyles[team]}>
      {team.charAt(0).toUpperCase() + team.slice(1)}
    </Badge>
  )
}

export const CategoryBadge = ({ category }: { category: FeedbackCategory }) => {
  return (
    <Badge variant="outline" className={categoryStyles[category]}>
     {category.charAt(0).toUpperCase() + category.slice(1)}
    </Badge>
  )
}

export const PriorityBadge = ({ priority }: { priority: FeedbackPriority }) => {
  return (
    <Badge variant="outline" className={priorityStyles[priority]}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </Badge>
  )
}

export const SentimentBadge = ({
  sentiment,
}: {
  sentiment: FeedbackSentiment
}) => {
  return (
    <Badge variant="outline" className={sentimentStyles[sentiment]}>
      {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
    </Badge>
  )
}