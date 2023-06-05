import { Radio } from 'antd';
import styles from './filter.module.css';
function Filter() {
  return (
    <div className={styles.maindiv}>
      <p className={styles.filterorder}>Filter Orders</p>
      <h4 className={styles.status}>status</h4>
      <input type='Radio' className={styles.radio}></input>
    </div>
  );
}

export default Filter;
