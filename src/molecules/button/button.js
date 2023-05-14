import styles from "./button.module.css";
function Button({ children, type }) {
  return (
    <button className={styles[type]}>
      <p className={styles.title}>{children}</p>
    </button>
  );
}

export default Button;
