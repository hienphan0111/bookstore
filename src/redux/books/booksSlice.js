/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'sJRqUbIjGomlIKsHsDP3';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

const initialState = {
  booksGallery: [],
  loading: false,
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (thunkAPI) => {
    const res = await axios.get(API_URL);
    return Object.values(res.data).flat();
  },
);

export const addBook = createAsyncThunk(
  'books/addBooks',
  async (book, thunkAPI) => {
    console.log('before');
    try {
      console.log(book);
      const res = await axios.post(API_URL, book);
      return book;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

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
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      state.booksGallery = payload;
    },
    [getBooks.rejected]: (state) => {
      state.loading = false;
    },
    [addBook.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.booksGallery = [...state.booksGallery, payload];
    },
  },
});

export const { setBooks, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
