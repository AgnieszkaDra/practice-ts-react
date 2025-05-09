import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './01/store/slices/themeSlice';
import ipReducer from './02/store/slices/ipSlice';
import journalReducer from './03/store/slices/journalSlice';
import trackingReducer from './03/store/slices/trackingSlice'; 

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ip: ipReducer,
    journal: journalReducer,
    tracking: trackingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


