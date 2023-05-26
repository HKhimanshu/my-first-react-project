import style from "./orderdetails-view.module.css";
function OrderDetail({ item, canCancle }) {
  return (
    <div className={style.details}>
      <div className={style.code}>
        <div>
          <img src={item.image}></img>
        </div>
        <div className={style.size}>
          <b>{item.name}</b>
          {item.subtitles.map((i) => (
            <p>{i}</p>
          ))}
        </div>
      </div>
      {canCancle && (
        <button className={style.cancle}>
          <b>Cancle</b>
        </button>
      )}
    </div>
  );
}

export default OrderDetail;
