import React from 'react';
import { AiFillHome, AiFillClockCircle, AiFillSetting, AiFillFlag } from 'react-icons/ai';
import { MdExplore, MdSubscriptions, MdVideoLibrary } from 'react-icons/md';
import { GrHistory } from 'react-icons/gr';
import { HiThumbUp } from 'react-icons/hi';

const Nav = ({ isFolded }) => {
  return !isFolded ? (
    <nav className='sticky top-14 w-fit h-screen bg-[#0f0f0f] '>
      <div className='hidden w-16 h-full md:flex xl:hidden flex-col justify-start items-center'>
        <div className='text-white font-semibold text-xs flex flex-col items-center gap-2 py-8 w-full hover:bg-[#414141] cursor-pointer'>
          <AiFillHome className='w-5 h-5 fill-white' />
          Home
        </div>
        <div className='text-white font-semibold text-xs flex flex-col items-center gap-2 py-8 w-full hover:bg-[#414141] cursor-pointer'>
          <MdExplore className='w-5 h-5 fill-white' />
          Explore
        </div>
      </div>
      <div className='hidden w-52 h-full xl:flex flex-col py-2 pr-2'>
        <div className='border-solid border-b border-gray-600 pb-2'>
          <div className='text-white flex items-center gap-7 w-full h-12 pl-6 font-semibold text-xs hover:bg-[#414141] cursor-pointer'>
            <AiFillHome className='w-5 h-5 fill-white' />
            Home
          </div>
          <div className='text-white flex items-center gap-7 w-full h-12 pl-6 font-semibold text-xs hover:bg-[#414141] cursor-pointer'>
            <MdExplore className='w-5 h-5 fill-white' />
            Explore
          </div>
          <div className='text-white flex items-center gap-7 w-full h-12 pl-6 font-semibold text-xs hover:bg-[#414141] cursor-pointer'>
            <MdSubscriptions className='w-5 h-5 fill-white' />
            Subscriptions
          </div>
        </div>
        <div className='border-solid border-b border-gray-600 py-2'>
          <div className='text-white flex items-center gap-7 w-full h-12 pl-6 font-semibold text-xs hover:bg-[#414141] cursor-pointer'>
            <MdVideoLibrary className='w-5 h-5' />
            Library
          </div>
          <div className='text-white flex items-center gap-7 w-full h-12 pl-6 font-semibold text-xs hover:bg-[#414141] cursor-pointer'>
            <GrHistory className='w-5 h-5  stroke-white' />
            History
          </div>
          <div className='text-white flex items-center gap-7 w-full h-12 pl-6 font-semibold text-xs hover:bg-[#414141] cursor-pointer'>
            <AiFillClockCircle className='w-5 h-5 fill-white' />
            Watch later
          </div>
          <div className='text-white flex items-center gap-7 w-full h-12 pl-6 font-semibold text-xs hover:bg-[#414141] cursor-pointer'>
            <HiThumbUp className='w-5 h-5 fill-white' />
            Liked videos
          </div>
        </div>
        <div className='border-solid border-b border-gray-600 py-2'>
          <div className='text-white flex items-center gap-7 w-full h-12 pl-6 font-semibold text-xs hover:bg-[#414141] cursor-pointer'>
            <AiFillSetting className='w-5 h-5 fill-white' />
            Settings
          </div>
          <div className='text-white flex items-center gap-7 w-full h-12 pl-6 font-semibold text-xs hover:bg-[#414141] cursor-pointer'>
            <AiFillFlag className='w-5 h-5 fill-white' />
            Report history
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav className='sticky w-fit h-screen pt-5 bg-[#212121]'>
      <div className='w-16 h-full md:flex xl:hidden flex-col justify-start items-center'>
        <div className='text-white font-semibold text-xs flex flex-col items-center gap-2 py-8 w-full hover:bg-[#414141] cursor-pointer'>
          <AiFillHome className='w-5 h-5 fill-white' />
          Home
        </div>
        <div className='text-white font-semibold text-xs flex flex-col items-center gap-2 py-8 w-full hover:bg-[#414141] cursor-pointer'>
          <MdExplore className='w-5 h-5 fill-white' />
          Explore
        </div>
      </div>
    </nav>
  );
};

export default Nav;
