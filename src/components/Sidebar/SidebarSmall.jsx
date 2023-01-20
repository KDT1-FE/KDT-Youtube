import React from 'react';
import styles from './Sidebar.module.scss';

// icons
import { RiHome5Fill } from 'react-icons/ri';
import { BsCollectionPlay } from 'react-icons/bs';
import { MdOutlineRestore, MdOutlineVideoLibrary } from 'react-icons/md';

export default function SidebarSmall() {
  return (
    <nav className={styles.smallNav}>
      <ul>
        <button>
          <RiHome5Fill className={styles.sidebarIcon} size="24"></RiHome5Fill>홈
        </button>
        <button>
          <BsCollectionPlay className={styles.sidebarIcon} size="24"></BsCollectionPlay>구독
        </button>
        <button>
          <MdOutlineVideoLibrary className={styles.sidebarIcon} size="24"></MdOutlineVideoLibrary>보관함
        </button>
        <button>
          <MdOutlineRestore className={styles.sidebarIcon} size="24"></MdOutlineRestore>시청기록
        </button>
      </ul>
    </nav>
  );
}
