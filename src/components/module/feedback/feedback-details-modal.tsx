import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CategoryBadge, PriorityBadge, SentimentBadge, TeamBadge } from "./feedback-badges"
import type { IFeedback } from "@/types/feedback.types"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  feedback: IFeedback | null
}

export function FeedbackDetailsModal({ open, onOpenChange, feedback }: Props) {
  if (!feedback) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Feedback Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <div>
            <p>{feedback.userName || "Anonymous"}</p>
          </div>

          <div className="flex gap-2">
            <CategoryBadge category={feedback.category} />
            <PriorityBadge priority={feedback.priority} />
            <SentimentBadge sentiment={feedback.sentiment} />
            <TeamBadge team={feedback.team} />
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Message</p>
            <p className="text-sm leading-relaxed">{feedback.message}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Created At</p>
            <p>{new Date(feedback.createdAt).toLocaleString()}</p>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}