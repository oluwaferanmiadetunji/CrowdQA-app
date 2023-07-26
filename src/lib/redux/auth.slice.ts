import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') || '') : null,
  auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth') || '') : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload?.user;
      state.auth = action.payload?.token;
      localStorage.setItem('userInfo', JSON.stringify(action.payload?.user));
      localStorage.setItem('auth', JSON.stringify(action.payload?.token));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
