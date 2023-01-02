import { createSlice } from '@reduxjs/toolkit/dist/createSlice';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {},
});

export const tasksReducer = tasksSlice.reducer;
