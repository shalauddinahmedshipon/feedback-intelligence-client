import { z } from "zod";

export const feedbackSchema = z.object({
  message: z
    .string({
      error: "Feedback message is required",
    })
    .min(10, "Feedback must be at least 10 characters")
    .max(2000, "Feedback cannot exceed 2000 characters"),

  userName: z
    .string()
    .max(100, "Name cannot exceed 100 characters")
    .optional(),
});

export type FeedbackFormValues = z.infer<typeof feedbackSchema>;