import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

import todoReducer from './books/thunk-test';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    todo: todoReducer,
  },
});

export default store;
