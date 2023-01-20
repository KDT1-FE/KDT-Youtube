import React from 'react';
import styles from './header.module.scss';
import { sideBarstate } from '../../Atom';
import { useRecoilState } from 'recoil';

const Navigation = () => {
  const [sideBar, setSideBar] = useRecoilState(sideBarstate);

  return (
    <button className={styles.nav} onClick={() => setSideBar(!sideBar)}>
      <div className="icon">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon"
          style={{ display: 'block', width: '100%', height: '100%' }}
        >
          <g className="style-scope yt-icon">
            <path
              d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
              className="style-scope yt-icon"
            ></path>
          </g>
        </svg>
      </div>
    </button>
  );
};

export default Navigation;
