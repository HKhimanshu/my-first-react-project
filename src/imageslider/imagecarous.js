import React, { useEffect, useRef, useState } from "react";
import Mycard from "./Mycard.js";
import "./imagecarous.css";
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
      <div className={`product-carouse ${type !== "card" ? "full-page" : ""} `}>
        <div className="product-container" ref={productContainer}>
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
      <div className="dots">
        {data.map((i, index) => (
          <div
            className={`dot ${index == activeCard ? "active" : ""} ${
              type === "card" ? "small" : ""
            }`}
            onClick={() => btnpressdot(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Imagecarous;
