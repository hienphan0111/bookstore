/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksGallery: // Initial state:
  [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, actions) => {
      const itemId = 'item'.concat((state.booksGallery.length + 1).toString());
      const book = {
        ...actions.payload,
        item_id: itemId,
      };

      return {
        booksGallery: [...state.booksGallery, book],
      };
    },

    removeBook: (state, actions) => {
      const result = state.booksGallery.filter((book) => book.item_id !== actions.payload);
      return {
        booksGallery: result,
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
