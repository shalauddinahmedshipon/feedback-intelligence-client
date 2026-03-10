export type FeedbackTeam =
  | "engineering"
  | "product"
  | "support"
  | "billing"
  | "design"
  | "security"

export interface ITeamEmailSettings {
  teamEmails: Record<FeedbackTeam, string>
  updatedAt?: string
}

export interface UpdateSettingsPayload {
  teamEmails: Record<FeedbackTeam, string>
}
