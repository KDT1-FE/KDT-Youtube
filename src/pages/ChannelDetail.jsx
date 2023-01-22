import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getChannelData, getSubscriberInfo, getPlayListId, getPlayListItems } from '../api/request';
import VideoCard from '../components/VideoCard/VideoCard';
import numberToKorean from '../util/numberToKorean';

const ChannelDetail = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const { state: channelId } = useLocation();
  const [playListItems, setPlayListItems] = useState([]);
  const [channelData, setChannelData] = useState();
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    getChannelData(channelId).then((data) => setChannelData(data));
    getPlayListId(channelId)
      .then((data) => getPlayListItems(data))
      .then((data) => setPlayListItems(data));
    getSubscriberInfo(channelId).then((data) => setSubscriberCount(data));
  }, []);

  return (
    <div className='p-4 mt-16 text-white'>
      {channelData && (
        <div className='flex gap-7 mb-8'>
          <img className='rounded-full w-20 h-20' src={channelData.thumbnails.default.url} />
          <div className='grid gap-1'>
            <p className='text-xl font-bold'>{channelData.localized.title}</p>
            <p className='text-slate-400 mt-2'>{numberToKorean(subscriberCount)}명</p>
            <p className='leading-7'>{channelData.localized.description}</p>
          </div>
        </div>
      )}
      <h1 className='mb-5 ml-6 font-semibold'>재생목록</h1>
      {playListItems && (
        <ul className='grid grid-cols-3 gap-6 ml-6'>
          {playListItems.map((playListItem) => (
            <VideoCard
              type='channel'
              key={playListItem.id}
              chVideoId={playListItem.snippet.resourceId.videoId}
              video={playListItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChannelDetail;
