import { useRef } from 'react';
import styles from './uploder.module.css';
import { useState } from 'react';
import { faFile, faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';
function Uploader({ max }) {
  const [images, setImages] = useState([]);
  const [fileName, setFileName] = useState('No selected file');
  const inputRef = useRef();
  return (
    <div className={styles.content}>
      <form
        action=''
        className={styles.file}
        onClick={() => inputRef.current.click()}
      >
        <input
          ref={inputRef}
          type='file'
          accept='image/*'
          className={styles.inputfield}
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              if (images.length < max) {
                setImages((i) => {
                  i.push(URL.createObjectURL(files[0]));
                  return [...i];
                });
              } else {
                alert('You can add upto ' + max + ' images');
              }
            }
          }}
        ></input>

        <FontAwesomeIcon icon={faImage} className={styles.browser} />
      </form>

      {images.map((image, i) => {
        return (
          <div className={styles.container}>
            <img src={image} className={styles.dhoni}></img>
            <FontAwesomeIcon
              icon={faX}
              className={styles.cutbtn}
              onClick={() =>
                setImages((is) => {
                  is.splice(i, 1);
                  return [...is];
                })
              }
            />
          </div>
        );
      })}
      {images.length === 0 && (
        <div className={styles.tooltip}>
          <p className={styles.tooltiptext}>Add Photos</p>
        </div>
      )}
    </div>
  );
}

export default Uploader;
