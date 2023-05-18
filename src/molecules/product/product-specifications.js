import { useState } from "react";
import Button from "../button/button";
import styles from "./product-specifications.module.css";
function ProductdSpecifications({ data }) {
  const [showMore, setShowMore] = useState(false);
  let dataToShow = data;
  if (!showMore && dataToShow.length > 6) {
    dataToShow = data.slice(0, 6);
  }

  return (
    <div>
      <div class={styles.indextableContainer}>
        {dataToShow.map((i) => (
          <div className={styles.indexrow}>
            <div className={styles.indexrowKey}>{i.type}</div>
            <div className={styles.indexrowVal}>{i.value}</div>
          </div>
        ))}
      </div>
      <Button type="link" onClick={() => setShowMore(!showMore)}>
        See {showMore ? "Less" : "More"}
      </Button>
    </div>
  );
}

export default ProductdSpecifications;
