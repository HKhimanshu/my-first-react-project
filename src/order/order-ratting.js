import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './order-ratting.module.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import WriteReview from './write-review';
import Modal from '../modal/modal';

function OrderRatting() {
  const [hoverStar, setHoverStar] = useState(0);
  const [ratting, setRatting] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const stars = [1, 2, 3, 4, 5];
  console.log(hoverStar);
  return (
    <div className={style.gamer}>
      <div>
        {stars.map((i) => {
          return (
            <FontAwesomeIcon
              onMouseOver={() => setHoverStar(i)}
              onMouseOut={() => setHoverStar(0)}
              onClick={() => setRatting(i)}
              icon={faStar}
              className={
                style.star +
                ' ' +
                (i <= hoverStar || i <= ratting ? style.active : '')
              }
            />
          );
        })}
      </div>
      <div>
        <p className={style.write} onClick={() => setShowModal(true)}>
          Write Review
        </p>
        {showModal && (
          <Modal closeModal={closeModal}>
            <WriteReview
              closeModal={closeModal}
              ratting={ratting}
            ></WriteReview>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default OrderRatting;
