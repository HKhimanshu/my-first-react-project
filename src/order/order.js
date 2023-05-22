import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import style from "./order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProductOrder() {
  return (
    <div>
      <div className={style.allfrom}>
        <div>
          <h2>All orders</h2>
          <p>from anytime</p>
        </div>
        <div>
          <div>
            <div className={style.search}></div>
            <div>
              <button>filter</button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProductOrder;
