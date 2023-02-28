import Book from 'components/Book.component';
import Form from 'components/Form.component';

function Books() {
  const books = [
    {
      id: 0,
      title: 'The Hunger Games',
      author: 'Suzzanne Collins',
    },
  ];

  return (
    <div className="books">
      {
        books.map((book) => (<Book key={book.id} book={book} />))
      }
      <Form />
    </div>
  );
}

export default Books;
