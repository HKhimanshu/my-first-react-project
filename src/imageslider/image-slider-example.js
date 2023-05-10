function Imagesliderexample() {
  const data = [
    {
      image:
        "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      redirectTo: "sell",
    },
    {
      image:
        "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
      redirectTo: "buy",
    },
    {
      image: "https://wallpapercave.com/wp/u9AVLry.jpg",
      title: "heading3",
      redirectTo: "free",
    },
    {
      image:
        "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
      redirectTo: "hello",
    },
    {
      image:
        "https://www.bhaktiphotos.com/wp-content/uploads/2021/07/Sivan-hd-Images-1080p.jpg",
      redirectTo: "hello",
    },
    {
      image:
        "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
      redirectTo: "hello",
    },
    {
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      redirectTo: "hello",
    },
    {
      image:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/28/full/1595904030-4016.jpg",
      redirectTo: "hello",
    },
    {
      image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
      redirectTo: "hello",
    },
    {
      image:
        "https://www.legoland.com/new-york/media/xcxhntto/girl-in-front-of-legoland-hotel-pink-one-3x2-0-4mb.jpg",
      redirectTo: "hello",
    },
    {
      image:
        "https://assets.hongkiat.com/uploads/nature-photography/The-best-nature-photography-collection.jpg",
      redirectTo: "hello",
    },
    {
      image:
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
      redirectTo: "hello",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
      redirectTo: "hello",
    },
    {
      image:
        "https://www.clubmahindra.com/blog/media/section_images/naturephot-ec32e94608f809e.webp",
      redirectTo: "hello",
    },
  ];

  const carddata = [
    {
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16200882/2021/11/22/01ad2637-5424-41f3-961b-f53ffd97d1381637591207009TokyoTalkiesBlueFloralMiniDress1.jpg",
      redirectTo: "buy",
    },
    {
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16200882/2021/11/22/bc12f89d-5dcb-4db1-ba6b-f3cb7b05e16d1637591207404TokyoTalkiesBlueFloralMiniDress6.jpg",
      redirectTo: "sell",
    },
    {
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16200882/2021/11/22/87bbb136-1790-4bb5-8945-b101456319841637591207461TokyoTalkiesBlueFloralMiniDress5.jpg",
      redirectTo: "minidress",
    },
    {
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16200882/2021/11/22/ca24962d-9687-4d17-a73c-815ef10003081637591207732TokyoTalkiesBlueFloralMiniDress4.jpg",
      redirectTo: "pink in color",
    },
    {
      image:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16200882/2021/11/22/af0b95b3-b01d-407e-884a-1adee1b676fc1637591207893TokyoTalkiesBlueFloralMiniDress2.jpg",
      redirectTo: "freedelvery",
    },
  ];
  return (
    <>
      <Imagecarous data={data}></Imagecarous>

      <div style={{ width: "210px" }}>
        <Imagecarous type={"card"} data={carddata}></Imagecarous>
      </div>
    </>
  );
}

export default Imagesliderexample;
