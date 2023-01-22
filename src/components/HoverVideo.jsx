import React from 'react';
import YouTube from 'react-youtube';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import VideoCardInfo from './VideoCard/VideoCardInfo';

const HoverVideo = ({ video, videoId, chVideoId, setIsHover }) => {
  return (
    <div
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      className='grid gap-2 p-4 bg-[#212121] w-96 rounded-lg absolute top-[-20px] left-[-20px] z-20'
    >
      <YouTube
        className='m-auto'
        videoId={videoId}
        opts={{
          width: '300',
          height: '200',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
          },
        }}
      />
      <VideoCardInfo video={video} videoId={videoId} chVideoId={chVideoId} />
      <div className='mt-1 flex flex-col gap-2'>
        <button className='p-2 text-white font-semibold bg-neutral-500 rounded-full flex items-center justify-center'>
          <AiOutlineClockCircle className='mr-2 font-semibold' />
          나중에 볼 동영상
        </button>
        <button className='p-2 text-white font-semibold bg-neutral-500 rounded-full flex items-center justify-center'>
          <MdPlaylistAdd className='mr-1 font-semibold text-lg' />
          현재 재생 목록에 추가
        </button>
      </div>
    </div>
  );
};

export default HoverVideo;
