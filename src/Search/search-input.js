import styles from './search-input.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchInput() {
  return (
    <div className={styles.content}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchicon} />
      <input placeholder='Search in order' className={styles.searchbtn}></input>
      <p className={styles.cutbtn}>X</p>
    </div>
  );
}

export default SearchInput;
