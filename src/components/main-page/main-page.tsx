import React, { useEffect, useState } from 'react';
import Filter from './filters';
import styles from './MainPage.module.scss';
import VideoContainer from './video-container';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className={styles.videoPage}>
      <Filter />
      <VideoContainer />
    </div>
  );
};

export default MainPage;
