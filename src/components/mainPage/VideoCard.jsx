import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsList } from 'react-icons/bs';
import VideoPlayer from './VideoPlayer';
import VideoInfo from './VideoInfo';
import VideoMenu from './VideoMenu';
import styles from './VideoCard.module.scss';

const VideoCard = ({ videoCard, listOpen, setListOpen }) => {
  const [cardHover, setCardHover] = useState(false);
  const [profileData, setProfileData] = useState('');

  return (
    <div className={styles.card}>
      <div onMouseOver={() => setCardHover(true)} onMouseOut={() => setCardHover(false)}>
        <VideoPlayer videoCard={videoCard} profileData={profileData} />
        {cardHover && (
          <button
            className={styles.listbutton}
            onClick={() => setListOpen(videoCard.id === listOpen ? '' : videoCard.id)}
          >
            <BsList className={styles.listicon} />
          </button>
        )}
        {listOpen === videoCard.id && <VideoMenu />}
        <VideoInfo videoCard={videoCard} profileData={profileData} />
      </div>
    </div>
  );
};

export default VideoCard;
