import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';
import journalReducer from './slices/journalSlice';
import trackingReducer from './slices/trackingSlice';

export const store = configureStore({
    reducer: {
		theme: themeReducer,
		journal: journalReducer,
		tracking: trackingReducer,
		},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;






