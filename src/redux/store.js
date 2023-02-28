import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducers: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
