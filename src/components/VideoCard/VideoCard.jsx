import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
// import VideoPlay from '../VideoPlay/VideoPlay';
import VideoStatistics from '../VideoStatistics/VideoStatistics';
import styles from './VideoCard.module.scss';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt, description, channelId } = video.snippet;
  const { videoId } = video.id;
  const navigate = useNavigate();

  return (
    <li
      className={styles.video}
      onClick={() => {
        // 클릭 시, 해당 동영상으로 이동 및 video 정보 state로 전달
        // state로 video 정보를 전달할 경우,
        // 클릭했을때만 정보가 전달 되고 수기로 주소를 직접 작성할 땐 데이터가 전달이 되지 않으니 주의할 것!
        navigate(`/watch/${video.id.videoId}`, { state: { video: video } });
      }}
    >
      {/* <VideoPlay id={videoId} url={thumbnails.medium.url} title={title} /> */}
      <img className={styles.video_img} src={thumbnails.medium.url} alt={title} />
      <div className={styles.video_info}>
        <p className={styles.title}>{title}</p>
        <VideoStatistics id={videoId} publishedAt={publishedAt} />
        <ChannelInfo channelId={channelId} title={channelTitle} />
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
