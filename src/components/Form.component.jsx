// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from 'redux/books/booksSlice';
import './form.styles.scss';

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const resetInput = () => {
    setTitle('');
    setAuthor('');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (title && author && category) {
      const item = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBook(item));
      resetInput();
    }
  };

  return (
    <form onSubmit={submitHandler} className="add-book">
      <h3 className="form-title">Add new book</h3>
      <div className="input">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Book title"
          required
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
          placeholder="Book author"
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} placeholder="...Choose categories">
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
          <option value="History">History</option>
          <option value="Psychology">Psychology</option>
          <option value="Personal growth">Personal Growth</option>
        </select>
        <button type="submit">Add book</button>
      </div>
    </form>
  );
}

export default Form;
