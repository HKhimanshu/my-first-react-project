import style from './orderdetails-view.module.css';
function OrderDetail({ item, canCancle, canReturn }) {
  return (
    <div className={style.details}>
      <div className={style.code}>
        <div>
          <img src={item.image}></img>
        </div>
        <div className={style.size}>
          <div>
            <b>{item.name}</b>
            {item.subtitles.map((i) => (
              <p>{i}</p>
            ))}
          </div>
          <div className={style.great}>&gt;</div>
        </div>
      </div>
      {canCancle && (
        <button className={style.cancle}>
          <b>Cancle</b>
        </button>
      )}
      {canReturn && (
        <button className={style.cancle}>
          <b>Return</b>
        </button>
      )}
    </div>
  );
}

export default OrderDetail;
