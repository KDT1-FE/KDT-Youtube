import React from 'react';
import styles from './video.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useDay from '../../hooks/useDay';
import dayjs, { Dayjs } from 'dayjs';
import { videoInfo } from '../../api/axios';
import { channelInfo } from '../../api/axios';

type Props = {
  data: any;
};

const video = (props: Props) => {
  const data = props.data;

  const [channel, setChannel] = useState({});
  const ChannelId = data.snippet.channelId;

  useEffect(() => {
    async function channelData() {
      try {
        const response = await channelInfo(ChannelId);
        setChannel(response.data.items);
      } catch (error) {
        console.log('에러가 발생했습니다.');
      }
    }
    channelData();
  }, []);

  return (
    <Link to={`/video/${data.id.videoId}`} className={styles.videoWarp}>
      <div className={styles.videoView}>
        <img
          src={data.snippet.thumbnails.high.url}
          alt="thumbnail image"
          className={styles.thumbnails}
        />
      </div>
      <div className={styles.videoInfo}>
        <div className={styles.videoLogo}>
          {Array.isArray(channel)
            ? channel.map((item, idx) => {
                return (
                  <img
                    key={idx}
                    src={item.snippet.thumbnails.default.url}
                    alt="thumbnail image"
                    className={styles.videoLogo}
                  />
                );
              })
            : null}
        </div>
        <div className={styles.videoTitle}>{data.snippet.title}</div>
        <div className={styles.videoToggle}></div>
      </div>
      <div className={styles.channelName}>{data.snippet.channelTitle}</div>
      <div className={styles.videoStatus}>
        {/* <div>조회수 {today}</div>  */}
        {/* <div>{videoData.contentDetails.duration}</div> */}
      </div>
    </Link>
  );
};

export default video;
