import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action: any) => {
      const newEvent: any = action.payload;
      const newEvents: any = [{ ...newEvent }, ...state.events];

      state.events = newEvents;
    },
  },
});

export const { setEvents,addEvent } = eventSlice.actions;

export default eventSlice.reducer;
