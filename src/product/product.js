import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faTags,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../molecules/button/button";
import ProductVariantSize from "../molecules/product/product-variant-size";
import styles from "./product.module.css";
import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import NumberInputBox from "../molecules/input-box/number-input-box";
import ImagesViewer from "../images-viewer";
import { useState } from "react";
import ProductdSpecifications from "../molecules/product/product-specifications";
import ProductRating from "./product-rating";

function Productdescription() {
  const [showImageViewer, setShowImageViewer] = useState(false);
  const specifications = [
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
    { type: "febric", value: "Cotton" },
  ];
  const images = [
    {
      url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17026506/2022/8/11/9c3f2537-89ba-417e-9d28-1d9be3abaa201660212949815-WROGN-Men-Tshirts-8871660212949259-3.jpg",
    },
    {
      url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17026506/2022/8/11/6405f8fe-2431-4355-9c50-3b3a280c0d9d1660212949830-WROGN-Men-Tshirts-8871660212949259-2.jpg",
    },
    {
      url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17026506/2022/8/11/e9ce4d38-e456-4f1e-b7b9-b8ebb248d3ee1660212949840-WROGN-Men-Tshirts-8871660212949259-1.jpg",
    },
    {
      url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17026506/2022/8/11/8c78563b-7d4b-4169-bb86-50934d8617a51660212949805-WROGN-Men-Tshirts-8871660212949259-4.jpg",
    },
    {
      url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17026506/2022/8/11/fd9bab09-a8b8-4e3c-824a-ddc9dfa026bb1660212949793-WROGN-Men-Tshirts-8871660212949259-5.jpg",
    },
  ];
  return (
    <div className={styles["prent"]}>
      <div className={styles["ims"]}>
        {images.map((o) => (
          <div
            className={styles["wid"]}
            onClick={() => setShowImageViewer(true)}
          >
            <div className={styles["images"]}>
              <img src={o.url}></img>
            </div>
          </div>
        ))}
        {showImageViewer && (
          <div className={styles.imageviewer}>
            <ImagesViewer
              images={images}
              close={() => setShowImageViewer(false)}
            />
          </div>
        )}
      </div>

      <div className={styles["leftdiv"]}>
        <h2>WROGN</h2>
        <p className={styles["ward"]}>
          Men Blue Typography Printed Slim Fit T-shirt
        </p>
        <hr className={styles["line"]}></hr>

        <h2>₹10</h2>
        <h4 className={styles["inc"]}>inclusive of all taxes</h4>
        <div className={styles["sold"]}>
          <p className={styles["sel"]}>SELECT SIZE</p>
          <p className={styles["new"]}>SIZE CHART </p>
        </div>

        <div className={styles.productVariantSize}>
          <ProductVariantSize
            title="s"
            tooltiptext={
              <>
                Garment Measurement:
                <b>Chest - 37.5in</b>
                <p>Slim Fit </p>The model (height 6') is wearing a size M
              </>
            }
          />

          <ProductVariantSize
            title="m"
            tooltiptext={
              <>
                Garment Measurement:
                <b> Chest - 39.5in</b>
                <p>Slim Fit </p>The model (height 6') is wearing a size M
              </>
            }
          />

          <ProductVariantSize
            title="L"
            disabled={true}
            tooltiptext={
              <>
                Garment Measurement:
                <span className={styles.tips}>
                  <b>Chest - 41.5in</b>
                </span>
                <p>Slim Fit </p>The model (height 6') is wearing a size M
              </>
            }
          />

          <ProductVariantSize
            title="XL"
            tooltiptext={
              <>
                Garment Measurement:
                <b>Chest - 43.5in</b>
                <p>Slim Fit </p>The model (height 6') is wearing a size M
              </>
            }
          />

          <ProductVariantSize
            title="XXL"
            disabled={true}
            tooltiptext={
              <>
                Garment Measurement:
                <b>Chest - 45.5in</b>
                <p>Slim Fit </p>The model (height 6') is wearing a size M
              </>
            }
          />
        </div>

        <div className={styles.fonts}>
          <Button type={"primary"} className={styles.wide}>
            <FontAwesomeIcon icon={faBagShopping} />
            <p className={styles.word}> ADD TO BAG</p>
          </Button>
          <Button className={styles["wishlist-btn"]} type={"secondary"}>
            <FontAwesomeIcon icon={faHeart} />
            <p className={styles.word}> WISHLIST</p>
          </Button>
        </div>
        <div className={styles.delivery}>
          <p className={styles["sel"]}>DELIVERY OPTIONS </p>
          <FontAwesomeIcon icon={faTruck} className={styles.car} />
        </div>
        <NumberInputBox></NumberInputBox>
        <p>
          Please enter PIN code to check delivery time & Pay on Delivery
          Availability
        </p>
        <div className={styles.original}>
          <p>100% Original Products</p>
          <p>Pay on delivery might be available</p>
          <p>Easy 14 days returns and exchanges</p>
          <p>Try & Buy might be available</p>
        </div>
        <div className={styles.delivery}>
          <p className={styles["sel"]}>
            BEST OFFERS
            <FontAwesomeIcon icon={faTags} className={styles.tag} />
          </p>
        </div>
        <div className={styles.best}>
          <b>
            Best prices:<span className={styles.rs}>Rs.255</span>
          </b>
          <ul>
            <li>
              Applicable on: Orders above Rs. 999 (only on first purchase)
            </li>
            <li>
              Coupon code: <b>MYNTRA200</b>
            </li>
            <li>Coupon Discount: Rs. 64 off (check cart for final savings)</li>
          </ul>
        </div>
        <div className={styles.views}>
          <b>View Eligible Products</b>
          <p className={styles.cards}>
            10% Instant Discount on SBI Credit Cards
          </p>
          <ul>
            <li>on min Spend Rs 3,000. Maximum Discount Rs 1,000.</li>
          </ul>
        </div>
        <div className={styles.views}>
          <b>Terms & Condition</b>
          <p className={styles.cards}>
            Up To Rs 500 Cashback on CRED pay transactions.
          </p>
          <ul>
            <li>Min Spend Rs 1,000. Available only on Android Devices.</li>
          </ul>
        </div>

        <div className={styles.views}>
          <b>Terms & Condition</b>
          <p className={styles.cards}>EMI option available</p>
          <ul>
            <li>EMI starting from Rs.15/month</li>
          </ul>
        </div>
        <div className={styles.views}>
          <b>View Plan</b>
        </div>
        <hr className={styles["lines"]}></hr>
        <div className={styles.delivery}>
          <p className={styles.product}>
            <p className={styles["sel"]}>
              PRODUCT DETAILS
              <FontAwesomeIcon icon={faMessage} className={styles.mess} />
            </p>
            <p>Blue Tshirt for men</p>
            <p>Typography printed</p>
            <p>Regular length</p>
            <p>Round neck</p>
            <p>Short, regular sleeves</p>
            <p>Knitted cotton fabric</p>
          </p>
        </div>
        <div className={styles.delivery}>
          {" "}
          <p>
            <p className={styles["sel"]}>Size & Fit </p>

            <p>Slim Fit</p>
            <p>The model (height 6') is wearing a size M</p>
          </p>
        </div>

        <div className={styles.delivery}>
          <p>
            <p className={styles["sel"]}>Material & Care </p>

            <p>60% cotton 40% polyester</p>
            <p>Machine wash</p>
          </p>
        </div>
        <p className={styles["sels"]}>Speci fications </p>
        <ProductdSpecifications data={specifications} />
        <hr className={styles["line"]}></hr>
        <ProductRating></ProductRating>
      </div>
    </div>
  );
}

export default Productdescription;
