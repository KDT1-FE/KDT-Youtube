import React, { useEffect, useRef } from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import SidebarLarge from './SidebarLarge';
import logo from '../Header/assets/logo.png';
import { BsList } from 'react-icons/bs';

export default function SidebarModal({ setModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const clickDocument = (e) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', clickDocument);
    document.addEventListener('touchstart', clickDocument); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', clickDocument);
      document.removeEventListener('touchstart', clickDocument); // 모바일 대응
    };
  });

  const clickMenuBtn = () => {
    setModal(false);
  };

  return (
    <div ref={modalRef}>
      <nav className={styles.modalNav}>
        <div className={styles.modalLogo}>
          <BsList className={styles.modalMenuBtn} size="24" onClick={clickMenuBtn} />
          <Link to={'/'} className={styles.logo}>
            <img src={logo} alt="youtube logo" />
            <sup>KR</sup>
          </Link>
        </div>
        <SidebarLarge />
      </nav>
    </div>
  );
}
