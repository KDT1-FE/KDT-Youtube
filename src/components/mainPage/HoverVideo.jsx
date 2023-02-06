import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
import HoverVideoMenu from './HoverVideoMenu';
import styles from './HoverVideo.module.scss';
import { BsDot, BsList } from 'react-icons/bs';
import { MdOutlineQueueMusic, MdMoreTime } from 'react-icons/md';
import VideoStatistics from '../VideoStatistics/VideoStatistics';
import ChannelInfo from '../ChannelInfo/ChannelInfo';

const HoverVideo = ({ profileData, videoCard, videoHover, setVideoHover, setPlayVideo }) => {
  const [listOpen, setListOpen] = useState(false);

  const { channelId, publishedAt } = videoCard.snippet;

  const navigate = useNavigate();

  register('ko', koLocale);

  const mouseOn = () => {
    setVideoHover(true);
    setPlayVideo(true);
  };

  return (
    <div className={styles.hover} onMouseOver={mouseOn}>
      <div
        onClick={() => {
          navigate(`/watch/${videoCard.id}`, { state: { video: videoCard } });
        }}
      >
        <div>
          <iframe
            title={videoCard.id}
            id="ytplayer"
            type="text/html"
            width="360"
            height="200"
            src={`https://www.youtube.com/embed/${videoCard.id}?autoplay=${
              videoHover ? 1 : 0
            }&mute=1&modestbranding=1&controls=0`}
            //   src={videoId}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <div className={styles.hoverPosition}>
        <div className={styles.hoverinfo}>
          <div
            onClick={() => {
              navigate(`/watch/${videoCard.id}`, { state: { video: videoCard } });
            }}
          >
            <div>
              <ChannelInfo channelId={channelId} />
            </div>
          </div>
          <div
            onClick={() => {
              navigate(`/watch/${videoCard.id}`, { state: { video: videoCard } });
            }}
          >
            <div className={styles.videoInfo}>
              <div className={styles.videoTitle}>{videoCard.snippet.title}</div>
              <div className={styles.chan_view_date}>{videoCard.snippet.channelTitle}</div>
              <VideoStatistics id={videoCard.id} publishedAt={publishedAt} />
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => setListOpen(listOpen ? false : true)} className={styles.listicon}>
            <BsList className={styles.icon} />
          </button>
          {listOpen && <HoverVideoMenu />}
        </div>
        <div className={styles.hoverbuttons}>
          <button className={styles.hoverbutton}>
            <MdMoreTime />
            <div>나중에 볼 동영상</div>
          </button>
          <button className={styles.hoverbutton}>
            <MdOutlineQueueMusic />
            <div>현재 재생목록에 추가</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverVideo;
