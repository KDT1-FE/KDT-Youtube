import './App.css';

import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const queryClient = new QueryClient();
function App() {
  // 페이지별 사이드바
  let location = useLocation();
  // 반응형 사이드바
  const [menuDrop, setMenuDrop] = useState(false);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header setMenuDrop={setMenuDrop} />
        <div style={{ display: 'flex' }}>
          {location.pathname === '/watch/:videoId' ? null : <Sidebar menuDrop={menuDrop} />}
          <div className={`${menuDrop ? 'outlet-layout-true' : 'outlet-layout-false'}`}>
            <Outlet />
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
