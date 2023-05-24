import style from "./order-details.module.css";
function OrderDetails() {
  return (
    <div className={style.himanshu}>
      <div>
        <h2>Account</h2>
        <p>Pintu Kumar</p>
        <hr className={style.line}></hr>
      </div>
      <div>
        <p className={style.over}>Overview</p>
        <hr className={style.rrr}></hr>
        <p className={style.out}>ORDERS</p>
        <p className={style.returns}>Orders & Returns</p>
        <hr className={style.rrr}></hr>
      </div>
    </div>
  );
}

export default OrderDetails;
