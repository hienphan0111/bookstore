import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'redux/books/booksSlice';
import { CircularProgress } from '@mui/material';
import './Book.styles.scss';

function Book({ book, id }) {
  const { title, author, category } = book;
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(deleteBook({ item_id: id }));
  };

  return (
    <div className="book-container">
      <div className="sec-1">
        <div className="info">
          <span className="category">{category}</span>
          <h3>{title}</h3>
          <span className="author">{author}</span>
        </div>
        <div className="btn-book">
          <button type="button">Comment</button>
          <button onClick={removeHandler} type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="sec-2">
        <CircularProgress className="progressbar" size="80px" variant="determinate" value={75} />
        <div>
          <h4>64%</h4>
          <span className="status">Completed</span>
        </div>
      </div>
      <div className="sec-3">
        <span className="current-chapter">Current chapter</span>
        <h4>Chapter 17</h4>
        <button type="button">update progress</button>
      </div>
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
