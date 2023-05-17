import { useState } from "react";
import style from "./images-viewer.module.css";
function ImagesViewer({ images, close }) {
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
            <button className={style["cutbtn"]} onClick={close}>
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
