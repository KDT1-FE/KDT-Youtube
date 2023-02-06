import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HoverVideo from './HoverVideo';
import styles from './VideoPlayer.module.scss';
import { videoTime } from '../../util/videoTime';

const VideoPlayer = ({ videoCard, profileData }) => {
  // console.log('videoCard:', videoCard);
  // console.log('profileData:', profileData);

  const [videoHover, setVideoHover] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const navigate = useNavigate();

  let timer;

  const mouseOver = async () => {
    setVideoHover(true);
    timer = await setTimeout(() => {
      setPlayVideo(true);
    }, 3000);
  };

  const mouseOut = async () => {
    setVideoHover(false);
    clearTimeout(timer);
    setPlayVideo(false);
  };

  return (
    <div className={styles.videoplayer} onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <div
        onClick={() => {
          navigate(`/watch/${videoCard.id}`, { state: { video: videoCard } });
        }}
      >
        <img
          className={styles.videoimage}
          src={videoCard.snippet.thumbnails.medium.url}
          alt={videoCard.snippet.title}
        />
        <div className={styles.videotime}>{videoTime(videoCard.contentDetails.duration)}</div>
        {videoHover && <div className={styles.videohover}>계속 마우스오버하여 재생하기</div>}
      </div>
      {playVideo && videoHover && (
        <HoverVideo
          profileData={profileData}
          videoCard={videoCard}
          videoHover={videoHover}
          setPlayVideo={setPlayVideo}
          setVideoHover={setVideoHover}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
