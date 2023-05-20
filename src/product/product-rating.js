import { faStar, faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import style from "./product-rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgreassBar from "./progress-bar";
function ProductRating() {
  return (
    <div>
      <div className={style.border}>
        <p className={style.rating}>
          Ratings <FontAwesomeIcon icon={faStar} />
        </p>

        <h1 className={style.four}>
          4.2
          <span>
            <FontAwesomeIcon icon={faStar} className={style.star} />
          </span>
        </h1>
        <ProgreassBar></ProgreassBar>

        <p>16 Verified Buyers</p>
      </div>
      <div className={style.himanshu}>
        <div className={style.kumar}></div>
        <div className={style.kumar}></div>
        <div className={style.kumar}></div>
        <div className={style.kumar}></div>
        <div className={style.kumar}></div>
      </div>
    </div>
  );
}

export default ProductRating;
