import { useState } from "react";
import style from "./images-viewer.module.css";
function ImagesViewer() {
  const [activeImage, setActiveImage] = useState(0);
  const onPrebtnClick = () => {
    if (activeImage === 0) {
      setActiveImage(() => images.length - 1);
    } else {
      setActiveImage((index) => index - 1);
    }
  };

  const onNextbtnClick = () => {
    if (activeImage === images.length - 1) {
      setActiveImage(() => 0);
    } else {
      setActiveImage((index) => index + 1);
    }
  };
  const handleMouseMove = (ev) => {
    console.log(ev);
  };
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
    <div
      className={style["maindiv"]}
      onMouseMove={(ev) => handleMouseMove(ev)}
      style={{ backgroundImage: "url(" + images[activeImage].url + ")" }}
    >
      <div className={style["seconddiv"]}>
        <div className={style["but"]}>
          {images.map((o, i) => (
            <div onClick={() => setActiveImage(i)}>
              <img
                src={o.url}
                className={style["smallimage"]}
                style={{ borderColor: i === activeImage ? "red" : "white" }}
              ></img>
            </div>
          ))}
        </div>

        <div className={style["crossbtn"]}>
          <div>
            <button className={style["cutbtn"]}>
              <h1>X</h1>
            </button>
          </div>
        </div>
      </div>

      <div className={style["thirddiv"]}>
        <div>
          <div>
            <button className={style["prebtn"]} onClick={onPrebtnClick}>
              &lt;
            </button>
          </div>
        </div>

        <div>
          <div>
            <button className={style["nextbtn"]} onClick={onNextbtnClick}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesViewer;
