import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetail';
import ChannelDetail from './pages/ChannelDetail';

function App() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <BrowserRouter className='h-full'>
      <Header isFolded={isFolded} setIsFolded={setIsFolded} />
      <div className='flex h-fit pt-14'>
        <div className='min-w-fit'>
          <Nav isFolded={isFolded} />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/detail/:id' element={<MovieDetail />} />
          <Route path='/channel/:channelId' element={<ChannelDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
