import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './header.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
            <div className={style.fix}>
              <p>MEN</p>
            </div>
          </li>
          <li className={style.word}>WOMEN</li>
          <li className={style.word}>KIDS</li>
          <li className={style.word}>HOME & LIVING</li>
          <li className={style.word}>BEAUTY</li>
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
      </div>
    </div>
  );
}
export default Header;
