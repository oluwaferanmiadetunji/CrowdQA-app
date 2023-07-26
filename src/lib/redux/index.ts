import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import { apiSlice } from './auth.api.slice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
