import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { useNavigate, useLocation } from 'react-router-dom';
import HoverVideo from '../HoverVideo';
import VideoCardInfo from './VideoCardInfo';
import * as ReactTooltip from 'react-tooltip';
import VideoDuration from './VideoDuration';

//발행날짜 라이브러리
dayjs.extend(relativeTime);
dayjs.locale('ko');

const VideoCard = ({ video, chVideoId, type }) => {
  const { thumbnails } = video.snippet;
  const navigate = useNavigate();
  const location = useLocation();
  const home = location.pathname === '/';

  //channelDetailPage의 경우 videoId를 불러오는 api 경로가 달라 타입을 지정해 chVideoId로 아이디를 받아옴
  //searchPage의 경우에도 마찬가지
  let videoId = '';
  if (type === 'channel') {
    videoId = chVideoId;
  } else if (type === 'search' && location.pathname === '/search') {
    videoId = video.id.videoId;
  } else if (type === 'relatedVideo') {
    videoId = video.id.videoId;
  } else {
    videoId = video.id;
  }
  // const videoId = type ==='channel'? chVideoId : video.id

  const [isHover, setIsHover] = useState(false);
  const [hoverText, setHoverText] = useState(false);
  const related = type === 'relatedVideo';

  let timer;
  const handleOver = () => {
    setHoverText(true);
    timer = setTimeout(() => {
      setIsHover(true);
    }, 1000);
  };

  const handleOut = () => {
    setHoverText(false);
    setIsHover(false);
    clearTimeout(timer);
  };

  return (
    <li
      onMouseLeave={handleOut}
      className={related ? 'hidden gap-4 lg:flex' : 'relative cursor-pointer grid gap-4'}
    >
      <div className='cursor-pointer'>
        <img
          onMouseEnter={handleOver}
          onClick={() => {
            navigate(`/detail/${videoId}`, { state: { video } });
          }}
          src={thumbnails.medium.url}
          className={
            related ? 'min-w-[168px] h-[94px] object-cover rounded-lg' : ' w-full h-full rounded-lg'
          }
        />
        <VideoDuration videoId={videoId} />
        {home && hoverText && (
          <span className='text-white bg-black p-1 text-xs absolute top-24 right-0'>
            계속 마우스 오버하여 재생하기
          </span>
        )}
      </div>
      {video && (
        <VideoCardInfo video={video.snippet} videoId={videoId} chVideoId={chVideoId} type={type} />
      )}
      {home && isHover && hoverText ? (
        <HoverVideo
          setIsHover={setIsHover}
          video={video.snippet}
          videoId={videoId}
          chVideoId={chVideoId}
        />
      ) : (
        ''
      )}
    </li>
  );
};

export default VideoCard;
