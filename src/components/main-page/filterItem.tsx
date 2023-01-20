import React from 'react';
import styles from './MainPage.module.scss';

type FilterItemProps = {
  keyword: string;
};

const filterItem = (props: FilterItemProps) => {
  return <div className={styles.filterItem}>{props.keyword}</div>;
};

export default filterItem;
