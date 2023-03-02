import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'redux/books/booksSlice';
import './Book.styles.scss';

function Book({ book, id }) {
  const { title, author, category } = book;
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(deleteBook({ item_id: id }));
  };

  return (
    <div className="book-container">
      <div className="info">
        <span>{category}</span>
        <h3>{title}</h3>
        <span>{author}</span>
      </div>
      <button onClick={removeHandler} type="button">Remove</button>
    </div>
  );
}

Book.defaultProps = {
  book: {
    item_id: '',
    title: '',
    author: '',
    category: '',
  },
  id: '',
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }),
  id: PropTypes.string,
};

export default Book;
