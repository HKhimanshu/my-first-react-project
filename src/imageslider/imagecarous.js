import React from "react";
import Mycard from "./Mycard.js";
import "./imagecarous.css";
const Imagecarous = () => {
  const btnpressprev = () => {
    let box = document.querySelector(".product-container");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const arr = [
    {
      image:
        "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      title: "heading1",
    },
    {
      image:
        "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
      title: "heading2",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9oGdrlLfqywsY-gk5-KPVMvBmIGBbKjSHg&usqp=CAU",
      title: "heading3",
    },
    {
      image:
        "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
      title: "heading4",
    },
    {
      image:
        "https://www.bhaktiphotos.com/wp-content/uploads/2021/07/Sivan-hd-Images-1080p.jpg",
      title: "heading5",
    },
    {
      image:
        "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
      title: "heading6",
    },
    {
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "heading7",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/man-hands-holding-global-network-260nw-1801568002.jpg",
      title: "heading8",
    },
    {
      image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
      title: "heading9",
    },
    {
      image:
        "https://www.legoland.com/new-york/media/xcxhntto/girl-in-front-of-legoland-hotel-pink-one-3x2-0-4mb.jpg",
      title: "heading10",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-gn89WhVtpNvOXnNjk5D0At_OIEWM8DiLw&usqp=CAU",
      title: "heading11",
    },
    { image: "", title: "heading12" },
    { image: "", title: "heading13" },
    { image: "", title: "heading14" },
  ];
  const btnpressnext = () => {
    let box = document.querySelector(".product-container");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>

      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>
      <div className="product-container">
        {arr.map((i) => (
          <Mycard image={i.image} title={i.title} />
        ))}
      </div>
    </div>
  );
};

export default Imagecarous;
