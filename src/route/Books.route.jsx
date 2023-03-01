import { useEffect } from 'react';
import store from 'redux/store';
import Book from 'components/Book.component';
import Form from 'components/Form.component';
import { useSelector } from 'react-redux';
import getBooks from '../redux/api/bookApi';
import './books.styles.scss';

function Books() {
  useEffect(() => {
    store.dispatch(getBooks());
  }, []);

  const { booksGallery } = useSelector((state) => state.books);

  return (
    <div className="books">
      {
        booksGallery.map((book) => (<Book key={book.item_id} book={book} />))
      }
      <Form />
    </div>
  );
}

export default Books;
