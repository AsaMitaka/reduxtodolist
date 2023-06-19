import styles from './item.module.scss';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo, changeComplete } from '../../redux/reducers/todoListSlice.js';

const Item = ({ item: { name, id } }): JSX.Element => {
  const dispatch = useDispatch();

  const handleCompleted = (id: number) => {
    dispatch(changeComplete({ id }));
  };

  const handleDelete = (id: number) => {
    dispatch(removeTodo({ id }));
  };

  const handleUpdate = (event, id) => {
    const value = event.target.value;
    if (value.length < 1) {
      dispatch(removeTodo({ id: id }));
    }

    dispatch(updateTodo({ name: value, id: id }));
  };

  return (
    <li className={styles.todo}>
      <input type="checkbox" onClick={() => handleCompleted(id)} className={styles.todocheckbox} />
      <input
        type="text"
        className={styles.todoinput}
        value={name}
        onChange={(event) => handleUpdate(event, id)}
      />
      <button className={styles.todobtn} onClick={() => handleDelete(id)}>
        delete
      </button>
    </li>
  );
};

export default Item;
