import { faBox, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import style from "./order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderDetail from "./orderdetails-view";
import moment from "moment/moment";
function ProductOrder() {
  const data = [
    {
      status: "cancelled",
      orderDate: moment(),
      cancelledData: moment(),
      expectedDate: moment(),
      amount: "159",
      item: {
        name: "jeans",
        image:
          "https://navbharattimes.indiatimes.com/photo/msid-89982887,imgsize-60574/pic.jpg",
        subtitles: ["himanshu", "kumar"],
      },
    },
    {
      status: "shipped",
      orderDate: moment(),
      cancelledData: moment(),
      expectedDate: moment(),
      canCancle: true,
      amount: "159",
      item: {
        name: "INDALO",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/22374132/2023/3/17/53979edc-0808-4160-ab11-addc96a4e65f1679031423741IndaloMultaniMittiPowderForSkinHairRepairForAllSkinHairTypes1.webp",
        subtitles: [
          "Multani Mitti Powder for Skin & Hair Repair - 100g",
          "Size: 100-120 ML",
        ],
      },
    },
    {
      status: "delivered",
      orderDate: moment(),
      cancelledData: moment(),
      expectedDate: moment(),
      amount: "159",
      item: {
        name: "shirt",
        image:
          "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg",
        subtitles: [
          "500+ Shirt Pictures | Download Free Images on Unsplash",
          "dkjdkfjsdkjf",
        ],
      },
    },
  ];

  return (
    <div className={style.fromany}>
      <div className={style.allfrom}>
        <div>
          <h2>All orders</h2>
          <p>from anytime</p>
        </div>
        <div className={style.filter}>
          <div className={style.search}></div>
          <div>
            <button className={style.content}>FILTER</button>
          </div>
        </div>
      </div>
      <div>
        {data.map((o) => (
          <div className={style.order}>
            <div className={style.person}>
              {o.status == "shipped" && (
                <div className={style.fom}>
                  <div className={style.box}>
                    <FontAwesomeIcon icon={faBox} className={style.ram} />
                  </div>
                  <div className={style.job}>
                    <p className={style.packed}>packed</p>
                    <p>Arriving by Fri, 2 Jun</p>
                  </div>
                </div>
              )}
              {o.status == "cancelled" && (
                <div className={style.fom}>
                  <div className={style.boxs}>
                    <p>X</p>
                  </div>
                  <div className={style.job}>
                    <b>Cancle</b>
                    <p className={style.request}>
                      on Tue, 23 May as per your request
                    </p>
                    <p>
                      <span className={style.refund}>Refund Initiated:</span>
                      <b> ₹159.00</b>
                      <span className={style.request}> on Tue, 23 May.</span>
                      <span className={style.view}> View Refund details</span>
                    </p>
                  </div>
                </div>
              )}
              {o.status == "delivered" && (
                <div className={style.fom}>
                  <div className={style.box}>
                    <FontAwesomeIcon icon={faBox} className={style.ram} />
                  </div>
                  <div className={style.job}>
                    <p className={style.packed}>packed</p>
                    <p>Arriving by Fri, 2 Jun</p>
                  </div>
                </div>
              )}
              <OrderDetail item={o.item} canCancle={o.canCancle}></OrderDetail>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={style.order}>
        <div className={style.person}>
          <div className={style.fom}>
            <div className={style.boxs}>
              <p>X</p>
            </div>
            <div className={style.job}>
              <b>Cancle</b>
              <p className={style.request}>
                on Tue, 23 May as per your request
              </p>
              <p>
                <span className={style.refund}>Refund Initiated:</span>
                <b> ₹159.00</b>
                <span className={style.request}> on Tue, 23 May.</span>
                <span className={style.view}> View Refund details</span>
              </p>
            </div>
          </div>
          <OrderDetail></OrderDetail>
        </div>
      </div> */}
    </div>
  );
}

export default ProductOrder;
