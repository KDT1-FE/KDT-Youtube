import React from 'react';
import useWindow from '../../../hooks/useWindow';
import SidebarLarge from './SidebarLarge';
import SidebarSmall from './SidebarSmall';

export default function Sidebar({ sidebar }) {
  const resize = useWindow();
  return (
    <>{resize >= 1300 ? sidebar ? <SidebarSmall /> : <SidebarLarge /> : resize >= 792 ? <SidebarSmall /> : null}</>
  );
}
