import { createSlice } from '@reduxjs/toolkit';

const initialState = { tasks: [], editingTask: null };

export const taskSlice = createSlice({
  name: 'tasksState',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const tasks = [...state.tasks];
      tasks.push(action.payload);
      return {
        ...state,
        tasks,
      };
    },
    clearAll: (state, action) => {
      return initialState;
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const tasks = [...state.tasks];
      const filterTasks = tasks.filter((task) => task.id !== id);
      return {
        editingTask: description,
        tasks: filterTasks,
      };
    },
    deleteTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1);
      }
    },
  },
});

export const { addTask, clearAll, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
