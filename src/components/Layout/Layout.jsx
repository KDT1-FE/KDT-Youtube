import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

export default function Layout({ children }) {
  const [sidebar, setSidebar] = useState(false);

  // 현재 영상 디테일 페이지인지?
  const location = useLocation();
  const findDetailPage = location.pathname.slice(0, 6) === '/watch';

  return (
    <>
      <Header setSidebar={setSidebar} findDetailPage={findDetailPage} />
      <div className={`${styles.layout} ${findDetailPage ? styles.detailPage : null}`}>
        <div className={findDetailPage ? styles.sidebarNone : null}>
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <main className={`${styles.outlet} ${sidebar ? styles.btnTrue : styles.btnFalse}`}>{children}</main>
      </div>
    </>
  );
}
