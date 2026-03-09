
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


export interface SettingsResponse {
  statusCode: number
  message: string
  data: ITeamEmailSettings
}

export interface UpdateSettingsPayload {
  teamEmails: Record<FeedbackTeam, string>
}