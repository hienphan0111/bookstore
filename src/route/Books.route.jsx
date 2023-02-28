import Book from 'components/Book.component';
import Form from 'components/Form.component';
import { useSelector } from 'react-redux';
import './books.styles.scss';

function Books() {
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
