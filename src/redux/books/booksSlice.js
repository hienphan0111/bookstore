/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'sJRqUbIjGomlIKsHsDP3';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

const initialState = {
  booksGallery: [],
  status: 'update',
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  },
);

export const addBook = createAsyncThunk(
  'books/addBooks',
  async (book, thunkAPI) => {
    try {
      const res = await axios.post(API_URL, book);
      return res.status;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deteteBook',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${API_URL}/${id.item_id}`);
      return res.status;
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
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.booksGallery = payload;
        state.status = 'complete';
      })
      .addCase(addBook.fulfilled, (state) => {
        state.status = 'update';
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.status = 'update';
      });
  },
});

// export const getStatus = (state) => state.books.status;

export const { setBooks, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
