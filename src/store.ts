import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './01/store/slices/themeSlice';
import ipReducer from './02/store/slices/ipSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ip: ipReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
