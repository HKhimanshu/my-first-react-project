import React from "react";
import "./App.css";
// import Imagecarous from "./imageslider/imagecarous";
import Router from "./imageslider/router";
import Counter from "./counter";
import Imagesliderexample from "./imageslider/image-slider-example";
import Imagecarous from "./imageslider/imagecarous";
import Productdescription from "./product/product";
import ImagesViewer from "./images-viewer";
import ProductOrder from "./order/order";

function App() {
  return (
    <>
      {/* <ImagesViewer></ImagesViewer> */}
      {/* <Productdescription></Productdescription> */}
      {/* <Imagecarousss></Imagecarous> */}
      <ProductOrder></ProductOrder>
      {/* <Imagesliderexample></Imagesliderexample> */}
    </>
  );
}
export default App;
