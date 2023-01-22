import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiFillVideoCamera,
  AiFillGoogleCircle,
  AiFillBell,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { HiMicrophone } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = ({ isFolded, setIsFolded }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const onChange = (event) => {
    setSearch(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!search) return;
    navigate(`/search?query=${search}`);
    setSearch('');
  };
  return (
    <header>
      <div className='mx-auto w-full fixed z-10 px-6 h-14 bg-[#0f0f0f] text-white'>
        <div className='h-full flex items-center justify-between'>
          <div className='flex justify-between w-32'>
            <AiOutlineMenu
              className='w-5 h-5 fill-white cursor-pointer'
              onClick={() => setIsFolded(!isFolded)}
            />
            <Link to='/'>
              <img src={logo} alt='logo' className='h-5 cursor-pointer' />
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <BiSearch className='w-5 h-5 fill-white' />
          </div>
          <div className='hidden space-x-10 md:flex'>
            <div className='flex items-center'>
              <form onSubmit={onSubmit} className='flex items-center relative'>
                <input
                  type='text'
                  value={search}
                  onChange={onChange}
                  name='search'
                  id='videoSearch'
                  placeholder='Search'
                  className='rounded-full w-72 h-10 placeholder:italic placeholder:text-slate-400 pl-3 text-xs bg-transparent border border-zinc-700'
                />
                <button type='submit' className=' absolute right-2'>
                  <AiOutlineSearch className='w-5 h-5 fill-slate-700' />
                </button>
              </form>
              <div className='ml-3 p-3 rounded-full bg-[#181818]'>
                <HiMicrophone className='w-5 h-5 fill-white cursor-pointer' />
              </div>
            </div>
          </div>
          <div className='flex justify-between w-32'>
            <AiFillVideoCamera className='w-5 h-5 fill-white cursor-pointer' />
            <AiFillGoogleCircle className='w-5 h-5 stroke-white fill-white cursor-pointer' />
            <AiFillBell className='w-5 h-5 stroke-white fill-white cursor-pointer' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
