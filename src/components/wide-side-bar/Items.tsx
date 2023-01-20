import React from 'react';
import Item from './Item';
import styles from './WideSideBar.module.scss';
import { dataSetAry } from './index';

type ItemsProps = {
  dataSetAry: dataSetAry;
};

const Items = (props: ItemsProps) => {
  let items = props.dataSetAry.map((item, idx) => {
    return <Item key={idx} d={item.d} text={item.text} />;
  });

  return <div className={styles.itemsBlock}>{items}</div>;
};

export default Items;
