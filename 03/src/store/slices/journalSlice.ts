import { createSlice } from '@reduxjs/toolkit';
import { createJournalEntry } from '../thunks/createJournalEntry';

const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    entries: [] as { id: string; [key: string]: any }[],
  },
  reducers: {
    deleteEntry: (state, action) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
    },
  },
//   extraReducers: builder => {
//     builder.addCase(createJournalEntry.fulfilled, (state, action) => {
//       state.entries.push(action.payload);
//     });
//   },
});

export const { deleteEntry } = journalSlice.actions;
export default journalSlice.reducer;