import React from 'react';
import RelatedVideoInVideoDetail from '../../components/RelatedVideoInVideoDetail/RelatedVideoInVideoDetail';
import Comments from '../../components/Comments/Comments';
import Player from '../../components/Player/Player';
import { useLocation } from 'react-router-dom';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import styles from './VideoDetail.module.scss';

const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();

  const { title, channelTitle, description, publishedAt } = video.snippet;
  return (
    <div className={styles.detailPage}>
      <div className="column1">
        <Player id={video.id.videoId} />
        <VideoInfo title={title} channelTitle={channelTitle} description={description} publishedAt={publishedAt} />
        <Comments videoId={video.id.videoId} />
      </div>
      <div className="column2">
        <RelatedVideoInVideoDetail />
      </div>
    </div>
  );
};
export default VideoDetail;
