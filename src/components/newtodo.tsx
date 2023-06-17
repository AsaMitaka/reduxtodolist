import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../redux/reducers/todoSlice.js';
import { addTodo } from '../redux/reducers/todoListSlice.js';

const Newtodo = () => {
  const todoName = useSelector((state) => state.todo.name);
  const newTodo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    const newName = event.target.value;
    dispatch(changeName({ name: newName }));
  };

  const handleNewTodo = () => {
    if (!todoName) {
      return;
    }

    dispatch(addTodo(newTodo));
    dispatch(changeName({ name: '' }));
  };

  return (
    <section className="newTodo">
      <label htmlFor="newTodoInput">
        <input
          type="text"
          className="newTodoInput"
          id="newTodoInput"
          value={todoName}
          onChange={handleNameChange}
          placeholder="new to do"
        />
      </label>
      <button className="newTodoBtn" onClick={handleNewTodo}>
        add new to do
      </button>
    </section>
  );
};

export default Newtodo;
