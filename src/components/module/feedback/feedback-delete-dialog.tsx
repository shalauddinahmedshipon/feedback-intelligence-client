import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { useDeleteFeedbackMutation } from "@/store/api/feedback.api"


import { toast } from "sonner"

interface Props {
  id: string | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FeedbackDeleteDialog({ id, open, onOpenChange }: Props) {
  const [deleteFeedback, { isLoading }] = useDeleteFeedbackMutation()

  const handleDelete = async () => {
    if (!id) return

    try {
      await deleteFeedback(id).unwrap()
      toast.success("Feedback deleted")
      onOpenChange(false)
    } catch {
      toast.error("Failed to delete feedback")
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this feedback?
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isLoading}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}