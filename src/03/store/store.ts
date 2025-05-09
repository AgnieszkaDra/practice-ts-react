import { configureStore } from "@reduxjs/toolkit";

import journalReducer from './slices/journalSlice';
import trackingReducer from './slices/trackingSlice';

export const store = configureStore({
    reducer: {
	
		journal: journalReducer,
		tracking: trackingReducer,
		},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;