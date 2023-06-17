import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/reducers/todoListSlice.js';

const Item = ({ item: { name, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = (idx: number) => {
    dispatch(removeTodo({ idx }));
  };

  const handleUpdate = (event, id) => {
    const value = event.target.value;
    if (value.length < 1) {
      dispatch(removeTodo({ idx: id }));
    }

    dispatch(updateTodo({ name: value, id: id }));
  };

  return (
    <li>
      <input type="text" value={name} onChange={(event) => handleUpdate(event, id)} />
      <button onClick={() => handleDelete(id)}>delete</button>
    </li>
  );
};

export default Item;
