import React from 'react';
import RelatedVideo from './relatedVideo.json';
import VideoInfo from './videoInfo.json';
import styles from './RelatedVideoInVideoDetail.module.scss';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);
const formatDuration = (duration) => {
  let arr = (duration || '').split('');
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      output += arr[i];
    } else if (isNaN(arr[i]) && !isNaN(arr[i + 1]) && !isNaN(arr[i - 1])) {
      output += ':';
    }
  }
  return output;
};
const RelatedVideoInVideoDetail = () => {
  return (
    <div className={styles.relatedVideoContainer}>
      <ul className={styles.relatedList}>
        {RelatedVideo.items.map((item, i) => {
          return (
            <li key={item.etag} className={styles.videoCard}>
              <a href={item.id}>
                {/* 썸네일과 영상 길이 */}
                <div className={styles.videoPreviewContainer}>
                  <img src={item.snippet.thumbnails.default.url} />
                  <div className={styles.videoDuration}>
                    {formatDuration(VideoInfo?.items[i]?.contentDetails?.duration)}
                  </div>
                </div>
                {/* 영상 제목, 채널 이름, 조회수, 올린 시간 */}
                <div className={styles.videoInfoContainer}>
                  <h3>{item.snippet.title}</h3>
                  <div className={styles.channelName}>{item.snippet.channelTitle}</div>
                  <div className={styles.videoMetaData}>
                    <span className={styles.videoViewPoint}>{VideoInfo?.items[i]?.statistics?.viewCount} views </span>
                    <span> • </span>
                    <span>{format(VideoInfo?.items[i]?.snippet?.publishedAt, 'ko')}</span>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedVideoInVideoDetail;
