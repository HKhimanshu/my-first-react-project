import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './photoveraction.module.css';
import { faArrowRight, faCamera, faX } from '@fortawesome/free-solid-svg-icons';
import Button from '../molecules/button/button';
import Uploader from './uploder';
function PhotoVeraction() {
  return (
    <div className={style.maindiv}>
      <div className={style.seconddiv}>
        <div className={style.flas}>
          <p className={style.photo}>Photo Verification</p>
          <FontAwesomeIcon icon={faX} className={style.cutbtn} />
        </div>
        <div className={style.fox}>
          <p className={style.speed}>
            Speed up the verification process by sharing some photos with us.
          </p>
          <img
            src='https://myntraweb.blob.core.windows.net/selfserveui/assets/images/WPRImageVerification.png'
            className={style.image}
          ></img>
        </div>
      </div>

      <div className={style.move}>
        <div className={style.max}>
          <div>
            <p className={style.complete}>
              Complete product<span className={style.star}>*</span>
            </p>
            <p className={style.rrr}>Max size up to 5MB</p>
          </div>
        </div>
        <div className={style.loader}>
          <Uploader max={10}></Uploader>
        </div>
        <hr className={style.line}></hr>
        <div>
          <textarea
            className={style.hhh}
            placeholder='Additional comments (optional)'
          ></textarea>
        </div>
      </div>
      <div className={style.endbtn}>
        <Button type={'submit'} className={style.wide}>
          <p className={style.word}> PICKUP DETAILS</p>
          <FontAwesomeIcon icon={faArrowRight} className={style.arro} />
        </Button>
      </div>
    </div>
  );
}

export default PhotoVeraction;
