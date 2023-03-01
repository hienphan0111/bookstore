import axios from 'axios';
import { setBooks } from '../books/booksSlice';

const API_KEY = 'sJRqUbIjGomlIKsHsDP3';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

const getBooks = () => async (dispatch) => {
  try {
    const res = await axios.get(API_URL);
    if (res.status === 200) {
      console.log(res.data.item1);
      dispatch(setBooks(res.data));
    } else {
      throw new Error('Couldn\'t get data');
    }
  } catch (e) {
    alert(e.message);
  }
};

export default getBooks;
