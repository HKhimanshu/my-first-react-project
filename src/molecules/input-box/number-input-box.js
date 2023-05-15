import style from "./number-input-box.module.css";
function NumberInputBox(title) {
  return (
    <div className={style.bord}>
      <input
        type="number"
        placeholder="Enter Pincode"
        className={style.pincode}
      ></input>
      <button className={style.check}>
        <b>Check</b>
      </button>
    </div>
  );
}

export default NumberInputBox;
