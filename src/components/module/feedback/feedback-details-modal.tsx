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
      <DialogContent className="max-w-lg ">
        <DialogHeader>
          <DialogTitle>Feedback Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          {/* User */}
          <div>
            <p className="font-medium">{feedback.userName || "Anonymous"}</p>
          </div>

          {/* Badges Row */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Category</p>
              <CategoryBadge category={feedback.category} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Priority</p>
              <PriorityBadge priority={feedback.priority} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Sentiment</p>
              <SentimentBadge sentiment={feedback.sentiment} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Team</p>
              <TeamBadge team={feedback.team} />
            </div>
          </div>

          {/* Message */}
          <div className="max-h-80 overflow-y-auto">
            <p className="text-sm text-muted-foreground mb-1">Message</p>
            <p className="text-sm leading-relaxed">{feedback.message}</p>
          </div>

          {/* Created At */}
          <div>
            <p className="text-sm text-muted-foreground">Created At</p>
            <p>{new Date(feedback.createdAt).toLocaleString()}</p>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}