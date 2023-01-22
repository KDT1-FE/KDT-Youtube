import React, { useState, useEffect } from 'react';
import { getRelatedVideos } from '../api/request';
import { datas } from '../../public/datas';
import VideoCard from './VideoCard/VideoCard';

const RelatedVideos = ({ id }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getRelatedVideos(id).then((res) => {
      setVideos(res);
    });
    // setVideos(datas);
  }, []);

  return (
    <div className='lg:w-4/12'>
      <ul className='w-[402px] gap-[8px] columns-10 flex flex-col'>
        {videos.map((video) => (
          // <DetailVideoCard key={Object.entries(video.id)[1][1]} video={video} />
          <VideoCard type='relatedVideo' key={Object.entries(video.id)[1][1]} video={video} />
        ))}
      </ul>
    </div>
  );
};

export default RelatedVideos;
