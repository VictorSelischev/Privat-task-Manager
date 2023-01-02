import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
