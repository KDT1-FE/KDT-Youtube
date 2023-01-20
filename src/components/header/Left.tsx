import React from 'react';
import Navigation from './Navigation';
import AppLogo from './AppLogo';
import styles from './header.module.scss';

const Left = () => {
  return (
    <div className={styles.areaComponent}>
      <Navigation />
      <AppLogo />
    </div>
  );
};

export default Left;
