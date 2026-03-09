import { TAGS } from '@/types/api.tags'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  tagTypes: Object.values(TAGS),
  endpoints: () => ({}),
})

