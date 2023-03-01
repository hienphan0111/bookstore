import { useEffect } from 'react';
import Book from 'components/Book.component';
import Form from 'components/Form.component';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from 'redux/books/booksSlice';
import './books.styles.scss';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const { booksGallery } = useSelector((state) => state.books);
  console.log(booksGallery);
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
