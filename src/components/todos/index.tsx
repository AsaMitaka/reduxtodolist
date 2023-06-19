import { useSelector } from 'react-redux';
import { Item } from '../';
import styles from './todos.module.scss';

const Todos = () => {
  const todos = useSelector((state) => {
    const { todos, filter } = state.todos;
    if (filter) {
      return todos.filter((todo) => todo.complete === true);
    }

    return todos;
  });

  return (
    <section className={styles.todos}>
      {todos.length > 0 && (
        <ul>
          {todos.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Todos;
