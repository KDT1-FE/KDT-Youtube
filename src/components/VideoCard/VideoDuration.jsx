import React from 'react';
import { useEffect, useState } from 'react';
import { getVideoDuration } from '../../api/request';
import parseDuration from 'youtube-duration-format';

const VideoDuration = ({ videoId }) => {
  const [videoLength, setVideoLength] = useState('');

  useEffect(() => {
    getVideoDuration(videoId).then((data) => setVideoLength(data));
  }, []);

  return (
    <span className='bg-black text-white text-xs absolute p-1 top-24 right-0'>
      {videoLength && parseDuration(videoLength)}
    </span>
  );
};

export default VideoDuration;
