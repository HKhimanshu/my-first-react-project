import React from "react";
import "./Mycard.css";
function Mycard({ image, title }) {
  return (
    <div className="mycard" style={{ minWidth: window.innerWidth + "px" }}>
      <div className="heading">
        <img src={image}></img>
        <p className="center">{title}</p>
      </div>
    </div>
  );
}
export default Mycard;
