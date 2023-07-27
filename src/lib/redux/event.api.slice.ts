import { apiSlice } from './index';

export const eventApSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (data) => ({
        url: `/events`,
        method: 'POST',
        body: data,
      }),
    }),

    queryEvents: builder.mutation({
      query: (data) => ({
        url: `/events`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateEventMutation, useQueryEventsMutation } = eventApSlice;
