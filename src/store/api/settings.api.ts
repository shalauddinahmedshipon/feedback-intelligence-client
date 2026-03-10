import { TAGS } from "@/types/api.tags"
import { baseApi } from "./baseApi"
import type {
  ITeamEmailSettings,
  UpdateSettingsPayload,
} from "@/types/settings.types"
import type { ApiResponse } from "@/types/api.response"

export const settingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query<ApiResponse<ITeamEmailSettings>, void>({
      query: () => ({
        url: "/settings",
        method: "GET",
      }),
      providesTags: [TAGS.SETTINGS],
    }),

    updateSettings: builder.mutation<
      ApiResponse<ITeamEmailSettings>,
      UpdateSettingsPayload
    >({
      query: (data) => ({
        url: "/settings/update-settings",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [TAGS.SETTINGS],
    }),
  }),
})

export const { useGetSettingsQuery, useUpdateSettingsMutation } = settingsApi
