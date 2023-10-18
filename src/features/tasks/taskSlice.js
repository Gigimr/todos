import { createSlice } from '@reduxjs/toolkit';

const initialState = { tasks: [], editingTaskId: null };

export const taskSlice = createSlice({
  name: 'tasksState',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      return state.tasks.push(action.payload);
    },
    clearAll: (state, action) => {
      return initialState;
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.description = description;
      }
    },
  },
});

export const { addTask, clearAll, editTask } = taskSlice.actions;
export default taskSlice.reducer;
