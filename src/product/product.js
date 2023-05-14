import Button from "../molecules/button/button";
import ProductVariantSize from "../molecules/product/product-variant-size";
import styles from "./product.module.css";
function Productdescription() {
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
          <div className={styles["wid"]}>
            <div className={styles["images"]}>
              <img src={o.url}></img>
            </div>
          </div>
        ))}
      </div>

      <div className={styles["leftdiv"]}>
        <h2>WROGN</h2>
        <p className={styles["ward"]}>
          Men Blue Typography Printed Slim Fit T-shirt
        </p>
        <hr className={styles["line"]}></hr>

        <h2>₹319</h2>
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
                <span className={styles.tips}>Chest - 37.5in</span>
                <p>Slim Fit </p>The model (height 6') is wearing a size M
              </>
            }
          />

          <ProductVariantSize
            title="m"
            tooltiptext={
              <>
                Garment Measurement:
                <span className={styles.tips}>Chest - 39.5in</span>
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
                <span className={styles.tips}>Chest - 41.5in</span>
                <p>Slim Fit </p>The model (height 6') is wearing a size M
              </>
            }
          />

          <ProductVariantSize
            title="XL"
            tooltiptext={
              <>
                Garment Measurement:
                <span className={styles.tips}>Chest - 43.5in</span>
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
                <span className={styles.tips}>Chest - 45.5in</span>
                <p>Slim Fit </p>The model (height 6') is wearing a size M
              </>
            }
          />
        </div>

        <div>
          <Button type={"primary"}>ADD TO BAG</Button>
          <Button type={"secondary"}>WISHLIST</Button>
        </div>

        <hr className={styles["line"]}></hr>
      </div>
    </div>
  );
}

export default Productdescription;
