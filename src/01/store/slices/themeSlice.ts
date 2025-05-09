import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '../../types/ThemeState';

const initialState: ThemeState = {
	theme: (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
  };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme: ThemeState['theme'] = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      state.theme = newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;





