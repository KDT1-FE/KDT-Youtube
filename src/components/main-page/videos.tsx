import React from 'react';
import Video from './video';
import styles from './video.module.scss';

type Props = {
  rowArray: any;
};

const videos = (props: Props) => {
  // 입력된 숫자만큼으로만 한줄에 컴포넌트를 만들려고 함
  // 그냥 들어온 props를 보낸다로 간단하게
  console.log(props.rowArray);

  return (
    <div className={styles.videoComponent}>
      {props.rowArray.map((row: any) => {
        return <Video key={row.etag} data={row} />;
      })}
    </div>
  );
};

export default videos;
