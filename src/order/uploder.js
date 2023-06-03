import { useRef } from 'react';
import styles from './uploder.module.css';
import { useState } from 'react';
function Uploader() {
    const [Image,setImage] = useState(null)
    const [fileName,setFileName]=useState("No selected file")
  const inputRef = useRef();
  return (
    <div>
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
        ></input>
        {Image?<img/>:
        }
      </form>
    </div>
  );
}

export default Uploader;
