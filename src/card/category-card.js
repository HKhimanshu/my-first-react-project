import "./category.css";
function CategoryCard({ image, title }) {
  return (
    <div className="heading">
      <img src={image}></img>
      <p className="center">{title}</p>
    </div>
  );
}

export default CategoryCard;
