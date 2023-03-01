/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksGallery: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.booksGallery = [...state.booksGallery, action.payload];
    },

    removeBook: (state, action) => {
      const result = state.booksGallery.filter((book) => book.item_id !== action.payload);
      return {
        booksGallery: result,
      };
    },
  },
});

export const { setBooks, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
