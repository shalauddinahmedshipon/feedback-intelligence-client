import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldError, FieldGroup, FieldDescription } from "@/components/ui/field"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { useCreateFeedbackMutation } from "@/store/api/feedback.api"
import { Loader2, Plus } from "lucide-react"
import { feedbackSchema, type FeedbackFormValues } from "@/schema/feedback.schema"

export function CreateFeedbackModal() {
  const [createFeedback, { isLoading }] = useCreateFeedbackMutation()

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { message: "", userName: "" },
  })

  const { handleSubmit, control, reset } = form

  const onSubmit = async (data: FeedbackFormValues) => {
    try {
      await createFeedback(data).unwrap()
      toast.success("Feedback submitted successfully!")
      reset()
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to submit feedback")
    }
  }

  return (
    <Dialog>
      {/* Trigger button */}
      <DialogTrigger asChild>
        <Button variant="outline">
             <Plus size={16} />
            Submit Feedback</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Submit Feedback</DialogTitle>
        </DialogHeader>

        <form id="create-feedback-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
          <FieldGroup>
            <Controller
              name="userName"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="userName">Your Name</FieldLabel>
                  <Input {...field} id="userName" placeholder="John Doe (optional)" />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea {...field} id="message" rows={6} placeholder="Your feedback..." />
                  <FieldDescription>{field.value.length} / 2000 characters</FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>

          <DialogFooter className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline" type="button" disabled={isLoading} onClick={() => reset()}>
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" form="create-feedback-form" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin w-4 h-4 mr-2 inline-block" /> : null}
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}