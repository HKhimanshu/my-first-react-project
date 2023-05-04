import CategoryCard from "../card/category-card";
function Everystep() {
  const arr = [
    {
      image:
        "https://images.unsplash.com/photo-1577394745831-5f5351823199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95cyUyMGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80",
      title: "T-shirts",
    },
    {
      image:
        "https://images.pexels.com/photos/1254502/pexels-photo-1254502.jpeg?cs=srgb&dl=pexels-ali-madad-sakhirani-1254502.jpg&fm=jpg",
      title: "Shirt",
    },
    {
      image:
        "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?cs=srgb&dl=pexels-victoria-rain-1619697.jpg&fm=jpg",
      title: "Cap",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__480.jpg",
      title: "Half shirt",
    },
    {
      image:
        "https://www.newmynamepix.com/upload/post/sample/1584374992_Attitude_Boy_Whatsapp_Dp_With_Name_Profile_Images.jpg",
      title: "Jacket",
    },
    {
      image:
        "https://i.pinimg.com/originals/18/cf/e2/18cfe2a47e1eb26ed6ef9b2c59c01a42.jpg",
      title: "Jeans",
    },
    {
      image:
        "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2019/7/Buyer/19165359/Images/19165359_0_boys-stylish-trouser.jpg",
      title: "Trouser",
    },
    {
      image:
        "https://i.pinimg.com/550x/09/0d/a5/090da52af3a7bb394815c51140ee0828.jpg",
      title: "Kurta",
    },
    {
      image:
        "https://i.pinimg.com/564x/39/fe/78/39fe7851314d045649b70e299be192b6.jpg",
      title: "Sarees",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/x/u/7/-original-imagg6rc839zxhw4.jpeg?q=70",
      title: "Sports Shoes",
    },
    {
      image:
        "https://c8.alamy.com/comp/2BN8GPF/makeup-kit-make-up-table-the-mirror-2BN8GPF.jpg",
      title: "Makeup kit",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN534xfWjyZJyDfa3aZhr6RIic2jqul3TqcGcjCA3U&s",
      title: " Gold Jewellery",
    },
    {
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15574364/2021/9/22/70a3c39c-118d-4a20-9e8d-88eacd2b04861632322767025AarikaGirlsGreenEthnicMotifsThreadWorkKurta1.jpg",
      title: "Kurtas",
    },
    {
      image: "https://m.media-amazon.com/images/I/61dSlNvfYQL._UL1429_.jpg",
      title: "Handbag",
    },
    {
      image:
        "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
      title: "Iphone",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/10/15/13/40/laptop-1742462__340.jpg",
      title: "Mackbook laptop",
    },
  ];
  return (
    <>
      <h2>CATEGORIES TO BAG</h2>
      <div className="hello">
        {arr.map((i) => (
          <CategoryCard image={i.image} title={i.title} />
        ))}
      </div>
    </>
  );
}

export default Everystep;
