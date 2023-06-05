import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './write-review.module.css';
import { faStar, faX } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import Uploader from './uploder';
function WriteReview({ closeModal, ratting }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={styles.maincontainer}>
      <div className={styles.fox}>
        <p className={styles.write}>WRITE REVIEW</p>
        <FontAwesomeIcon
          icon={faX}
          className={styles.cont}
          onClick={closeModal}
        />
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
            {stars.map((i) => {
              return (
                <FontAwesomeIcon
                  icon={faStar}
                  className={i <= ratting ? styles.star : styles.graystar}
                />
              );
            })}
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
      <p className={styles.byyy}>
        By submitting review you give us consent to publish and process personal
        information in accordance with
        <span className={styles.terms}>Terms of use </span>and
        <span className={styles.terms}> Privacy Policy</span>
      </p>
      <div className={styles.lastbtn}>
        <button className={styles.submit}>SUBMIT</button>
      </div>
    </div>
  );
}

export default WriteReview;
