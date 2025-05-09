import { configureStore } from '@reduxjs/toolkit';
import ipReducer from './slices/ipSlice';

export const storeIp = configureStore({
  reducer: {
    ip: ipReducer,
  },
});

export type RootState = ReturnType<typeof storeIp.getState>;
export type AppDispatch = typeof storeIp.dispatch;
