import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'lib/constants';

const baseQuery = fetchBaseQuery({ baseUrl: API_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
