// schema/settings.schema.ts
import { z } from "zod";

export const settingsSchema = z.object({
  teamEmails: z.object({
    engineering: z.string().email({ message: "Please enter a valid email" }),
    product:     z.string().email({ message: "Please enter a valid email" }),
    support:     z.string().email({ message: "Please enter a valid email" }),
    billing:     z.string().email({ message: "Please enter a valid email" }),
    design:      z.string().email({ message: "Please enter a valid email" }),
    security:    z.string().email({ message: "Please enter a valid email" }),
  }).strict(), // prevents extra keys
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;