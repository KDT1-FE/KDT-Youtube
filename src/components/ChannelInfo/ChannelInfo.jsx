import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { channels } from '../../api/FakeYoutubeApi';
import { channelImage } from '../../api/youtube';
import styles from './ChannelInfo.module.scss';

export default function ChannelInfo({ channelId, title }) {
  const { data: channelUrl } = useQuery(['channel', channelId], () => channels(channelId), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className={styles.channel}>
      {channelUrl && <img className={styles.img} src={channelUrl} alt={title} />}
      {title && <p className={styles.title}>{title}</p>}
    </div>
  );
}
