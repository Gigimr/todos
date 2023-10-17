import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    clearAll: (state, action) => {
      console.log('clearAll');
      return initialState;
    },
  },
});

export const { addTask, clearAll } = taskSlice.actions;
export default taskSlice.reducer;
