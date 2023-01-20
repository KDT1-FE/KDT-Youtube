import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Components
import SidebarLarge from './SidebarLarge';
import SidebarSmall from './SidebarSmall';

export default function Sidebar({ menuDrop }) {
  // 리액트 반응형
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1300 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 792, maxWidth: 1299 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 791 });
    return isMobile ? children : null;
  };

  return (
    <>
      <Desktop>{menuDrop ? <SidebarSmall /> : <SidebarLarge />}</Desktop>
      <Tablet>
        <SidebarSmall />
      </Tablet>
      <Mobile></Mobile>
    </>
  );
}
