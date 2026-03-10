import { Button } from "@/components/ui/button"
import { Eye, Trash2 } from "lucide-react"
import {
  CategoryBadge,
  PriorityBadge,
  SentimentBadge,
  TeamBadge,
} from "./feedback-badges"

import type { IFeedback } from "@/types/feedback.types"

interface Props {
  feedback: IFeedback
  onView: (feedback: IFeedback) => void
  onDelete: (id: string) => void
}

export function FeedbackTableRow({ feedback, onView, onDelete }: Props) {
  return (
    <tr className="border-b">

      <td className="p-3">{feedback.userName || "Anonymous"}</td>

      <td className="p-3 max-w-62.5 truncate">
        {feedback.message}
      </td>

      <td className="p-3">
        <CategoryBadge category={feedback.category} />
      </td>

      <td className="p-3">
        <PriorityBadge priority={feedback.priority} />
      </td>

      <td className="p-3">
        <SentimentBadge sentiment={feedback.sentiment} />
      </td>

      <td className="p-3">
        <TeamBadge team={feedback.team} />
      </td>

      <td className="p-3">
        {new Date(feedback.createdAt).toLocaleDateString()}
      </td>

      <td className="p-3 flex gap-2">

        <Button
          size="icon"
          variant="outline"
          onClick={() => onView(feedback)}
        >
          <Eye size={16} />
        </Button>

        <Button
          size="icon"
          variant="destructive"
          onClick={() => onDelete(feedback._id)}
        >
          <Trash2 size={16} />
        </Button>

      </td>

    </tr>
  )
}