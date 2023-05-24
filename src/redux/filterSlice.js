import { createSlice } from '@reduxjs/toolkit';

export const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter: (state, action) => (state = action.payload),
  },
});

export const { getFilter } = filter.actions;
export const filterReducer = filter.reducer;
