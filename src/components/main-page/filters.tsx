import React from 'react';
import FilterItem from './filterItem';
import styles from './MainPage.module.scss';

function Filter() {
  const filterItem: string[] = [
    '전체',
    '실시간',
    '음악',
    '뉴스',
    '게임',
    '수학',
    '만화 영화',
    '축구',
    '요리',
    ' 액션 어드벤처 게임',
    '최근에 업로드된 동영상',
  ];

  let items = filterItem.map((item, index) => {
    return <FilterItem key={index} keyword={item} />;
  });

  return <div className={styles.filterWrapper}>{items}</div>;
}

export default Filter;
