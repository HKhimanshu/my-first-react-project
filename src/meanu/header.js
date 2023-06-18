import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './header.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
function Header() {
  return (
    <div className={style.maincontener}>
      <div className={style.hero}>
        <div>
          <img
            src='https://navbharattimes.indiatimes.com/photo/msid-80602014,imgsize-22742/pic.jpg'
            className={style.logo}
          ></img>
        </div>
        <ul className={style.himanshu}>
          <li className={style.word}>
            <div className={style.men}>
              <p>MEN</p>
            </div>
          </li>
          <li className={style.word}>
            <div className={style.women}>
              <p>WOMEN</p>
            </div>
          </li>
          <li className={style.word}>
            <div className={style.kids}>
              <p>KIDS</p>
            </div>
          </li>
          <li className={style.word}>
            <div className={style.living}>
              <p>HOME&LIVING</p>
            </div>
          </li>
          <li className={style.word}>
            <div className={style.beauty}>
              <p>BEAUTY</p>
            </div>
          </li>
        </ul>
        <div className={style.search}>
          <div className={style.for}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={style.glass} />
          </div>
          <div>
            <input
              placeholder='Search for products, brands and more'
              className={style.place}
            ></input>
          </div>
        </div>
        <div className={style.user}>
          <FontAwesomeIcon icon={faUser} className={style.icc} />
          <p className={style.pro}>profile</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
