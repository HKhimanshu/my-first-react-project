import moment from 'moment';
import styles from './cupons.module.css';
import { useState } from 'react';
function Cupons() {
  let coupons = [
    {
      offer: '2,000',
      minimumPurchase: 'Rs. 6,999',
      couponCode: 'PREMIUM2KOFF',
      expiry: moment(),
      details: [
        'Rs. 2000 off on minimum purchase of Rs. 6999',
        ' Maximum applicable discount of 65.0 %',
      ],
    },
    {
      offer: '30%',
      minimumPurchase: ' Rs. 0',
      couponCode: 'NORETURN79',
      expiry: moment(),
      details: ['30% off', 'Maximum applicable discount of 79.0 %'],
    },
    {
      offer: '30%',
      minimumPurchase: 'Rs.0',
      couponCode: 'WATCHES30',
      expiry: moment(),
      details: ['30% off'],
    },
    {
      offer: '20%',
      minimumPurchase: 'Rs.0',
      couponCode: ' APPLIANCES20',
      expiry: moment(),
      details: ['20% off'],
    },
    {
      offer: '20%',
      minimumPurchase: 'Rs. 1,499',
      couponCode: 'ARV20',
      expiry: moment(),
      details: ['20% off on minimum purchase of Rs. 1499'],
    },
    {
      offer: '20%',
      minimumPurchase: 'Rs.0',
      couponCode: 'WATCHES20',
      expiry: moment(),
      details: ['20% off '],
    },
  ];

  return (
    <div>
      {coupons.map((o) => (
        <Coupon o={o} />
      ))}
    </div>
  );
}

function Coupon({ o }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.herodiv}>
      <div className={styles.maindiv}>
        <div className={styles.himanshu}>
          <p className={styles.price}>{o.offer}</p>
          <p className={styles.discount}>OFF</p>
        </div>
        <div className={styles.minimum}>
          <div className={styles.on}>
            <span className={styles.of}>On minimum purchase of </span>
            <span className={styles.code}> {o.minimumPurchase}</span>
          </div>
          <div>
            <span className={styles.of}>Code:</span>
            <span className={styles.code}>{o.couponCode}</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.copnt}>
          <span className={styles.code}>Expiry:</span>
          <span className={styles.date}>{o.expiry.format('MMM DD YYYY')}</span>
          <span className={styles.code}>{o.expiry.format('hh:mm:ss A')}</span>
        </div>
        <div>
          <p className={styles.details} onClick={toggleVisibility}>
            {isVisible ? ' Hide' : ' Details'}
          </p>
        </div>
      </div>
      {isVisible && (
        <div className={styles.hide}>
          <ul>
            {o.details.map((d) => (
              <li className={styles.hello}>{d}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cupons;
