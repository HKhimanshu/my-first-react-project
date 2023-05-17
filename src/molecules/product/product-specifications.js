import styles from "./product-specifications.module.css";
function ProductdSpecifications({ data }) {
  return (
    <div class={styles.indextableContainer}>
      {data.map((i) => (
        <div className={styles.indexrow}>
          <div className={styles.indexrowKey}>{i.type}</div>
          <div className={styles.indexrowVal}>{i.value}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductdSpecifications;
