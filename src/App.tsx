import styles from './App.module.scss';
import { useSelector } from 'react-redux';
import { Newtodo, Header, Item, Footer } from './components';

function App() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Newtodo />
      <section className={styles.todolist}>
        {todos.length > 0 && (
          <ul>
            {todos.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </ul>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
