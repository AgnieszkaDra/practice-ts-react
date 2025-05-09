import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPublicIp } from '../../api/ip/fetchPublicIp';

interface IpState {
  ip: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: IpState = {
  ip: null,
  loading: false,
  error: null,
};

export const fetchIpAddress = createAsyncThunk('ip/fetch', async () => {
  return await fetchPublicIp();
});

const ipSlice = createSlice({
  name: 'ip',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIpAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIpAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.ip = action.payload;
      })
      .addCase(fetchIpAddress.rejected, (state) => {
        state.loading = false;
        state.error = 'Nie udało się pobrać adresu IP.';
      });
  },
});

export default ipSlice.reducer;
