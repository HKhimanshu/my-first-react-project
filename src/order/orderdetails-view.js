import style from "./orderdetails-view.module.css";
function OrderDetail() {
  return (
    <div className={style.details}>
      <div className={style.code}>
        <div>
          <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15760662/2021/10/7/05de2226-2df8-4c6a-8572-25f56f7b34fe1633612031245Cold-pressedWhiteSesameOil250ml1.jpg"></img>
        </div>
        <div className={style.size}>
          <b>ESSENTIA EXTRACTS</b>
          <p>Cold-Pressed White Sesame Oil-250ml</p>
          <p>size:250ml</p>
        </div>
      </div>
      <button className={style.cancle}>
        <b>Cancle</b>
      </button>
    </div>
  );
}

export default OrderDetail;
