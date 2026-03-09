export const TAGS = {
  FEEDBACK: "Feedback",
  SETTINGS:"Settings"
} as const


export type TagType = (typeof TAGS)[keyof typeof TAGS]
