// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import './form.styles.scss';

function Form() {
  // const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // const book = {
  //   item_id: '',
  //   title: '',
  //   author: '',
  //   category: 'default',
  // };

  const resetInput = () => {
    setTitle('');
    setAuthor('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && author) {
      // dispatch(addBook({
      //   ...book,
      //   item_id: uuidv4(),
      //   title,
      //   author,
      // }));
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
        <button type="submit">Add book</button>
      </div>
    </form>
  );
}

export default Form;
