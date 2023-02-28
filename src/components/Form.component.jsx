function Form() {
  return (
    <form className="add-book">
      <h3 className="form-title">Add new book</h3>
      <div className="input">
        <input type="text" placeholder="Book title" required />
        <input type="text" placeholder="Book author" required />
        <button type="submit">Add book</button>
      </div>
    </form>
  );
}

export default Form;
