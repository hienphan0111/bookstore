import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/booksSlice';
import './Book.styles.scss';

function Book({ book }) {
  const { title, author } = book;
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <div className="info">
        <h3>{title}</h3>
        <span>{author}</span>
      </div>
      <button onClick={() => dispatch(removeBook(book.item_id))} type="button">Remove</button>
    </div>
  );
}

Book.defaultProps = {
  book: {
    item_id: '',
    title: '',
    author: '',
  },
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }),
};

export default Book;
