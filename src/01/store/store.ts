import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';


export const storeTheme = configureStore({
    reducer: {
		theme: themeReducer,
},
})

export type RootState = ReturnType<typeof storeTheme.getState>;
export type AppDispatch = typeof storeTheme.dispatch;






