import React, { useEffect, useState } from "react";
import Mycard from "./Mycard.js";
import "./imagecarous.css";
const Imagecarous = () => {
  let [activeCard, setActiveCard] = useState(0);
  let [timer, setTimer] = useState(0);

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
      image: "https://wallpapercave.com/wp/u9AVLry.jpg",
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
        "https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/28/full/1595904030-4016.jpg",
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
        "https://assets.hongkiat.com/uploads/nature-photography/The-best-nature-photography-collection.jpg",
      title: "heading11",
    },
    {
      image:
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
      title: "heading12",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
      title: "heading13",
    },
    {
      image:
        "https://www.clubmahindra.com/blog/media/section_images/naturephot-ec32e94608f809e.webp",
      title: "heading14",
    },
  ];
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        if (activeCard == arr.length - 1) {
          btnpressdot(0);
        } else {
          btnpressdot(activeCard + 1);
        }
      }, 5000)
    );
    return () => setTimer(null);
  }, [activeCard]);

  const btnpressdot = (dotNo) => {
    let box = document.querySelector(".product-container");
    let width = box.clientWidth;
    box.scrollLeft = width * dotNo;
    setActiveCard(dotNo);
  };

  return (
    <div>
      <div className="product-carousel">
        <div className="product-container">
          {arr.map((i) => (
            <Mycard image={i.image} title={i.title} />
          ))}
        </div>
      </div>
      <div className="dots">
        {arr.map((i, index) => (
          <div
            className={`dot ${index == activeCard ? "active" : ""}`}
            onClick={() => btnpressdot(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Imagecarous;
