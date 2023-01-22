import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchVideos } from '../api/request';
import VideoCard from '../components/VideoCard/VideoCard';

const Search = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const scrollRef = useRef();
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    window.scrollTo(0, 0);
    setVideos([]);
    setNextPageToken('');
    getSearchVideos(query).then((data) => {
      setVideos(data.items);
      setNextPageToken(data.nextPageToken);
    });
    // infinityScroll();
  }, [query]);

  const infinityScroll = () => {
    const option = {
      threshold: 1,
    };
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          getSearchVideos(query, nextPageToken).then((data) => {
            setVideos((prev) => [...prev, ...data.items]);
            setNextPageToken(data.nextPageToken);
          });
          observer.observe(scrollRef.current);
        }
      });
    };
    const observer = new IntersectionObserver(callback, option);
    observer.observe(scrollRef.current);
  };

  return (
    <ul className='w-full m-6 p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10'>
      {videos &&
        videos.map((video) => <VideoCard key={video.id.videoId} video={video} type='search' />)}
      <div className='w-1 h-5' ref={scrollRef}></div>
    </ul>
  );
};

export default Search;
