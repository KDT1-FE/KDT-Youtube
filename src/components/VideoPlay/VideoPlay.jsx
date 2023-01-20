import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { contentDetails } from '../../api/FakeYoutubeApi';
import { videoTime } from '../../util/videoTime';

export default function VideoPlay({ id, url, title }) {
  const { isLoading, data: contentInfo } = useQuery(['videos', id], () => contentDetails(id), { enabled: !!id });
  if (isLoading) return;
  const { duration } = contentInfo;

  // console.log('contentInfo::::', contentInfo);
  return (
    <div>
      {/* <img className={styles.video_img} src={thumbnails.medium.url} alt={title} /> */}
      <p>{videoTime(duration)}</p>
    </div>
  );
}
