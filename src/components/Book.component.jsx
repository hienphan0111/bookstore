import PropTypes from 'prop-types';

function Book({ book }) {
  const { title, author } = book;

  return (
    <div className="book-container">
      <h3>{title}</h3>
      <span>{author}</span>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object,
}

export default Book;
