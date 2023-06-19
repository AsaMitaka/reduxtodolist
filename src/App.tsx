import styles from './App.module.scss';

import { Newtodo, Header, Todos, Footer, Filter } from './components';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Newtodo />
      <Filter />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
