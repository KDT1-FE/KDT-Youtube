import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import useDay from '../../../hooks/useDay';
import { getDuration } from '../../../hooks/useDuration';
import { getViewCount } from '../../../hooks/useViews';
import style from './Video.module.scss';
import { videoInfo } from '../../../api/axios';

type Props = {
  item: any;
};

const Video = ({ item }: Props) => {
  const [videoId, setVideoId] = useState('');
  const [date, setDate] = useState<Dayjs | null>(null);
  const [videoData, setVideoData] = useState({
    duration: '',
    views: 0,
  });

  const video = async (videoId: string) => {
    const { data } = await videoInfo(videoId);
    const duration = data.items[0].contentDetails.duration;
    const views = data.items[0].statistics.viewCount;
    setVideoData({
      duration,
      views,
    });
  };
  const durationTime = getDuration(videoData.duration);
  const viewCount = getViewCount(videoData.views);

  let today = useDay(dayjs(date));

  useEffect(() => {
    if (videoId !== undefined) {
      setVideoId(item.id.videoId);
      setDate(item.snippet.publishTime);
      video(item.id.videoId);
    }
  }, [item]);

  return (
    <li>
      <div className={style.thumbnail}>
        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
        <span>{durationTime}</span>
      </div>
      <div className={style.textContent}>
        <h2>{item.snippet.title}</h2>
        <p>{item.snippet.channelTitle}</p>
        <p>
          {viewCount} <span>{today}</span>
        </p>
      </div>
    </li>
  );
};

export default Video;
