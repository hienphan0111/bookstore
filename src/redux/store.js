import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducers: {
    books: booksReducer,
    categories: categoriesReducer,
  }
});
