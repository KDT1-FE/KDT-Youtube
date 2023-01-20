import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WideSideBar.module.scss';
import { dataSet } from './index';

type ItemProps = dataSet;

const Item = (props: ItemProps) => {
  return (
    <>
      <Link to="/" id="icon-box" className={styles.sideBarIconWrapper}>
        <div className={styles.sideBarIconInner}>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            style={{ display: 'block', width: '100%', height: '100%' }}
          >
            <g className="style-scope yt-icon">
              <path d={props.d}></path>
            </g>
          </svg>
        </div>
        <span id="title" className={styles.sideBarIconText}>
          {props.text}
        </span>
      </Link>
    </>
  );
};

export default Item;
