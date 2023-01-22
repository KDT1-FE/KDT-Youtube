import React, { useEffect, useState } from 'react';
import { getViewCount, getChannelImg } from '../../api/request';
import { BsDot } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import numberToKorean from '../../util/numberToKorean';

//발행날짜 라이브러리
dayjs.extend(relativeTime);
dayjs.locale('ko');

const VideoCardInfo = ({ video, videoId, type }) => {
  const { channelId, channelTitle, publishedAt, title } = video;
  const [viewCount, setViewCount] = useState(0);
  const [channelImg, setChannelImg] = useState('');
  const related = type === 'relatedVideo';
  if (typeof videoId === 'object') {
    videoId = videoId.videoId;
  }
  useEffect(() => {
    getViewCount(videoId).then((response) => setViewCount(response));
    getChannelImg(channelId).then((response) => setChannelImg(response));
  }, []);

  const navigate = useNavigate();
  //navigate로 부가적인 객체를 전달할 때, 두번째 인자에 객체를 전달하면 됨
  const handleClick = () => {
    navigate(`/channel/${channelId}`, { state: channelId });
  };

  return (
    <div className='flex justify-around gap-4 relative'>
      <img src={channelImg} className={related ? 'hidden' : 'rounded-full w-6 h-6'} />
      <div
        className={
          related ? 'relative cursor-pointer py-2 grid' : 'relative cursor-pointer grid gap-2'
        }
      >
        <p
          id={videoId}
          className={
            related
              ? 'w-30 overflow-hidden text-ellipsis text-white text-sm leading-5 line-clamp-2 max-h-10'
              : 'text-white line-clamp-2 leading-5 font-medium'
          }
        >
          {title}
        </p>
        <p
          id={'channel' + videoId}
          data-tooltip-content={channelTitle}
          onClick={handleClick}
          className={
            related
              ? 'text-xs text-zinc-300 hover:text-white'
              : 'text-sm text-zinc-300 hover:text-white'
          }
        >
          {channelTitle}
        </p>
        <Tooltip
          anchorId={'channel' + videoId}
          data-toolip-place='top'
          noArrow
          className='tooltip absolute w-fit z-10 bg-[#696969] text-white'
        ></Tooltip>
        <p className={related ? 'text-xs flex text-zinc-300' : 'text-sm flex text-zinc-300'}>
          조회수 {viewCount && numberToKorean(viewCount)}회 <BsDot />{' '}
          {dayjs().to(dayjs(publishedAt))}
        </p>
      </div>
      <BiDotsVerticalRounded className={related ? 'hidden' : 'w-5 h-5 flex-shrink-0 text-white'} />
    </div>
  );
};

export default VideoCardInfo;
