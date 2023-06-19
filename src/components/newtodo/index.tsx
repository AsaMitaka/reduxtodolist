import styles from './newtodo.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeId, Todo } from '../../redux/reducers/todoSlice.js';
import { addTodo } from '../../redux/reducers/todoListSlice.js';
import { AppDispatch } from '../../redux/store.js';

const Newtodo = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const todoName = useSelector((state: Todo) => state.todo.name);
  const newTodo = useSelector((state: Todo) => state.todo);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    dispatch(changeName({ name: newName }));
  };

  const handleNewTodo = () => {
    if (!todoName) {
      return;
    }

    dispatch(changeId({ id: Date.now() }));

    dispatch(addTodo(newTodo));
    dispatch(changeName({ name: '' }));
    dispatch(changeId({ id: 0 }));
  };

  return (
    <section className={styles.newTodo}>
      <label htmlFor="newTodoInput" className={styles.newTodoLabel}>
        <input
          type="text"
          className={styles.newTodoInput}
          id="newTodoInput"
          value={todoName}
          onChange={handleNameChange}
          placeholder="new to do"
          tabIndex="0"
        />
      </label>
      <button className={styles.newTodoBtn} onClick={handleNewTodo} tabIndex="0">
        add new to do
      </button>
    </section>
  );
};

export default Newtodo;
