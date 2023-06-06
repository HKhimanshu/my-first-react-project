import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderDetail from './orderdetails-view';
import style from './return-form.module.css';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
function ReturnForm() {
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
        <hr className={style.line}></hr>
        <div className={style.till}>
          <FontAwesomeIcon icon={faArrowRotateLeft} className={style.undo} />
          <p className={style.eligible}>Eligible for return till 15 Jun</p>
        </div>
      </div>
    </div>
  );
}

export default ReturnForm;
