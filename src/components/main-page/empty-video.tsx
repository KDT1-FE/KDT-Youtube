import React from 'react';
import styles from './empty-video.module.scss';
import { useState, useEffect } from 'react';

type Props = {};

const EmptyVideo = (props: Props) => {
  return (
    <section className={styles.videoWarp}>
      <div className={styles.videoView}>
        <img className={styles.videoView} />
      </div>
      <div className={styles.videoInfo}>
        <div className={styles.videoLogo}></div>
        <div className={styles.videoTitle}></div>
        <div className={styles.videoToggle}></div>
      </div>
      <div className={styles.channelName}></div>
      <div className={styles.videoStatus}></div>
    </section>
  );
};

export default EmptyVideo;
