import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './timelineitem.module.css';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
function TimelineItem() {
  const data = [
    {
      title: 'Arriving',
      subtitle: ' by Fri, 2 Jun',
      type: 'check',
      end: true,
      done: true,
    },
    {
      title: 'Shipped',

      subtitle: 'on Wed, 24 May',
      type: 'check',
      done: true,
    },
    {
      title: '06:09 p.m',
      subtitle: 'Item shipped to nearest delivery center    ',
      type: 'dot',
      done: true,
    },
    { title: 'Tuesday, 23 May    ', done: true },

    {
      title: '09:10 a.m',
      subtitle: 'Item Packed in Dispatch Warehouse    ',
      type: 'dot',
      done: true,
    },
    {
      title: 'Order Placed',
      subtitle: 'on Mon, 22 May        ',
      type: 'check',
      done: true,

      start: true,
    },
  ];
  return (
    <div className={styles.hero}>
      <div className={styles.csk}>
        <div className={styles.track}>
          <p className={styles.trackitem}>Track Item </p>
          <p className={styles.tracking}>Tracking no: MYNP0055980042</p>
        </div>
        <div className={styles.cut}>
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
      {data.map((d) => (
        <div
          className={
            styles.maindiv +
            ' ' +
            (d.start ? styles.start : '') +
            ' ' +
            (d.end ? styles.end : '') +
            '' +
            (!d.type || d.type === 'dot' ? styles.dot : '')
          }
        >
          <div className={styles.means}>
            {!d.end && <div className={d.done ? styles.ggg : styles.sss}></div>}
            {d.type === 'dot' && (
              <div className={d.done ? styles.terr : styles.herr}></div>
            )}
            {d.type === 'check' && (
              <div className={d.done ? styles.checkmark : styles.mark}>
                <FontAwesomeIcon icon={faCheck} className={styles.check} />
              </div>
            )}
            {!d.start && (
              <div className={d.done ? styles.ggg : styles.sss}></div>
            )}
          </div>
          <div className={styles.text}>
            <div className={styles.title}>{d.title}</div>
            <div className={styles.subtitle}>{d.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineItem;
