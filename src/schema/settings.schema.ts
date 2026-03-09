import { z } from "zod";

export const settingsSchema = z.object({
  teamEmails: z.object({
    Engineering: z.string().email(),
    Product: z.string().email(),
    Support: z.string().email(),
    Billing: z.string().email(),
    Design: z.string().email(),
    Security: z.string().email(),
  }),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;