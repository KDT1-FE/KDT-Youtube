import React, { useState } from 'react';
import { getMostPopularVideos, getSearchVideos } from '../api/request';

const Buttons = ({ setVideos, setType }) => {
  const [clicked, setClicked] = useState('전체');

  const Button = ({ buttonName, clicked }) => {
    if (clicked === buttonName)
      return (
        <button className='bg-white  h-8 text-xs px-3 rounded-xl text-black'>{buttonName}</button>
      );
    return (
      <button
        className='bg-[#272727] hover:bg-[#3d3d3d] h-8 text-xs px-3 rounded-xl text-white'
        onClick={() => {
          setClicked(buttonName);
          if (buttonName === '전체' || buttonName === '최근에 업로드된 동영상') {
            setType('');
            getMostPopularVideos().then((data) => {
              setVideos(data);
            });
          }
          // setType('search');
          getSearchVideos(buttonName, '').then((data) => setVideos(data.items));
        }}
      >
        {buttonName}
      </button>
    );
  };

  return (
    <div className='hidden md:flex p-4 gap-2'>
      <Button buttonName={'전체'} clicked={clicked} />
      <Button buttonName={'실시간'} clicked={clicked} />
      <Button buttonName={'음악'} clicked={clicked} />
      <Button buttonName={'뉴스'} clicked={clicked} />
      <Button buttonName={'믹스'} clicked={clicked} />
      <Button buttonName={'게임'} clicked={clicked} />
      <Button buttonName={'요리'} clicked={clicked} />
      <Button buttonName={'축구'} clicked={clicked} />
      <Button buttonName={'최근에 업로드된 동영상'} clicked={clicked} />
    </div>
  );
};

export default Buttons;
