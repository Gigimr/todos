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
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return { ...state, tasks: filteredTasks };
    },
    toggleTask: (state, action) => {
      const { id, complete } = action.payload;
      const tasks = state.tasks.map((t) => {
        if (t.id === id) {
          return { ...t, complete: !complete };
        }
        return t;
      });
      return { ...state, tasks };
    },
  },
});

export const { addTask, clearAll, editTask, deleteTask, toggleTask } =
  taskSlice.actions;
export default taskSlice.reducer;
