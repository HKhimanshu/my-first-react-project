import style from './himanshu.module.css';
function ImageVerification() {
  return (
    <div className={style.maindiv}>
      <p className={style.image}>Image verification required.</p>
      <p className={style.text}>
        To verify your claim of receiving a wrong or defective product, you will
        have to upload photos of the item.
      </p>
    </div>
  );
}

export default ImageVerification;
