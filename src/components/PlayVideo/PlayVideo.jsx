import React from 'react';
import styles from './PlayVideo.module.scss';

export default function PlayVideo({ id, videoHover }) {
  return (
    <div className={styles.playVideo}>
      <iframe
        title={id}
        id="ytplayer"
        type="text/html"
        width="320"
        height="180"
        src={`https://www.youtube.com/embed/${id}?autoplay=${videoHover ? 1 : 0}&mute=1&modestbranding=1&controls=0`}
      ></iframe>
    </div>
  );
}
