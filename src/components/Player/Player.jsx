import { React } from 'react';
import styles from './Player.module.scss';
const Player = ({ id }) => {
  // console.log('id:', id);
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.videoFrame}
        title={`http://www.youtube.com/embed/${id}?enablejsapi=1&origin=http://example.com`}
        id="player"
        width="100%"
        height="100%"
        src={`http://www.youtube.com/embed/${id}?enablejsapi=1&origin=http://example.com`}
        itemType="text/html"
      ></iframe>
    </div>
  );
};
export default Player;
