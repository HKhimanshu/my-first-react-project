import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderDetail from './orderdetails-view';
import style from './return-form.module.css';
import {
  faArrowRotateLeft,
  faBox,
  faLeftLong,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../molecules/button/button';
import { useState } from 'react';
function ReturnForm() {
  const [reason] = useState();

  const item = {
    name: 'ESSENTIA EXTRACTS',
    image:
      'https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/15760662/2021/10/7/05de2226-2df8-4c6a-8572-25f56f7b34fe1633612031245Cold-pressedWhiteSesameOil250ml1.webp',
    subtitles: [
      'Cold-Pressed White Sesame Oil - 250ml',
      'Size: 250ML',
      '295.00      ',
    ],
  };
  return (
    <div className={style.maindiv}>
      <div className={style.order}>
        <OrderDetail item={item}></OrderDetail>
        <p className={style.csk}></p>

        <div className={style.content}>
          <div className={style.till}>
            <div className={style.retu}>
              <FontAwesomeIcon icon={faLeftLong} />
              <FontAwesomeIcon icon={faBox} className={style.undo} />
            </div>
            <p className={style.eligible}>Eligible for return till 15 Jun</p>
          </div>
          <div>
            <p className={style.view}>VIEW POLICY</p>
          </div>
        </div>
      </div>
      <div className={style.ordern2}>
        <div className={style.himanshu}>
          <p className={style.did}>Did you receive a wrong/damaged product?</p>
          <div className={style.gm}>
            <p>
              This order can only be returned in a wrong or damaged product was
              delivered. We are sorry for the inconvenience.
            </p>
            <p>
              Please choose the correct reason for return. This information is
              only used to improve our service.
            </p>
          </div>
          <p className={style.csk}></p>

          <div className={style.reason}>
            <p className={style.select}>
              SELECT REASON
              <span>
                <FontAwesomeIcon icon={faStar} className={style.star} />
              </span>
            </p>
            <div className={style.product}>
              <input
                type='radio'
                className={style.sourabh}
                name='sourabh'
              ></input>
              <p className={style.was}>Defective product was delivered</p>
            </div>

            <div className={style.product}>
              <input
                type='radio'
                className={style.sourabh}
                name='sourabh'
              ></input>
              <p className={style.was}>Different product was delivered</p>
            </div>
          </div>

          <p className={style.csk}></p>

          <textarea
            className={style.text}
            placeholder='Additional Comments'
          ></textarea>
        </div>
      </div>
      <div className={style.ord}>
        <div className={style.himanshu}>
          <div className={style.confirm}>
            <input type='checkbox' className={style.check}></input>
            <p className={style.that}>
              I confirm that the product is unused with the original tags
              intact.
            </p>
          </div>
        </div>
      </div>
      <div className={style.ord}>
        <div className={style.himanshu}>
          <div className={style.details}>
            <div>
              <p className={style.pod}>REFUND DETAILS</p>
              <p className={style.price}>₹295</p>
            </div>
            <div>
              <Button type={'primary'} className={style.wide}>
                <p className={style.word}> PICKUP DETAILS &gt;</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnForm;
