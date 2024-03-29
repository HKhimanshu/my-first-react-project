import React from "react";
import styles from "./Mycard.module.css";
function Mycard({ image, title, width, type, redirectTo }) {
  console.log(width);
  let height = 385;
  if (width < 600) {
    height = 300;
  } else if (width < 900) {
    height = 350;
  }

  return (
    <a href={redirectTo}>
      <div className={styles["mycard"]} style={{ minWidth: width + "px" }}>
        <div className={styles["heading"]}>
          <img
            src={image}
            style={{ height: type === "card" ? "280px" : height + "px" }}
          ></img>
        </div>
      </div>
    </a>
  );
}
export default Mycard;
