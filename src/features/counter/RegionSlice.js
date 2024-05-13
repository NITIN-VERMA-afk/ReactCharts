import { createSlice } from '@reduxjs/toolkit';

export const regionSlice = createSlice({
  name: 'region',
  initialState: {
    value: 'All Regions',
  },
  reducers: {
    setRegion: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export const selectRegion = (state) => state.region.value;

export default regionSlice.reducer;