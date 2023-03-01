import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { setUser } from '../books/thunk-test';

const url = 'https://jsonplaceholder.typicode.com/todos';

const fetTodo = () => async (dispatch) => {
  try {
    const res = await axios.get(url);
    dispatch(setUser([...res.data]));
  } catch (erorr) {
    console.log(erorr.message);
  }
};

export default fetTodo;
