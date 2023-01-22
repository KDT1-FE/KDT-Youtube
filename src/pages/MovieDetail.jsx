import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import { getChannelData, getRelatedVideos, getSubscriberInfo, getViewCount } from '../api/request';
import VideoPlayer from '../components/VideoPlayer';
import CommentsContainer from '../components/CommentsContainer';

const MovieDetail = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const { id } = useParams();
  const { state } = useLocation();
  const { channelId, channelTitle, description, publishedAt, tags, title } = state.video.snippet;
  const [viewCount, setViewCount] = useState(0);
  const [channelData, setChannelData] = useState({});
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    getViewCount(id).then((response) => setViewCount(response));
    getChannelData(channelId).then((response) => setChannelData(response));
    getSubscriberInfo(channelId).then((response) => setSubscriberCount(response));
  }, []);
  return (
    <div className='h-fit w-full mt-5 m-4 flex gap-5 text-white'>
      {state && (
        <>
          <div className='flex flex-col lg:w-9/12 xs:w-fit'>
            <VideoPlayer
              id={id}
              state={state}
              viewCount={viewCount}
              channelData={channelData}
              subscriberCount={subscriberCount}
            />
            <CommentsContainer id={id} />
          </div>
          <RelatedVideos id={id} />
        </>
      )}
    </div>
  );
};

export default MovieDetail;
