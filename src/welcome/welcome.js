import style from './wlcome.module.css';
import React from 'react';

export default function ProfleMenu() {
  return (
    <div className={style.maindiv}>
      <div>
        <p className={style.welcome}>Welcome</p>
        <p className={style.text}>To access account and manage orders</p>
      </div>
      <button className={style.login}> LOGIN /SINGUP</button>
      <div className={style.content}>
        <div className={style.coupns}>
          <p className={style.code}>Orders</p>
        </div>

        <div className={style.coupns}>
          <p className={style.code}>Wishlist</p>
        </div>

        <div className={style.coupns}>
          <p className={style.code}>Gift Card</p>
        </div>

        <div className={style.coupns}>
          <p className={style.code}>Contact Us</p>
        </div>
      </div>
      {/* second */}

      <div className={style.content}>
        <div className={style.coupns}>
          <p className={style.code}>Coupons</p>
        </div>

        <div className={style.coupns}>
          <p className={style.code}>Saved Card</p>
        </div>

        <div className={style.coupns}>
          <p className={style.code}>Saved Addresses</p>
        </div>
      </div>
    </div>
  );
}
