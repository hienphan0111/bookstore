import { useEffect } from 'react';
import Book from 'components/Book.component';
import Form from 'components/Form.component';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from 'redux/books/booksSlice';
import './books.styles.scss';

function Books() {
  const dispatch = useDispatch();
  const bookStatus = useSelector((state) => state.books.status);
  useEffect(() => {
    if (bookStatus === 'update') {
      dispatch(getBooks());
    }
  }, [bookStatus]);

  const { booksGallery } = useSelector((state) => state.books);
  const keys = Object.keys(booksGallery);
  return (
    <div className="books">
      {
        keys.map((key) => (<Book key={key} book={booksGallery[key][0]} id={key} />))
      }
      <Form />
    </div>
  );
}

export default Books;
