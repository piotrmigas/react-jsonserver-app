import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const slice = createSlice({
  name: 'task',
  initialState: { showAddTask: false },
  reducers: {
    toggleAddTask: (state) => {
      state.showAddTask = !state.showAddTask;
    },
  },
});

export const { toggleAddTask } = slice.actions;

export const selectToggleTask = (state: RootState) => state.task.showAddTask;

export default slice.reducer;
