import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./orderitems-details.module.css";
import { faHeadphones, faHeadset } from "@fortawesome/free-solid-svg-icons";
function OrderItems() {
  return (
    <div className={styles.maincontent}>
      <div className={styles.himanshu}>
        <p className={styles.help}>Help </p>
        <FontAwesomeIcon icon={faHeadphones} className={styles.headphone} />
      </div>
      <div className={styles.seconddiv}>
        <div className={styles.cold}>
          <img src="https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/15760662/2021/10/7/05de2226-2df8-4c6a-8572-25f56f7b34fe1633612031245Cold-pressedWhiteSesameOil250ml1.webp"></img>
          <h4>ESSENTIA EXTRACTS</h4>
          <p>Cold-Pressed White Sesame Oil - 250ml</p>
          <p>Size: 250ML</p>
        </div>
      </div>
    </div>
  );
}

export default OrderItems;
