import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'lib/constants';

const baseQuery = fetchBaseQuery({ baseUrl: API_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Auth'],
  endpoints: (builder) => ({}),
});

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: 'POST',
        body: data,
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
