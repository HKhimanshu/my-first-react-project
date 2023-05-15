import styles from "./button.module.css";
function Button({ children, type, className }) {
  console.log(children);
  return (
    <button
      className={
        styles.btn + " " + styles[type] + " " + (className ? className : "")
      }
    >
      <div className={styles.title}>{children}</div>
    </button>
  );
}

export default Button;
