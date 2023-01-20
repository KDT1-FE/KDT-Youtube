import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './VideoInfo.module.scss';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import VideoStatistics from '../VideoStatistics/VideoStatistics';

const VideoInfo = ({ videoCard, profileData }) => {
  const navigate = useNavigate();

  const { channelId, publishedAt } = videoCard.snippet;

  return (
    <div
      onClick={() => {
        navigate(`/watch/${videoCard.id}`, { state: { video: videoCard } });
      }}
    >
      <div className={styles.videoinfo}>
        <div>
          <ChannelInfo channelId={channelId} />
        </div>
        <div className={styles.info}>
          <div className={styles.infotitle}>{videoCard.snippet.title}</div>
          <div className={styles.infochan_view}>{videoCard.snippet.channelTitle}</div>
          <div className={styles.infochan_view}>
            <VideoStatistics id={videoCard.id} publishedAt={publishedAt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
