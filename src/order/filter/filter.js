import { Radio } from 'antd';
import styles from './filter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Button from '../../molecules/button/button';
function OrderFilter({ closeModal }) {
  return (
    <div className={styles.maindiv}>
      <div className={styles.continer}>
        <p className={styles.filterorder}>Filter Orders</p>
        <FontAwesomeIcon
          icon={faX}
          className={styles.cutbtn}
          onClick={closeModal}
        />
      </div>
      <div className={styles.secondary}>
        <h4 className={styles.status}>Status</h4>
        <div className={styles.content}>
          <input type='radio' className={styles.radio} name='status'></input>
          <p className={styles.all}>All</p>
        </div>

        <div className={styles.content}>
          <input type='radio' className={styles.radio} name='status'></input>
          <p className={styles.all}>On the way</p>
        </div>

        <div className={styles.content}>
          <input type='radio' className={styles.radio} name='status'></input>
          <p className={styles.all}>Delivered</p>
        </div>

        <div className={styles.content}>
          <input type='radio' className={styles.radio} name='status'></input>
          <p className={styles.all}>Cancelled</p>
        </div>

        <div className={styles.content}>
          <input type='radio' className={styles.radio} name='status'></input>
          <p className={styles.all}>Returned</p>
        </div>
      </div>

      <p className={styles.boder}></p>

      <div className={styles.secondary}>
        <h4 className={styles.time}>Time</h4>

        <div className={styles.content}>
          <input type='radio' name='time' className={styles.timeradio}></input>
          <p className={styles.all}>Anytime</p>
        </div>

        <div className={styles.content}>
          <input type='radio' name='time' className={styles.timeradio}></input>
          <p className={styles.all}>Last 30 days</p>
        </div>

        <div className={styles.content}>
          <input type='radio' name='time' className={styles.timeradio}></input>
          <p className={styles.all}>Last 6 months</p>
        </div>

        <div className={styles.content}>
          <input type='radio' name='time' className={styles.timeradio}></input>
          <p className={styles.all}>Last year</p>
        </div>
      </div>
      <p className={styles.boder}></p>
      <div className={styles.cont}>
        <Button className={styles['wishlist-btn']} type={'secondary'}>
          <p className={styles.word}> CLEAR FILTER</p>
        </Button>
        <Button type={'primary'} className={styles.wide}>
          <p className={styles.word}>APPLAY</p>
        </Button>
      </div>
    </div>
  );
}

export default OrderFilter;
