import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./orderitems-details.module.css";
import {
  faGreaterThan,
  faHeadphones,
  faHeadset,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
function OrderItems() {
  return (
    <div className={styles.maincontent}>
      <div className={styles.himanshu}>
        <p className={styles.help}>Help </p>
        <FontAwesomeIcon icon={faHeadphones} className={styles.headphone} />
      </div>
      <div className={styles.seconddiv}>
        <div className={styles.cold}>
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/15760662/2021/10/7/05de2226-2df8-4c6a-8572-25f56f7b34fe1633612031245Cold-pressedWhiteSesameOil250ml1.webp"
            className={styles.csk}
          ></img>
          <h4>ESSENTIA EXTRACTS</h4>
          <p>Cold-Pressed White Sesame Oil - 250ml</p>
          <p>Size: 250ML</p>
        </div>
      </div>
      <div className={styles.team}>
        <div className={styles.ram}>
          <p className={styles.arriving}>Arriving By</p>
          <p className={styles.jun}>by Fri,2 Jun</p>
        </div>
        <div className={styles.great}>
          <div className={styles.shipped}>
            <p className={styles.hello}>Shipped</p>
            <p className={styles.tiltles}>
              Item shipped to nearest delivery center{" "}
              <span className={styles.subtext}>on 24 May</span>
            </p>
          </div>
          <div className={styles.kumar}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>
        <div className={styles.dam}>
          <p className={styles.arriving}>Order placed</p>
          <p className={styles.jun}>on 22 May</p>
        </div>
      </div>

      <div className={styles.hero}>
        <FontAwesomeIcon icon={faTriangleExclamation} className={styles.sun} />
        <p className={styles.expirydate}>
          Expiry Date<b> 1 Mar, 2024</b>
        </p>
      </div>
    </div>
  );
}

export default OrderItems;
