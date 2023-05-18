import { faStar, faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import style from "./product-rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProductRating() {
  return (
    <div>
      <p className={style.rating}>
        Ratings <FontAwesomeIcon icon={faStar} />
      </p>

      <h1 className={style.four}>
        4.1
        <FontAwesomeIcon icon={faStar} />
      </h1>
    </div>
  );
}

export default ProductRating;
