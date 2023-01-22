import React from 'react';
import { commentDatas } from '../../public/commentData';
import dayjs from 'dayjs';
import { RiThumbUpLine, RiThumbDownLine } from 'react-icons/ri';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Comment = ({ id, img, name, publishedAt, updatedAt, text, likeCount }) => {
  return (
    <li key={id} className='flex mb-3'>
      <div className='w-10 h-10 mr-4 overflow-hidden rounded-full'>
        <img src={img} className='cursor-pointer w-10 h-10 object-cover' />
      </div>
      <div className='text-[#f1f1f1] w-fit'>
        <div className='flex'>
          <div className='h-5 text-[13px] cursor-pointer'>{name}</div>
          <div className='ml-1 text-[#aaa] text-[12px] leading-3 cursor-pointer hover:text-[#f1f1f1]'>
            {dayjs().to(dayjs(publishedAt))}
            {publishedAt !== updatedAt ? ' (수정됨)' : ''}
          </div>
        </div>
        <div>
          <div className='text-sm mt-1 w-fit'>{text}</div>
          <div className='flex mt-2 h-8'>
            <RiThumbUpLine
              id={'thumbUp' + id}
              data-tooltip-content='좋아요'
              className='mr-2 w-5 h-5 my-1.5 cursor-pointer'
            />
            <Tooltip
              anchorId={'thumbUp' + id}
              place='bottom'
              noArrow
              className='bottomtip absolute w-fit z-50 bg-[#696969] text-white'
            ></Tooltip>
            <span className='text-xs leading-8 text-[#aaa]'>{likeCount ? likeCount : ''}</span>
            <RiThumbDownLine
              id={'thumbDown' + id}
              data-tooltip-content='싫어요'
              className='ml-3 mr-4 w-5 h-5 my-1.5 cursor-pointer'
            />
            <Tooltip
              anchorId={'thumbDown' + id}
              place='bottom'
              noArrow
              className='bottomtip absolute w-fit z-50 bg-[#696969] text-white'
            ></Tooltip>
            <button className='text-xs px-3 py-1 hover:bg-[#212121] rounded-2xl'>답글</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Comment;
