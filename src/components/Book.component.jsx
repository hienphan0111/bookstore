import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, author } = book;

  return (
    <div className="book-container">
      <h3>{title}</h3>
      <span>{author}</span>
      <button type="button">Remove</button>
    </div>
  );
};

Book.PropTypes = {
  book: PropTypes.object,
  title: PropTypes.string,
  author: PropTypes.string,
}

export default Book;
