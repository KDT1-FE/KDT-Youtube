import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import logo from './assets/logo.png';
import { BsList } from 'react-icons/bs';

export default function HeaderMenu({ setModal, setSidebar, menuBtn }) {
  const btnClick = () => {
    switch (menuBtn) {
      case 'openModal':
        // 태블릿과 모바일 사이즈, 메뉴 버튼으로 모달 사이드바 열기
        (function openModal(e) {
          setModal((e) => !e);
        })();
        break;
      case 'openSidebar':
        // 데스크탑 사이즈, 메뉴 버튼 클릭
        (function openSidebar(e) {
          setSidebar((e) => !e);
        })();
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.headerMenu}>
      <BsList className={styles.headerIcon} size="24" onClick={btnClick} />
      <Link to={'/'} className={styles.logo}>
        <img src={logo} alt="youtube logo" />
        <sup>KR</sup>
      </Link>
    </div>
  );
}
