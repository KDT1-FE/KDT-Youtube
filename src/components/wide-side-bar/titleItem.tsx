import React from 'react';
import Item from './Item';
import styles from './WideSideBar.module.scss';
import { dataSetAry } from './index';

type TitleItemProps = {
  dataSetAry: dataSetAry;
  title: string;
};

const titleItem = (props: TitleItemProps) => {
  let items = props.dataSetAry.map((item, idx) => {
    return <Item key={idx} d={item.d} text={item.text} />;
  });

  return (
    <div className={styles.itemsBlock}>
      <div className={styles.itemTitleWrapper}>
        <div className={styles.itemTitle}>{props.title}</div>
      </div>
      {items}
    </div>
  );
};

export default titleItem;
