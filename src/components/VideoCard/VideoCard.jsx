import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import VideoStatistics from '../VideoStatistics/VideoStatistics';
import styles from './VideoCard.module.scss';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import PlayVideo from '../PlayVideo/PlayVideo';
import HoverButton from '../HoverButton/HoverButton';
import { RxDotsVertical } from 'react-icons/rx';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt, description, channelId } = video.snippet;
  const [videoHover, setVideoHover] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const { videoId } = video.id;

  const navigate = useNavigate();

  const isList = type === 'list';

  let timer;

  const handleMouseHover = async () => {
    setVideoHover(true);
    timer = await setTimeout(() => {
      setPlayVideo(true);
    }, 100);
  };

  const handleMouseOut = async () => {
    setVideoHover(false);
    clearTimeout(timer);
    setPlayVideo(false);
  };

  const goToDetailPage = (event) => {
    if (event.target.dataset.name !== 'button' && event.target.dataset.name !== 'icon')
      navigate(`/watch/${video.id.videoId}`, { state: { video: video } });
  };

  return (
    <li className={styles.video} onClick={goToDetailPage} onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
      <VideoThumbnail id={videoId} url={thumbnails.medium.url} title={title} videoHover={videoHover} isList={isList} />
      {videoHover && <PlayVideo id={videoId} videoHover={videoHover} />}
      <div className={styles.video_info}>
        <div className={styles.video_info_setting}>
          <p className={styles.title}>{title}</p>
          {videoHover && (
            <button className={styles.hoverBtn} data-name="button" onClick={() => setListOpen((prev) => !prev)}>
              <RxDotsVertical className={styles.icon} data-name="icon" />
            </button>
          )}
          {listOpen ? <HoverButton setListOpen={setListOpen} /> : null}
        </div>
        <VideoStatistics id={videoId} publishedAt={publishedAt} />
        <ChannelInfo channelId={channelId} title={channelTitle} />
        {isList ? null : <p className={styles.description}>{description}</p>}
      </div>
    </li>
  );
}
