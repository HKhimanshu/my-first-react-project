import style from "./progress-bar.module.css";
function ProgreassBar() {
  return (
    <div className={style.container}>
      <div className={style.loading}></div>
    </div>
  );
}

export default ProgreassBar;
