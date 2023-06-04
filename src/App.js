import React from 'react';
import './App.css';
// import Imagecarous from "./imageslider/imagecarous";
import Router from './imageslider/router';
import Counter from './counter';
import Imagesliderexample from './imageslider/image-slider-example';
import Productdescription from './product/product';
import ImagesViewer from './images-viewer';
import ProductOrder from './order/order';
import OrderDetails from './order/order-details';
import SearchInput from './Search/search-input';
import OrderItems from './order/orderitems-details';
import TimelineItem from './timeline/timelineitem';
import WriteReview from './order/write-review';
import Uploader from './order/uploder';

function App() {
  return (
    <>
      {/* <ImagesViewer></ImagesViewer> */}
      {/* <Productdescription></Productdescription> */}
      {/* <ProductOrder></ProductOrder> */}
      <WriteReview></WriteReview>
      {/* <Uploader></Uploader> */}
      {/* <OrderItems></OrderItems> */}
      {/* <TimelineItem></TimelineItem> */}
      {/* <OrderDetails></OrderDetails> */}
      {/* <Imagesliderexample></Imagesliderexample> */}
      {/* <SearchInput></SearchInput> */}
    </>
  );
}
export default App;
