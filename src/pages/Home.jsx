import React, { useState, useEffect } from 'react';
import { getMostPopularVideos } from '../api/request';
import VideoCard from '../components/VideoCard/VideoCard';
import { datas } from '../../public/datas';
import Buttons from '../components/Buttons';
import netflix from '../assets/netflix.png';

const Home = () => {
  const [videos, setVideos] = useState();
  const [type, setType] = useState('');
  useEffect(() => {
    getMostPopularVideos().then((data) => {
      setVideos(data);
    });
  }, []);

  return (
    <>
      <div className='flex flex-col m-6'>
        <div className='h-fit w-full p-4 flex flex-row gap-5'>
          <iframe
            id='player'
            title='video'
            type='text/html'
            width='100%'
            height='100%'
            allowFullScreen
            src={`http://www.youtube.com/embed/XFiD0I0Ghe8`}
            className='w-full md:w-2/5 h-full rounded-3xl overflow-hidden'
          />
          <div className='hidden md:block md:w-3/5 h-full rounded-3xl overflow-hidden'>
            <img src={netflix} alt='넷플릭스' className='' />
          </div>
        </div>

        <Buttons setVideos={setVideos} setType={setType} />

        <ul className='w-full p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10'>
          {videos && videos?.map((video) => <VideoCard key={video.id} video={video} type={type} />)}
        </ul>
      </div>
    </>
  );
};

export default Home;
