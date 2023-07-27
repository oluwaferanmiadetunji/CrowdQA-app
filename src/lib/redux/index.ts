import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import eventReducer from './events.slice';
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'lib/constants';
import { getTokenFromLocalStorage } from 'lib/helpers';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const accessToken = getTokenFromLocalStorage();
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
        headers.set('Content-Type', 'application/json');
      }

      return headers;
    },
  }),
  tagTypes: ['Events', 'Auth'],
  endpoints: (builder) => ({}),
});

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    events: eventReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
