/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    isOpen: (state) => { state.categories = 'Under construction'; },
  },
});

export const { isOpen } = categoriesSlice.actions;

export default categoriesSlice.reducer;
