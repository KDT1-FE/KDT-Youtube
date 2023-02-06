import React, { useRef } from 'react';
import styles from './HoverButton.module.scss';
import { MdOutlineQueueMusic } from 'react-icons/md';
import { BiTimeFive, BiListPlus } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { MdOutlineFlag } from 'react-icons/md';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function HoverButton({ setListOpen }) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setListOpen(false));

  return (
    <ul className={styles.list} ref={ref}>
      <li className={styles.card}>
        <MdOutlineQueueMusic className={styles.icon} />
        <p>현재 재생목록에 추가</p>
      </li>
      <li className={styles.card}>
        <BiTimeFive className={styles.icon} />
        <p>나중에 볼 동영상에 저장</p>
      </li>
      <li className={styles.card}>
        <BiListPlus className={styles.icon} />
        <p>재생목록에 저장</p>
      </li>
      <li className={styles.card}>
        <RiShareForwardLine className={styles.icon} />
        <p>공유</p>
      </li>
      <li className={styles.card}>
        <MdOutlineFlag className={styles.icon} />
        <p>신고</p>
      </li>
    </ul>
  );
}
