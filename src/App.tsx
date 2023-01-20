import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import './App.scss';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Header />

      <Outlet />
    </RecoilRoot>
  );
}

export default App;
