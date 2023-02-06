import React from 'react';
import { MdOutlineQueueMusic } from 'react-icons/md';
import { IoIosShareAlt } from 'react-icons/io';
import styles from './HoverVideoMenu.module.scss';

const HoverVideoMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.menulist}>
        <button className={styles.menubutton}>
          <MdOutlineQueueMusic />
          <div>현재 재생목록에 추가</div>
        </button>
      </li>
      <li className={styles.menulist}>
        <button className={styles.menubutton}>
          <IoIosShareAlt />
          <div>공유</div>
        </button>
      </li>
    </ul>
  );
};

export default HoverVideoMenu;
