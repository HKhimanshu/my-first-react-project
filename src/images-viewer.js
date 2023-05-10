import style from "./images-viewer.module.css";
function ImagesViewer() {
  return (
    <div className={style["maindiv"]}>
      <div className={style["seconddiv"]}>
        <div>
          <div>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17026506/2022/8/11/9c3f2537-89ba-417e-9d28-1d9be3abaa201660212949815-WROGN-Men-Tshirts-8871660212949259-3.jpg"
              className={style["smallimage"]}
            ></img>
          </div>

          <div>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17026506/2022/8/11/6405f8fe-2431-4355-9c50-3b3a280c0d9d1660212949830-WROGN-Men-Tshirts-8871660212949259-2.jpg"
              className={style["smallimage"]}
            ></img>
          </div>

          <div>
            <img
              src="https://assets.myntassets.com/h_68,q_90,w_52/v1/assets/images/17026506/2022/8/11/e9ce4d38-e456-4f1e-b7b9-b8ebb248d3ee1660212949840-WROGN-Men-Tshirts-8871660212949259-1.jpg"
              className={style["smallimage"]}
            ></img>
          </div>

          <div>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17026506/2022/8/11/8c78563b-7d4b-4169-bb86-50934d8617a51660212949805-WROGN-Men-Tshirts-8871660212949259-4.jpg"
              className={style["smallimage"]}
            ></img>
          </div>

          <div>
            <img
              src="https://assets.myntassets.com/h_68,q_90,w_52/v1/assets/images/17026506/2022/8/11/e9ce4d38-e456-4f1e-b7b9-b8ebb248d3ee1660212949840-WROGN-Men-Tshirts-8871660212949259-1.jpg"
              className={style["smallimage"]}
            ></img>
          </div>
        </div>

        <div className={style["crossbtn"]}>
          <div className={style["cutbtn"]}></div>
        </div>
      </div>

      <div className={style["thirddiv"]}>
        <div>
          <div>
            <button className={style["prebtn"]}>&lt;</button>
          </div>
        </div>

        <div>
          <div>
            <button className={style["nextbtn"]}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesViewer;
