import { createAsyncThunk } from '@reduxjs/toolkit';
import { JournalEntry } from '../../components/features/Forms/Journal/JournalEntry';

export const createJournalEntry = createAsyncThunk(
  'journal/createJournalEntry',
  async (entry: Omit<JournalEntry, 'id'>, { rejectWithValue }) => {
    try {
      // simulate server-side storage (e.g., localStorage or a fake API)
      const newEntry = {
        ...entry,
        id: Date.now().toString(),
      };
      // You can save to localStorage or return to update state
      return newEntry;
    } catch (error) {
      return rejectWithValue('Failed to create journal entry');
    }
  }
);