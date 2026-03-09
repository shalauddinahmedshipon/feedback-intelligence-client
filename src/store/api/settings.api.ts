import { TAGS } from "@/types/api.tags";
import { baseApi } from "./baseApi";
import type { SettingsResponse, UpdateSettingsPayload } from "@/types/settings.types";

export const settingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query<SettingsResponse, void>({
      query: () => ({
        url: "/settings",
        method: "GET",
      }),
      providesTags: [TAGS.SETTINGS],
    }),

    updateSettings: builder.mutation<
      SettingsResponse,
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
});

export const {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
} = settingsApi;