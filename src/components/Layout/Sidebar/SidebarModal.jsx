import React, { useRef } from 'react';
import styles from './Sidebar.module.scss';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

// Components
import SidebarLarge from './SidebarLarge';
import HeaderMenu from '../Header/HeaderMenu';

export default function SidebarModal({ modal, setModal }) {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, () => setModal(false));

  return (
    <nav className={modal ? `${styles.modalNav} ${styles.open}` : styles.modalNav} ref={modalRef}>
      <HeaderMenu setModal={setModal} menuBtn={'openModal'} />
      <SidebarLarge />
    </nav>
  );
}
