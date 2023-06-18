import style from './category.module.css';
function CategoryCard({ image, title }) {
  return (
    <div className={style.heading}>
      <img src={image} className={style.image}></img>
      <p className={style.center}>{title}</p>
    </div>
  );
}

export default CategoryCard;
