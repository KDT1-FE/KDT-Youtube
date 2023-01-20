import style from './Channel.module.scss';

type Props = {
  item: any;
};

const Channel = ({ item }: Props) => {
  return (
    <div className={style.channelContent}>
      <span>
        <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
      </span>
      <div>
        <h4>{item.snippet.title}</h4>
        <p>구독자 {item.statistics.subscriberCount}명</p>
      </div>
    </div>
  );
};

export default Channel;
