import React from 'react';
import styles from './Sidebar.module.scss';

// icons
import { RiHome5Fill } from 'react-icons/ri';
import { BsCollectionPlay } from 'react-icons/bs';
import { MdOutlineRestore, MdOutlineVideoLibrary } from 'react-icons/md';

const iconList = [
  { icon: <RiHome5Fill />, title: '홈' },
  { icon: <BsCollectionPlay />, title: '구독' },
  { icon: <MdOutlineVideoLibrary />, title: '보관함' },
  { icon: <MdOutlineRestore />, title: '시청기록' },
];

export default function SidebarSmall() {
  return (
    <nav className={styles.smallNav}>
      <ol>
        {iconList.map((list) => (
          <button key={list.title}>
            <span className={styles.icon}>{list.icon}</span>
            {list.title}
          </button>
        ))}
      </ol>
    </nav>
  );
}
