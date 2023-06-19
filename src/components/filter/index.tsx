import { changeFilter } from '../../redux/reducers/todoListSlice.js';
import { useDispatch } from 'react-redux';
import styles from './filter.module.scss';
import { AppDispatch } from '../../redux/store.js';

const Filter = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFilter = () => {
    dispatch(changeFilter());
  };

  return (
    <section className={styles.filter}>
      <label className={styles.filterLabel}>
        Done:
        <input type="checkbox" className={styles.filterCheckbox} onClick={handleFilter} />
      </label>
    </section>
  );
};

export default Filter;
