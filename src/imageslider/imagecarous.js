import React, { useEffect, useRef, useState } from "react";
import Mycard from "./Mycard.js";
import styles from "./imagecarous.module.css";
const Imagecarous = ({ type, data }) => {
  let [activeCard, setActiveCard] = useState(0);
  let [timer, setTimer] = useState(0);
  let productContainer = useRef();

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(
        () => {
          if (activeCard == data.length - 1) {
            btnpressdot(0);
          } else {
            btnpressdot(activeCard + 1);
          }
        },
        type === "card" ? 2000 : 3000
      )
    );
    return () => setTimer(null);
  }, [activeCard]);

  const btnpressdot = (dotNo) => {
    let box = productContainer.current;
    console.log(box);
    let width = box.clientWidth;
    box.scrollLeft = width * dotNo;
    setActiveCard(dotNo);
  };

  let width,
    box = productContainer.current;
  if (box) {
    width = box.clientWidth;
  } else {
    width = window.innerWidth;
  }

  return (
    <div>
      <div className={styles["product-carouse"]}>
        <div className={styles["product-container"]} ref={productContainer}>
          {data.map((i) => (
            <Mycard
              image={i.image}
              title={i.title}
              redirectTo={i.redirectTo}
              width={width}
              type={type}
            />
          ))}
        </div>
      </div>
      <div className={styles["dots"]}>
        {data.map((i, index) => (
          <div
            className={`${styles["dot"]} ${
              index == activeCard ? styles["active"] : ""
            } ${type === "card" ? styles["small"] : ""}`}
            onClick={() => btnpressdot(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Imagecarous;
