import { TAGS } from "@/types/api.tags"
import { baseApi } from "./baseApi"
import type {
  ICreateFeedbackPayload,
  IFeedback,
  IFeedbackQuery,
  IFeedbackResponse,
  IFeedbackStats,
} from "@/types/feedback.types"
import type { ApiResponse } from "@/types/api.response"

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFeedback: builder.mutation<
      ApiResponse<IFeedback>,
      ICreateFeedbackPayload
    >({
      query: (body) => ({
        url: "/feedback/create-feedback",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS.FEEDBACK],
    }),

    getFeedbacks: builder.query<ApiResponse<IFeedbackResponse>, IFeedbackQuery>(
      {
        query: (params) => ({
          url: "/feedback",
          method: "GET",
          params,
        }),
        providesTags: [TAGS.FEEDBACK],
      }
    ),

    getFeedbackStats: builder.query<ApiResponse<IFeedbackStats>, void>({
      query: () => ({
        url: "/feedback/stats",
        method: "GET",
      }),
      providesTags: [TAGS.FEEDBACK],
    }),

    getFeedbackById: builder.query<ApiResponse<IFeedback>, string>({
      query: (id) => ({
        url: `/feedback/${id}`,
        method: "GET",
      }),
      providesTags: [TAGS.FEEDBACK],
    }),

    deleteFeedback: builder.mutation<ApiResponse<{ success: boolean }>, string>(
      {
        query: (id) => ({
          url: `/feedback/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: [TAGS.FEEDBACK],
      }
    ),
  }),
})

export const {
  useCreateFeedbackMutation,
  useGetFeedbacksQuery,
  useGetFeedbackStatsQuery,
  useGetFeedbackByIdQuery,
  useDeleteFeedbackMutation,
} = feedbackApi
