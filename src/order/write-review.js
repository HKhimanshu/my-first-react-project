import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './write-review.module.css';
import { faStar, faX } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import Uploader from './uploder';
function WriteReview() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.fox}>
        <p className={styles.write}>WRITE REVIEW</p>
        <FontAwesomeIcon icon={faX} className={styles.cont} />
      </div>
      <div className={styles.content}>
        <img
          src='https://assets.myntassets.com/assets/images/15760662/2021/10/7/05de2226-2df8-4c6a-8572-25f56f7b34fe1633612031245Cold-pressedWhiteSesameOil250ml1.jpg'
          className={styles.hehe}
        ></img>
        <div className={styles.hero}>
          <p className={styles.cold}>
            ESSENTIA EXTRACTS Cold-Pressed White Sesame Oil - 250ml
          </p>
          <p className={styles.right}>
            <FontAwesomeIcon icon={faStar} className={styles.star} />
            <FontAwesomeIcon icon={faStar} className={styles.graystar} />
            <FontAwesomeIcon icon={faStar} className={styles.graystar} />
            <FontAwesomeIcon icon={faStar} className={styles.graystar} />
            <FontAwesomeIcon icon={faStar} className={styles.graystar} />
          </p>
        </div>
      </div>
      <div className={styles.please}>
        <textarea
          placeholder='Please write product reiview here.'
          className={styles.writer}
        ></textarea>
      </div>
      <Uploader></Uploader>
    </div>
  );
}

export default WriteReview;
