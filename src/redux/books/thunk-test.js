import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const newTodo = action.payload;
      return {
        todo: [...state.todo, newTodo],
      };
    },
  },
});

export const { setUser } = todoSlice.actions;

export default todoSlice.reducer;
