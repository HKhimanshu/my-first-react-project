import styles from './cupons.module.css';
function Cupons() {
  return (
    <div className={styles.herodiv}>
      <div className={styles.maindiv}>
        <div className={styles.himanshu}>
          <p className={styles.price}>2,000</p>
          <p className={styles.discount}>OFF</p>
        </div>
        <div className={styles.minimum}>
          <div className={styles.on}>
            <span className={styles.of}>On minimum purchase of</span>
            <span className={styles.code}> Rs. 6,999</span>
          </div>
          <div>
            <span className={styles.of}>Code:</span>
            <span className={styles.code}>PREMIUM2KOFF</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.copnt}>
          <span className={styles.code}>Expiry: </span>
          <span className={styles.date}> JUN 30 2023</span>
          <span className={styles.code}> 02:25:00 P.M</span>
        </div>
        <div>
          <p className={styles.details}>Details</p>
        </div>
      </div>
    </div>
  );
}

export default Cupons;
