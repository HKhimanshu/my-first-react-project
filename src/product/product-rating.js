import style from "./product-rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgreassBar from "./progress-bar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function ProductRating() {
  const ratings = [
    { star: 5, percent: "60%", reviewCount: 11, color: "#14958f" },
    { star: 4, percent: "40%", reviewCount: 5, color: "#14958f" },
    { star: 3, percent: "30%", reviewCount: 1, color: "#72bfbc" },
    { star: 2, percent: "20%", reviewCount: 1, color: "#fcb301" },
    { star: 1, percent: "10%", reviewCount: 1, color: "#f16565" },
  ];
  return (
    <div className={style.maindiv}>
      <div className={style.border}>
        <h1 className={style.four}>
          4.2
          <span>
            <FontAwesomeIcon icon={faStar} className={style.star} />
          </span>
        </h1>

        <p>16 Verified Buyers</p>
      </div>
      <div className={style.himanshu}>
        {ratings.map((r) => (
          <div className={style.kumar}>
            <p className={style.gap}>{r.star}</p>
            <FontAwesomeIcon icon={faStar} className={style.gap} />
            <ProgreassBar
              width={r.percent}
              color={r.color}
              className={style.gap}
            ></ProgreassBar>
            <p className={style.gap}>{r.reviewCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductRating;
