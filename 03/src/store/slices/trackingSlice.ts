import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  secondsActive: 0,
  charCount: 0,
  isTracking: false,
};

const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    startTracking(state) {
      state.isTracking = true;
    },
    stopTracking(state) {
      state.isTracking = false;
    },
    incrementTime(state) {
      if (state.isTracking) {
        state.secondsActive += 1;
      }
    },
    updateCharCount(state, action) {
      state.charCount = action.payload;
    },
    resetTracking(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  startTracking,
  stopTracking,
  incrementTime,
  updateCharCount,
  resetTracking,
} = trackingSlice.actions;

export default trackingSlice.reducer;