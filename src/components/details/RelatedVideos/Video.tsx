import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import useDay from '../../../hooks/useDay';
import style from './Video.module.scss';

type Props = {
  item: any;
};

const Video = ({ item }: Props) => {
  const [date, setDate] = useState<Dayjs | null>(null);
  let today = useDay(dayjs(date));

  useEffect(() => {
    setDate(item.snippet.publishTime);
  }, [item]);

  return (
    <li>
      <div className={style.thumbnail}>
        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
      </div>
      <div className={style.textContent}>
        <h2>{item.snippet.title}</h2>
        <p>{item.snippet.channelTitle}</p>
        <p>
          {item.snippet.channelTitle} <span>{today}</span>
        </p>
      </div>
    </li>
  );
};

export default Video;
