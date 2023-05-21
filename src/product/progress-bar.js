import style from "./progress-bar.module.css";
function ProgreassBar({ color, width, className }) {
  return (
    <div className={style.container + " " + className}>
      <div className={style.loading + " " + style[color]}>
        <div
          className={style.bar}
          style={{ backgroundColor: color, width }}
        ></div>
      </div>
    </div>
  );
}

export default ProgreassBar;
