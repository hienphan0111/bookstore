// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import fetTodo from 'redux/api/todo';
import store from 'redux/store';

function Todo() {
  useEffect(() => {
    store.dispatch(fetTodo());
  }, []);

  const { todo } = useSelector((state) => state.todo);
  console.log(todo[0]);
  return (
    <div>
      <button type="button">Up</button>
      <div>
        {
          todo[0].map((item) => <span key={item.id}>{item.title}</span>)
        }
      </div>
      <button type="button">Down</button>
    </div>
  );
}

export default Todo;
