import styles from "./product-variant-size.module.css";
function ProductVariantSize({ title, tooltiptext, disabled }) {
  return (
    <div className={styles.tooltip}>
      <div className={styles.himanshu + ` ${disabled ? styles.disableds : ""}`}>
        <button className={styles.btno}>
          <p className={styles["cold"]}>{title}</p>
          <span></span>
        </button>
        <span className={styles["tooltiptext"]}>{tooltiptext}</span>
      </div>
    </div>
  );
}

export default ProductVariantSize;
