import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './order-ratting.module.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function OrderRatting() {
  return (
    <div className={style.gamer}>
      <div>
        <FontAwesomeIcon icon={faStar} className={style.star} />
        <FontAwesomeIcon icon={faStar} className={style.star} />
        <FontAwesomeIcon icon={faStar} className={style.star} />
        <FontAwesomeIcon icon={faStar} className={style.star} />
        <FontAwesomeIcon icon={faStar} className={style.star} />
      </div>
      <div>
        <p className={style.write}>Write Review</p>
      </div>
    </div>
  );
}

export default OrderRatting;
