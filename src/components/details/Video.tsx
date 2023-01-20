import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import useDay from '../../hooks/useDay';
import style from './video.module.scss';

type Props = {
  item: any;
};

const Video = ({ item }: Props) => {
  const [date, setDate] = useState<Dayjs | null>(null);
  let today = useDay(dayjs(date));

  useEffect(() => {
    setDate(item.snippet.publishTime);
  }, []);

  return (
    <li>
      <div className={style.thumbnail}>
        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
      </div>
      <div className={style.textContent}>
        <h2>{item.snippet.title}</h2>
        <p>{item.snippet.channelTitle}</p>
        <p>
          조회수 1.1만회 <span>{today}</span>
        </p>
      </div>
    </li>
  );
};

export default Video;
