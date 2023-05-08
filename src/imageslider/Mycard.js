import React from "react";
import "./Mycard.css";
function Mycard({ image, title }) {
  let width,
    box = document.querySelector(".product_container");

  if (box) {
    width = box.clientWidth;
  } else {
    width = window.innerWidth;
  }

  return (
    <div className="mycard" style={{ minWidth: width + "px" }}>
      <div className="heading">
        <img src={image}></img>
        <p className="center">{title}</p>
      </div>
    </div>
  );
}
export default Mycard;
