import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    description: 'Task 1 description',
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
