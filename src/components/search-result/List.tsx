import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './search.module.scss';
import useDay from '../../hooks/useDay';
import dayjs, { Dayjs } from 'dayjs';
import { videoInfo } from '../../api/axios';
import { getDuration } from '../../hooks/useDuration';
import { getViewCount } from '../../hooks/useViews';

type Props = {
  data: any;
};

const List = ({ data }: Props) => {
  const [videoId, setVideoId] = useState('');
  const [videoData, setVideoData] = useState({
    duration: '',
    views: 0,
  });
  const [date, setDate] = useState<Dayjs | null>(null);

  let today = useDay(dayjs(date));

  const video = async (id: string) => {
    const { data } = await videoInfo(id);
    const duration = data.items[0].contentDetails.duration;
    const views = data.items[0].statistics.viewCount;
    setVideoData({
      duration,
      views,
    });
  };

  const durationTime = getDuration(videoData.duration);
  const viewCount = getViewCount(videoData.views);

  useEffect(() => {
    if (videoId !== undefined) {
      setVideoId(data.id.videoId);
      setDate(data.snippet.publishedAt);
      video(data.id.videoId);
    }
  }, [data]);

  console.log(videoData);

  //50글자 이상일때 잘라주는 함수
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  };

  return (
    <Link to={`/video/${videoId}`} style={{ textDecoration: 'none' }}>
      <div className={styles.lists}>
        <div className={styles.video}>
          <img
            src={data.snippet.thumbnails.high.url}
            alt="thumbnail image"
            className={styles.img}
          />
          <span className={styles.duration}>{durationTime}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{truncate(data.snippet.title, 50)}</div>
          <div>
            조회수{viewCount} {today}
          </div>
          <div className={styles.channel}>{data.snippet.channelTitle}</div>
          <img
            src={data.snippet.thumbnails.high.url}
            alt="thumbnail image"
            className={styles.miniImg}
          />
        </div>
      </div>
    </Link>
  );
};

export default List;
